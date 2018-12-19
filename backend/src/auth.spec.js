const fetch = require('isomorphic-fetch');

//const url = path => `http://localhost:3000${path}`
const url = path => `https://youyiwei-web-ic18.herokuapp.com${path}`

describe('validate POST /login', () => {
    it('POST /login log in user', (done) => {
        fetch(url('/login'), {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: 'realUser', password: '123456'})
        }).then(r => r.json()).then(res => {
            expect(res.username == 'realUser' && res.result == 'success').toBe(true);
            done();
        }).catch((err) => console.log(err));
    });
});

describe('validate POST /register', () => {
    it('POST /register register new user', (done) => {
        fetch(url('/register'), {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: 'newUser',
                emailAddress: 'newUser@gmail.com',
                dateOfBirth:'2018-11-11',
                zipcode: '12345',
                password: '123456'
            })
        }).then(r => r.json()).then(res => {
            expect(res['result']).toBe('success');
            done()
        })
    });
});

describe('validate PUT /logout', () => {

    var cookie
    //login
    beforeEach((done) => {
        fetch(url('/login'), {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: 'realUser', password: '123456'})
        }).then(r => r.json()).then((res) => {
            cookie = 'sid=' + res['sid'];
            done();
        });
    });

    it('PUT /logout log out current logged in user', (done) => {
        console.log(cookie)
        fetch(url('/logout'), {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', Cookie: cookie}
        }).then(r => r.json()).then(res => {
            expect(res['result']).toBe('OK');
            done()
        })
    })
});
