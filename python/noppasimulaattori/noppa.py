import tkinter
from tkinter import *
from PIL import ImageTk, Image
import random
import winsound
'''
class GUI:
    def __init__(self):
        self.pääikkuna = tkinter.Tk()
        #self.painike = tkinter.Button(self.pääikkuna, text = 'Heitä noppaa')
        self.kuva = tkinter.PhotoImage(file = 'noppa1.png')
       
        self.painike = tkinter.Button(self.pääikkuna, text = 'pöö', image = self.kuva)
        self.painike.pack(side = TOP)
        self.pääikkuna.title('noppa')
        self.pääikkuna.geometry('350x350')

        
        tkinter.mainloop()

käyttöliittymä = GUI() 
'''

#käyttöliittymän ikkuna
ikkuna = Tk()
ikkuna.title('Noppa simulaattori')
ikkuna.geometry('400x400')
ikkuna.resizable(False, False)

tausta = PhotoImage(file = r'pöytä.gif')
kuva = PhotoImage(file = r'1.gif')

tausta_alue = Label(ikkuna,  image = tausta)
tausta_alue.place(x = 0, y = 0, relwidth = 1, relheight = 1)

#ääni painettaessa noppaa
def ääni():
	return winsound.PlaySound('Blop-Mark_DiAngelo-79054334.wav', winsound.SND_FILENAME)

#satunnainen noppakuva
def uusikuva():
	numero = random.randint(1,6)
	noppa = str(numero) + '.gif'
	return noppa

#valitun kuvan siirtäminen noppa painikeeseen
def kuvavalinta():
	ääni()
	valittu = uusikuva()
	luettu = ImageTk.PhotoImage(Image.open(valittu))
	button.configure(image = luettu)
	button.image = luettu


Label(ikkuna, text = 'Heittäksesi noppaa paina nopan kuvaa', fg = 'red', font = 'Verdana 13 bold' ).pack()
button = Button(ikkuna, image = kuva,  bg = 'red', bd = 5, relief = RIDGE, cursor = 'hand2', activebackground = 'yellow', command = kuvavalinta)
button.place(x = 95, y = 95)



ikkuna.mainloop()      