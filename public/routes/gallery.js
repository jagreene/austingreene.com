var fs=require('fs');

module.exports = function(){
    return {
        getGallery: function(req, res){
            console.log("Going to projects page")
            res.render('gallery', {});
        },
        getProjects: function(req, res){
            var dir='./projects/';
            var projects=[];

            fs.readdir(dir,function(err,files){
                if (err) throw err;
                console.log("files:",files);
                files.forEach(function(file){
                    projects.push(JSON.parse(fs.readFileSync(dir+file,'utf-8')));
                });
                console.log("Projects:", projects);
                res.json({projects:projects});
            });
        }
    }
}
