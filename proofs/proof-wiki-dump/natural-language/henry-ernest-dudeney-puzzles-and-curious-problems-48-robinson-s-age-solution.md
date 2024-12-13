# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/48_-_Robinson%27s_Age/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $48$
Robinson's Age
Robinson said.
My brother is two years older than I,
my sister is four years older than he,
my mother was $20$ when I was born,
and I was told yesterday that the average age of the four of is is $39$ years.
What was Robinson's age?


Solution
$32$


Proof
The information can be represented as a system of linear simultaneous equations in matrix form as:

$\begin {pmatrix}
-1 &  1 &  0 &  0 \\

0 & -1 & -1 &  0 \\

-1 &  0 &  0 &  1 \\

1 &  1 &  1 &  1 \\

\end {pmatrix} \begin {pmatrix} R \\ B \\ S \\ M \end {pmatrix} = \begin {pmatrix} 2 \\ 4 \\ 20 \\ 4 \times 39 \end {pmatrix}$
where $R$, $B$, $S$ and $M$ are apparent.
It remains to solve this matrix equation.
Conversion to echelon form proceeds as follows:














\(\ds \)

\(\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
-1 &  1 &  0 &  0 &   2 \\

0 & -1 &  1 &  0 &   4 \\

-1 &  0 &  0 &  1 &  20 \\

1 &  1 &  1 &  1 & 156 \\ \end {array} }\)





















\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 & -1 &  0 &  0 &  -2 \\
0 &  1 & -1 &  0 &  -4 \\
1 &  0 &  0 & -1 & -20 \\
1 &  1 &  1 &  1 & 156 \\ \end {array} }\)






$r_1 \to -r_1$, $r_2 \to -r_2$, $r_3 \to -r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 & -1 &  0 &  0 &  -2 \\
0 &  1 & -1 &  0 &  -4 \\
0 &  1 &  0 & -1 & -18 \\
0 &  2 &  1 &  1 & 158 \\ \end {array} }\)






$r_3 \to r_3 - r_1$, $r_4 \to r_4 - r_1$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 & -1 &  0 &  0 &  -2 \\
0 &  1 & -1 &  0 &  -4 \\
0 &  0 &  1 & -1 & -14 \\
0 &  0 &  3 &  1 & 166 \\ \end {array} }\)






$r_4 \to r_4 - 2 r_2$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 & -1 &  0 &  0 &  -2 \\
0 &  1 & -1 &  0 &  -4 \\
0 &  0 &  1 & -1 & -14 \\
0 &  0 &  0 &  4 & 208 \\ \end {array} }\)






$r_4 \to r_4 - 3 r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 & -1 &  0 &  0 &  -2 \\
0 &  1 & -1 &  0 &  -4 \\
0 &  0 &  1 & -1 & -14 \\
0 &  0 &  0 &  1 &  52 \\ \end {array} }\)






$r_4 \to r_4 / 4$



Hence Robinson's mother is $52$, making Robinson $32$.
His brother is therefore $34$ and his sister $38$.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $48$. -- Robinson's Age
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $45$. Robinson's Age




