var expects = require('chai').expect;
var app = require('../app');
var request = require('supertest');
var userInfo = {username:"Kidmeeno" , password:"12345"}
describe('validate user login', ()=>{
    it('will return login success and token', (done)=>{
        request(app)
        .post('/users/login')
        .set("Content-Type", "application/json")
        .send(userInfo)
        .end((err, res)=>{
            if(!err){
            expects(200)
            expects(res.body).to.have.property('message')
            expects(res.body).to.have.property('data')
            }else{
                done(err)
            }
        })
        done()
    })
})


describe('comfirm a successful thumbnail generation', (done)=>{
    var token;
    beforeEach('check if access token is valid', (done)=>{
        request(app)
        .post('/users/login')
        .send(userInfo)
        .set("Content-Type", "application/json")
        .end((err, res)=>{
            if (err) done(err);
            expects(200)
            expects(res.body).to.have.property('message');
            token=res.body.data
            done()
        })
    })

    
    it('comfirm that thumbnail is working ',function(done){
        request(app)
        .get('/users/thumbnail')
        .set("Content-Type", "application/json")
        .set("usertoken", "bearer "+token)
        .send({source:'userfile/doggy.png'})
        .end(function(err, res) {
            if (err) done(err);
            expects(200)
            expects(res.body).to.have.property('file')

            done();
        });
    });
    
})





