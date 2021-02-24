module.exports = {
    getFilteredHira: (req, res) => {
        let query = "SELECT * from Hiras WHERE  `name` LIKE '%"+req.query.name+"%' AND `projectNumber` LIKE '%"+req.query.projectNumber+"%' AND `area` LIKE '%"+req.query.area+"%'";
        console.log(query);
        
        // execute query
        dbquery.query(query, (err, result) => {
          
           let hiraResultRawString = result;
           hiraResultRawString = JSON.stringify(hiraResultRawString);
            if (err) {
                res.redirect('/');
            }

            console.log(result)
            res.render('hira', {
                par: req.query
                
                ,hiraResult: result,
                hiraResultRawString: hiraResultRawString,
                title: "View Hira records | Kirex"
            });
        });
    },
};