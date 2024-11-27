
# Nombre d'essais
essais = 12

# Couleurs disponibles
colorPool = ['bleu', 'rouge', 'jaune', 'vert']


# Demande une réponse et insert les couleurs dispos dans le texte
def answer():
    answerInput = input("indiquez votre réponse composée de 2 couleurs parmi cette liste : " + ' '.join(colorPool) +  " (séparées par un espace) : ")
    return answerInput


# Vérifie qu'il y a le bon nombre de réponses et qu'elles sont disponibles
def checkValidity():
    answerInput = answer()
    answerList = answerInput.split(' ')
    delimiter = ", "
    print("Couleurs choisies = " + delimiter.join(answerList))

    while True:
        for color in answerList:
            if color not in colorPool:
                print ("Votre réponse ne fait pas partie de la liste. Entrez une nouvelle réponse")
                continue
            elif len(answerList) != 2:
                print ("Votre réponse n'as pas le bon nombre d'éléments. Entrez une nouvelle réponse")
                continue
        else:
            return answerList      
        

# Retourne True si bonne solution, sinon donne le nb de réponses (à valider)
def gameCore():
    answerList = checkValidity()
    goodColor = 0
    goodPosition = 0
    # solution = random.sample(colorPool, 2)
    solution = ['vert', 'bleu']
    
    if solution == answerList:
        return True
    else:
        goodColor = len(set(solution)&set(answerList))
        print(goodColor)
        checkPosition = []
        for i in range(len(solution)):
            checkPosition.append(solution[i] == answerList[i])
        goodPosition += sum(checkPosition)
        print(goodPosition)
        print(str(answerList) + "-> " + str(goodPosition) + " de la bonne couleur à la bonne position / " + str(goodColor) + " de la bonne couleur à la mauvaise position")
        return False
        
    
# Affiche "gagné" si gameCore() renvoie True, lance un nouvel essai si Fale et affiche "perdu" si essais=0 
def gameCycle ():
    state = gameCore()
    global essais
    while essais > 0:
        if state == False:
            essais -= 1
            print ("il vous reste " + str(essais) +" essais")
            answer()
        else: 
            print ("Bravo ! Vous avez gagné !")
            break
    if essais == 0:
        print ("Vous avez perdu")

gameCycle()