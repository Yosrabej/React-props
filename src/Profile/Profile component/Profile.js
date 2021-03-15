import React from "react";
import PropTypes from "prop-types";
function Data(props) {
    return (
        <div>
            <h1 style={{ color: "blueviolet", textAlign: "center" }}>
                FullName: {props.name} <br /> Bio: {props.bio} <br />
                Profession:
                {props.profession}
            </h1>
            {props.children}

            <button
                style={{
                    backgroundColor: "yellow",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "30%",
                }}
                onClick={() => props.handleName(props.name)}
            >
                ClickHere
            </button>
        </div>
    );
}
Data.defaultProps = {
    name: "default",
    Bio: "Bio is missing",
    Profession: "Enter your profession",
};
Data.propTypes = {
    handleName: PropTypes.func,
    name: PropTypes.string,
    Bio: PropTypes.string,
    Profession: PropTypes.string,
};
export default Data;
