 const http  = require('http');

 const hostname = '127.0.0.1'
 const port = 3000;

 const server = http.createServer((req,res) =>{
     res.statusCode = 200;
     res.setHeader('content-type','text/html');
     res.end(`  <!DOCTYPE html>
     <html lang="en">
     
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="style.css">
         <!-- <link rel="stylesheet"  media="screen and (max-width:1160px)" href="new1.css"> -->
         <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@600&display=swap" rel="stylesheet">
         <title>Document</title>
     </head>
     
     <body>
         <div class="back">
             <div id="navbar">
                 <div class="logo">
                     <img src="./img/LOGO.jpg" alt="ne ">
                 </div>
                 <ul>
                     <li class="item"><a>HOME</a></li>
                     <li class="item"><a> MENU</a></li>
                     <li class="item"><a>ORDERS</a></li>
                     <li class="item"><a>SERVICES</a></li>
                 </ul>
                 <!-- <div class="search">
                     <input type="text"><button class="srh-btn">search</button>
                 </div> -->
             </div>
             <section id="home">
                 <h1 class="h-primary">welcome to MyMealOnline</h1>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, debitis dignissimos.</p>
                 <p>Lorem on dipisicing elit. Possimus, debitis dignissimos.</p>
                 <button class="odr-btn">ORDER NOW</button>
             </section>
         </div>
         <h1 style="text-align:center;  margin-top:10px">SERVICES</h1>
         <div id="services">
             <div class="service service1">
                 <img src="./img/cake.png" alt="">
                 <h1>food-menu</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid qui pariatur, est, eaque optio
                     temporibus adipisci exercitationem beatae blanditiis maiores? Debitis laudantium maiores iste deleniti
                     harum eum quidem temporibus ea quibusdam illum! Officiis dolorum architecto in nihil, perspiciatis
                     ducimus at eum aperiam. Officia, sed?</p>
             </div>
             <div class="service service1">
                 <img src="./img/food.png" alt="">
                 <h1>food-menu</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid qui pariatur, est, eaque optio
                     temporibus adipisci exercitationem beatae blanditiis maiores? Debitis laudantium maiores iste deleniti
                     harum eum quidem temporibus ea quibusdam illum! Officiis dolorum architecto in nihil, perspiciatis
                     ducimus at eum aperiam. Officia, sed?</p>
             </div>
             <div class="service service1">
                 <img src="./img/delboy.png" alt="">
                 <h1>food-menu</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid qui pariatur, est, eaque optio
                     temporibus adipisci exercitationem beatae blanditiis maiores? Debitis laudantium m
     
                     aiores iste deleniti
                     harum eum quidem temporibus ea quibusdam illum! Officiis dolorum architecto in nihil, perspiciatis
                     ducimus at eum aperiam. Officia, sed?</p>
             </div>
     
         </div>
         <div class="social">
             <h1>OUR PARTNERS</h1>
             <div class="icon">
                 <div class="icons">
                     <img src="./img/social1.png" alt="">
                 </div>
                 <div class="icons">
                     <img src="./img/social2.png" alt="">
                 </div>
                 <div class="icons">
                     <img src="./img/social3.png" alt="">
                 </div>
     
             </div>
         </div>
         <div class="contact">
             <h1 style="text-align: center;">contact</h1>
             <div class="mainn">
                 <div class="one">
                     <p>Name</p>
                     <input type="text">
                 </div>
                 <div class="one">
                     <p>Mobile no</p>
                     <input type="text">
                 </div>
                 <div class="one">
                     <p>E-mail</p>
                     <input type="text">
                 </div>
                 <div class="one">
                     <p>Message</p>
                     <textarea name="message" id="" cols="30" rows="10"></textarea>
                 </div>
     
             </div>
             <div class="btn">
                 <button>
                     SEND NOW
                 </button></div>
         </div>
     </body>
     
     </html> `);

 });
 server.listen( port,hostname,()=>{
     console.log(`server runnig at https://${hostname}:${port}/`);
 });

 