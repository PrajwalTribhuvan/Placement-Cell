const q = "'";
const colon = ",";
const express = require("express");
const app = express();
const sql = require("mssql");
const path = require("path");
const cors = require("cors");
const db = require("./config/db");
const { mergeData } = require("./userFunction/userFun");

//C O R S     helps in sending crossplatform information lije from frontend to backend
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../client/build/")));
app.get("/", (req, res) => {
  res.sendFile(__dirname, "../client/build/", "index.html");
});

// Data Base Connect
async function connectDatabase(db) {
  try {
    let pool = sql.connect(db);
    console.log("SQL Database Connected");
  } catch (error) {
    console.log("SQL Conection Fail " + error);
  }
}

connectDatabase(db);

async function runQuery(queryString) {
  try {
    let pool = await sql.connect(db);
    let res = await pool.request().query(queryString);
    return res.recordsets;
  } catch (error) {
    console.log("SQL Coonection Fail " + error);
  }
}

/////////////////////S E R V E R   P O R T SETUP///////////////
const PORT = 3001;
app.listen(process.env.PORT || PORT, () => {
  console.log(`hurrayy , server running on port ${PORT}`);
});

//////////////////GET REQUEST TO SHOW/READ DATA FOR STUDENTS//////////////

app.get("/students", (req, res) => {
  const queryString = "SELECT * FROM studentdetails";
  runQuery(queryString).then((result) => {
    res.json(result[0]);
  });
});

//////////////////GET REQUEST TO SHOW/READ DATA FOR COMPANIES//////////////

app.get("/companies", (req, res) => {
  const queryString = "SELECT * FROM companydetails";
  runQuery(queryString).then((result) => {
    //console.log(result[0]);
    res.json(result[0]);
  });
});
//////////////////GET REQUEST TO SHOW/READ DATA FOR PLACEMENTS//////////

app.get("/placements", (req, res) => {
  const queryString = "SELECT * FROM updateddrive";
  runQuery(queryString).then((result) => {
    res.json(result[0]);
  });
});
// ***************************************************************//////////
//////////////////ROUTE FOR REGISTERATION /////////////
app.post("/register", (req, res) => {
  const usn = req.body.usn;
  const pass = req.body.pass;
  const queryString =
    "INSERT INTO slogin (usn,pass) VALUES (" +
    q +
    usn +
    q +
    colon +
    q +
    pass +
    q +
    ")";
  runQuery(queryString).then((result) => {
    if (result) {
      res.json(result[0]);
    } else {
      res.send({ message: "already exists" });
    }
  });
});

/////////////////////ROUTE FOR LOGIN /////////////
app.post("/login", (req, res) => {
  const usn = req.body.usn;
  const pass = req.body.pass;
  const queryString =
    "SELECT * FROM slogin WHERE usn =" +
    q +
    usn +
    q +
    " AND pass = " +
    q +
    pass +
    q;
  runQuery(queryString).then((result) => {
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.json({ message: "Wrong username/password combination" });
    }
  });
});

/////////////////////ROUTE FOR ADMIN LOGIN /////////////
app.post("/admin", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  const queryString =
    "SELECT * FROM alogin WHERE email =" +
    q +
    email +
    q +
    " AND pass = " +
    q +
    pass +
    q;
  runQuery(queryString).then((result) => {
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.send({ message: "Wrong username/password combination" });
    }
  });
});

/////////////////////ROUTE FOR ADD COMPANIES /////////////
app.post("/addcompany", (req, res) => {
  const cname = req.body.cname;
  const cdescription = req.body.cdescription;
  const email = req.body.email;
  const phone = req.body.phone;
  const website = req.body.website;
  const adrs = req.body.adrs;
  const package = req.body.package;
  const mincgpa = req.body.mincgpa;
  const position = req.body.position;
  const companyDetails = [
    cname,
    cdescription,
    email,
    phone,
    website,
    adrs,
    package,
    mincgpa,
    position,
  ];
  const queryString =
    "INSERT INTO companydetails (cname,cdescription,email,phone,website,adrs,package,mincgpa,position) VALUES " +
    "(" +
    mergeData(companyDetails) +
    ")";
  runQuery(queryString).then((result) => {
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.send({ message: "already exists" });
    }
  });
});

/////////////////////ROUTE FOR ADD PLACEMENTS /////////////
app.post("/addplacement", (req, res) => {
  const sname = req.body.sname;
  const usn = req.body.usn;
  const batch = req.body.batch;
  // const cgpa = req.body.cgpa;
  const cname = req.body.cname;
  const pdate = req.body.pdate;
  const package = req.body.package;
  const position = req.body.position;
  const placementsDetails = [
    sname,
    usn,
    batch,
    cname,
    pdate,
    package,
    position,
  ];
  const queryString =
    "INSERT INTO updateddrive (sname,usn,batch,cname,pdate,package,position) VALUES" +
    "(" +
    mergeData(placementsDetails) +
    ")";

  runQuery(queryString).then((result) => {
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.send({ message: "already exists" });
    }
  });
});

/////////////////////ROUTE FOR ADD STUDENTS /////////////
app.post("/addstudents", (req, res) => {
  const sname = req.body.sname;
  const usn = req.body.usn;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const dob = req.body.dob;
  const branch = req.body.branch;
  const cgpa = req.body.cgpa;

  const studentDetails = [sname, usn, mobile, email, dob, branch, cgpa];
  const queryString =
    "INSERT INTO studentdetails (sname,usn,mobile,email,dob,branch,cgpa) VALUES" +
    "(" +
    mergeData(studentDetails) +
    ")";
  runQuery(queryString).then((result) => {
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.send({ message: "already exists" });
    }
  });
});

//////////////////GET REQUEST TO SHOW/READ DATA FOR UserProfile//////////

app.get("/profile", (req, res) => {

  const queryString = "SELECT sl.usn,sd.sname,sd.mobile,sd.email,sd.dob,sd.branch,sd.cgpa FROM slogin AS sl INNER JOIN studentdetails AS sd ON sl.usn = sd.usn;";
  runQuery(queryString).then((result) => {
    res.json(result[0]);
  });
  
});

//////////////////GET REQUEST TO SHOW/READ DATA FOR AdminProfile//////////

app.get("/adminprofile", (req, res) => {
  const queryString = "SELECT al.email,ad.aname,ad.phone,ad.depname FROM alogin AS al INNER JOIN admindetails AS ad ON al.email = ad.email;";
  runQuery(queryString).then((result) => {
    res.json(result[0]);
  });
  
});
