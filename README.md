# summerShash 

## Table of Contents
1. [Description](#description)
2. [Entity Relationship Diagram](#entity-relationship-diagram)
3. [Relations](#relations)
4. [SQL Tables Used](#sql-tables-used)

## Description
The **summerSash** is a note-taking application that provides a simple and efficient way for users to record and access their memories. The app is designed to make it easy for users to create and store notes, which can be accessed after signing in.

### Features:
- **User Registration**: The app offers a straightforward registration process, allowing new users to create an account quickly.
- **Secure Sign-In**: Registered users can sign in to access their notes and write new ones.
- **Note Management**: Users can write, save, and manage their notes within the application.

## Entity Relationship Diagram
![image](https://github.com/Shashwat27/TechnicalPotato/assets/44191906/db6dba49-5ee0-4fac-9901-0032a51f00f5)


## Relations
![image](https://github.com/Shashwat27/TechnicalPotato/assets/44191906/9545dbf5-c334-47a0-abd3-9aebc6b11f49)


## SQL Tables Used
The Technical Potato app utilizes the following SQL tables for data storage:

1. `user`: Stores user account information, including usernames and passwords.
2. `note`: Contains user-generated notes.


Query Used 
1. CREATE TABLE `technical_potato`.`user` (
  `user_id` VARCHAR(10) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `contact_num` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC));

2. CREATE TABLE `technical_potato`.`note` (
  `note_id` VARCHAR(10) NOT NULL,
  `description` VARCHAR(45) NULL,
  `user_id` VARCHAR(45) NULL,
  UNIQUE INDEX `note_id_UNIQUE` (`note_id` ASC),
  PRIMARY KEY (`note_id`),
  INDEX `user_id_idx` (`user_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `technical_potato`.`user` (`user_id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT
);


