async function dataShow() {
  let myTable = `
 <table border="1px" width="100%" bgcolor="#27293D" align="center" style="color: #ffffff; font-size:30px;">
        <tr bgcolor="#1E88F7" >
          <th>Employee no</th>
          <th> Employee Name</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
       `;
  let url = "http://localhost:3000/employees";

  let myobj = await fetch(url);
  console.log(myobj);
  let myData = await myobj.json();  
  console.log(myData);

  myData.map((key) => {
    myTable += `
       <tr style="text-align: center;padding: 15px;">
        <td style="padding: 15px;">${key.employeeno}</td>
        <td style="padding: 15px;">${key.name}</td>
        <td style="padding: 15px;">${key.city}</td>
        <td style="padding: 15px;">${key.salary}</td>
       </tr>
    `;
  });

  myTable += `</table>`;

  document.getElementById("demo").innerHTML = myTable;
}
dataShow();