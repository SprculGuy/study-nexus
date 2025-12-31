from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time


driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get("https://www.google.com/")
driver.maximize_window()
time.sleep(5)
driver.quit()