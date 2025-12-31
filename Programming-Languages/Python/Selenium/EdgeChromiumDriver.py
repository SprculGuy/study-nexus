from selenium import webdriver
from webdriver_manager.microsoft import EdgeChromiumDriverManager
import time


driver = webdriver.Edge(EdgeChromiumDriverManager().install())
driver.get("https://www.google.com/")
driver.maximize_window()
time.sleep(5)
driver.quit()