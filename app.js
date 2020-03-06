const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
//const mongoose = require("mongoose");
//configs
//body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
    //handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
//public
app.use(express.static(path.join(__dirname, "public")))
    //rotas
app.get("/", function(req, res) {
    res.render('admin/index')
})

app.get("/sobre", function(req, res) {
    res.render("admin/sobre")
})
app.get("/campeonatos", function(req, res) {
    res.render("admin/campeonatos")
})
app.get("/campeonatos/futsal",function(req,res){
    res.render("admin/futsal")
})
app.get("/campeonatos/volei",function(req,res){
    res.render("admin/campvol")
})
app.get("/campeonatos/hand",function(req,res){
    res.render("admin/camphand")
})
app.get("/viagens", function(req, res) {
    res.render('admin/viagens')
})
app.get("/historia", function(req, res) {
    res.render('admin/historia')
})
app.get("/localizacao", function(req, res) {
        res.render("admin/localizacao")
    })
    //outros
const PORT = 8081
app.listen(PORT, function() {
    console.log("Servidor Rodando")
})
















/*const express = require("express");
const app = express();






app.get("/",function(req,res){
    res.sendFile(__dirname+"/html/index.html")
})

app.get("/sobre", function(req,res){
    res.send("Minha pag Sobre")
})
app.get("/regras", function(req,res){
    res.send("Bem vindo as regras")
})
app.get('/ola/:nome/:profissao/:cor',function(req,res){
    res.send("Ola "+ req.params.nome+ "  Seu cargo e: "+ req.params.profissao)
    
})





app.listen(8081,function(){
    console.log("Rodando")
});*/