DROP TABLE user_roles;
SELECT * FROM reimbursement;
SELECT * FROM users;
TRUNCATE TABLE reimbursement;
DELETE FROM reimbursement WHERE reimb_id=63;
CREATE TABLE Users(
    user_id NUMBER PRIMARY KEY,
    user_name VARCHAR2(100) NOT NULL,
	password VARCHAR2(100) NOT NULL,
	first_name VARCHAR2(100) NOT NULL,
	last_name VARCHAR2(100) NOT NULL,
    email VARCHAR2(100),
    role_id NUMBER(6),
    CONSTRAINT unique_id UNIQUE (user_name),
    CONSTRAINT unique_email UNIQUE (email),
    CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES UserRoles (user_role_id) ON DELETE CASCADE);

CREATE TABLE UserRoles(
    user_role_id NUMBER PRIMARY KEY,
    user_role VARCHAR2(100));

CREATE TABLE Reimbursement(
    reimb_id NUMBER PRIMARY KEY,
    amount NUMBER,
    submitted TIMESTAMP,
    resolved TIMESTAMP,
    description VARCHAR2(1000),
    receipt VARCHAR2(100),
    author NUMBER,
    resolver NUMBER,
    status_id NUMBER,
    type_id NUMBER,
    CONSTRAINT fk_status_id FOREIGN KEY (status_id) REFERENCES ReimbursementStatus (reimb_status_id) ON DELETE CASCADE,
    CONSTRAINT fk_type_id FOREIGN KEY (type_id) REFERENCES ReimbursementType (reimb_type_id) ON DELETE CASCADE,
    CONSTRAINT fk_author FOREIGN KEY (author) REFERENCES Users (user_id) ON DELETE CASCADE,
    CONSTRAINT fk_resolver FOREIGN KEY (resolver) REFERENCES Users (user_id) ON DELETE CASCADE
);

CREATE TABLE ReimbursementStatus(
    reimb_status_id NUMBER PRIMARY KEY,
    reimb_status VARCHAR2(100)
);

CREATE TABLE ReimbursementType(
    reimb_type_id NUMBER PRIMARY KEY,
    reimb_type VARCHAR2(100)
);

SELECT * FROM Users;

INSERT INTO users VALUES(0,'user','pass','first','last', 'email',0);
DROP TABLE Pets;

CREATE SEQUENCE increment_user_id
    START WITH 1000
    INCREMENT BY 1;
    
CREATE TRIGGER inc_seq_trigger
BEFORE INSERT ON Users -- when an what action happens
FOR EACH ROW -- 
BEGIN --signifies a block for a transaction
    IF :new.user_id IS NULL THEN
    SELECT increment_user_id.nextval INTO :new.user_id FROM dual;
    END IF;
END;
/

CREATE SEQUENCE increment_reimb_id
   START WITH 1
   INCREMENT BY 1;
CREATE TRIGGER reimb_seq_trigger
BEFORE INSERT ON Reimbursement
FOR EACH ROW
BEGIN
   IF :new.reimb_id IS NULL THEN
   SELECT increment_reimb_id.nextval INTO :new.reimb_id FROM dual;
   END IF;
END;
/

INSERT INTO reimbursementstatus Values(0,'Pending');
INSERT INTO reimbursementstatus Values(1,'Approved');
INSERT INTO reimbursementstatus Values(2,'Denied');
insert into reimbursementtype values(0,'Lodging');
insert into reimbursementtype values(1,'Travel');
insert into reimbursementtype values(2,'Food');
insert into reimbursementtype values(3,'Other');
INSERT INTO userroles VALUES (1,'finance manager');

INSERT INTO Users VALUES(null, 'sambo', 'pass', 'sambo', 'sambo', 'sambo@sambo.com',0);
INSERT INTO Users VALUES(null, 'Fil', 'pass', 'Finance', 'Fil', 'fil@filmasta.com',1);
