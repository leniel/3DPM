function toBinArray(str) {
    var l = str.length,
        arr = new Uint8Array(l);
    for (var i = 0; i < l; i++) arr[i] = str.charCodeAt(i);
    return arr;
}

function toBinString(arr) {
    var uarr = new Uint8Array(arr);
    var strings = [],
        chunksize = 0xffff;
    // There is a maximum stack size. We cannot call String.fromCharCode with as many arguments as we want
    for (var i = 0; i * chunksize < uarr.length; i++) {
        strings.push(String.fromCharCode.apply(null, uarr.subarray(i * chunksize, (i + 1) * chunksize)));
    }
    return strings.join('');
}

$(function () {

    //var sql = require('./sql.js');
    var sql = window.SQL;

    var dbstr = window.localStorage.getItem("pm3d.sqlite");

    if (dbstr) {
        var db = new SQL.Database(toBinArray(dbstr));
    } else {
        var db = new SQL.Database();

        db.run(`CREATE TABLE HumanResources (HumanResourceId INTEGER PRIMARY KEY ASC,
                             Name VARCHAR(64),
                             DepartmentId INTEGER,
                             Role VARCHAR(32),
                             Email VARCHAR(32),
                             Phone VARCHAR(16));

CREATE TABLE Deliverables (DeliverableId INTEGER PRIMARY KEY ASC,
                           FatherId INTEGER NULL,
                           Name VARCHAR(64),
                           DueDate DATETIME,
                           HumanResourceId INTEGER,
                           FOREIGN KEY(HumanResourceId) REFERENCES HumanResources(HumanResourceId));

CREATE TABLE WorkPackages (WorkPackageId INTEGER PRIMARY KEY ASC,
                           WorkPackageFather INTEGER NULL,
                           Name VARCHAR(128),
                           DueDate DATETIME,
                           HumanResourceId INTEGER,
                           FOREIGN KEY(HumanResourceId) REFERENCES HumanResources(HumanResourceId));

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
                             
INSERT INTO HumanResources VALUES
(1, 'Leniel Macaferi', 1, 'Software Engineer', 'leniel@gmail.com', '+55 24 98826-3578');
INSERT INTO HumanResources VALUES
(2, 'Dave Liao', 2, 'Project Manager', 'daveliao840624@gmail.com', '+55 21 98054-1142');
                           
INSERT INTO Deliverables VALUES
(1, NULL, 'Apresentação Proposta', '2016-11-21', 2);
                           
INSERT INTO WorkPackages VALUES
(1, null, 'Trabalho Final do Laboratório de Engenharia de Software', '2016-12-19', 2);
                                
INSERT INTO PackageActivities VALUES
(1, 'Preparar apresentação da Proposta', 2, 1, 1, 100, 2);`);
    }

    var result = db.exec("SELECT * FROM Deliverables");
    console.log(result)

    var deliverables = document.getElementById("deliverables");

    db.each("SELECT * FROM Deliverables",
        function callback(row) {
            var li = document.createElement("li");
            li.textContent = row.DeliverableId;
            deliverables.appendChild(li);
        },
        function done() {
            var dbstr = toBinString(db.export());
            window.localStorage.setItem("pm3d.sqlite", dbstr);
        }
    );

});