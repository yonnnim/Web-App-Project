import React from "react";
import Button from "Components/Button";
import { push } from "react-router-redux";

const Header = props => (
  <div>
    <Button label="home" onClick={() => props.dispatch(push("/"))} />
    <Button label="admin" onClick={() => props.dispatch(push("/admin"))} />
    <Button
      label="user details"
      onClick={() => props.dispatch(push("/user-details"))}
    />
    <Button label="login" onClick={() => props.dispatch(push("/login"))} />
    <Button label="signup" onClick={() => props.dispatch(push("/signup"))} />
    <Button
      label="email confirmation"
      onClick={() => props.dispatch(push("/email-confirmation"))}
    />
    <Button
      label="buy leads"
      onClick={() => props.dispatch(push("/leads/buy"))}
    />
    <Button
      label="sell leads"
      onClick={() => props.dispatch(push("/leads/sell"))}
    />
    <Button
      label="my leads"
      onClick={() => props.dispatch(push("/leads/my"))}
    />
    <Button
      label="new lead"
      onClick={() => props.dispatch(push("/leads/new"))}
    />
    <Button
      label="csv upload"
      onClick={() => props.dispatch(push("/leads/csv-upload"))}
    />
    <Button
      label="lead dispute"
      onClick={() => props.dispatch(push("/leads/1/dispute"))}
    />
    <br />
    <br />
  </div>
);

export default Header;
