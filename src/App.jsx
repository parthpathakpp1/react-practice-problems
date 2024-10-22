import BgChange from "./bgchange"
import ColorPicker from "./colorpicker"
import { ThemeProvider } from "./context/ThemeContext"
import Counter from "./counter"
import Fetch from "./fetch"
import Inputform from "./inputform"
import LightandDark from "./lightanddark"
import LightandDarkComp from "./LightandDarkComp"
import List from "./list"
import ProgressBar from "./progressbar"
import Quotes from "./quotes"
import SearchBar from "./search"
import Timer from "./timer"
import Todo from "./todo"
import WeatherApp from "./weather"

function App() {

  return (
    <div>
      {/* <Counter /> */}
      {/* <Inputform /> */}
      {/* <List /> */}
      {/* <Fetch /> */}
      {/* <Timer /> */}
      {/* <Todo /> */}
      {/* <BgChange /> */}
      {/* <Quotes /> */}
      {/* <WeatherApp /> */}
      {/* <SearchBar /> */}
      {/* <ColorPicker /> */}
      {/* <ThemeProvider>
        <div className="App">
          <LightandDark />
          <LightandDarkComp />
        </div>
      </ThemeProvider> */}
      <ProgressBar />

    </div>
  )
}

export default App
