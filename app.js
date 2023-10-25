var list = [];
        const api1 = '9153d894-99e3-48d4-a74c-7b1a8c2e3826';
        const api2 = 'c27b0983-7987-4b6f-afdf-26e4dc72c420';
        const api3 = '40e8b833-4920-4414-a7aa-72d02e06209a';
        const api4 = 'f1e1e4a3-8956-4a34-b851-b9c160b06a7f';
        // Function to fetch and display data
        function fetchData() {
            const apiUrl = 'https://api.cricapi.com/v1/matches?apikey='+api4+'&offset=0';

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    list = data['data'];
                    renderData(list);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        // Immediately Invoked Function Expression (IIFE) to fetch data on page load
        fetchData();
        var button=[] ;
        function renderData(list) {
            // console.log(list[0]);
                for(let i = 0;i<list.length;i++){   
                var name = list[i]['name'];
                var status = list[i]['status'];
                
                var button = document.createElement('button');
                button.innerText = name;
                document.body.appendChild(button);  //One paragraph tag has been added to the html page which is gonna show
                button.id = "b"+(i+1);                    //the content on the screen
                button.addEventListener("click", function(){
                    handleButtonClick(i+1);
                });
                var p_2 = document.createElement('p');
                p_2.textContent = status;
                document.body.append(p_2);
                p_2.id="p_2";

                var hRule=document.createElement('hr');
                document.body.append(hRule);
                
             }
             document.getElementById("loadingIndicator").style.display = "none";
             document.getElementById("dataContent").style.display = "block";
             var footer = document.createElement('p');
             footer.textContent = "\u00A9 2023 Panda Cricket | All rights reserved | Contact: info@pandacricket.com";
             document.body.append(footer);
             footer.id = "footer";
        }

          
        


        function handleButtonClick(buttonNumber) {  
            for(var j=1;j<=list.length;j++)
                {
                    if((j)==buttonNumber)
                    {
                        var name = list[j-1]['name'];
                        var matchType = list[j-1]['matchType'];
                        var status = list[j-1]['status'];
                        var venue = list[j-1]['venue'];
                        //var date = list[buttonNumber]['date'];
                        var dateAndTime = list[j-1]['dateTimeGMT'];
                        var teams = list[j-1]['teams'] ;
                        var score = list[j-1]['score'];
                       if(status=="Match not started")
                       {
                            alert("Name of the match : "+name + "\n"
                            +"Match Type : " + matchType + '\n'
                            +"Status : " + status +'\n'
                            +"Venue : " + venue + '\n'
                            +"Date & time : " + dateAndTime + '\n'
                            +"Teams : " + teams + '\n'  
                            );
                       }
                       else{
                            alert("Name of the match : "+name + "\n"
                            +"Match Type : " + matchType + '\n'
                            +"Status : " + status +'\n'
                            +"Venue : " + venue + '\n'
                            +"Date & time : " + dateAndTime + '\n'
                            +"Teams : " + teams + '\n'
                            +"Score : " + score+ '\n' 
                            );
                       }
                    }
                }
            
            }        