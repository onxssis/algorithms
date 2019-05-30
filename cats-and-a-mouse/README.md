# Problem

Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse doesn't move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

You are given _`q`_ queries in the form of _`x`_, _`y`_, and _`z`_ representing the respective positions for cats _`A`_ and _`B`_, and for mouse _`C`_. Complete the function _`catAndMouse`_ to return the appropriate answer to each query, which will be printed on a new line.

- If cat _`A`_ catches the mouse first, print Cat A.
- If cat _`B`_ catches the mouse first, print Cat B.
- If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
