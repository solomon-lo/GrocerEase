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
    item['en'] = "Display Name";
    
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
    item['en'] = "Enter Shopping Trip Info";
    
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
    
    item = {};
    this.items.push(item);
    item['key'] = "chatroomitem_text2_809202";
    item['en'] = "Store";
    
    item = {};
    this.items.push(item);
    item['key'] = "chatroomitem_text3_643611";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text2_632914";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "shoppingoptions_button_782648";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "shoppingoptions_button_27598";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "shoppingoptions_button_305802";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "shoppingoptions_button_581207";
    item['en'] = "Sweepstakes";
    
    item = {};
    this.items.push(item);
    item['key'] = "chatroomitem_text4_132611";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_text_357370";
    item['en'] = "What is GrocerEase?";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_text2_421950";
    item['en'] = "GrocerEase is a new, innovative platform that addresses one of the main difficulties and inconveniences created by COVID-19. Our app helps connect you to ";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_text2_857454";
    item['en'] = "GrocerEase is a new, innovative platform that addresses one of the main difficulties and inconveniences created by COVID-19. Our app helps connect you to your neighbors and fellow citizens in your area to meet your grocery needs. Also, there’s a weekly competition for finding the best coronavirus-related goods online, where the person who submits the best deal will win a $5 Amazon gift card.";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_textcopy_939571";
    item['en'] = "How can you enter in the best deals sweepstakes?";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_text3_551350";
    item['en'] = "You can go to the sweepstakes form page, where you type in your name, email, and URL of the deal. Then, by clicking submit, you will be entered into the sweepstakes.";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_text4_203916";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_textcopy2_1009273";
    item['en'] = "How do I contact a shopper?";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_textcopy3_790990";
    item['en'] = "You can click on a shopper post in the shopper options screen, which will redirect you to a chatroom that lets you directly communicate with the shopper.";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_textcopy4_56526";
    item['en'] = "More Questions? Contact us below.";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_field_223194";
    item['en'] = "Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_text4_54982";
    item['en'] = "Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_fieldcopy_505483";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_textarea_804992";
    item['en'] = "Enter your question here";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs_button_1031721";
    item['en'] = "Submit";
    
    item = {};
    this.items.push(item);
    item['key'] = "deals_text_874897";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "map_text_744773";
    item['en'] = "Testestse\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "map_text_229925";
    item['en'] = "Testest\n123";
    
    item = {};
    this.items.push(item);
    item['key'] = "scratchaddshopperpost_text_327463";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "scratchaddshopperpost_text_21138";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "scratchaddapost_field_720820";
    item['en'] = "Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "scratchaddapost_field2_623918";
    item['en'] = "Store";
    
    item = {};
    this.items.push(item);
    item['key'] = "scratchaddapost_field_871151";
    item['en'] = "Time";
    
    item = {};
    this.items.push(item);
    item['key'] = "scratchaddapost_button_719406";
    item['en'] = "Submit Post";
    
    item = {};
    this.items.push(item);
    item['key'] = "deals_field_956962";
    item['en'] = "Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "deals_field2_817958";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "deals_field3_209602";
    item['en'] = "Link To Shopping Deal";
    
    item = {};
    this.items.push(item);
    item['key'] = "deals_textarea_898877";
    item['en'] = "        Description Of Shopping Deal";
    
    item = {};
    this.items.push(item);
    item['key'] = "deals_button_382649";
    item['en'] = "Submit Deal";
    
    item = {};
    this.items.push(item);
    item['key'] = "deals_text_586811";
    item['en'] = "Enter the best deal you find online for a chance to win a $5 Amazon gift card! Your deal will be posted on the Online Deals page, and our team of professionals will select the best entry every week, and email the winner an electronic Amazon gift card.";
    
    item = {};
    this.items.push(item);
    item['key'] = "shoppingoptions_button2_615100";
    item['en'] = "Sweepstakes";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_text_810573";
    item['en'] = "What is GrocerEase?";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_text2_505139";
    item['en'] = "GrocerEase is a new, innovative platform that addresses one of the main difficulties and inconveniences created by COVID-19. Our app helps connect you to your neighbors and fellow citizens in your area to meet your grocery needs. Also, there’s a weekly competition for finding the best coronavirus-related goods online, where the person who submits the best deal will win a $5 Amazon gift card.";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_textcopy_271142";
    item['en'] = "How can you enter in the best deals sweepstakes?";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_text3_482212";
    item['en'] = "You can go to the sweepstakes form page, where you type in your name, email, and URL of the deal. Then, by clicking submit, you will be entered into the sweepstakes.";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_textcopy2_771705";
    item['en'] = "How do I contact a shopper?";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_textcopy3_632013";
    item['en'] = "You can click on a shopper post in the shopper options screen, which will redirect you to a chatroom that lets you directly communicate with the shopper.";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_textcopy4_238296";
    item['en'] = "More Questions? Contact us below.";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_field_839389";
    item['en'] = "Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_fieldcopy_996336";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_textarea_47076";
    item['en'] = "Enter your question here";
    
    item = {};
    this.items.push(item);
    item['key'] = "faqs2_button_644240";
    item['en'] = "Submit";
    
    item = {};
    this.items.push(item);
    item['key'] = "thankyou_text_723801";
    item['en'] = "Thanks for entering into our sweepstakes contest! Winners will be announced via email weekly!";
    
    item = {};
    this.items.push(item);
    item['key'] = "thankyou_button_157917";
    item['en'] = "Shopping Options";
    
    item = {};
    this.items.push(item);
    item['key'] = "thankyou_text2_691094";
    item['en'] = "Click below to return to the shopping options screen";
    
    item = {};
    this.items.push(item);
    item['key'] = "thanks_text_631159";
    item['en'] = "Thanks for contacting us! Our team will get back to you via email as soon as possible!\n\n\nClick the back arrow to return to the FAQs page.";
    
    item = {};
    this.items.push(item);
    item['key'] = "shoppingoptions_button2_268304";
    item['en'] = "Online Deals";
    
    item = {};
    this.items.push(item);
    item['key'] = "dealitem_text_119400";
    item['en'] = "Deal Description";
    
    item = {};
    this.items.push(item);
    item['key'] = "dealitem_text_769512";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "dealitem_text_294907";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "dealitem_text_197304";
    item['en'] = "Deal Description";
    
    item = {};
    this.items.push(item);
    item['key'] = "dealitem_text_1035144";
    item['en'] = "Deal Link";
    
    item = {};
    this.items.push(item);
    item['key'] = "dealitem_button_457437";
    item['en'] = "Deal Link";
    
    item = {};
    this.items.push(item);
    item['key'] = "dealitem_text_537553";
    item['en'] = "Click the link below for more information.";
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
