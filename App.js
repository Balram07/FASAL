import React from 'react';
//import {Typography, Container} from '@material-ui/core';
import Teams from './Teams';
import 'fontsource-roboto';
import Footer from './SignedoutNav';
import Buttonbar from './ButtonBar';
function App()
{
	
	return(
	<div>
		<Footer />
		<h1>Meet our Team</h1>
		<Teams />
		 
	</div>
	);
}
export default App;