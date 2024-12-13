# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/22_-_Mrs._Wilson%27s_Family/Solution



Modern Puzzles by Henry Ernest Dudeney: $22$
Mrs. Wilson's Family
Mrs. Wilson had three children, Edgar, James and John.
Their combined ages were half of hers.
Five years later, during which time Ethel was born, Mrs. Wilson's age equalled the total of all her children's ages.
Ten years more have passed, Daisy appearing during that interval.
At the latter event Edgar was as old as John and Ethel together.
The combined ages of all the children are now double Mrs. Wilson's age, which is, in fact, only equal to that of Edgar and James together.
Edgar's age also equals that of the two daughters.
Can you find all their ages?


Solution
Edgar is $21$
James and John are both $18$ (they are twins)
Ethel is $12$
Daisy is $9$
Mrs. Wilson herself is $39$.


Proof
The wording is not completely clear, but it is assumed that "now" is the same time as "ten years more have passed".

So, let us define the following variables:

Let $a$, $b$, $c$, $d$ and $e$ be the current ages of Edgar, James, John, Daisy and Ethel.
Let $M$ be the current age of Mrs. Wilson.
Let $x$ be the number of years before now that Daisy appeared.

We can set up a set of equations encoding the statements in the question as follows:














\(\ds 2 \paren {\paren {a - 15} + \paren {b - 15} + \paren {c - 15} }\)

\(=\)







\(\ds M - 15\)





$15$ years ago: Their combined ages were half of hers.




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 2 a + 2 b + 2 c - M\)

\(=\)







\(\ds 75\)




















\(\ds \paren {a - 10} + \paren {b - 10} + \paren {c - 10} + \paren {e - 10}\)

\(=\)







\(\ds M - 10\)





$10$ years ago: Mrs. Wilson's age equalled the total of all her children's ages.




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a + b + c + e - M\)

\(=\)







\(\ds 30\)




















\(\ds a - d\)

\(=\)







\(\ds \paren {c - d} + \paren {e - d}\)





Ten years more have passed, Daisy appearing during that interval. At the latter event Edgar was as old as John and Ethel together.




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a + d - c - e\)

\(=\)







\(\ds 0\)




















\(\ds a + b + c + d + e\)

\(=\)







\(\ds 2 M\)





The combined ages of all the children are now double Mrs. Wilson's age,




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a + b + c + d + e - 2 M\)

\(=\)







\(\ds 0\)




















\(\ds a + b\)

\(=\)







\(\ds M\)





which is, in fact, only equal to that of Edgar and James together.




\(\text {(5)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a + b - M\)

\(=\)







\(\ds 0\)




















\(\ds a\)

\(=\)







\(\ds d + e\)





Edgar's age also equals that of the two daughters.




\(\text {(6)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a - d - e\)

\(=\)







\(\ds 0\)










We set up this system of linear simultaneous equations in matrix form as:

$\begin {pmatrix}
2 & 2 &  2 &  0 &  0 & -1 \\
1 & 1 &  1 &  0 &  1 & -1 \\
1 & 0 & -1 &  1 & -1 &  0 \\
1 & 1 &  1 &  1 &  1 & -2 \\
1 & 1 &  0 &  0 &  0 & -1 \\
1 & 0 &  0 & -1 & -1 &  0 \\
\end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ d \\ e \\ M \end {pmatrix} = \begin {pmatrix} 75 \\ 30 \\ 0 \\ 0 \\ 0 \\ 0  \end {pmatrix}$
It remains to solve this matrix equation.

Rearranging into a more convenient order for conversion into reduced echelon form:

$\begin {pmatrix}
1 & 0 & -1 &  1 & -1 &  0 \\
1 & 1 &  1 &  1 &  1 & -2 \\
1 & 1 &  0 &  0 &  0 & -1 \\
1 & 0 &  0 & -1 & -1 &  0 \\
1 & 1 &  1 &  0 &  1 & -1 \\
2 & 2 &  2 &  0 &  0 & -1 \\
\end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ d \\ e \\ M \end {pmatrix} = \begin {pmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 30 \\ 75 \\ \end {pmatrix}$

In reduced echelon form, this gives:

$\begin {pmatrix}
1 & 0 &  0 &  0 &  0 &  0 \\
0 & 1 &  0 &  0 &  0 &  0 \\
0 & 0 &  1 &  0 &  0 &  0 \\
0 & 0 &  0 &  1 &  0 &  0 \\
0 & 0 &  0 &  0 &  1 &  0 \\
0 & 0 &  0 &  0 &  0 &  1 \\ \end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ d \\ e \\ M \end {pmatrix} = \begin {pmatrix} 21 \\ 18 \\ 18 \\ 9 \\ 12 \\ 39 \\ \end {pmatrix}$

from which the ages can be read off directly.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $22$. -- Mrs. Wilson's Family
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $33$. Mrs. Wilson's Family




