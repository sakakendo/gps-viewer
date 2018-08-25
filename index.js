
"use strct";

const electron = require("electron");
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;
let mainWindow=null

app.on("window-all-closed",()=>{
	if(process.platform != "darwin"){
		app.quit();
	}
});

app.on('ready',()=>{
	var index=`file://${__dirname}/index.html`;
	console.log("load successed : " , index);
	mainWindow = new BrowserWindow({width:1280,height:720,useContentSize:true});
	mainWindow.loadURL(index);
//	mainWindow.loadURL('./index.html');
	mainWindow.on("closed",()=>{
		mainWindow=null;
	});
})
