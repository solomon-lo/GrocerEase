import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_faqDataSheet extends DataSheetBase {

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
    item['email'] = "lo.solomon@outlook.com";
    item['document_key'] = "1HB7ejt2sARMOkNHdw90";
    item['question'] = "How can I submit my own post about my next shopping trip?";
    item['name'] = "Solomon";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['email'] = "shri@";
    item['document_key'] = "3ZrYqIS7MC06MgHE0CQP";
    item['question'] = "two questions or one? quesiton?";
    item['name'] = "shri";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['email'] = "solomon.lo@gmail.com";
    item['document_key'] = "E6j0B8SW8xSY2rxvELm8";
    item['question'] = "How do I access the start screen?";
    item['name'] = "Solomon Lo";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['email'] = "lo.solomon@outlook.com";
    item['document_key'] = "MWXRm2rwjUCqRo0L82yS";
    item['question'] = "How can I submit my own post for shopping?";
    item['name'] = "Solomon";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['email'] = "shri@s.com";
    item['document_key'] = "OVxAWsvu0A0mxaPcwv5G";
    item['question'] = "I have no questions.";
    item['name'] = "shri";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['email'] = "lo.solomon@outlook.com";
    item['document_key'] = "j1sb4pjPc50Tg9LW8rhH";
    item['question'] = "How do I make a post about my next shopping trip?";
    item['name'] = "Solomon";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['email'] = "me@me.com";
    item['document_key'] = "nmBSlb3WTV5xu2Loj7Pc";
    item['question'] = "hi there? Where can I check if this actually worked?";
    item['name'] = "Mee";
    item['quesiton'] = "hi there? Where can I check if this actually worked?";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['email'] = "fsdfsadf";
    item['document_key'] = "q10o28aidK3sI4QQNQFK";
    item['question'] = "asdfasdf";
    item['name'] = "Ethan";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['email'] = "lo.solomon@outlook.com";
    item['document_key'] = "uQM75CpDqyFk647dAKDt";
    item['question'] = "How do I long on using Google?";
    item['name'] = "Solomon";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['email'] = "";
    item['document_key'] = "yP7Lj3EyeiaeUuHBZtsP";
    item['question'] = "";
    item['name'] = "";
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
          item.document_path = docRef.path;
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
  
    const db = this.firebase.firestore();
    //const collection = db.collection(options.servicePath);
    //const docRef = collection.doc(item.document_key);
    const docRef = db.doc(item.document_path);
  
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
  
    const db = this.firebase.firestore();
    //const collection = db.collection(options.servicePath);
    //const docRef = collection.doc(item.document_key);
    const docRef = db.doc(item.document_path);
      
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
