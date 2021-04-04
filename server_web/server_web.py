import socket



serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serversocket.bind(('', 5678))
serversocket.listen(10)





while True:
    print('#########################################################################')
    print('Serverul asculta potentiali clienti.')
    (clientsocket, address) = serversocket.accept()
    print('S-a conectat un client.')
    cerere = ''
    linieDeStart = ''



    while True:
        data = clientsocket.recv(1024)
        cerere = cerere + data.decode()
        print('S-a citit mesajul: \n---------------------------\n' + cerere + '\n---------------------------')
        pozitie = cerere.find('\r\n')
        if (pozitie > -1):
            linieDeStart = cerere[0:pozitie]
            print('S-a citit linia de start din cerere: ##### ' + linieDeStart + ' #####')
            break

    print('S-a terminat cititrea.')




    path = "../continut" + linieDeStart.split(" ")[1]

    tip = cerere.split("\n")


    mesaj = "HTTP/1.1 200 OK \r\n"+"Content-Length:"+"\r\n"+"Content-Type:"+"\r\n"+"\r\n"+"Hello world "+tip[0]+"\r\n"


    clientsocket.send(bytes(mesaj.encode('utf-8')))  # genereaza un raspuns invalid pe pagina web



    clientsocket.close()

    print('S-a terminat comunicarea cu clientul.')
