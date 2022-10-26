import smtplib

user_email= ""
user_password= ""

connection= smtplib.SMTP("smtp.gmail.com", 587)
connection.starttls()
connection.login(user= user_email, password= user_password)

subject="Email automation part1 "
message="Hey everyone in this first part"
final= f"Subject:{subject}\n \n{message}"

connection.sendmail(from_addr=user_email, to_addrs="", msg=final)

connection.close()
