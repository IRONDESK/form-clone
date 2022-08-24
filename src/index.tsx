import "react-app-polyfill/stable"
import "./styles/global.css"
import ReactDOM from "react-dom"
import Routes from "./Routes"

ReactDOM.render(
  <>
    <Routes />
  </>,
  document.getElementById("root")
)
