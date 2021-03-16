from flask import Flask
from flask import render_template ,url_for, request , redirect
from flask_caching import Cache
import os
import sys
import functionled
import subprocess

app = Flask(__name__)
@app.route("/")
def index():
  return render_template("index.html")

@app.route('/led/<button>')
def light(button):
    print(button)
    x = functionled.sendcode(button)
    return x


@app.route("/light")
def tubelight():
    global tube
    #tube = 0 if tube == 1 else 1
    tube = functionled.tubelight()
    return(str(tube))

@app.route("/shutdown")
def shutdown():
    subprocess.Popen(['sudo','halt'])
    os.system('sudo shutdown now')
    return ('', 204)

@app.route("/restart")
def restart():
    subprocess.Popen(['sudo','reboot','-r','now'])
    os.system('sudo reboot')
    return ('', 204)

@app.route("/ir")
def ir():
    #subprocess.Popen(['sudo','reboot','-r','now'])
    #os.system('sudo reboot')
    functionled.ir()
    return ("Ir restarted")
  
#404 error redirect 
@app.route('/<path:subpath>')
def pagenotfound(subpath):
    return redirect (url_for('index'))
#    return index()


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
    #app.run()