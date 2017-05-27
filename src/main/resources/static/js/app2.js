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
            var tablerow = document.createElement('TR');
            var tablehead1 = document.createElement('TH');
            var tabled1 = document.createTextNode('ID');
            var tablehead2 = document.createElement('TH');

            var tabled2 = document.createTextNode('First Name');
            var tablehead3 = document.createElement('TH');
            var tabled3 = document.createTextNode('Last Name');
            var tablehead4 = document.createElement('TH');
            var tabled4 = document.createTextNode('Date');
            var tablehead5 = document.createElement('TH');
            var tabled5 = document.createTextNode('Score');
            var tablehead6 = document.createElement('TH');
            var tabled6 = document.createTextNode('Weighing');

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
            tablecreation.appendChild(tablerow);
            resultdiv.appendChild(tablecreation);
            

						
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
                
                tablecreation.appendChild(tablerow1);
                resultdiv.appendChild(tablecreation);	

            };
        }
	}
}