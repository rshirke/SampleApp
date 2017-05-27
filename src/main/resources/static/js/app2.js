function showData()
{
	var loadbtn = document.getElementById('loaddata');
    loadbtn.addEventListener('click',loaddataFunc);
    
        
    function loaddataFunc(){

        var xhr = new XMLHttpRequest(); //This is all you would need for IE7+

        xhr.onreadystatechange = function(){
            if (xhr.readyState==4 && xhr.status===200) {
                var array = JSON.parse(xhr.responseText);
                loaddata(array);
            }
        };

        xhr.open("GET", "http://localhost:8082/samples", true);
        xhr.send();

        function loaddata(arr)
        {
            console.log(arr);
            
            var resultdiv = document.getElementById('text1');

            var tablecreation = document.createElement('TABLE');
            tablecreation.id = 'table1';
            tablecreation.className = 'tablesorter';
            tablecreation.border = "2";
            tablecreation.cellpadding = "0";
            tablecreation.cellspacing = "1";
            var tablehead = document.createElement('THEAD');
            var tablerow = document.createElement('TR');
            tablerow.className = "tablesorter-headerRow";
            var tablehead1 = document.createElement('TH');
            tablehead1.className = "tablesorter-header";
            var tabled1 = document.createTextNode('ID');
            tabled1.className = "tablesorter-header-inner";
            var tablehead2 = document.createElement('TH');
            tablehead2.className = "tablesorter-header";
            var tabled2 = document.createTextNode('First Name');
            tabled2.className = "tablesorter-header-inner";
            var tablehead3 = document.createElement('TH');
            tablehead3.className = "tablesorter-header";
            var tabled3 = document.createTextNode('Last Name');
            tabled3.className = "tablesorter-header-inner";
            var tablehead4 = document.createElement('TH');
            tablehead4.className = "tablesorter-header";
            var tabled4 = document.createTextNode('Date');
            tabled4.className = "tablesorter-header-inner";
            var tablehead5 = document.createElement('TH');
            tablehead5.className = "tablesorter-header";
            var tabled5 = document.createTextNode('Score');
            tabled5.className = "tablesorter-header-inner";
            var tablehead6 = document.createElement('TH');
            tablehead6.className = "tablesorter-header";
            var tabled6 = document.createTextNode('Weighing');
            tabled6.className = "tablesorter-header-inner";

            tablehead1.appendChild(tabled1);
            tablehead2.appendChild(tabled2);
            tablehead3.appendChild(tabled3);
            tablehead4.appendChild(tabled4);
            tablehead5.appendChild(tabled5);
            tablehead6.appendChild(tabled6);
            tablerow.appendChild(tablehead1);
            tablerow.appendChild(tablehead2);
            tablerow.appendChild(tablehead3);
            tablerow.appendChild(tablehead4);
            tablerow.appendChild(tablehead5);
            tablerow.appendChild(tablehead6);
            tablehead.appendChild(tablerow);
            tablecreation.appendChild(tablehead);
            resultdiv.appendChild(tablecreation);
            

            	var tablehead = document.createElement('TBODY');
            for (var i=0;i<arr.length;i++)
            {
            	
                var tablerow1 = document.createElement('TR');
                var tablehead1 = document.createElement('TD');
                var tabled1 = document.createTextNode(arr[i].customerId);
                var tablehead2 = document.createElement('TD');

                var tabled2 = document.createTextNode(arr[i].firstname);
                var tablehead3 = document.createElement('TD');
                var tabled3 = document.createTextNode(arr[i].lastname);
                var tablehead4 = document.createElement('TD');
                var tabled4 = document.createTextNode(arr[i].date.monthValue +"-" + arr[i].date.dayOfMonth + "-" + arr[i].date.year + " " + arr[i].date.hour + ":" + arr[i].date.minute + ":" + arr[i].date.second);
                var tablehead5 = document.createElement('TD');
                var tabled5 = document.createTextNode(arr[i].score);
                var tablehead6 = document.createElement('TD');
                var tabled6 = document.createTextNode(arr[i].weighing);

                tablehead1.appendChild(tabled1);
                tablehead2.appendChild(tabled2);
                tablehead3.appendChild(tabled3);
                tablehead4.appendChild(tabled4);
                tablehead5.appendChild(tabled5);
                tablehead6.appendChild(tabled6);
            
                tablerow1.appendChild(tablehead1);
                tablerow1.appendChild(tablehead2);
                tablerow1.appendChild(tablehead3);
                tablerow1.appendChild(tablehead4);
                tablerow1.appendChild(tablehead5);
                tablerow1.appendChild(tablehead6);
                tablehead.appendChild(tablerow1);

            };
            	
            	tablecreation.appendChild(tablehead);
            	resultdiv.appendChild(tablecreation);	
        }
	}
}