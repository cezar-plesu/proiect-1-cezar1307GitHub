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


    cerere = "Hello world -"+cerere;



    clientsocket.send(bytes('Hello world', 'utf-8'))

    clientsocket.close()

    print('S-a terminat comunicarea cu clientul.')