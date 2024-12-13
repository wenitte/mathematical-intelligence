# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/2_-_A_Legacy_Puzzle/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $2$
A Legacy Puzzle
A man left legacies to his three sons and to a hospital, amounting in all to $\pounds 1,320$.
If he had left the hospital legacy also to his first son, that son would have received as much as the other two sons together.
If he had left it to his second son, that son would have received twice as much as the other two sons together.
If he had left the hospital legacy to his third son, he would have received then thrice as much as the first son and second son together.
Find the amount of each legacy.


Solution
The legacy to the first son was $\pounds 55$,
to the second son $\pounds 275$,
to the third son $\pounds 385$,
and to the hospital $\pounds 605$,
making $\pounds 1320$ in all.


Proof
Let $a$, $b$ and $c$ pounds be the legacies of the first, second and third sons respectively.
Let $h$ be the legacy of the hospital.
We have:














\(\ds a + b + c + h\)

\(=\)







\(\ds 1320\)





... amounting in all to $\pounds 1,320$.














\(\ds a + h\)

\(=\)







\(\ds b + c\)





If he had left the hospital legacy also to his first son, that son would have received as much as the other two sons together.














\(\ds b + h\)

\(=\)







\(\ds 2 \paren {a + c}\)





If he had left it to his second son, that son would have received twice as much as the other two sons together.














\(\ds c + h\)

\(=\)







\(\ds 3 \paren {a + b}\)





If he had left the hospital legacy to his third son, he would have received then thrice as much as the first son and second son together.




We set up this system of linear simultaneous equations in matrix form as:
$\quad \begin {pmatrix}
1  &  1 &  1 &  1 \\
1  & -1 & -1 &  1 \\
-2 &  1 & -2 &  1 \\
-3 & -3 &  1 &  1 \\
\end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ h \end {pmatrix} = \begin {pmatrix} 1320 \\ 0 \\ 0 \\ 0 \end {pmatrix}$
It remains to solve this matrix equation.

In reduced echelon form, this gives:
$\quad \begin {pmatrix} 
1 & 0 &  0 &  0 \\
0 & 1 &  0 &  0 \\
0 & 0 &  1 &  0 \\
0 & 0 &  0 &  1 \end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ h \end {pmatrix} = \begin {pmatrix} 55 \\ 275 \\ 385 \\ 605 \\ \end {pmatrix}$

from which the legacies can be read off directly.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $2$. -- A Legacy Puzzle
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $13$. A Legacy Puzzle




