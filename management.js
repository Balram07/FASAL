import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
export default function management(props)
{
	
	return(
	<div>
           <img style={{width:"240px"}}  alt="Balram" src={props.imagePath}/>
            <p>{props.name}</p>
	</div>
	);
}
