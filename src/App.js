import React from 'react';
import './App.css';
import AppBarExampleIcon from './components/Appbar/Appbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardExampleWithAvatar from './components/Card/Card';
import wallpaper from '../src/wallpaper.jpg';
import Footer from './components/Footer/Footer';


const App = () => (
  <MuiThemeProvider >
    <div className="background" style={{ backgroundImage: `url(${wallpaper})` }}>
    <AppBarExampleIcon />
    
    <CardExampleWithAvatar/>
    <Footer />
    </div>
  </MuiThemeProvider>
);

export default App;
