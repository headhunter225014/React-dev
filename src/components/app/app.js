import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import RowRadioButtonsGroup from "../language-buttons/languageButtons";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Trystyn', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Damir.', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Amara.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all',
            lang: 'en',
        }
        this.maxId = 4;
    }


    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    changeLangHandler = (lang) => {
        this.setState({ lang: lang });
        console.log(lang)
    }


    onToggleProp = (id, prop) => {
       this.setState(({data}) => ({
           data: data.map(item => {
               if (item.id === id) {
                   return {...item, [prop]: !item[prop]}
               }
               return item
           })
       }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }



    render() {
        const {data, term, filter, lang} = this.state
        const increased = this.state.data.filter(item => item.increase).length
        const numberOfEmployees = this.state.data.length
        const visibleData = this.filterPost( this.searchEmp(data, term), filter)

        return (
            <div className="app">
                <RowRadioButtonsGroup
                lang={lang}
                changeLangHandler={this.changeLangHandler}></RowRadioButtonsGroup>
                <AppInfo
                numberOfEmployees={numberOfEmployees}
                increased={increased}
                lang={lang}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}
                    lang={lang}/>
                    <AppFilter filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    lang={lang}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}
                lang={lang}/>
            </div>
        );
    }
}

export default App;