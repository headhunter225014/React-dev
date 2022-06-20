import '../search-panel/search-panel.css';
import {Component} from "react";
const translations = {
    'en': {
        'findEmp': 'Find an employee',

    },
    'rs': {
        'findEmp': 'Найти сотрудника',

    },
    'sp': {
        'findEmp': 'Encontrar un empleado',

    }
}

const getTranslation = (lang, text) => {
    return translations[lang][text];
}

class SearchPanel extends Component{

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }
    render() {
        const {lang} = this.props
        return (
            <input
                type='text'
                className='form-control search-input'
                placeholder={getTranslation(lang, 'findEmp')}
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;