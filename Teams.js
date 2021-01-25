import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Developer from './developer';
import Marketing from './marketing';
import Operations from './operations';
import Youngleaders from './youngleaders';
import Management from './management';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Tabs style={{position:"sticky"}} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Developer" {...a11yProps(0)} />
          <Tab label="Marketing" {...a11yProps(1)} />
          <Tab label="Operations" {...a11yProps(2)} />
          <Tab label="young Leaders" {...a11yProps(3)} />
          <Tab label="Management" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        <Developer name="0 Dev"  imagePath={require('./Balram.jpg')}/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        <Marketing name="1 Dev"  imagePath={require('./market.jpg')}/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        <Operations name="2 Dev"  imagePath={require('./operation.jpg')}/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Youngleaders name="3 Dev"  imagePath={require('./photo.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Operations name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Operations name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Operations name="3 Dev"  imagePath={require('./photo.jpg')}/>
        <Operations name="3 Dev"  imagePath={require('./photo.jpg')}/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        <Management name="4 Dev"  imagePath={require('./management.jpg')}/>
        </div>
      </TabPanel>
    </div>
  );
}

