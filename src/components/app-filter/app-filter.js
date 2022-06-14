import './app-filter.css';

const AppFilter = () => {
    return (
       <div className="btn-group">
           <button
               className="btn btn-light"
               type="Button">
                  All employees
           </button>
           <button
               className="btn btn-outline-light"
               type="Button">
                 For raise
           </button>
           <button
               className="btn btn-outline-light"
               type="Button">
                  Salary more than 1000$
           </button>
       </div>

    );
}

export default AppFilter;