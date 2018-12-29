//function called on the load of a page
function startMain() 
{
    console.log("in start function");
    console.log("ajax get pareture.json to check CORS on S3 bucket works though not actually using on the front-end as yet");
    $.ajax
    ({
        dataType: "json",
        url: "https://pareture.xyz/json/pareture.json",
        success: function(data) 
        {
            console.log("log json response data on success");
            console.log(data);
        }
    });

    console.log("log viewport dimensions");
    console.log("px width");
    console.log(window.innerWidth);
    console.log("px height");
    console.log(window.innerHeight);
    customPageArrangement();
}

//calculate the amount of brs to add to the bottom of main area depending on page size
function customPageArrangement()
{
    var viewportHeight = window.innerHeight;
    var pixelsGreaterThanTrigger = 0;
    var breaklineMultiplier = 0;
    var i=0;
    var htmlString="";

    //if less than 1024 pixels height then leave no content appended
    //else for every 25 pixels greater then append 1 br +1
    //if 100 then 0
    //if 1025 then 1 +1
    //if 1050 then 2 +1
    //if 1075 then 3 +1
    //etc..
    if (viewportHeight <= 1024)
    {
        //do nothing
        console.log("viewport isn't tall enough for any manipulation");  
        $('#placeToAppend').html("");
    }
    else
    {
        pixelsGreaterThanTrigger = viewportHeight - 1024;
        console.log("pixels greater than trigger:");
        console.log(pixelsGreaterThanTrigger);
        breakLineMultiplier = Math.round(pixelsGreaterThanTrigger/25) +1;
        console.log("breakline multiplier:");
        console.log(breakLineMultiplier);

        for(i=0;i<breakLineMultiplier;i++)
        {
            htmlString=htmlString+"<br>";
            //added some additional trial and error addition of breaks to support phone screens which render pixels diffirently to how I understood so they have very long screens
            if(i%3==0)
            {
                htmlString=htmlString+"<br>";
            }
        }
        $('#placeToAppend').html(htmlString);
    }
}

$( window ).resize(function() 
{
    customPageArrangement();
});

    