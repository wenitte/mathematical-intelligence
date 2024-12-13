# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/158_-_Newsboys/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $158$
Newsboys
A contest took place amongst some newspaper boys.
Tom Smith sold one paper more than a quarter of the whole lot they had secured;
Billy Jones disposed of one paper more than a quarter of the remainder;
Ned Smith sold one paper more than a quarter of what was left;
and Charlie Jones disposed of just one paper more than a quarter of the remainder.
At this stage it was found that the Smiths were exactly $100$ papers ahead,
but little Jimmy Jones, the youngest kid of the bunch, sold all that were left,
so that in this friendly encounter the Joneses won by how many papers do you think?


Solution
The Jones team won, by $620$ papers to $400$.


Proof
Let $n$ be the total number of papers sold
Let $S_T$, $J_B$, $S_N$, $J_C$ and $J_J$ be the number of papers sold by Tom Smith, Billy Jones, Ned Smith, Charlie Jones and Jimmy Jones respectively.
We have:














\(\ds S_T\)

\(=\)







\(\ds \dfrac n 4 + 1\)





Tom Smith sold one paper more than a quarter of the whole lot they had secured;














\(\ds J_B\)

\(=\)







\(\ds \dfrac {n - S_T} 4 + 1\)





Billy Jones disposed of one paper more than a quarter of the remainder;














\(\ds S_N\)

\(=\)







\(\ds \dfrac {n - S_T - J_B} 4 + 1\)





Ned Smith sold one paper more than a quarter of what was left;














\(\ds J_C\)

\(=\)







\(\ds \dfrac {n - S_T - J_B - S_N} 4 + 1\)





and Charlie Jones disposed of just one paper more than a quarter of the remainder.














\(\ds S_T + S_N\)

\(=\)







\(\ds J_B + J_C + 100\)





At this stage it was found that the Smiths were exactly $100$ papers ahead,














\(\ds J_J\)

\(=\)







\(\ds n - S_T - J_B - S_N - J_C\)





but little Jimmy Jones, the youngest kid of the bunch, sold all that were left



These can be expressed more usefully as:














\(\ds 4 S_T - n\)

\(=\)







\(\ds 4\)




















\(\ds 4 J_B + S_T - n\)

\(=\)







\(\ds 4\)




















\(\ds 4 S_N + S_T + J_B - n\)

\(=\)







\(\ds 4\)




















\(\ds 4 J_C + S_N + S_T + J_B - n\)

\(=\)







\(\ds 4\)




















\(\ds S_T - J_B + S_N - J_C\)

\(=\)







\(\ds 100\)




















\(\ds S_T + J_B + S_N + J_C + J_J - n\)

\(=\)







\(\ds 0\)










This set of simultaneous linear equations can be expressed conveniently in matrix form as:

$\begin {pmatrix}
-1 &  0 &  0 &  0 &  0 &  4 \\
-1 &  0 &  0 &  0 &  4 &  1 \\
-1 &  0 &  0 &  4 &  1 &  1 \\
-1 &  0 &  4 &  1 &  1 &  1 \\
-1 &  1 &  1 &  1 &  1 &  1 \\

0 &  0 & -1 &  1 & -1 &  1 \\

\end {pmatrix} \begin {pmatrix} n \\ J_J \\ J_C \\ S_N \\ J_B \\ S_T \end {pmatrix} = \begin {pmatrix} 4 \\ 4 \\ 4 \\ 4 \\ 0 \\ 100 \end {pmatrix}$
It remains to solve this matrix equation.
In reduced echelon form, this gives:

$\begin {pmatrix}
1 &  0 &  0 &  0 &  0 &  0 \\
0 &  1 &  0 &  0 &  0 &  0 \\
0 &  0 &  1 &  0 &  0 &  0 \\
0 &  0 &  0 &  1 &  0 &  0 \\
0 &  0 &  0 &  0 &  1 &  0 \\
0 &  0 &  0 &  0 &  0 &  1 \\

\end {pmatrix} \begin {pmatrix} n \\ J_J \\ J_C \\ S_N \\ J_B \\ S_T \end {pmatrix} = \begin {pmatrix} 1020 \\ 320 \\ 108 \\ 144 \\ 192 \\ 256 \end {pmatrix}$

The result can be read off directly.
There were $1020$ newspapers.
The Smith brothers sold $256$ and $144$ between them, making $400$.
The two older Jones brothers sold $192$ and $108$ between them, making $300$.
But then Jimmy Jones sold the remaining $320$ and the Jones team won by a margin of $220$.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $158$. -- Newsboys




