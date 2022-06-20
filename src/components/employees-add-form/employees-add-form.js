import { Component } from 'react';

//import './employees-add-form.css';
import './employee-add-form.scss';

const translations = {
    'en': {
        'add': 'Add new employee',
        'name': "Employee's name?",
        'salary': "Salary in $?",
        'but': "Add"
    },
    'rs': {
        'add': 'Добавить нового сотрудника',
        'name': "Имя сотрудника",
        'salary': "З/П в $",
        'but': "Добавить"
    },
    'sp': {
        'add': 'Agregar nuevo empleado',
        'name': "¿Nombre del empleado?",
        'salary': "Salario en $?",
        'but': "Agregar"
    }

}

const getTranslation = (lang, text) => {
    return translations[lang][text];
}

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;
        const isEnabled = name.length >= 2 && salary > 0
        const {lang} = this.props

        return (
            <div className="app-add-form">
                <h3>{getTranslation(lang, 'add')}</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder={getTranslation(lang, 'name')}
                           name="name"
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder={getTranslation(lang, 'salary')}
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light"
                            disabled={!isEnabled}>{getTranslation(lang, 'add')}</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;