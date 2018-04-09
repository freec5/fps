const express = require('express');
const app = express();



app.get('/', (req, res)	=> {
	res.send('yeoooerrr');
});


app.listen(9001, () => { 
	//console.log( " We Are Here " );
});

