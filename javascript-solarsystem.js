function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
Weight(Pounds) = Weight(Kgs) * 2.2
}

function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
Distance(Miles) = Distance(Kms) * 0.62137
}

function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}


Script connect to javascripte

  <head>
      <title>Document</title>
      <link rel="stylesheet" href="style.css">
      <script src="script.js"></script>
  </head>


liez la temperarture section de index.html

<fieldset>
    <legend>Temperature</legend>
    <label for="Temperature">Celsius</label> <br/>

    <input type="number" id="celsius"> <br/>

    <button id="temperature" onclick="temperature()"> Convert </button> <br/>

    <input type="number" id="fahrenheit"> <br/>

    <label for="Temperature">Fahrenheit</label>
</fieldset>
 -----    ------------------------------         
<fieldset>
    <legend>Weight</legend>
    <label for="Weight">KG</label> <br/>

    <input type="number" id="kilo"> <br/>

    <button id="weight" onclick="weight()"> Convert </button>  <br/>

    <input type="number" id="pounds">  <br/>

    <label for="Weight">Pounds</label>
</fieldset>
-------------------------
<fieldset>
    <legend>Distance</legend>
    <label for="Distance">KM</label> <br/>

    <input type="number" id="km">  <br/>

    <button id="distance" onclick="distance()"> Convert </button> <br/>

    <input type="number" id="miles">  <br/>

    <label for="Distance">Miles</label>
</fieldset>
------------------------------


Code index complet html - css e javaScripte

------>
<!DOCTYPE html>
<html lang="en">
  <head>
      <title>Document</title>
      <link rel="stylesheet" href="style.css">
      <script src="script.js"></script>
  </head>
  <body>
      <section id="home">
        <header>
          Unit Conversions
        </header>
        <nav>
          <div class="topdiv">
            <a href="#temperature"><button  class="topmenu">Temperature</button></a>
            <a href="#weight"><button  class="topmenu">Weight</button></a>
            <a href="#distance"><button  class="topmenu">Distance</button></a>
          </div>
        </nav>
      </section>    
      <div style="clear:both;"></div>
     
      <div id="all-conversion-sections">

        <section id="temperature"  class="b temperature">
          <div id="tmp">
            <figure>
              <img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Theia%20Labs/02%20-%20HTML5%20Elements/images/thermo.png" width="150px"/>
              <figcaption>Celcius to Farenheit Conversion</figcaption>
            </figure>
            <article>

              <fieldset>
                <legend>Temperature</legend>
                <label for="Temperature">Celsius</label> <br/>

 <input type="number" id="celsius"> <br/>

                <button id="temperature" onclick="temperature()"> Convert </button> <br/>

                <input type="number" id="fahrenheit"> <br/>

 <label for="Temperature">Fahrenheit</label>
              </fieldset>
              <aside>
                To convert celsuis to fahrenheit yourself, use this formula replacing the `C` with your temperature in celsuis: (C × 9/5) + 32
              </aside>
            </article>
          </div>
        </section>

        <div style="clear:both;"></div>
      
        <section id="weight"  class="b weight">          
          <div id="wgt">
            <figure>
              <img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Theia%20Labs/02%20-%20HTML5%20Elements/images/weight.png"  width="150px"/>
              <figcaption>Kilograms to Pound Conversion</figcaption>
            </figure>
            <article>
              <fieldset>
                <legend>Weight</legend>
                <label for="Weight">KG</label> <br/>

 <input type="number" id="kilo"> <br/>

                <button id="weight" onclick="weight()"> Convert </button>  <br/>

 
                <input type="number" id="pounds">  <br/>

  <label for="Weight">Pounds</label>    
              </fieldset>
              <aside>
                To convert kilograms to pounds yourself, use this formula replacing the `kg` with your weight in kilograms: kg x 2.205
              </aside>      
            </article>
          </div>
        </section>

        <div style="clear:both;"></div>

        <section id="distance"  class="b distance">
          <div id="dst">
            <figure>
              <img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Theia%20Labs/02%20-%20HTML5%20Elements/images/speedo.png"  width="150px"/>
              <figcaption>Kilometers to Miles Conversion</figcaption>
            </figure>
            <article>
              <fieldset>
                <legend>Distance</legend>
                  <label for="Distance">KM</label> <br/>

 <input type="number" id="km">  <br/>

                  <button id="distance" onclick="distance()"> Convert </button> <br/>

                  <input type="number" id="miles">  <br/>

  <label for="Distance">Miles</label>
              </fieldset>
              <aside>
                To convert kilometers to miles yourself, use this formula replacing the `km` with your distance in kilmeters: km &divide; 1.609
              </aside>
    
            </article>
          </div>
        </section>
        <div style="clear:both;"></div>

      </div>

    <div id="go-home" class="iconbutton">
      <a href="#home">
        <img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Theia%20Labs/02%20-%20HTML5%20Elements/images/home.svg"/>
      </a>
    </div>

    <footer>Learn more about HTML and CSS as a part of IBM Fullstack Cloud Developer Certification</footer>
  </body>
</html>
