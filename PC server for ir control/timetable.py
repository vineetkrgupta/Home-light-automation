import os
import time
import playsound
#import speech_recognition as sr
# from gtts import gTTS
import datetime
now = datetime.datetime.now()
import pyttsx3
import os
  
# driver code
  
# create object and assign voice
engine = pyttsx3.init()
voices = engine.getProperty('voices')
  
# changing index changes voices but ony
# 0 and 1 are working here
engine.setProperty('voice', voices[1].id)
engine.runAndWait()

#print(now.strftime("%a"))

days = { 'Monday': 1,
             'Tuesday': 2,
             'Wednesday': 3,
             'Thursday': 4,
             'Friday': 5 ,
             'Saturday': 6,
             'Sunday':7}

slot = ["8:30 to 10 am " ,   "10:05 to 11:35 am " , "11:40 to 1:10 pm " , "1:13 to 2:45 pm" , "2:50 to 4:20 pm"]

#speak(slot[2])

timetable={ 1:[["Probability" , 0 ], ["Data base management " , 1] , ["Software Project Management" , 2] , ["Ethics and value" , 4]],
            2:[["Operating system" , 0 ], ["Applied Linear" , 2] ],
            3:[["Probability" , 0 ], ["Data base management " , 1] , ["Software Project Management" , 2]],
            4:[["Operating system" , 0 ] ,["Linear algebra " , 2] ],
            5:[["Probability" , 0 ], ["Data base management " , 1] , ["Softs kill" , 2] , ["Operating system" , 4]] }



print(now.strftime("%A"))

# def speak(text):
#     try:
#         os.remove("voices.mp3")
#     except:
#         pass
#     tts = gTTS(text=text, lang="en")
#     filename = "voices.mp3"
#     tts.save(filename)
#     playsound.playsound(filename)

def speak(text):
    pyttsx3.speak(text)


def todaytimetable(day = days[now.strftime("%A")] , x = ""):
    global timetable , slot
    m=""
    if day == days[now.strftime("%A")]:
        #speak("Today's Time table is")
        #print("Today's Time Table is")
        m=m+"Today's Time Table is "
    else:
        temp= x + "s Time table is"
        m= m+ x
        #speak(temp)
    #day =1 
    time= "0"
    try:
        for x in timetable[day]:
            y = x[0] + " class from "  + slot[x[1]]
            #print(y)
            m= m+ y
           #speak(y)
        #print("//////////////////////////")
        print(m)
        speak(m)
    except:
        #speak("Today is a holiday")
        print("Today is a holiday")
        speak("Today is a holiday")



# for x in days:
#     print()
#todaytimetable()