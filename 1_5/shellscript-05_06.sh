#!/bin/bash

echo
echo "Agora digite um caminho de um arquivo :"
echo

if [ -e $1 ]
    then
        if [ -f $1 ]
            then
                echo "Teu caminho é de um arquivo (file)."
                echo
            elif [ -d $1 ]
                then
                    echo "Teu caminho é de um diretório (folder)."
                    echo
            else
                echo "Teu caminho é de alguma coisa bizonha que não é arquivo nem diretório."
                echo
        fi
        ls -l $1
    else
        echo "Caminho inválido!"
        echo
fi
