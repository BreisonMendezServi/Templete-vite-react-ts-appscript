const doGet = (e) => {  
    return HtmlService.createTemplateFromFile('public/index').evaluate().setTitle("Bienvenido").setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}