public class reactNativeFlipper {
    public static class MainApplication extends Application implements ReactApplication {
        // ...

        @Override
        public void onCreate() {
            super.onCreate();
            SoLoader.init(this, /* native exopackage */ false);
            initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
        }

        /**
         * Loads Flipper in React Native templates. Call this in the onCreate method
         * with something like
         * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
         *
         * @param context
         * @param reactInstanceManager
         */
        private static void initializeFlipper(
                Context context, ReactInstanceManager reactInstanceManager) {
            if (BuildConfig.DEBUG) {
                try {
                    /*
                     * We use reflection here to pick up the class that initializes
                     * Flipper, since Flipper library is not available in release mode
                     */
                    Class<?> aClass = Class.forName("com.example.ReactNativeFlipper");
                    aClass
                            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
                            .invoke(null, context, reactInstanceManager);
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                } catch (NoSuchMethodException e) {
                    e.printStackTrace();
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                } catch (InvocationTargetException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
