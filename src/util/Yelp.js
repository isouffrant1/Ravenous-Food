const apiKey = 'EfZ113Y5on-RaMrD_Lays0iTgwHShRqv2H4vWmpYxhdmW8MXfF_3LKDZzsxuz6bXxIxOH0QI_vTltA-L2kDbXX2Tb_aG0GAT7ix9aBewXGm2VE9_dWYJaD3R-pa9Y3Yx';
const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };

  export default Yelp;
