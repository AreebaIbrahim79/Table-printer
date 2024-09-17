function generateTable() {  
   var  numberInput = document.getElementById("numberInput").value;  
  var tableContainer = document.getElementById("tableContainer");  
    
    // Clear previous table  
    tableContainer.innerHTML = "";  
    var printButton = document.getElementById("printButton");  
    printButton.style.display = 'none';  

    if (numberInput <= 0) {  
        alert("Please enter a positive number.");  
        return;  
    }  

    // Create the table  
    var table = `<div class="table"><div class="table-header">Table of ${numberInput}</div>`;  
    for (let i = 1; i <= 10; i++) {  
        const result = numberInput * i;  
        table += `<div>${numberInput} x ${i} = ${result}</div>`;  
    }  
    table += '</div>';  
    
    // Display the table  
    tableContainer.innerHTML = table;  
    printButton.style.display = 'inline-block';  
}  

function printTable() {  
    const printContent = document.getElementById("tableContainer").innerHTML;  
    const win = window.open('', '', 'height=400,width=600');  
    win.document.write('<html><head><title>Print Table</title></head>');  
    win.document.write('<body>');  
    win.document.write(printContent);  
    win.document.write('</body></html>');  
    
    win.document.close(); 
    win.print();  
}