import requests
from bs4 import BeautifulSoup
import random

base_url = 'https://www.nordnet.fi/markkinakatsaus/osakekurssit?selectedTab=prices&exchangeCountry=US'
r = requests.get(base_url)
soup = BeautifulSoup(r.content, 'lxml')

kuva_lista = soup.find_all(class_ = 'c02421')
'''
kuva_lista2
for kuva in kuva_lista:
	kuva_lista2.append(kuva.get('aria-hidden'))
'''
print(kuva_lista)

