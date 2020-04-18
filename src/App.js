import React from 'react';

// import Cards from './Components/Cards/Cards'
// import Chart from './Components/Cards/Chart'
// import CountryPicker from './Components/Cards/CountryPicker'

// 同じディレクトリにあるファイルは１つにまとめることができる
import { Cards, Chart, CountryPicker } from './Components';

class App extends React.Component {
  render() {
    return (
    <div>
      <Cards/>
      <CountryPicker/>
      <Chart/>
    </div>
    )
  }
}

export default App;