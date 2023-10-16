<?php

$Bus_id=$_POST["Bus_id"];
$Train_id=$_POST["Train_id"];
$Train_Name=$_POST["Train_Name"];
$Bus_Name=$_POST["Bus_Name"];
$Date=$_POST["Date"];
$Time=$_POST["Time"];
$No_of_Seats=$_POST["No_of_Seats"];
$From_W=$_POST["From_W"];
$To_W=$_POST["To_W"];

$host="localhost";
$dbname="urbanway";
$username="root";
$password="";

$conn=mysqli_connect(hostname:$host,
            username:$username,
            password:$password, 
            database:$dbname);
    
if (mysqli_connect_errno()) {
    die("Connection error:". mysqli_connect_error());
}
$sql="INSERT INTO shedule (Bus_id,Train_id,Train_Name,Bus_Name,Date,Time,No_of_Seats,From_W,To_W)
VALUES(?,?,?,?,?,?,?,?,?)";

$stmt = mysqli_stmt_init($conn);

if( ! mysqli_stmt_prepare($stmt,$sql)){
    die(mysqli_error($conn));
}
mysqli_stmt_bind_param($stmt,"iissssiss",
$Bus_id,
$Train_id,
$Train_Name,
$Bus_Name,
$Date,
$Time,
$No_of_Seats,
$From_W,
$To_W);

mysqli_stmt_execute($stmt);
echo"Record Saved";
?>