import React, { useEffect } from 'react';

// Third Party Package
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// constants
import Routes from './src/Navigations/Routes';

// store
import LinearGradient from 'react-native-linear-gradient';
import colors from './src/config/colors';
import { AppProvider } from './src/store/App.provider';
import { persistor, store } from './src/store/configureStore';

const App = () => {
  useEffect(() => {
    return SplashScreen.hide();
  }, [])


  return (
    <LinearGradient style={ { flex: 1 } } colors={ [colors.primaryColor, colors.secondaryColor] }
      start={ { x: 0, y: 0 } }
      end={ { x: 0, y: .8 } }>
      <Provider store={ store }>
        <PersistGate persistor={ persistor }>
          <AppProvider>
            <Routes />
          </AppProvider>
          <Toast />
        </PersistGate>
      </Provider>
    </LinearGradient>
  );
};

export default App;
