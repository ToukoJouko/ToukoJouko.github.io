import os
import discord
import random
from dotenv import load_dotenv
from discord.ext import commands
import praw
import requests
from bs4 import BeautifulSoup

load_dotenv()

TOKEN = os.getenv('DISCORD_TOKEN')
GUILD = os.getenv('DISCORD_GUILD')

bot = commands.Bot(command_prefix = '!')


@bot.command(name = 'on')
async def sellanen(ctx):
	vastaukset = ['ON!', 'NO ON!']

	vastaus = random.choice(vastaukset)
	await ctx.send(vastaus)

@bot.command(name = 'videot')
async def uusivideo(ctx):

	kanava = requests.get('https://www.youtube.com/user/niilo22/videos')

	await ctx.send(kanava)

@bot.command(name = 'meemi')
async def uusikuva(ctx):
	base_url = 'https://www.google.com/search?q=niilo22+memes&rlz=1C1GCEA_enFI911FI914&hl=fi&sxsrf=ALeKk02vYZP7-RMtCyFRCoelvhX99AkByQ:1609608573481&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiHtP-Z4_3tAhVnsYsKHWXLCXoQ_AUoAXoECBIQAw&biw=1536&bih=722'
	r = requests.get(base_url)
	soup = BeautifulSoup(r.text, 'lxml')

	kuva_lista = soup.find_all('img')

	kuva_lista2 = []
	for kuva in kuva_lista:
		kuva_lista2.append(kuva.get('src'))

	await ctx.send(random.choice(kuva_lista2))

@bot.command(name = 'luikaus')
async def uusiluikaus(ctx):
	base_url = 'https://niilo22.fi/soundlist'
	r = requests.get(base_url)
	soup = BeautifulSoup(r.text, 'lxml')

	hokema_lista = soup.find_all('a')

	hokema_lista2 = []
	for hokema in hokema_lista:
		hokema_lista2.append(hokema.get('href'))

	await ctx.send(random.choice(hokema_lista2))

@bot.command(name = 'töihin')
async def työ(ctx):
	base_url = 'https://www.nordnet.fi/markkinakatsaus/osakekurssit?selectedTab=prices&exchangeCountry=US'
	r = requests.get(base_url)
	soup = BeautifulSoup(r.content, 'lxml')

	paikka_lista = soup.find_all(class_ = 'c02341 c02343 md c02342')


	await ctx.send(paikka_lista)




bot.run(TOKEN)	
