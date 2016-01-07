var React = require("react");
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Modal = require('react-bootstrap').Modal;
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var FormControls = require('react-bootstrap').FormControls;



// var Autocomplete = React.createClass({
//     getInitialState(){
//         return {
//             location: ""
//         }
//     },
//     handleChange(e){
//         this.setState({
//             location: e.target.value
//         })
//     },
//     render: function () {
//         return (
//             <div>
//                 <input id="autocomplete" type="text" onChange={this.handleChange} />
//             </div>
//         )
//     }
// });


var Autocomplete = React.createClass({
    //   getInitialState(){
    //     return {
    //         location: "",
    //         showModal: true
    //     }
    // },
    componentDidMount: function() {

        if ({showModal: true}) {
   
    google.maps.event.addDomListener(window, 'load',   () => {
        var input = this.refs.searchField;
        var autocomplete = new google.maps.places.Autocomplete(input);
     
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            var place = autocomplete.getPlace();
            // document.getElementById('city2').value = place.name;
            this.refs.lat.value = place.geometry.location.lat();
            this.refs.lng.value = place.geometry.location.lng();
          

        });
    });
    } 

     },
     handleChange(e){
        this.setState({
            location: e.target.value
        })
    },
     render: function() {
       return (
           <div>
               <input ref='searchField' type="text" size="50" onChange={this.handleChange} addonBefore="Start Location" placeholder="Enter a Location"/>

               <input type="text" ref="lat" name="cityLat"/>
                <input type="text" ref="lng" name="cityLng" />  
           </div>
           );
   }

   });



module.exports = Autocomplete;