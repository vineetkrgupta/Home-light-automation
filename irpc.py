from piir.io import receive
from piir.decode import decode
import  requests
import threading
header = "http://"
ip="192.168.43.199:3000"
keys = {"01fe12ed" : 1, "01fe16e9" : 2, "01fe1ae5" : 3, "01fe01fe" : 4, "01fe1ee1" : 5, "01fe03fc" : 6, "01fe04fb" : 7, "01fe05fa" : 8, "01fe06f9" : 9, "01fe07f8" : 10, "01fe08f7" : 11, "01fe09f6" : 12, "01fe0af5" : 13, "01fe0bf4" : 14, "01fe1fe0" : 15, "01fe0cf3" : 16, "01fe0df2" : 17, "01fe0ef1" : 18, "01fe13ec" : 19, "01fe02fd" : 20 }
while True:
    data = decode(receive(24))
    if data:
        print(data[0]['data'].hex())
        try:
            x= keys[str(data[0]['data'].hex())]
        except:
            x="error"
        url=header+ip+"/key/"+str(x)
        print(url)
        threading.Thread(target=requests.get, args=(url,)).start() #multithreading
        #requests.get(url,2)
