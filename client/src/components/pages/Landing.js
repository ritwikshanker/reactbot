import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const Landing = () => (

    <div style={{
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "100px",
        alignItems: "center"
    }}>
        <MaterialIcon icon="call" size='200' color={colorPalette.blue._200}/>
        <MaterialIcon icon="search" size='200'/>
        <MaterialIcon icon="chat" size='200'/>
    </div>
);

export default Landing;
