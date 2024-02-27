# MongoDB Installation and Usage Guide

MongoDB is a popular NoSQL database used for storing and managing data in modern web applications. This guide will walk you through the installation process and basic usage of MongoDB on your system.

## Installation

### 1. Download MongoDB

- Visit the [MongoDB Download Center](https://www.mongodb.com/try/download/community) to download the MongoDB Community Server.
- Choose the appropriate version for your operating system (Windows, macOS, or Linux).

### 2. Install MongoDB

#### Windows

1. Run the downloaded installer file (e.g., `mongodb-windows-x86_64-4.4.10-signed.msi`).
2. Follow the installation wizard instructions.
3. MongoDB will be installed by default in the `C:\Program Files\MongoDB\Server\{version}` directory.

#### macOS

1. Open the downloaded `.dmg` file.
2. Drag the MongoDB icon to the Applications folder.
3. MongoDB will be installed in the Applications folder.

#### Linux

1. Download the appropriate MongoDB package for your Linux distribution.
2. Extract the downloaded archive to a location of your choice.
3. MongoDB binaries will be located in the extracted directory.

### 3. Set Up MongoDB Environment

#### Windows

1. Add the MongoDB `bin` directory to your system PATH environment variable.
2. Open a Command Prompt window and type `mongo --version` to verify the installation.

#### macOS & Linux

1. MongoDB should be added to your system PATH automatically during installation.
2. Open a terminal window and type `mongo --version` to verify the installation.

## Usage

### 1. Start MongoDB Server

1. Open a terminal or Command Prompt window.
2. Run the `mongod` command to start the MongoDB server.

### 2. Connect to MongoDB

1. Open a new terminal or Command Prompt window.
2. Run the `mongo` command to start the MongoDB shell.
3. You are now connected to the MongoDB server.

### 3. Basic MongoDB Commands

- `show dbs`: Show a list of available databases.
- `use <database>`: Switch to a specific database.
- `db.<collection>.insertOne({<document>})`: Insert a document into a collection.
- `db.<collection>.find()`: Retrieve documents from a collection.

## Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/manual/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Community Forums](https://www.mongodb.com/community/forums)

Follow these steps to install and start using MongoDB on your system. For more advanced features and configurations, refer to the official MongoDB documentation and community resources.
