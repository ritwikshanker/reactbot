import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {Link} from "react-router-dom";

const Landing = () => (

    <div style={{
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "100px",
        alignItems: "center"
    }}>
        <MaterialIcon icon="call" size='200' color={colorPalette.blue._200}>Talk to a Customer
            Representative</MaterialIcon>
        <Link to={'/search'}><MaterialIcon icon="search" size='200'>Search Medicine</MaterialIcon></Link>
        <MaterialIcon icon="chat" size='200'> Whatsapp Chat </MaterialIcon>
    </div>
);

export default Landing;
