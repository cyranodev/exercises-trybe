#!/bin/bash

echo

FILE="/home/cyrano/meuscript.sh"
if [ -e $FILE ]
    then
        echo "O caminho $FILE está habilitado!"
        echo
        if [ -w $FILE ]
            then
                echo "Você tem permissão para editar $FILE."
                echo
            else
                echo "Você não está autorizado a editar $FILE." 
                echo
        fi
    else
        echo "Deu merda no caminho do arquivo!"
        echo
fi
