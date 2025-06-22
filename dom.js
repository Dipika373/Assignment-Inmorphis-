 //que1<p id="text">JavaScript Exercises - w3resource</p>
<button onclick="js_style()">Style</button>
<script>
function js_style() {
  const para = document.getElementById("text");
  para.style.fontFamily = "Arial";
  para.style.fontSize = "20px";
  para.style.color = "green";
}
</script>


Q2
<form id="form1" onsubmit="getFormvalue(); return false;">
  First name: <input type="text" name="fname" value="David"><br>
  Last name: <input type="text" name="lname" value="Beckham"><br>
  <input type="submit" value="Submit">
</form>

<script>
function getFormvalue() {
  const form = document.getElementById("form1");
  const fname = form.fname.value;
  const lname = form.lname.value;
  alert(fname + " " + lname);
}
</script>







Q3   <p id="text">This is a paragraph</p>
<button onclick="changeBG()">Change Background</button>

<script>
function changeBG() {
  document.getElementById("text").style.backgroundColor = "lightblue";
}
</script>






Q4  <a id="w3r" href="http://www.w3resource.com/" type="text/html" hreflang="en-us" rel="nofollow" target="_self">w3resource</a>
<button onclick="getAttributes()">Click here</button>

<script>
function getAttributes() {
  const link = document.getElementById("w3r");
  alert("href: " + link.href +
        "\nhreflang: " + link.hreflang +
        "\nrel: " + link.rel +
        "\ntarget: " + link.target +
        "\ntype: " + link.type);
}
</script>










Q5   <table id="sampleTable" border="1">
  <tr><td>Row1 cell1</td><td>Row1 cell2</td></tr>
  <tr><td>Row2 cell1</td><td>Row2 cell2</td></tr>
</table>
<input type="button" onclick="insert_Row()" value="Insert row">

<script>
function insert_Row() {
  const table = document.getElementById("sampleTable");
  const newRow = table.insertRow(0);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = "New Row Cell1";
  cell2.innerHTML = "New Row Cell2";
}
</script>







Q6   <table id="myTable" border="1">
  <tr><td>Row1 cell1</td><td>Row1 cell2</td></tr>
  <tr><td>Row2 cell1</td><td>Row2 cell2</td></tr>
</table>
<button onclick="changeContent()">Change cell [0,1]</button>

<script>
function changeContent() {
  const table = document.getElementById("myTable");
  table.rows[0].cells[1].innerHTML = "Changed!";
}
</script>







Q7   <table id="myTable" border="1"></table>
<button onclick="createTable()">Create Table</button>

<script>
function createTable() {
  const rows = 3;
  const cols = 3;
  const table = document.getElementById("myTable");
  table.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.innerHTML = `Row-${i} Column-${j}`;
    }
  }
}
</script>





Q8   <select id="colorSelect">
  <option>Red</option>
  <option>Green</option>
  <option>White</option>
  <option>Black</option>
</select>
<button onclick="removecolor()">Remove</button>

<script>
function removecolor() {
  const select = document.getElementById("colorSelect");
  select.remove(select.selectedIndex);
}
</script>











Q9  <select id="mySelect">
  <option>Red</option>
  <option>Green</option>
  <option>Blue</option>
  <option>White</option>
</select>
<button onclick="getOptions()">Count & Show</button>

<script>
function getOptions() {
  const select = document.getElementById("mySelect");
  let result = `Total: ${select.length}\n`;
  for (let i = 0; i < select.length; i++) {
    result += select.options[i].text + "\n";
  }
  alert(result);
}
</script>





Q10


<select id="mySelect">
  <option>Red</option>
  <option>Green</option>
  <option>Blue</option>
  <option>White</option>
</select>
<button onclick="getOptions()">Count & Show</button>

<script>
function getOptions() {
  const select = document.getElementById("mySelect");
  let result = `Total: ${select.length}\n`;
  for (let i = 0; i < select.length; i++) {
    result += select.options[i].text + "\n";
  }
  alert(result);
}
</script>

