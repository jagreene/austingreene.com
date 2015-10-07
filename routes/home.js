var declarations = require("../declarations");

module.exports = function (){
    return {
        getHome: function(req, res){
            console.log("Going to login page")
            res.render('home', {});
        },
        getDeclaration: function(req, res){
            var declaration = declarations[Math.floor(Math.random() * declarations.length)];
            console.log(declaration);
            res.json(declaration)
        },
    }
}
