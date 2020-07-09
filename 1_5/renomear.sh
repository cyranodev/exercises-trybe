#!/bin/bash

FILES=`ls`;



for FILE in $FILES
  do
    if [ ${FILE##*.} = "sh" ]
      then
        echo "$FILE > shell$FILE"
      else
        echo "$FILE -----"
    fi

  done
echo
echo "Renomear arquivos ? [y] [n]"
    read ANSWER
    if [ $ANSWER = "y" ]
      then
        for FILE in $FILES
          do
            echo
            mv $FILE "shell$FILE"
            echo "$FILE renomeado."
          done
      else
        echo "Alterações não efetuadas."
    fi


