import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tuapp.assetflow',
  appName: 'AssetFlow',
  webDir: 'www',
  plugins: {
    StatusBar: {
      backgroundColor: '#ffffff',
      style: 'DARK',
      overlaysWebView: false  
    }
  }
};

export default config;
