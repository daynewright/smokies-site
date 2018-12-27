import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import H2 from '../components/H2';
import Text from '../components/Text';
import ButtonLink from '../components/ButtonLink';

const BackgroundSection = styled(Section)`
  background-attachment: fixed;
  background-image: url("images/overlay.png"), url("../../images/smokies.jpg");
  background-position: center center;
  background-size: cover;
`;

const Link = styled.a`
  text-decoration: none;
  color: #E16B34;
`;

const Map = styled.div`
  width: 60%;
  height: 400px;
  background: grey;
  border: 4px solid grey;
  margin: 20px auto;

  @media only screen and (max-width: 1000px) {
    width: 75%;
  }
`;

class ContactUs extends Component {
  componentDidMount() {
    const H = window.H;

    function moveMapToSmokies(map){
      map.setCenter({lat:35.5482, lng:-87.55229});
      map.setZoom(16);
    }

      //Step 1: initialize communication with the platform
      var platform = new H.service.Platform({
        app_id: '706Sw0Dq8Uf0vjOyTVs1',
        app_code: '8DwdwpHUQsYwus9xCh35mw',
        useHTTPS: false
      });
      var pixelRatio = window.devicePixelRatio || 1;
      var defaultLayers = platform.createDefaultLayers({
        tileSize: pixelRatio === 1 ? 256 : 512,
        ppi: pixelRatio === 1 ? undefined : 320
      });

      // //Step 2: initialize a map  - not specificing a location will give a whole world view.
      var map = new H.Map(document.getElementById('map'),
      defaultLayers.normal.map, {pixelRatio: pixelRatio});

      //Step 3: make the map interactive
      // MapEvents enables the event system
      // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // Create the default UI components
      var ui = H.ui.UI.createDefault(map, defaultLayers);

      // Now use the map as required...
      moveMapToSmokies(map);

      var smokiesMarker = new H.map.Marker({lat:35.5482, lng:-87.55229});
      map.addObject(smokiesMarker);
  }

  render() {
    return (
      <BackgroundSection id="contactUs">
        <H2>SMOKIE'S BUTCHER SHOP</H2>
        <Text color="#aaa"><Link href="tel:(931) 295-3525">(931) 295-3525</Link></Text>
        <Text>11 W Main Street Hohenwald, Tennessee</Text>
        <ButtonLink color="#E16B34" target="_blank" href="https://wego.here.com/directions/mix//Smokies-Butcher-Shop,-11-W-Main-Street,-38462-Hohenwald:e-eyJuYW1lIjoiU21va2llJ3MgQnV0Y2hlciBTaG9wIiwiYWRkcmVzcyI6IjExIFcgTWFpbiBTdHJlZXQsIEhvaGVud2FsZCwgVGVubmVzc2VlIDM4NDYyIiwibGF0aXR1ZGUiOjM1LjU0ODIsImxvbmdpdHVkZSI6LTg3LjU1MjI5LCJwcm92aWRlck5hbWUiOiJmYWNlYm9vayIsInByb3ZpZGVySWQiOjE4MDEzNjMxNTMyMTg4NDB9?map=35.5482,-87.55229,15,normal&fb_locale=en_US"><i className="fas fa-map-marked-alt"></i> Get Directions</ButtonLink>
        <Map id="map" />
        <ButtonLink target="_blank" href="https://www.facebook.com/pages/category/Butcher-Shop/Smokies-Butcher-Shop-1801363153218840/"><i className="fab fa-facebook-f"></i> Find us on Facebook!</ButtonLink>
				<ButtonLink target="_blank" href="http://m.me/1801363153218840"><i className="fab fa-facebook-messenger"></i>  Facebook Messenger</ButtonLink>
      </BackgroundSection>
    );
  }
}

export default ContactUs;