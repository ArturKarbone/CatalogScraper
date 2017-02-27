var companyFinder = '.card-left-side > h1';
var titleFinder = '.descript-wrap > h2';
var descriptionFinder = '.descript-wrap > p';
var keywords = '.descript-wrap > i';
var contactInfo = '.info > div';
// email doesnt work yet
var email = "document-location-href";

var tagArr = [
  companyFinder,
  titleFinder,
  descriptionFinder,
  keywords,
  contactInfo,
  email
];
// these are property names of an object to be returned.
// should correspond to search tags in *** tagArr **
var returnPropArr = [
  'companyName',
  'productTitle',
  'productDescription',
  'keywords',
    [
      'contactName',
      'contactPostition',
      'contactPhone'
    ],
  'email'
];

var classToSearch = {
  itemToSearch: tagArr,
  propToReturn: returnPropArr
};

module.exports = {
  classToSearch
}
