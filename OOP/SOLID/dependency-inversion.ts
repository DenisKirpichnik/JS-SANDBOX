// Hig level modules should not depend on low-level modules
// Both should depend on abstractions

// WOULD you solder a lamp directly to the electrical wiring in a wall

// BAD
class Logger {
	log(message: string) {
		console.log(message);
	}
	error(message: string) {
		console.error(message);
	}
}

// this module depends on concrete implementatioon of logger

class UserServiceB {
	private logger = new Logger();

	async getAll() {
		try {
			this.logger.log("Retrieving all users...");
			return [];
		} catch (error: any) {
			this.logger.log(`An error occurred: ${error?.message}`);
			throw new Error("Something went wrong");
		}
	}
}

// GOOD

class UserService {
	private logger: Logger;
	// the constructor receives the object to inject from another source
	constructor(logger: Logger) {
		this.logger = logger;
	}
	async getAll() {
		try {
			this.logger.log("Retrieving all users...");
			return [];
		} catch (error: any) {
			this.logger.log(`An error occurred: ${error?.message}`);
			throw new Error("Something went wrong");
		}
	}
}
