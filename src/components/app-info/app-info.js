import './app-info.css';

const AppInfo = ({numberOfEmployees, increased}) => {
    return (
     <div className="app-info">
         <h1>Employee accounting for company ZS Solutions</h1>
         <h2>Total number of employees: {numberOfEmployees}</h2>
         <h2>Overtime will receive: {increased}</h2>
     </div>
    );
}

export default AppInfo;