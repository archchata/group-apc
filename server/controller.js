const url =
  'http://image-server-prod.eba-jqccpzay.us-west-2.elasticbeanstalk.com/images';

const controller = {
  // add a method to get the first 5 images from the feed and return them (imagine it is a database and not an ajax call we could make from the frontend)

  getImages: (req, res, next)=>{
    fetch(url)
      .then((res)=>res.json())
      .then((arr)=>{
        res.locals.imageUrls = arr.slice(0,5);
        return next();
      })
      .catch((err)=>{
        next({
          log: `error caught in getImages middleware ${err}`,
          status: 500,
          message: {err: `An error occured getting images `}
        })
      })     
  }
};

// Export the controller object
module.exports=controller;