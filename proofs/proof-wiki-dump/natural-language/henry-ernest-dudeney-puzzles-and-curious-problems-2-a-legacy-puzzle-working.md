# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/2_-_A_Legacy_Puzzle/Working

Working for Puzzles and Curious Problems by Henry Ernest Dudeney: $2$ -- A Legacy Puzzle
The simultaneous equations in matrix form:
$\quad \begin {pmatrix}
1 &  1 &  1 &  1 \\
1 & -1 & -1 &  1 \\
-2 &  1 & -2 &  1 \\
-3 & -3 &  1 &  1 \\
\end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ h \end {pmatrix} = \begin {pmatrix} 1320 \\ 0 \\ 0 \\ 0 \end {pmatrix}$

when converted to reduced echelon form, gives:
$\quad \begin {pmatrix} 
1 & 0 &  0 &  0 \\
0 & 1 &  0 &  0 \\
0 & 0 &  1 &  0 \\
0 & 0 &  0 &  1 \end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ h \end {pmatrix} = \begin {pmatrix} 55 \\ 275 \\ 385 \\ 605 \\ \end {pmatrix}$


Proof













\(\ds \)

\(\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  1 &  1 &  1 & 1320 \\
1 & -1 & -1 &  1 &    0 \\
-2 &  1 & -2 &  1 &    0 \\
-3 & -3 &  1 &  1 &    0 \\ \end {array} }\)




















\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  1 &  1 &  1 &  1320 \\
0 & -2 & -2 &  0 & -1320 \\
0 &  3 &  0 &  3 &  2640 \\
0 &  0 &  4 &  4 &  3960 \\ \end {array} }\)





$r_2 \to r_2 - r_1$, $r_3 \to r_3 + 2 r_1$, $r_4 \to r_4 + 3 r_1$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  1 &  1 &  1 &  1320 \\
0 &  1 &  1 &  0 &  660 \\
0 &  1 &  0 &  1 &  880 \\
0 &  0 &  1 &  1 &  990 \\ \end {array} }\)





$r_2 \to -\dfrac {r_2} 2$, $r_3 \to \dfrac {r_3} 3$, $r_4 \to \dfrac {r_4} 4$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  1 &  1 &  1 &  1320 \\
0 &  1 &  1 &  0 &  660 \\
0 &  0 & -1 &  1 &  220 \\
0 &  0 &  1 &  1 &  990 \\ \end {array} }\)





$r_3 \to r_3 - r_2$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  1 &  1 &  1 &  1320 \\
0 &  1 &  1 &  0 &  660 \\
0 &  0 &  1 & -1 & -220 \\
0 &  0 &  1 &  1 &  990 \\ \end {array} }\)





$r_3 \to -r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  1 &  1 &  1 &  1320 \\
0 &  1 &  1 &  0 &  660 \\
0 &  0 &  1 & -1 & -220 \\
0 &  0 &  0 &  2 & 1210 \\ \end {array} }\)





$r_4 \to r_4 - r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  1 &  1 &  1 & 1320 \\
0 &  1 &  1 &  0 &  660 \\
0 &  0 &  1 & -1 & -220 \\
0 &  0 &  0 &  1 &  605 \\ \end {array} }\)





$r_4 \to \dfrac {r_4} 2$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  1 &  1 &  0 & 715 \\
0 &  1 &  1 &  0 & 660 \\
0 &  0 &  1 &  0 & 385 \\
0 &  0 &  0 &  1 & 605 \\ \end {array} }\)





$r_3 \to r_3 + r_4$, $r_1 \to r_1 - r_4$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  0 &  0 &  0 &  55 \\
0 &  1 &  1 &  0 & 660 \\
0 &  0 &  1 &  0 & 385 \\
0 &  0 &  0 &  1 & 605 \\ \end {array} }\)





$r_1 \to r_1 - r_2$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccc{{|}}c}
1 &  0 &  0 &  0 &  55 \\
0 &  1 &  0 &  0 & 275 \\
0 &  0 &  1 &  0 & 385 \\
0 &  0 &  0 &  1 & 605 \\ \end {array} }\)





$r_2 \to r_2 - r_3$



$\blacksquare$





