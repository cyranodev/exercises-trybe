#!/bin/bash

echo

FILES=$@

FOR FILE in $FILES
do

  if [ -e "$FILE" ]
    then
        if [ -f "$FILE" ]
            then
                echo "Teu caminho é de um arquivo (file)."
                echo
            elif [ -d "$FILE" ]
                then
                    echo "Teu caminho é de um diretório (folder)."
                    echo
            else
                echo "Teu caminho é de alguma coisa bizonha que não é arquivo nem diretório."
                echo
        fi
        ls -l "$FILE"
    else
        echo "Caminho inválido!"
        echo
fi