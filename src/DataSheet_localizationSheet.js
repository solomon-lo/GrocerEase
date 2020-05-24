import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_55566";
    item['en'] = "Continue";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_885201";
    item['en'] = "Welcome";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_field_378871";
    item['en'] = "Username";
    
    item = {};
    this.items.push(item);
    item['key'] = "chatroomitem_text_1022957";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "chatroomitem_text_699949";
    item['en'] = "(chatroom name)";
    
    item = {};
    this.items.push(item);
    item['key'] = "addchatroomcomp_text_689762";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "addchatroomcomp_text_1046369";
    item['en'] = "Create a Shopper Post";
    
    item = {};
    this.items.push(item);
    item['key'] = "addchatroomcomp_field_1030274";
    item['en'] = "Chatroom name";
    
    item = {};
    this.items.push(item);
    item['key'] = "addchatroomcomp_button_174973";
    item['en'] = "Create Post";
    
    item = {};
    this.items.push(item);
    item['key'] = "chatitem_text_164417";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "chatitem_text_744366";
    item['en'] = "(Sender)";
    
    item = {};
    this.items.push(item);
    item['key'] = "chatitem_textcopy_801576";
    item['en'] = "(Message)";
    
    item = {};
    this.items.push(item);
    item['key'] = "chatitem_textcopy2_209838";
    item['en'] = "(Time)";
    
    item = {};
    this.items.push(item);
    item['key'] = "sendmessage_button_939786";
    item['en'] = "Send";
    
    item = {};
    this.items.push(item);
    item['key'] = "shopper_name_field";
    item['en'] = "Shopper Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "addchatroomcomp_field_151173";
    item['en'] = "City";
    
    item = {};
    this.items.push(item);
    item['key'] = "shopper_city_field";
    item['en'] = "City";
    
    item = {};
    this.items.push(item);
    item['key'] = "addchatroomcomp_field2_470536";
    item['en'] = "Store";
    
    item = {};
    this.items.push(item);
    item['key'] = "shopper_store_field";
    item['en'] = "Store";
    
    item = {};
    this.items.push(item);
    item['key'] = "addchatroomcomp_field3_27034";
    item['en'] = "Time";
    
    item = {};
    this.items.push(item);
    item['key'] = "shopper_time_field";
    item['en'] = "Time";
    
    item = {};
    this.items.push(item);
    item['key'] = "starratings_text_247528";
    item['en'] = "Tell Us How Your Shopper Was";
    
    item = {};
    this.items.push(item);
    item['key'] = "shoppingoptions_field_109207";
    item['en'] = "Search";
    
    item = {};
    this.items.push(item);
    item['key'] = "shoppingoptions_validator_173954";
    item['en'] = " ";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
