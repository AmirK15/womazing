import React, {Suspense} from "react";
import Layout from "./Layout/Layout";
import './app.scss'
import './i18n'

const App = () => {
    return (
        <Suspense fallback={'Loading...'}>
            <div>
                <Layout/>
            </div>
        </Suspense>
    );
};

export default App;
