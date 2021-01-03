import React from 'react';

import { dateFormat, dateBuilder, formatAMPM } from '../utils/dateFormat';

const TempMinMax = (props) => {
	//console.log(props.main)
    return(
          <table><tbody>
			<tr>
				<td>Min Temp <br />
					{Math.round(props.main.temp_min - 273.15) + '°c'} 
				</td>	
				<td>Max Temp <br />
					{Math.round(props.main.temp_max - 273.15) + '°c'} 
				</td>
				<td>Feels Like <br />
					{Math.round(props.main.feels_like - 273.15) + '°c'} 
				</td>
			</tr>
			<tr>
				<td>Wind Speed <br />
					{props.wind.speed} 
				</td>	
				<td>Wind Deg <br />
					{props.wind.deg} 
				</td>
				<td>visibility<br />
					4000
				</td>
			</tr>
			<tr>
				<td>Sunrise <br />
					{formatAMPM(new Date(props.sys.sunrise))} 
				</td>	
				<td>Sunset <br />
					{formatAMPM(new Date(props.sys.sunset))} 
				</td>
				<td>&nbsp;</td>
			</tr>
		  </tbody></table>
    );
}
export default TempMinMax;