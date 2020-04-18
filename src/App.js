import React from 'react';

// import Cards from './Components/Cards/Cards'
// import Chart from './Components/Cards/Chart'
// import CountryPicker from './Components/Cards/CountryPicker'

// 同じディレクトリにあるファイルは１つにまとめることができる
import { Cards, Chart, CountryPicker } from './Components';
import styles from './App.module.css'
import { fetchData } from './api'

class App extends React.Component {

  async componentDidMount() {
   const data = await fetchData();

   console.log(data)
  }

  render() {
    return (
    <div className={styles.container}>
      <Cards/>
      <CountryPicker/>
      <Chart/>
    </div>
    )
  }
}

export default App;