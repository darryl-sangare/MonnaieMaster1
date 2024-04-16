import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import styles from './Change.module.scss'

  

function Change() {
    const [info, setInfo] = useState({});
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("EUR");
    const [to, setTo] = useState("USD");
    const [options, setOptions] = useState([]);
  
    useEffect(() => {
      Axios.get(`https://cdn.taux.live/api/latest.json`)
        .then((response) => {
          const data = response.data;
          setInfo(data.rates);
          setOptions(Object.keys(data.rates));
        })
        .catch((error) => {
          console.error('Error fetching currency data:', error);
        });
    }, []);
  
    function convert() {
      const rate = info[to] / info[from]; 
      const convertedAmount = input * rate;
      return convertedAmount.toFixed(2);
    }
  
    function flip() {
      const temp = from;
      setFrom(to);
      setTo(temp);
    }
  
    const euros = [1, 5, 10, 50, 100, 250, 500];
    const dollars = [1, 5, 10, 50, 100, 250, 500];
    
    const conversionTableEuroToUSD = euros.map((amount) => {
      const convertedAmount = amount * (info['USD'] / info['EUR']);
      const convertedValue = convertedAmount ? convertedAmount.toFixed(2) : 'N/A'; 
      return (
        <tr key={amount}>
          <td>{amount} EUR</td>
          <td>{convertedValue} USD</td>
        </tr>
      );
    });
  
    const conversionTableUSDToEuro = dollars.map((amount) => {
      const convertedAmount = amount * (info['EUR'] / info['USD']);
      const convertedValue = convertedAmount ? convertedAmount.toFixed(2) : 'N/A'; 
      return (
        <tr key={amount}>
          <td>{amount} USD</td>
          <td>{convertedValue} EUR</td>
        </tr>
      );
    });
  
    return (
      <div className={styles.main}>
        <div>

        </div>
        <div className={styles.heading}>
          <h1>Convertisseur de devises</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt voluptatibus ad cum repellendus. Quisquam sequi eligendi explicabo quae, minima deserunt. Commodi qui quidem </p>
        </div>
        <div className={styles.container}   >
            <div className={styles.container2}>
                <div className={styles.first}>
                    <div >
                      
                        <input
                        type="number"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Entrez un montant"
                        />
                    </div>

                    
                    <div className="middle">

                        <Dropdown
                        options={options}
                        onChange={(e) => setFrom(e.value)}
                        value={from}
                        placeholder="From"
                        />
                    </div>

                </div>


                <div className={styles.switch} >
                    <HiSwitchHorizontal size="30px" onClick={flip} />
                </div>
                <div className={styles.test} >

                
                    <h3 className={styles.montant} >
                    {convert()} {to}
                    </h3>
                    <div  className={styles.middle2}>
                        <Dropdown
                        
                        options={options}
                        onChange={(e) => setTo(e.value)}
                        value={to}
                        placeholder="To"
                        />
                    </div>
                    <div className="result"> 

                </div>

            </div>
            

        </div>











 

    </div>



        <div className={styles.block}>
            <div className={styles.conversion}>
            <h2>Conversion Table EUR vers USD</h2>
            <table>
                <thead>
                <tr>
                    <th>EUR</th>
                    <th>USD</th>
                </tr>
                </thead>
                <tbody>{conversionTableEuroToUSD}</tbody>
            </table>
            </div>
            <div className={styles.conversion}>
            <h2>Conversion Table USD vers EUR</h2>
            <table>
                <thead>
                <tr>
                    <th>USD</th>
                    <th>EUR</th>
                </tr>
                </thead>
                <tbody>{conversionTableUSDToEuro}</tbody>
            </table>
            </div>
            
        </div>

      </div>
    );
  }
  
  
export default Change;