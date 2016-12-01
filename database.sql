select * from WorkPackages;
select * from Deliverables;
select * from HumanResources;
select * from PackageActivities;


CREATE TABLE HumanResources (HumanResourceId INTEGER PRIMARY KEY ASC,
                             Name VARCHAR(64),
                             DepartmentId INTEGER,
                             Role VARCHAR(32),
                             Email VARCHAR(32),
                             Phone VARCHAR(16));
                             
INSERT INTO HumanResources VALUES
(1, 'Leniel Macaferi', 1, 'Software Engineer', 'leniel@gmail.com', '+55 24 98826-3578');
INSERT INTO HumanResources VALUES
(2, 'Dave Liao', 2, 'Project Manager', 'daveliao840624@gmail.com', '+55 21 98054-1142');

CREATE TABLE Deliverables (DeliverableId INTEGER PRIMARY KEY ASC,
                           FatherId INTEGER NULL,
                           Name VARCHAR(64),
                           DueDate DATETIME,
                           HumanResourceId INTEGER,
                           FOREIGN KEY(HumanResourceId) REFERENCES HumanResources(HumanResourceId));
                           
INSERT INTO Deliverables VALUES
(1, NULL, 'Apresentação Proposta', '2016-11-21', 2);

CREATE TABLE WorkPackages (WorkPackageId INTEGER PRIMARY KEY ASC,
                           WorkPackageFather INTEGER NULL,
                           Name VARCHAR(128),
                           DueDate DATETIME,
                           HumanResourceId INTEGER,
                           FOREIGN KEY(HumanResourceId) REFERENCES HumanResources(HumanResourceId));
                           
INSERT INTO WorkPackages VALUES
(1, null, 'Trabalho Final do Laboratório de Engenharia de Software', '2016-12-19', 2);

CREATE TABLE PackageActivities (PackageActivityId INTEGER PRIMARY KEY ASC,
                                Description VARCHAR(256),
                                Duration INTEGER,
                                PackageId INTEGER,
                                HumanResourceId INTEGER,
                                Cost DECIMAL,
                                PersonInChargeId INTEGER,
                                FOREIGN KEY(PackageId) REFERENCES WorkPackages(WorkPackageId),
                                FOREIGN KEY(HumanResourceId) REFERENCES HumanResources(HumanResourceId),
                                FOREIGN KEY(PersonInChargeId) REFERENCES HumanResources(HumanResourceId));
                                
INSERT INTO PackageActivities VALUES
(1, 'Preparar apresentação da Proposta', 2, 1, 1, 100, 2);