import {Component} from 'react'
import './index.css'

// Sai Teja

class LightDarkMode extends Component {
  state = {isButtonClicked: true}

  buttonClicked = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  gettingBtnText = () => {
    const {isButtonClicked} = this.state

    return isButtonClicked ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const {isButtonClicked} = this.state

    let theme
    let header
    if (isButtonClicked) {
      theme = 'darkTheme'
      header = 'lightHead'
    } else {
      theme = 'lightTheme'
      header = 'darkHead'
    }

    const btnText = this.gettingBtnText()

    return (
      <div className="bg-con">
        <div className={theme}>
          <h1 className={header}>Click To Change Mode</h1>
          <button onClick={this.buttonClicked} className="btn" type="button">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
