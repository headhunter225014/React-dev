import '../search-panel/search-panel.css';
import {Component} from "react";

class SearchPanel extends Component{
    render() {
        return (
            <input
                type='text'
                className='form-control search-input'
                placeholder="Find an employee"/>
        )
    }
}

export default SearchPanel;