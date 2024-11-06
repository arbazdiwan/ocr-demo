interface BackoffConfig {
  initialDelay: number;
  maxDelay: number;
  maxAttempts: number;
}

class ExponentialBackoff {
  private attempts = 0;
  private currentDelay: number;

  constructor(private config: BackoffConfig) {
    this.currentDelay = config.initialDelay;
  }

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    while (true) {
      try {
        this.attempts++;
        const result = await fn();
        // Reset attempts and delay on success
        this.attempts = 0;
        this.currentDelay = this.config.initialDelay;
        return result;
      } catch (error) {
        if (this.attempts >= this.config.maxAttempts) {
          throw error;
        }

        // Calculate next delay with 1 second increment
        this.currentDelay = Math.min(
          this.currentDelay + 1000,
          this.config.maxDelay
        );

        // Wait for the calculated delay
        await new Promise((resolve) => setTimeout(resolve, this.currentDelay));
      }
    }
  }
}

// Export a single instance with default configuration
export const backoff = new ExponentialBackoff({
  initialDelay: 3000, // 3 seconds
  maxDelay: 10000, // 10 seconds
  maxAttempts: 5,
});
