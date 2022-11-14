import throttle from 'lodash.throttle';

const LOCAL_KEY = "feedback-form-state"; 
let form = document.querySelector('.feedback-form');
// змінна визначена як let тому що очищається у 43 рядку


let userData = {};
 
form.addEventListener('input', throttle(onInputValue, 2000));
form.addEventListener('submit', onContactFormSubmit);


function onInputValue(e) {

  const name = e.target.name;
  const value = e.target.value;

  userData[name] = value;

  localStorage.setItem(LOCAL_KEY, JSON.stringify(userData));
}

function fillContactFormElements() {
    const userDataFromLS = JSON.parse(localStorage.getItem(LOCAL_KEY));
    console.log(userDataFromLS);
        // for (const prop in userDataFromLS) {
        //     if (userDataFromLS.hasOwnProperty(prop)) {
        //          console.log(prop);

        //     form.elements[prop].value = userDataFromLS[prop];
        //     }
        // }

        for (let key of form) {
            if (userDataFromLS.hasOwnProperty(key.name)) {
                userData[key.name] = key.value = userDataFromLS[key.name];
            }
          }

    };

fillContactFormElements();

function onContactFormSubmit (event) {

    event.preventDefault();
  
    event.currentTarget.reset();
    form = {};
    userData = {};
    localStorage.removeItem(LOCAL_KEY);
  };
