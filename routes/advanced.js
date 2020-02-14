module.exports = {
    getShopPoi: (req, res) => {
        let query = "SELECT shops.*, (6371000 * acos(cos(radians(pois.lat )) * cos(radians(shops.lat)) * cos(radians(shops.lon) - radians(pois.lon )) + sin(radians(pois.lat )) * sin(radians(shops.lat)))) AS distance FROM shops CROSS JOIN pois WHERE  pois.name like '%"+ req.query.poiName+"%' AND (6371000 * acos(cos(radians(pois.lat)) * cos(radians(shops.lat)) * cos(radians(shops.lon) - radians(pois.lon )) + sin(radians(pois.lat)) * sin(radians(shops.lat)))) < "+req.query.radius+" AND shops.category like '%"+req.query.category+"%'AND shops.name like '%"+req.query.shopName+"%'";

        // execute query
        dbquery.query(query, (err, result) => {
          
           
            if (err) {
                res.redirect('/');
            }

            console.log(result)
            res.render('resultadvanced', {
                par: req.query
                
                ,records: result
            });
        });
    },
};


//SELECT shops.*, (6371000 * acos(cos(radians(pois.lat )) * cos(radians(shops.lat)) * cos(radians(shops.lon) - radians(pois.lon )) + sin(radians(pois.lat )) * sin(radians(shops.lat)))) AS distance FROM shops CROSS JOIN poi WHERE  pois.name like '%Graz%' AND (6371000 * acos(cos(radians(pois.lat)) * cos(radians(shops.lat)) * cos(radians(shops.lon) - radians(poi.lon )) + sin(radians(poi.lat)) * sin(radians(shops.lat)))) < "100" AND shops.type like '%%'AND shops.name like '%%'