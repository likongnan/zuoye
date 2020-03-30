import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from "../papes/main"
import Mask from "../papes/mask"
import Good from "../papes/good"
import Global from "../papes/global"
import Page404 from "../papes/Page404"
import List from "../papes/list"
import Item from "../papes/item"

//引入头部组件
import Header from "../component/common/header"

const App = () => (
    <BrowserRouter>
        <div>
            <Header/>
        </div>
        <Switch className="qcs-content">
            <Route path="/" exact={true} component={Main}/>
            <Route path="/mask" component={Mask}/>
            <Route path="/Good" component={Good}/>
            <Route path="/global" component={Global}/>
            <Route path="/list" component={List} />
            <Route path="/item" component={Item}/>
            <Route component={Page404}/>
        </Switch>

    </BrowserRouter>

)
export default App