CREATE TABLE user (
  userID int NOT NULL AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  /* User_Password varchar(255) NOT NULL, */
  movil varchar(255) NOT NULL,
  roleID int NOT NULL,
  communityID int,
  apartmentID int,
    PRIMARY KEY (userID)
);


CREATE TABLE community (
  communityID int NOT NULL AUTO_INCREMENT,
  building_address varchar(255) NOT NULL,
  building_number int NOT NULL,
  based_city varchar(255) NOT NULL,
  postal_code int NOT NULL,
  based_country varchar(255) NOT NULL,
  floors int NOT NULL,
  apartments int NOT NULL,
    PRIMARY KEY (communityID),
    FOREIGN KEY (userID) REFERENCES user(userID)
);

CREATE TABLE apartment (
  apartmentID int NOT NULL AUTO_INCREMENT,
  floor_number int NOT NULL,
  apartment_number int NOT NULL,
  residents int NOT NULL AUTO_INCREMENT,
  userID int NOT NULL,
  communityID int NOT NULL,
    PRIMARY KEY (apartmentID),
    FOREIGN KEY (userID, communityID) REFERENCES user(userID), community(communityID)
);

CREATE TABLE incidents (
  incidentID int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  descript varchar(255) NOT NULL,
  condition varchar(255) NOT NULL,
  userID int NOT NULL,
  communityID int NOT NULL,
    PRIMARY KEY (incidentID)
    FOREIGN KEY (userID, communityID) REFERENCES user(userID), community(communityID)
);

CREATE TABLE notifications (
  notificationID int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  descript varchar(255) NOT NULL,
  condition varchar(255) NOT NULL,
  userID int NOT NULL,
  communityID int NOT NULL,
    PRIMARY KEY (notificationID)
    FOREIGN KEY (userID, communityID) REFERENCES user(userID), community(communityID)
);

CREATE TABLE events (
  eventID int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  descript varchar(255) NOT NULL,
  ev_date date NOT NULL,
  hour time NOT NULL,
  userID int NOT NULL,
  communityID int NOT NULL,
    PRIMARY KEY (eventID)
    FOREIGN KEY (userID, communityID) REFERENCES user(userID), community(communityID)
);

CREATE TABLE payments (
  paymentID int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  descript varchar(255) NOT NULL,
  pay_date date NOT NULL,
  quantity float NOT NULL,
  condition varchar(255) NOT NULL,
  userID int NOT NULL,
  communityID int NOT NULL,
    PRIMARY KEY (paymentID)
    FOREIGN KEY (userID, communityID) REFERENCES user(userID), community(communityID)
);