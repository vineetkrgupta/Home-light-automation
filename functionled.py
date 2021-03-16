from os import stat_result
from ircodec.command import CommandSet
import RPi.GPIO as GPIO
import time
import os
import subprocess
ai = 0
pin = 17 # the gpio pin for the led
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(pin, GPIO.OUT)

new_controller = CommandSet.load('led.json')

def sendcode(a):
    global ai
    if (ai==0):
        os.system('sudo pigpiod')
        ai =1
    new_controller.emit(str(a))
    return("emited "+ str(a))

def tubelight():
    lightstate = GPIO.input(pin) 
    if lightstate ==0:
        GPIO.output(pin, GPIO.HIGH)
        state = "on"
    else:
        GPIO.output(pin, GPIO.LOW)
        state = "off"


    return ("Light set  " + state)

def onexit():
    GPIO.cleanup()  

def ir():
    os.system('sudo pigpiod')
