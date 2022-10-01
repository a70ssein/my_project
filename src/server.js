











const path = require('path');
const express = require('express');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use (express.static(publicDirectoryPath));
app.set('view engine', 'hbs');




app.get('/', function (req, res) {
  res.render('index', {
    title: "home",
    name: "Hussein"

  });
})


app.get('/index.hbs', function (req, res) {
    res.render('index', {
      title: "home",
      name: "Hussein"
  
    });
  })
  
app.get('/projects.hbs', function (req, res) {
    res.render('projects', {
      title: "projects"
     
  
    });
  })

  
app.get('/about.hbs', function (req, res) {
    res.render('about', {
      title: "about me"
     
  
    });
  })

  app.get('/contact.hbs', function (req, res) {
    res.render('contact', {
      title: "conact me"
     
  
    });
  })

  
  app.get('/services.hbs', function (req, res) {
    res.render('services', {
      title: "services"
     
  
    });
  })



app.listen(3000, () => {
    console.log("the server is running on port 3000");
})
