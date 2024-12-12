# 

Source: https://proofwiki.org/wiki/Grazing_Cows



Problem
Let:

$a$ cows graze $b$ fields in $c$ days
$a'$ cows graze $b'$ fields in $c'$ days
$a' '$ cows graze $b' '$ fields in $c' '$ days.
What is the relationship between the $9$ magnitudes $a$ to $c' '$?


Solution
Suppose that:

each field initially contains the same quantity of grass: $M$
the daily growth in each field is the same: $m$
each cow consumes the same amount of grass per day: $Q$.
Then:














\(\ds b M + c b m - c a Q\)

\(=\)







\(\ds 0\)




















\(\ds b' M + c' b' m - c' a' Q\)

\(=\)







\(\ds 0\)




















\(\ds b' ' M + c' ' b' ' m - c' ' a' ' Q\)

\(=\)







\(\ds 0\)









Consider the matrix:

$A = \begin {pmatrix} b & b c & c a \\ b' & b' c' & c' a' \\ b' ' & b' ' c' ' & c' ' a' ' \end {pmatrix}$
We have:

$A \tuple {M, m, -Q}^T = \mathbf 0$
Given that each of $M$, $m$ and $Q$ are not zero, by Matrix is Singular iff Product with Non-Zero Vector is Zero, $A$ is singular.
It follows that $\det A = 0$.
After algebra, we have:

$b' ' c c' \paren {a b' - b a'} + c' ' b' ' \paren {b c' a' - b' c a} + c' ' a' ' b b' \paren {c - c'} = 0$
$\blacksquare$


Historical Note
According to David Wells in his Curious and Interesting Puzzles, this question appeared in Isaac Newton's Arithmetica Universalis of $1707$.


Sources
1707: Isaac Newton: Arithmetica Universalis
1965: Heinrich Dörrie: 100 Great Problems of Elementary Mathematics (translated by David Antin)
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Prince Rupert's Cube: $128$




