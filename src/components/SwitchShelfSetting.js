import React from 'react'
import PropTypes from 'prop-types'

function SwitchShelfSetting(props) {
    const { currentShelf, onUpdateShelf } = props;
    return (
        <select value={currentShelf} onChange={(e) => onUpdateShelf(e.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    );
}

SwitchShelfSetting.propTypes = {
    currentShelf: PropTypes.string.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
}

export default SwitchShelfSetting;