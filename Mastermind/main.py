
# Nombre d'essais
essais = 12

# Couleurs disponibles
colorPool = ['bleu', 'rouge', 'jaune', 'vert']
# print(type(colorPool))

# Demande une réponse et insert les couleurs dispos dans le texte
def answer():
    global answerInput
    answerInput = input("indiquez votre réponse composée de 2 couleurs parmi cette liste : " + ' '.join(colorPool) +  " (séparées par un espace) : ")
    #print(answerInput)
    return answerInput

answer()

# Vérifie qu'il y a le bon nombre de réponses et qu'elles sont disponibles
def checkValidity():
    answerList = answerInput.split(' ')
    print(answerList)
    delimiter = ", "
    print("Couleurs choisies = " + delimiter.join(answerList))

 
    for color in answerList:
        if color not in colorPool or len(answerList) != 2:
        
            print ("Votre réponse ne fait pas partie de la liste ou n'as pas le bon nombre d'éléments. Entrez une nouvelle réponse")
            answer()
        
    else:
        # print("good")
        return answerList       
        
checkValidity()

# 
def gameCore():
    answerList = checkValidity()
    goodColor = 0
    goodPosition = 0
    # solution = random.sample(colorPool, 2)
    solution = ['vert', 'bleu']
    
    if solution == answerList:
        return True
    else:
        checkColor = len(set(solution)&set(answerList))
        goodColor += checkColor
        checkPosition = []
        for i in range(len(solution)):
            checkPosition.append(solution[i] == answerList[i])
        goodPosition += sum(checkPosition)
        print(str(answerList) + "-> " + str(goodPosition) + " de la bonne couleur à la bonne position / " + str(goodColor) + " de la bonne couleur à la bonne position")
        return False
        
    
gameCore()
        