from tkinter import *
from datetime import *


#käyttöliittymä
ikkuna = Tk()
ikkuna.title('sekuntikello')
#ikkuna.geometry('500x500')

alku = 79200
käynnissä = False

#kello
def kello():
	global alku
	käynnissä = True
	if käynnissä:
		aika = datetime.fromtimestamp(alku) #näyttää ajan 02:00:00 argumentilla 0, 79200 lisää tähän 22 tuntia sekunneissa jotta kelo näyttää nollaa
		näyttö = aika.strftime('%M:%S')
		kello_display.configure(text = näyttö)
		kello_display.after(1000, kello) #1000 millisekunnin viive, jonka jälkeen suoritetaan kelo funktio uudestaan
		alku += 1

def reset():
	global käynnissä
	käynnissä = False
	if käynnissä == False:
		kello_display.configure(text ='00:00')

		


start_nappi = Button(ikkuna, text = 'START', command = kello).pack()
stop_nappi = Button(ikkuna, text = 'STOP').pack()
reset_nappi = Button(ikkuna, text = 'RESET', command = reset).pack()

kello_display = Label(ikkuna, font = 'Verdana 60')
kello_display.pack(anchor = 'center')

ikkuna.mainloop()