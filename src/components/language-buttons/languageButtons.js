import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Component} from "react";

const translations = {
    'en': {
        'language': 'Language',
        'en': "English",
        'rs': "Russian",
        'sp': "Spanish"
    },
    'rs': {
        'language': 'Язык',
        'en': "Английский",
        'rs': "Русский",
        'sp': "Испанский"
    },
    'sp': {
        'language': 'Idioma',
        'en': "Inglés",
        'rs': "Ruso",
        'sp': "Español"
    }

}

const getTranslation = (lang, text) => {
    return translations[lang][text];
}

class RowRadioButtonsGroup extends Component{

    onChange = (e) => {
        this.setState({
            lang: e.target.value
        })
        this.props.changeLangHandler(e.target.value);
    }

    render() {
        const {lang} = this.props
        return (
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">{getTranslation(lang, 'language')}</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue={'en'}
                >
                    <FormControlLabel value="en" control={<Radio onChange={this.onChange}/>} label="English"/>
                    <FormControlLabel value="rs" control={<Radio onChange={this.onChange}/>} label="Русский"/>
                    <FormControlLabel value="sp" control={<Radio onChange={this.onChange}/>} label="Idioma"/>
                </RadioGroup>
            </FormControl>
        );
    }
}

export default RowRadioButtonsGroup;
