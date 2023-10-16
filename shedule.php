<?php
require_once('connection.php');
$query = "select * from shedule";
$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Train and Bus Schedules</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>

        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap'); 

        * {
            font-family: 'Montserrat', sans-serif;
  padding: 0;
  margin: 0;
}
        body {
            background-color: #fff;
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 1300px;
            margin: 0 auto;
        }

        .table {
    margin: 20px auto;
  }

  /* Style the search input */
  #search {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  /* Style the table */
  #employee_table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    width: 100%;
    border-radius: 15px;
  }

  /* Style the table header row */
  #employee_table th {
    background-color: #0088ff;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  /* Style the table data rows */
  #employee_table td {
    border: 1px solid #ccc;
    text-align: center;
    padding: 10px;
  }

  /* Add alternating row colors for better readability */
  #employee_table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #e0e0e0;
            box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0);
        }



        @media only screen and (max-width: 768px) {
            table {
                width: 90%;
            }
        }

        .logo {
            text-align: center;
        }

        .logo img {
            width: 100px;
        }

        h2 {
            text-align: center;
            color: #000; 
        }
        

        form {
            text-align: center;
            margin-top: 20px;
        }
        
        button {
            background-color: #000; 
            color: #fff; 
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }
        
        button:hover {
            background-color: #444;
        }

 /* Style the container for the search bar */
 .search-container {
    display: flex;
    align-items: center;
    background-color: #000;
    border-radius: 25px;
    padding: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: height 0.3s ease-in-out;
    height: 50px;
  }

  /* Style the search input */
  #search {
    width: 100%;
    border: none;
    border-radius: 25px;
    padding: 10px;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    outline: none;
    transition: height 0.3s ease-in-out;
    height: 30px;
  }

  /* Style the search icon */
  #search-icon {
    padding: 10px;
    background-color: #fff;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    color: #000;
    cursor: pointer;
  }

  /* On hover, change the search icon background color */
  #search-icon:hover {
    background-color: #ccc;
  }

  /* Remove input border when focused */
  #search:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    height: 50px;
  }

  /* Increase the height of the container when input is focused */
  #search:focus + #search-icon {
    height: 50px;
  }
  #search {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 2px solid #007BFF; /* Add a blue border */
    border-radius: 15px; /* Rounded corners */
    font-size: 16px;
    outline: none;
  }

  /* Style the search input on focus */
  #search:focus {
    border-color: #0056b3; /* Darker blue border on focus */
  }
  .logo {
    text-align: center;
  }

  /* Style the logo image */
  .logo img {
    width: 200px; /* Increase the size as needed */
    height: auto; /* Maintain the aspect ratio */
  }
  
    </style>
</head>
<body>
<div class="logo">
    <img src="assets/img/logo1.png" alt="Logo">
</div>
<h2>Train and Bus Schedules</h2>

<div class="container">
    <div class="table">
        
        <input type="text" id="search" onkeyup="filterTable()" placeholder="Search"><br>
        
        <table class="table table-bordered text-center" id="employee_table">
            <tr>
                <th>Bus Id</th>
                <th>Train Id</th>
                <th>Train_Name</th>
                <th>Bus Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>No Of Seats</th>
                <th>From</th>
                <th>To</th>
            </tr>

            <?php
            while ($row = mysqli_fetch_assoc($result)) {
            ?>
                <tr>
                    <td><?php echo $row['Bus_id'] ?></td>
                    <td><?php echo $row['Train_id'] ?></td>
                    <td><?php echo $row['Train_Name'] ?></td>
                    <td><?php echo $row['Bus_Name'] ?></td>
                    <td><?php echo $row['Date'] ?></td>
                    <td><?php echo $row['Time'] ?></td>
                    <td><?php echo $row['No_of_Seats'] ?></td>
                    <td><?php echo $row['From_W'] ?></td>
                    <td><?php echo $row['To_W'] ?></td>
                </tr>
            <?php
            }
            ?>
        </table>
    </div>
    

    <form action="home.html">
        <button type="submit">Home Page</button>
    </form>
</div>

<script>
    function filterTable() {
        var input, filter, table, tr, td, i, j, txtValue;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        table = document.getElementById("employee_table");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            for (j = 0; j < tr[i].getElementsByTagName("td").length; j++) {
                td = tr[i].getElementsByTagName("td")[j];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break;
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    }
</script>
</body>
</html>
