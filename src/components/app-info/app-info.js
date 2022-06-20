import './app-info.css';
import {Component} from "react";

const translations = {
    'en': {
        'header': 'Employee accounting for company ZS Solutions',
        'employeesN': 'Total number of employees: ',
        'overtime': 'Overtime will receive: '
    },
    'rs': {
        'header': 'Учет сотрудников в компании ZS Solutions',
        'employeesN': 'Общее число сотрудников: ',
        'overtime': 'Премию получат: '
    },
    'sp': {
        'header': 'Contabilidad de empleados en ZS Solutions',
        'employeesN': 'Número total de empleados: ',
        'overtime': 'El premio se otorgará a: '
    }

}

const getTranslation = (lang, text) => {
    return translations[lang][text];
}

class AppInfo extends Component{

    render() {
        const {increased, numberOfEmployees, lang} = this.props
        return (
            <div className="app-info">
                <h1>{getTranslation(lang, 'header')}</h1>
                <h2>{getTranslation(lang, 'employeesN')}{numberOfEmployees}</h2>
                <h2>{getTranslation(lang, 'overtime')}{increased}</h2>
            </div>
        );
    }
}
export default AppInfo;