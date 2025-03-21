########Templates#########
slowBrowsingSolved='''
###############<----SOLVED--->###################
Dear Team,
As per conversation on <|NUMBER|>, the client had sluggish connection. <|MEASURES APPLIED|> seems to have solved the issue according to the client. 
Thank You!!!
The following data can be used for reference:
'''
slowBrowsingUnsolved='''
###############<----NOT SOLVED--->###################
Dear Team,
As per conversation on <|NUMBER|>, the client has sluggish connection. Unfortunately, <|MEASURES APPLIED|> didnot seem to have solved the issue according to the client. Please proceed accordingly.
Thank You!!!
The following data can be used for reference:
'''
noInternetUnsolved='''
###############<----NOT SOLVED--->###################
Dear Team,
As per conversation on <|NUMBER|>, the client has lost connection. On further verification, <|THE CAUSE|> seems to be the root cause of the issue. Please perform the necessities asap.
Thank You!!!
The following data can be used for reference:
'''
noInternetSolved='''
###############<----SOLVED--->###################
Dear Team,
As per conversation on <|NUMBER|>, the client had lost connection. According to the client, <|MEASURES APPLIED|> has restored the connection.  
Thank You!!!
The following data can be used for reference:
'''
ovccNoNet='''
###############<----OVCC No Internet--->###################
Dear OVCC Team,
As per conversation on <|NUMBER|>, the client has lost connection. Please perform the necessities.
Thank You!!!
'''
ovccSlowNet='''
###############<----OVCC Slow Browsing--->###################
Dear OVCC Team,
As per conversation on <|NUMBER|>, the client has sluggish connection. Please provide the necessary support.
Thank You!!!
'''
accountExtend='''
Dear Sales Team,
As per conversation on <|NUMBER|>, the client wants to extend his subscription with promise to pay. Please proceed accordingly.
Thank You!!!
'''
paidButInactive='''
Dear Team,
As per conversation on <|NUMBER|>, the client has already paid his subscription but his account is still inactive. Please perform the necessities asap.
Thank You!!!
'''
passwordChange='''
Dear Team,
As per conversation on <|NUMBER|>, the client needed help with changing his password. The client has been helped <|MEASURES APPLIED|> and the password has been changed successfully. 
Thank You!!,
'''
assistanceNeeded='''
Dear Rf Team,
As per conversation on <|NUMBER|>, the client needs help with <|THE CAUSE|>. The client being technically naive has requested for field support, thus please provide the client with required assistance. 
Thank You!!!
'''
replacements='''
Dear Sales Team,
As per conversation on <|NUMBER|>, the client needs his broken <|THE CAUSE|> replaced. Please provide the client with required information about the procedure.
Thank You!!!
'''
noSignal='''
Dear L1/RF Team,
As per conversation on <|NUMBER|>, the client has no signal displayed on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search and factory defaulting the STB, thus please perform the necessities asap.
Thank You!!!
The following data was verified by the client on his TV:
Signal Strength=0
Signal Quality=0
'''
ReminderCall='''
Dear Team,
**********Reminder CALL RECEIVED************
As per conversation on <|NUMBER|>, the client's lost connection has not yet been restored. Please perform the necessities asap for the client is pretty infuriated.
Also, the client wants to get updates about the situation and the estimated restoration time of his connection thus, please proceed accordingly.
Thank You!!!
'''
#######TEMPLATES END######WILL UPDATE LATER#######


##########Assigning values##########
number=input("Caller's number: ")
solution=input("What solutions did you perform?: ")
cause=input("What caused the issue?: ")
slowBrowsingSolved=slowBrowsingSolved.replace("<|NUMBER|>", number)
slowBrowsingSolved=slowBrowsingSolved.replace("<|MEASURES APPLIED|>", solution)
noInternetUnsolved=noInternetUnsolved.replace("<|NUMBER|>", number)
noInternetUnsolved=noInternetUnsolved.replace("<|THE CAUSE|>", cause)
assistanceNeeded=assistanceNeeded.replace("<|NUMBER|>", number)
assistanceNeeded=assistanceNeeded.replace("<|THE CAUSE|>", cause)
replacements=replacements.replace("<|NUMBER|>", number)
replacements=replacements.replace("<|THE CAUSE|>", cause)
slowBrowsingUnsolved=slowBrowsingUnsolved.replace("<|NUMBER|>", number)
slowBrowsingUnsolved=slowBrowsingUnsolved.replace("<|MEASURES APPLIED|>", solution)
noInternetSolved=noInternetSolved.replace("<|NUMBER|>", number)
noInternetSolved=noInternetSolved.replace("<|MEASURES APPLIED|>", solution)
passwordChange=passwordChange.replace("<|NUMBER|>", number)
passwordChange=passwordChange.replace("<|MEASURES APPLIED|>", solution)
ovccNoNet=ovccNoNet.replace("<|NUMBER|>", number)
ovccSlowNet=ovccSlowNet.replace("<|NUMBER|>", number)
accountExtend=accountExtend.replace("<|NUMBER|>", number)
paidButInactive=paidButInactive.replace("<|NUMBER|>", number)
noSignal=noSignal.replace("<|NUMBER|>", number)
ReminderCall=ReminderCall.replace("<|NUMBER|>", number)

####PRINT#####
print("MENU")
print("0. No signal")
print("1. Internet not working")
print("2. Slow browsing")
print("3. Account extend")
print("4. Payment done but account inactive")
print("5. Password change")
print("6. Assistance needed")
print("7. Replacement required")
print("8. OVCC")
print("9. Reminder call")
answer=input("Choose what you want template for: ")
if answer == '0':
            print(noSignal)

elif answer == '1':
            print(noInternetSolved)
            print(noInternetUnsolved)

elif answer == '2':
            print(slowBrowsingSolved)
            print(slowBrowsingUnsolved)
            
elif answer == '3':
            print(accountExtend)

elif answer == '4':
            print(paidButInactive)

elif answer == '5':
            print(passwordChange)

elif answer == '6':
            print(assistanceNeeded)

elif answer == '7':
            print(replacements)
            

elif answer == '8':
            print(ovccNoNet)
            print(ovccSlowNet)

elif answer == '9':
            print(ReminderCall)

