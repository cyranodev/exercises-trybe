#!/bin/bash

DIR=$1

if [ -d $DIR ]
    then
        FILES=`ls -l $DIR | wc -l`
        echo
        echo "O $DIR tem $((FILES-1)) arquivos."
        echo
    else
        echo
        echo "O parâmetro não é um diretório!"
        echo
fi
