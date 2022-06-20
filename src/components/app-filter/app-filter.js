import './app-filter.css';
import {Component} from "react";

const translations = {
    'en': {
        'all': "All employees",
        'rise': "For raise",
        'more': "Salary more than 1000$"
    },
    'rs': {
        'all': "Все сотрудники",
        'rise': "На повышение",
        'more': "З/П Больше чем 1000$"
    },
    'sp': {
        'all': "Todos los empleados",
        'rise': "Para aumentar",
        'more': "Salario mas de 1000$"
    }

}

const getTranslation = (lang, text) => {
    return translations[lang][text];
}

class AppFilter extends Component{
    buttonsData = [
        {name: 'all', label: "all"},
        {name: 'rise', label: "For raise"},
        {name: 'moreThan1000', label: "Salary more than 1000$"}
    ]

    render() {
        const {lang} = this.props
        {
            let count = 0
            const buttons = this.buttonsData.map(({name, label}) => {
                const active = this.props.filter === name;
                const clazz = active ? 'btn-light' : 'btn-outline-light'
                let text = ''
                if (count === 0) {
                     text = 'all'
                } else if (count === 1){
                    text = 'rise'
                } else if (count ===2 ) {
                    text ='more'
                }
                count++
                return (
                    <button
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={() => this.props.onFilterSelect(name)}>
                        {getTranslation(lang, text)}
                    </button>
                )
            })

            return (
                <div className="btn-group">
                    {buttons}
                </div>
            )
    }
}

}

export default AppFilter;