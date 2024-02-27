const url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";            
            async function getData(){
                try{
                    const response = await fetch(url);
                    const data = await response.json();
                    if(response.ok){
                        console.log('Success');
                    }
                    else{
                        console.log('Server Error', data)
                    }
                    const div = document.createElement('div');
                    div.style.display = 'flex';
                    div.style.justifyContent = 'center';

                    const passage = document.createElement('h1');

                    const dateStr = data.datetime.slice(0, 10);
                    const timeStr = data.datetime.slice(11,16);
                    const s1 = document.createElement('span');
                    s1.textContent = dateStr;
                    s1.style.color = 'Red';

                    const s3 = document.createElement('span');
                    s3.textContent = timeStr;
                    s3.style.color = 'blue';

                    const parts = data.timezone.split('/');
                    const city = parts[1];            

                    passage.textContent = "Today's date is ";
                    passage.appendChild(s1);
                
                    const s2 = document.createElement('span');
                    s2.textContent = " and the time is ";
                    passage.appendChild(s2);
                    passage.appendChild(s3);
                    
                    div.appendChild(passage);


                    const image = document.createElement('div');
                    image.style.display = 'flex';
                    image.style.justifyContent = 'center';
                    const img = document.createElement('img');
                    img.src = 'img/in.jpg';
                    img.style.height ='300px';
                    img.style.width ='300px';
                    image.appendChild(img);
                    document.body.appendChild(image);
                    document.body.appendChild(div);
                }
                catch(error){
                    console.log('Fetch Error', error);
                }
            }
            getData();