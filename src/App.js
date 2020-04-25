import React from 'react';

// import Cards from './Components/Cards/Cards'
// import Chart from './Components/Cards/Chart'
// import CountryPicker from './Components/Cards/CountryPicker'

// 同じディレクトリにあるファイルは１つにまとめることができる
import { Cards, Chart, CountryPicker } from './Components';
import styles from './App.module.css'
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
   const fetchedData = await fetchData();

   this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    console.log(country)
  }

  render() {
    const { data } = this.state;
    return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.componentWillMount}/>
      <Chart/>
    </div>
    )
  }
}

export default App;