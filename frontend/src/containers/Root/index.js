//@ts-check

import React from "react"
import { Switch, Route } from "react-router"
import App from "Containers/App"
import Home from "Containers/Home"
import Admin from "Containers/Admin"
import MyLeads from "Containers/MyLeads"
import SellLeads from "Containers/SellLeads"
import BuyLeads from "Containers/BuyLeads"
import Users from "Containers/Users"
import Payments from "Containers/Payments"
import UploadForm from "containers/UploadForm"
import CSVUload from "Containers/CSVUpload"
import CSVMapping from "Containers/CSVMapping"
import Dispute from "Containers/Dispute"
import Checkout from "Containers/Checkout"

const Root = () => (
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/byleads" component={MyLeads} />
      <Route path="/sellleads" component={SellLeads} />
      <Route path="/myleads" component={BuyLeads} />
      <Route path="/users" component={Users} />
      <Route path="/payments" component={Payments} />

      <Route path="/uploadform" component={UploadForm} />
      <Route path="/csv-upload" component={CSVUload} />
      <Route path="/csv-mapping" component={CSVMapping} />
      <Route path="/checkout/" component={Checkout} />
      <Route path="/dispute" component={Dispute} />
    </Switch>
  </App>
)

export default Root
