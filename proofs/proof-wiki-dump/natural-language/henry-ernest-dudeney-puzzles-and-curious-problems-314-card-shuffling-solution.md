# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/314_-_Card_Shuffling/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $314$
Card Shuffling
The rudimentary method of shuffling a pack of cards is to take the pack face downwards in the left hand and then transfer them one by one to the right hand,
putting the second on top of the third, the third under, the fourth above, and so on until all are transferred.
If you do this with any even number of cards and keep on repeating the shuffle in the same way,
the cards will in due time return to their original order.
Try with $4$ cards, and you will find the order is restored in $3$ shuffles.
In fact, where the number of cards is $2$, $4$, $8$, $16$, $32$, $64$,
the number of shuffles to get them back to the original arrangement is $2$, $3$, $4$, $5$, $6$, $7$ respectively.
Now, how many shuffles are necessary in the case of $14$ cards?


Solution
$14$ shuffles are needed for $14$ cards.


Proof
Each shuffle can be represented as a permutation in $S_{14}$, the symmetric group on $14$ letters.
In two-row notation, this can be written as:

$\begin {pmatrix}
1  & 2  & 3  & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 \\
14 & 12 & 10 & 8 & 6 & 4 & 2 & 1 & 3 & 5  & 7  & 9  & 11 & 13
\end {pmatrix}$
which, when expressed in cycle notation, would be:

$\begin {pmatrix} 1 & 14 & 13 & 11 & 7 & 2 & 12 & 9 & 3 & 10 & 5 & 6 & 4 & 8 \end {pmatrix}$
which is a single (disjoint) $14$-cycle.
Thus this permutation has order $14$.
This means that $14$ shuffles are required to get the cards back to their original arrangement.
$\blacksquare$


Historical Note
Martin Gardner informs us that a shuffle of this kind is known as Monge's shuffle, for Gaspard Monge, who was apparently the first to investigate it.
Its mathematical theory is investigated in W.W. Rouse Ball's Mathematical Recreations and Essays, 11th ed., $1960$, edited by H.S.M. Coxeter.


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $314$. -- Card Shuffling
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $512$. Card Shuffling




