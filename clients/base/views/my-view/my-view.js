({
    className: 'tcenter',
    loadData: function (options) {
        //populate your data
        myData=new Object();
        myData.myProperty = "My Value2";
	myData.heading = "Opportunity Reports";
        this.myData = myData;
	console.log(this);
	app.api.call('get',App.api.buildURL('customApi/getClosedWon'), null, {
           success: _.bind(function(response) {
		myDat=new Object();
		myDat.string="Looping";
		console.log(this);
		myData.arr=response;
		myData.heading = "Opportunity Reportses";
	  	this.myData = myData;
               for (var index in response) {
		   console.log(response[index]);
               }
           },this),
           error: function() {
               console.log("could not get data from " + apiUrl);
           }
       });
	
        /*
            //alternatively, you can pass in a JSON array to populate your data
            myData = $.parseJSON( '{"myData":{"myProperty":"My Value"}}' );
            _.extend(this, myData);
        */
        //reset flags on reload
        if (options && _.isFunction(options.complete)) {
            options.complete();
        }
        this.render();
    }
})
