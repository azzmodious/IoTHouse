from sense_hat import SenseHat
import socket
import json

hostname = socket.gethostname()
sense = SenseHat()
temp = sense.get_temperature()
adjFactor = 21
ftemp = (temp*1.8)+32 - adjFactor
humidity = sense.get_humidity()
pressure = sense.get_pressure()

data = {'temp': temp, 'ftemp': ftemp, 'pressure': pressure, 'humidity':humidity}
print json.dumps(data)