# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/75_-_A_Question_of_Transport/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $75$
A Question of Transport
Twelve soldiers had to get to a place twenty miles distant with the quickest possible dispatch,
and all had to arrive at the same time.
They requisitioned the services of a man with a small motor-car.
"I can do twenty miles an hour," he said, "but I cannot carry more than four men at a time.
At what rate do you walk?"
"All of us can do a steady four miles an hour," they replied.
"Very well," exclaimed the driver, "then I will go ahead with four men,
drop them somewhere on the road to walk,
then return and pick up four more (who will then be somewhere on the road),
drop them off also, and return for the last four.
So all you have to do is to keep walking while you are on your feet, and I will do the rest."
As they started at noon, what was the exact time that they all arrived together?


Solution
$14:36$


Proof
Let us refer to the start and finish points as $A$ and $B$ respectively.
Hence the object of the operation is to get all $12$ men from $A$ to $B$ as quickly as possible.
Let $d_1$ miles be the distance from $A$ to which the driver takes the first batch of soldiers.
Let $t_1$ hours past noon be the time he drops them off.

Let $d_2$ miles be the distance from $A$ to which the driver returns to pick up the second batch.
Let $t_2$ hours past noon be the time he picks them up.

Let $d_3$ miles be the distance from $A$ to which the driver takes the second batch of soldiers.
Let $t_3$ hours past noon be the time he drops them off.

Let $d_4$ miles be the distance from $A$ to which the driver returns to pick up the third batch.
Let $t_4$ hours past noon be the time he picks them up.

Let $t_5$ hours past noon be the time they all arrive at $B$.

The following diagram illustrates the situation.
The journey of the driver is shown in blue, while those of the walkers are shown in red.




We have:














\(\ds d_1\)

\(=\)







\(\ds 20 t_1\)





"I can do twenty miles an hour," he said














\(\ds d_2\)

\(=\)







\(\ds 4 t_2\)





"All of us can do a steady four miles an hour," they replied.














\(\ds d_1 - d_2\)

\(=\)







\(\ds 20 \paren {t_2 - t_1}\)




















\(\ds d_3 - d_1\)

\(=\)







\(\ds 4 \paren {t_3 - t_1}\)




















\(\ds d_3 - d_2\)

\(=\)







\(\ds 20 \paren {t_3 - t_2}\)




















\(\ds d_4 - d_2\)

\(=\)







\(\ds 4 \paren {t_4 - t_2}\)




















\(\ds d_3 - d_4\)

\(=\)







\(\ds 20 \paren {t_4 - t_3}\)




















\(\ds 20 - d_3\)

\(=\)







\(\ds 4 \paren {t_5 - t_3}\)




















\(\ds 20 - d_4\)

\(=\)







\(\ds 20 \paren {t_5 - t_4}\)









These can be expressed more usefully as:














\(\ds d_1 - 20 t_1\)

\(=\)







\(\ds 0\)




















\(\ds d_2 - 4 t_2\)

\(=\)







\(\ds 0\)




















\(\ds d_1 - d_2 + 20 t_1 - 20 t_2\)

\(=\)







\(\ds 0\)




















\(\ds -d_1 + d_3 + 4 t_1 - 4 t_3\)

\(=\)







\(\ds 0\)




















\(\ds -d_2 + d_3 + 20 t_2 - 20 t_3\)

\(=\)







\(\ds 0\)




















\(\ds -d_2 + d_4 + 4 t_2 - 4 t_4\)

\(=\)







\(\ds 0\)




















\(\ds d_3 - d_4 + 20 t_3 - 20 t_4\)

\(=\)







\(\ds 0\)




















\(\ds d_3 - 4 t_3 + 4 t_5\)

\(=\)







\(\ds 20\)




















\(\ds d_4 - 20 t_4 + 20 t_5\)

\(=\)







\(\ds 20\)










This set of simultaneous linear equations can be expressed conveniently in matrix form as:

$\begin {pmatrix}
1 &  0 &  0 &  0 & -20 &   0 &   0 &   0 &  0 \\
0 &  1 &  0 &  0 &   0 &  -4 &   0 &   0 &  0 \\
1 & -1 &  0 &  0 &  20 & -20 &   0 &   0 &  0 \\

-1 &  0 &  1 &  0 &   4 &   0 &  -4 &   0 &  0 \\

0 & -1 &  1 &  0 &   0 &  20 & -20 &   0 &  0 \\
0 & -1 &  0 &  1 &   0 &   4 &   0 &  -4 &  0 \\
0 &  0 &  1 & -1 &   0 &   0 &  20 & -20 &  0 \\
0 &  0 &  1 &  0 &   0 &   0 &  -4 &   0 &  4 \\
0 &  0 &  0 &  1 &   0 &   0 &   0 & -20 & 20 \\

\end {pmatrix} \begin {pmatrix} d_1 \\ d_2 \\ d_3 \\ d_4 \\ t_1 \\ t_2 \\ t_3 \\ t_4 \\ t_5 \end {pmatrix} = \begin {pmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 20 \\ 20 \end {pmatrix}$
It remains to solve this matrix equation.

In echelon form, this gives:

$\begin {pmatrix}
1 &  0 &  0 &  0 & -20 &   0 &    0 &    0 &    0 \\
0 &  1 &  0 &  0 &   0 &  -4 &    0 &    0 &    0 \\
0 &  0 &  1 &  0 & -16 &   0 &   -4 &    0 &    0 \\
0 &  0 &  0 &  1 &   0 &   0 &    0 &   -4 &    0 \\
0 &  0 &  0 &  0 &   1 &   1 &   -1 &    0 &    0 \\
0 &  0 &  0 &  0 &   0 &   1 & -5/2 &  3/2 &    0 \\
0 &  0 &  0 &  0 &   0 &   0 &    1 &   -1 & -1/6 \\
0 &  0 &  0 &  0 &   0 &   0 &    0 &    1 &  5/6 \\
0 &  0 &  0 &  0 &   0 &   0 &    0 &    0 &    1 \\ 

\end {pmatrix} \begin {pmatrix} d_1 \\ d_2 \\ d_3 \\ d_4 \\ t_1 \\ t_2 \\ t_3 \\ t_4 \\ t_5 \end {pmatrix} = \begin {pmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ -5/6 \\ 25/6 \\ 13/5 \end {pmatrix}$

We are interested only in $t_5$, which we see is $\dfrac {13} 5$, that is, $2 \dfrac 3 5$ hours after noon.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $75$. -- A Question of Transport
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $89$. A Question of Transport




