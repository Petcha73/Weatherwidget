import React, { Component } from 'react';
import './App.css';

import Logo from "./components/Logo";
import Title from "./components/Title";
import Cities from "./components/Cities";
import Menu from "./components/Menu";
import Measures from "./components/Measures";
import citiesList from './citiesList.json';


const ENDPOINT ="https://api.netatmo.com/api/getpublicdata"
const TOKEN ="52d42f05177759882c8b456a|753293ecafa4f4b1a9604611adc998e9";
let city = "";
let MenuItem = "Temp";



class App extends Component {

  state = {

    paris :undefined,
    newyork :undefined,
    berlin :undefined,
    london : undefined,

    r1c1 : "Temperature",
    r1c2 : "Humidity",
    r1c3 : "Preassure",

    r2c1 : undefined,
    r2c2 : undefined,
    r2c3 : undefined,

    r3c1 : undefined,
    r3c2 : undefined,
    r3c3 : undefined,

    r4c1 : undefined,
    r4c2 : undefined,
    r4c3 : undefined,

    active : "",

    error:""

  }

  getMeasure = async(e) =>{


    e.preventDefault();
    const targetID = e.target.id;

    if(targetID==="temp"||targetID==="rain"||targetID==="wind"){

      MenuItem=targetID;
      console.log(MenuItem);

    }else{

      city = targetID;

    }

    if(city!==""){


      let ArrayWeather = undefined;

      const LAT_NE =citiesList[city].lat_ne;
      const LON_NE =citiesList[city].lon_ne;
      const LAT_SW =citiesList[city].lat_sw;
      const LON_SW =citiesList[city].lon_sw;


      const requestURL = ENDPOINT+"?access_token="+TOKEN+"&lat_ne="+LAT_NE+"&lon_ne="+LON_NE+"&lat_sw="+LAT_SW+"&lon_sw="+LON_SW+"&filter=true&required_data=wind";
      const request=await fetch(requestURL);
      const allStations = await request.json();


      console.log(allStations);

      const size =3;
      const WeatherObject=getCompleteStations(allStations,size);
      ArrayWeather=jasonToArray(WeatherObject);
      console.log(ArrayWeather);   


      switch(city){
        case "paris":
        this.setState({


          paris : " ◊ ",
          newyork :undefined,
          berlin :undefined,
          london : undefined


        });

        break;
        case "newyork":
        this.setState({


          paris : undefined,
          newyork :" ◊ ",
          berlin :undefined,
          london : undefined


        });

        break;
        case "berlin":
        this.setState({


          paris : undefined,
          newyork :undefined,
          berlin :" ◊ ",
          london : undefined


        });

        break;
        case "london":
        this.setState({


          paris : undefined,
          newyork :undefined,
          berlin :undefined,
          london : " ◊ "


        });

        break;
        default:
        break;


      }

      if(!ArrayWeather){

       this.setState({


        r1c1 : "Temperature",
        r1c2 : "Humidity",
        r1c3 : "Preassure",

        r2c1 : undefined,
        r2c2 : undefined,
        r2c3 : undefined,

        r3c1 : undefined,
        r3c2 : "",
        r3c3 : undefined,

        r4c1 : undefined,
        r4c2 : undefined,
        r4c3 : undefined,



      });


     }else if (MenuItem==="rain"){

      this.setState({

        r1c1 : "Rain/h",
        r1c2 : "Rain/day",
        r1c3 : "Rain live",

        r2c1 : ArrayWeather[2],
        r2c2 : ArrayWeather[3],
        r2c3 : ArrayWeather[4],

        r3c1 : ArrayWeather[12],
        r3c2 : ArrayWeather[13],
        r3c3 : ArrayWeather[14],

        r4c1 : ArrayWeather[22],
        r4c2 : ArrayWeather[23],
        r4c3 : ArrayWeather[24],

        error:""

      });

    }else if (MenuItem==="wind"){

      this.setState({

        r1c1 : "Gust angle",
        r1c2 : "Gust strength",
        r1c3 : "Wind angle",

        r2c1 : ArrayWeather[8],
        r2c2 : ArrayWeather[7],
        r2c3 : ArrayWeather[6],

        r3c1 : ArrayWeather[18],
        r3c2 : ArrayWeather[17],
        r3c3 : ArrayWeather[16],

        r4c1 : ArrayWeather[28],
        r4c2 : ArrayWeather[27],
        r4c3 : ArrayWeather[26],



        error:""

      });

    }else{

      this.setState({

        r1c1 : "Temperature",
        r1c2 : "Humidity",
        r1c3 : "Preassure",

        r2c1 : ArrayWeather[0],
        r2c2 : ArrayWeather[1],
        r2c3 : ArrayWeather[9],

        r3c1 : ArrayWeather[10],
        r3c2 : ArrayWeather[11],
        r3c3 : ArrayWeather[19],

        r4c1 : ArrayWeather[20],
        r4c2 : ArrayWeather[21],
        r4c3 : ArrayWeather[29],


        error:""

      });


    }





  }



  function jasonToArray(data){

    let newArray =[];

    for (const key in data) {

      let value = data[key];

      for (const key1 in value) {

        let value1 = value[key1];

        for (const key2 in value1) {

          let value2 = value1[key2];

          for (const key3 in value2) {

            let value3 = value2[key3];


            if (Array.isArray(value3)){

              for (const key4 in value3) {

                let value4 = value3[key4];
                newArray.push(value4);
              }
            }
          }

          if(!Array.isArray(value2) && typeof value2 !== 'object' && value2<5000) newArray.push(value2);
        }


      }
    }

    return newArray;
  }


  function getCompleteStations(data,maxSize){


    let newObject ={};
    let newObjSize =0;

    for(let i=0; i<Object.keys(data.body).length; i++){

      if(Object.keys(data.body[i].measures).length>3){

        newObject[newObjSize] = data.body[i].measures;
        newObjSize++;
      }

      if(newObjSize>=maxSize){
        return newObject;
      }

      i++;

    }
  }






};  

render(){

  return (

    <div>

    <div className="container">

    <div className="col-xs-12 logo"><Logo /></div>
    <div className="col-xs-12 title"><Title /></div>
    <div className="col-xs-12 main">
    <div className="col-xs-4 cities"><Cities 

    getMeasure={this.getMeasure}
    paris ={this.state.paris}
    newyork ={this.state.newyork}
    berlin ={this.state.berlin}
    london ={this.state.london}


    /></div>
    <div className="col-xs-8 page">
    <div className="col-xs-12 menu"><Menu  

    getMeasure={this.getMeasure} 

    /></div>
    <div className="col-xs-12 table">

    <Measures 

    r1c1 ={this.state.r1c1}
    r1c2 ={this.state.r1c2}
    r1c3 ={this.state.r1c3}

    r2c1 ={this.state.r2c1}
    r2c2 ={this.state.r2c2}
    r2c3 ={this.state.r2c3}

    r3c1 ={this.state.r3c1}
    r3c2 ={this.state.r3c2}
    r3c3 ={this.state.r3c3}

    r4c1 ={this.state.r4c1}
    r4c2 ={this.state.r4c2}
    r4c3 ={this.state.r4c3}

    error ={this.state.error}


    />
    </div>
    </div>
    </div>


    </div>

    </div>

    );
  }


};

export default App;







