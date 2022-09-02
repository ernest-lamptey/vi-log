import React from 'react'

const body = {
    padding: "10px",
    position: "fixed",
    width: "25%",
    height: "50px",
    fontSize: "18px",
    display: "flex",
    backgrounColor: "rgba(41,0,0,1)",
    alignItems: "center",
    gap: "15px",
}



const image = {
    height: "35px"
}
const SearchResult = (props) => {
    return (
        <div style={body}>
            <img style={image} src="https://vilog-media.s3.amazonaws.com/default_user_photo.png" alt="" />
            <div>{props.f_name} {props.l_name} - {props.department}</div>
        </div>
    );
};

export default SearchResult;