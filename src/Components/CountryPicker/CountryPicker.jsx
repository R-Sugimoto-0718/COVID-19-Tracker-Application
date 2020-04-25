import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.modle.css'

import { fetchCountries } from '../../api'

const CountryPicker = () => {
  const [fetchedCountires, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI　 = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchAPI　()
  }, [setFetchedCountries])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">世界</option>
        {fetchedCountires.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;