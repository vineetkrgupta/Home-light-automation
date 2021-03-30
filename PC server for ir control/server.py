from flask import Flask
import pyautogui
import threading
import screen_brightness_control as sbc
from win32gui import GetWindowText, GetForegroundWindow
import requests
from timetable import todaytimetable
import webbrowser

def brightness(s):
    current_brightness = sbc.get_brightness()
    if(s==0):
        bright_Set= 0 if (current_brightness- 10 <0) else current_brightness - 10
        #sbc.set_brightness(bright_Set)
    elif(s==1):
        bright_Set= 100 if (current_brightness- 10) >100 else current_brightness + 10
    elif(s==2):
        bright_Set= 0 if (current_brightness > 0) else 100
        sbc.set_brightness(bright_Set)

def apptype():
    m = GetWindowText(GetForegroundWindow())
    app=m.split(" ")[-1]
    if(app== "FireFox" or app== "Chrome" or app == "Edge" ):
        return(0)
    elif (app== "PotPlayer"):
        return(1)
    else:
        return(2)

def keyfunction(value):
    if(value==1):
        pyautogui.hotkey('alt', 'f4')
       #pass
    elif(value ==2):
        pyautogui.hotkey('alt', 'tab')
        #pass
    elif(value ==3):
        pyautogui.press('volumemute')
    
    
    elif(value ==4):
        pyautogui.press('volumedown')
        pyautogui.press('volumedown')
        #pyautogui.press('volumedown')
        #pass
    elif(value ==5):
        pyautogui.press('playpause')
        #pass 
    elif(value ==6):
        pyautogui.press('volumeup')
        pyautogui.press('volumeup')
        #pass 
    
    elif(value ==7):
        brightness(0)
        #pass
    elif(value ==8):
        brightness(2)
        #pass
    elif(value ==9):
        brightness(1)
        #pass 
    
    elif(value ==10):
        webbrowser.open('https://youtube.com')
        #pass 
    elif(value ==11):
        webbrowser.open('https://mail.google.com/mail/u/0/')
        pass 
    elif(value ==12):
        webbrowser.open('https://mail.google.com/mail/u/1/')
        pass
    
    elif(value ==13):
        todaytimetable()
        #pass 
    elif(value ==14): # button 8 of remote is for turning on and off light
        requests.get("http://192.168.43.133:5000/light")
        #pass 
    elif(value ==15):
        #os.system("C:\Users\vk779\AppData\Local\Microsoft\Teams\Update.exe")
        pass 
    
    elif(value ==16):
        
        # a= apptype()
        # pyautogui.press('prevtrack') if a==0 else pyautogui.press('pgup')
        a= apptype()
        if(a==0):
            pyautogui.hotkey('shift', 'p')
        elif a==1:
            pyautogui.press('pgup')
        else:
            pyautogui.press('prevtrack')
        # pass 

    elif(value ==17):
        a= apptype()
        #pyautogui.press('f') if a==0 else pyautogui.press('enter') #fullscreen
        if(a==0):
            pyautogui.press('f')
        elif a==1:
            pyautogui.press('enter')
        else: 
           pyautogui.press('f11')
        #pass 
    
    elif(value ==18):
        a= apptype()
        if(a==0):
            pyautogui.hotkey('shift', 'n')
        elif a==1:
            pyautogui.press('pgdn')
        else:
            pyautogui.press('nexttrack')
        
        pass 
    
    elif(value ==19):
        a= apptype()
        if(a==0):
            pyautogui.hotkey("j")
        # elif a==1:
        #     pyautogui.press('left')
        else:
            pyautogui.press('left')
        
        pass
    elif(value ==20):
        a= apptype()
        if(a==0):
            pyautogui.hotkey("l")
        # elif a==1:
        #     pyautogui.press('left')
        else:
            pyautogui.press('right')
       
       # pass




app = Flask(__name__)
@app.route('/key/<hash>')
def presskey(hash):
    if(hash!="error"):
        threading.Thread(target=keyfunction, args=(int(hash),)).start()
    print(hash)
    #pyautogui.press('enter')
    return ('', 204)

app.run(host="0.0.0.0", port=8100)
