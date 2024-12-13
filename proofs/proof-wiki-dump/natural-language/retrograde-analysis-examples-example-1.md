# 

Source: https://proofwiki.org/wiki/Retrograde_Analysis/Examples/Example_1



Example of Retrograde Analysis
Consider the following chess position:


What were the last $6$ single moves?
abcdefgh8877665544332211abcdefgh



Solution
Move $-1$
Black is in check from the bishop on $\text a 1$.
Thus move $-1$ must have been white, which places black in check.
That must have been done by moving something out of the way from between the black king on $\text f 6$ and the white bishop on $\text a 1$.
That piece cannot have been one of the following: 

the bishop on $\text g 4$ (as it is in the wrong place)
the king on $\text g 8$ (as it is in the wrong place)
the queen now on $\text e 2$ (black would have been in check at the end of the last move, which is illegal)
Hence the last piece to move must have been the pawn now on $\text e 6$.
It remains to determine where $\text e 6$ came from.
It is noted that $\text e 6$ blocks a check on white from the bishop on $\text a 2$.

If $\text e 6$ came from $\text e 5$, white would have been in check before his last move.
But there is no legal move from black that could have resulted in white being in check if he had not been before.
So $\text e 6$ must have made a capture from either $\text f 5$ or from $\text d 5$.
However, this cannot have been a normal pawn capture, as that would mean there was nothing blocking black from being in check from $\text a 1$ at the end of move $-2$.
Hence move $-1$ must have been an en passant pawn capture of a pawn which must have moved from $\text e 7$ to $\text e 5$ on move $-2$.
$\text e 6$ must have started on $\text d 5$ otherwise white would have been in check at the end of move $-3$, which is illegal.

Hence move $-1$ must have been:

$\text d 5 \times \text e 6 \text { (e.p.)} +$



abcdefgh8877665544332211abcdefghBefore move $-1$

$\Box$


Move $-2$
In order for the en passant capture to be legal, the last move must have been:

$\text e 7 - \text e 5$



abcdefgh8877665544332211abcdefghBefore move $-2$

$\Box$


Move $-3$
At the end of this move, black is in check from $\text a 1$.
So white must have put black in check.
This can have happened only by a white piece being moved off the $\text a 1$ -- $\text f 6$ diagonal.
That piece cannot have been the queen now on $\text e 2$, because black would have been in check at the end of the move $-4$, which is illegal.
Hence it can only have been the pawn now on $\text d 5$, which must have been on $\text d 4$.

$\text d 4 - \text d 5 +$



abcdefgh8877665544332211abcdefghBefore move $-3$

$\Box$


Move $-4$
At the end of this move, white is in check from $\text a 2$.
So black must have put white in check.
This can have happened only by a black piece being moved off the $\text a 2$ -- $\text g 8$ diagonal.
That piece must have been the black king now on $\text f 6$.
The only square it could have come from is $\text e 6$.
But now it is seen that the black king is under attack from $2$ white pieces at once:

the queen on $\text e 2$
the bishop on $\text g 4$.
This could not have arisen by white moving either piece, as that would mean the other piece would already be attacking the black king on $\text e 6$.
So we need to find a way to expose $\text e 6$ to attack by removing interposing pieces.
We recall the en passant capture, where the captured pawn is not on the same square as where the pawn ends up which is doing the actual capturing.
We see that if there are pawns on $\text e 5$ and $\text f 5$ before move $-5$, the black king is at that point not under attack.
Thus move $-5$ is an en passant capture, vacating both $\text e 5$ and $\text f 5$, leaving a white pawn on $\text f 6$, which is then captured on move $-4$ by the black king on $\text e 6$.

Thus move $-4$ is:

$\text K \text e 6 \times \text P (\text f 6) +$



abcdefgh8877665544332211abcdefghBefore move $-4$

$\Box$


Move $-5$
As noted during the analysis of move $-4$, move $-5$ is required to be the en passant pawn capture:

$\text e 5 \times \text f 6 \text { (e.p.)} +$



abcdefgh8877665544332211abcdefghBefore move $-5$

$\Box$


Move $-6$
Finally, for the en passant pawn capture to be legal, move $-6$ has to be:

$\text f 7 - \text f 5$



abcdefgh8877665544332211abcdefghBefore move $-6$

$\blacksquare$


Historical Note
David Joyner reports in his Adventures in Group Theory, 2nd ed. of $2008$ that this problem was the work of Christoph Bandelow, but he gives no further details.


Sources
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $1$: Elementary, my dear Watson: $\S 1.1.1$: 'You talking to me?': Ponderable $1.1.7$




