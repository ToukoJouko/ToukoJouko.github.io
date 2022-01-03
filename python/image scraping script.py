import requests
from bs4 import BeautifulSoup
import random

base_url = 'https://paikat.te-palvelut.fi/tpt/?searchPhrase=ty%C3%B6&announced=0&leasing=0&english=false&sort=1'
r = requests.get(base_url)
soup = BeautifulSoup(r.text, 'lxml')

kuva_lista = soup.find_all('div')

kuva_lista2 = []
for kuva in kuva_lista:
	kuva_lista2.append(kuva.get('h5'))

#print(random.choice(kuva_lista2))
print(kuva_lista2)