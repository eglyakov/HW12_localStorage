function Contacts() {

    let inputName = document.querySelector('input[name="name"]'),
        inputPhone = document.querySelector('input[name="phone"]'),
        inputEmail = document.querySelector('input[name="email"]'),
        buttAdd = document.querySelector('.contacts_add'),
        buttClear = document.querySelector('.contacts_clear'),
        contactsData = [];

    function createContact(input1, input2, input3) {
        let elemCont = {
            ul: document.querySelector('ul'),
            li: document.createElement('li'),
            contName: document.createElement('div'),
            contPhone: document.createElement('div'),
            contEmail: document.createElement('div'),
            buttDel: document.createElement('button'),
        };

        elemCont.li.classList.add('contacts_item');
        elemCont.contName.classList.add('contacts_name');
        elemCont.contPhone.classList.add('contacts_phone');
        elemCont.contEmail.classList.add('contacts_email');
        elemCont.buttDel.classList.add('button_del');

        elemCont.contName.innerHTML = input1;
        elemCont.contPhone.innerHTML = input2;
        elemCont.contEmail.innerHTML = input3;
        elemCont.buttDel.innerHTML = 'X';

        elemCont.ul.appendChild(elemCont.li);
        elemCont.li.appendChild(elemCont.contName);
        elemCont.li.appendChild(elemCont.contPhone);
        elemCont.li.appendChild(elemCont.contEmail);
        elemCont.li.appendChild(elemCont.buttDel);


        elemCont.buttDel.addEventListener('click', function() {
            this.closest('li').remove();
        });
    };

    const contactsUpdate = function() {
        let localContactsData = localStorage.getItem('contactsData');
        if(localContactsData.length > 0) contactsData = JSON.parse(localContactsData);

        let contactList = document.querySelector('.contacts_list ul');
        contactList.innerHTML = '';

        createContact(inputName.value, inputPhone.value, inputEmail.value);
    };


    function addContact() {
        let contact = {
            name: inputName.value,
            phone: inputPhone.value,
            email: inputEmail.value
        }

        contactsData.push(contact);
        localStorage.setItem('contactsData', JSON.stringify(contactsData));

        contactsUpdate();
    };

    function clearInput() {
        inputName.value = '';
        inputPhone.value = '';
        inputEmail.value = '';
    };


    buttAdd.addEventListener('click', function() {
        if(inputName.value != '' && inputPhone.value != '' && inputEmail.value != '') {
            addContact();
            clearInput();
        } else {
            alert('Вы ввели не все данные о контакте!');
        }
    });

    buttClear.addEventListener('click', function() {
        let ul = document.querySelector('ul');
        ul.innerHTML = '';
    });

};

window.addEventListener('load', Contacts);



(_ => {

window.addEventListener('load', _ => {

    const authInfo = {
        login: 'admin',
        password: 'nimda'
    };

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }

    const auth = function() {
        let form = this.closest('.form'),
            inputLogin = form.querySelector('input[name="login"]').value,
            inputPass = form.querySelector('input[name="password"]').value;

        if (inputLogin === authInfo.login &&
            inputPass === authInfo.password) {
                document.cookie = 'auth=true';
                document.cookie = 'authLogin=' + inputLogin;
                window.location = '/app.html';
        } else alert('Login or password is incorected')
    };

    const logout = function() {
        if (!getCookie('auth') || !getCookie('authLogin')) return;

        document.cookie = 'auth=; max-age=-1';
        document.cookie = 'authLogin=; max-age=-1';

        if (!getCookie('auth')) window.location.reload();
    };

    if (window.location.pathname == '/app.html' && !getCookie('auth')) window.location = '/index.html';
    if (window.location.pathname == '/index.html' && getCookie('auth') === 'true') window.location = '/app.html';

    let buttonSignin = document.querySelector('.form .signin');
        buttonLogout = document.querySelector('.contacts_form .contacts_logout')

    if (buttonSignin) buttonSignin.addEventListener('click', auth);
    if (buttonSignin) buttonSignin.addEventListener('click', logout);


    /* sesionStorage & localStorage
        setItem()
        getItem()
        removeItem()
        clear()
        length
    */
    
    // window.sessionStorage.setItem('user', 'Bob');
    // window.localStorage.setItem('user', 'Alex');

    // console.log(window.localStorage.getItem('user'));
    // console.log(window.sessionStorage.getItem('user'));

    // window.sessionStorage.removeItem('user');

    // window.sessionStorage.clear();
    // window.localStorage.clear();

    // window.sessionStorage.setItem('test', '1');
    // window.sessionStorage.setItem('test2', '2');

    // window.localStorage.setItem('test', '1');
    // window.localStorage.setItem('test2', '2');
    // window.localStorage.setItem('test3', '3');

    // console.log(window.localStorage.length);
    // console.log(window.sessionStorage.length);

    // let keys = Object.keys(localStorage);
    // for(let key of keys) {
    //     console.log(`${key}: ${localStorage.getItem(key)}`)
    // }

    // console.log(localStorage);
    // console.log(sessionStorage);


});

})();
