import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_shoppers extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Firebase (Cloud Firestore)'.
    
    item = {};
    this.items.push(item);
    item['numReviews'] = "";
    item['area'] = "90024";
    item['time'] = "Any";
    item['document_key'] = "5DgI5s7slqzzoRtHEq6j";
    item['gmailUniqueUserID'] = "";
    item['numStars'] = "";
    item['name'] = "Bob";
    item['store'] = "Costco";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "Jh3rdnTAjK46UBWgZjYK";
    item['store'] = "Walmart";
    item['area'] = "SF";
    item['name'] = "Bob";
    item['gmailUniqueUserID'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "cnZ6OQghY0wHCTTArWZB";
    item['store'] = "Walmart";
    item['area'] = "la";
    item['name'] = "Bob1";
    item['time'] = "3:00";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "pozFh84CwopNJ6seJkPI";
    item['store'] = "Walmart";
    item['area'] = "LA";
    item['name'] = "Hello";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "BAlA9WZzqAK3bEGYlodf";
    item['store'] = "Walmart";
    item['area'] = "LA";
    item['name'] = "Jim";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "CywLCZbYXZFwdqAW6fq9";
    item['store'] = "San Diego";
    item['area'] = "LA";
    item['name'] = "Jim";
    item['time'] = "4:00";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "O9qG3Ssgb3g06FfVWjUC";
    item['store'] = "Walmart";
    item['area'] = "LA";
    item['name'] = "Jim";
    item['time'] = "2:00 PM";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "fitbQ8jJ1jkz59soKbxS";
    item['store'] = "Costco";
    item['area'] = "LA";
    item['name'] = "Jim2";
    item['time'] = "2:30 pm";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "4pqRL5152BZOaLCFuIFa";
    item['store'] = "Target";
    item['area'] = "San Francisco";
    item['name'] = "Sam";
    item['time'] = "3:00 Pm";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "AbSXKfKh27t5eltpSAmh";
    item['store'] = "Target";
    item['area'] = "San Francisco";
    item['name'] = "Sam";
    item['time'] = "3:00 pm";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "EX3JK4ZIiZzTay9lFqIh";
    item['store'] = "Target ";
    item['area'] = "San Francisco";
    item['name'] = "Sam";
    item['time'] = "3:00 PM";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "DMX9R3JT2DPlr5iMkMaR";
    item['store'] = "Target";
    item['area'] = "Los Angeles";
    item['name'] = "Solomon";
    item['time'] = "3:00 pm Saturday";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['document_key'] = "rAaZS3g60FTbE6vaXn87";
    item['store'] = "Target";
    item['area'] = "Los Angeles";
    item['name'] = "Solomon";
    item['time'] = "10:00 am Saturday";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['comments'] = "unknown_comments";
    item['area'] = "unknown_area";
    item['time'] = "unknown_time";
    item['pricing'] = "unknown_pricing";
    item['rating'] = "-1";
    item['document_key'] = "default_template";
    item['name'] = "unknown_name";
    item['store'] = "unknown_store";
    item.key = key++;
  }

  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  
  addItem(item, options) {
    console.log("add to firebase: ", item);
      
    let isCollectionGroup = options.servicePath.startsWith("group:");
    if (isCollectionGroup) {
      console.log("unable to add to collection group: ", options.servicePath.substring(6));
      return;
    }
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
  
    let addItemPromise;
    if (item.document_key && item.document_key.length > 0) {
      let parsedItem = (({ document_key, ...item }) => (item))( item );
      addItemPromise = collection.doc(item.document_key).set(parsedItem);
    } else {
      addItemPromise = collection.add(item);
    }
    addItemPromise
      .then((docRef) => {
        var addedKey="";
        if (docRef) {
          console.log("Firebase document added with id: ", docRef.id);
          addedKey=docRef.id;
          item.document_key = docRef.id;
          item.document_ref = docRef;
        } else {
          console.log("Firebase document added with id: ", item.document_key);
          addedKey=item.document_key;
        }   
        if (this.onLastAddedDocumentKeyChanged != null) {
          this.onLastAddedDocumentKeyChanged(addedKey);
        }
        //super.addItem(item, options);
      
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        this._fetchComplete(error, options);
      });
  }
  
  removeItem(item, options) {
    //super.removeItem(item, options);
    
    console.log("delete from firebase: ", item);
  
    //const db = this.firebase.firestore();
    //const collection = db.collection(options.servicePath);
    //const docRef = collection.doc(item.document_key);
    const docRef = item.document_ref;
    
    docRef.delete()
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  
  replaceItemByRowIndex(idx, item, options) {
    //super.replaceItemByRowIndex(idx, item, options);
    
    console.log("update in firebase: ", item);
  
    //const db = this.firebase.firestore();
    //const collection = db.collection(options.servicePath);
    //const docRef = collection.doc(item.document_key);
    const docRef = item.document_ref;
    
    docRef.update((({ key, document_ref, document_key, ...item }) => (item))( item ))
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  

}
