import logo from './logo.svg';
import './App.css';
import {Navbar} from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheam';
import Home from './component/Home/Home';
import RestaurantDetail from './component/Restaurant/RestaurantDetail';
imp
function App() {
  return (
    <>


      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        {/* <Home /> */}
        {/* <RestaurantDetail />
         */}

         <ProductPage />
      </ThemeProvider>
    </>
  );
}

export default App;
