# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/22_-_Mrs._Wilson%27s_Family/Working

Working for Modern Puzzles by Henry Ernest Dudeney: $22$ -- Mrs. Wilson's Family
The simultaneous equations in matrix form:

$\begin {pmatrix}
1 & 0 & -1 &  1 & -1 &  0 \\
1 & 1 &  1 &  1 &  1 & -2 \\
1 & 1 &  0 &  0 &  0 & -1 \\
1 & 0 &  0 & -1 & -1 &  0 \\
1 & 1 &  1 &  0 &  1 & -1 \\
2 & 2 &  2 &  0 &  0 & -1 \\
\end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ d \\ e \\ M \end {pmatrix} = \begin {pmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 30 \\ 75 \\ \end {pmatrix}$

when converted to reduced echelon form, gives:

$\begin {pmatrix}
1 & 0 &  0 &  0 &  0 &  0 \\
0 & 1 &  0 &  0 &  0 &  0 \\
0 & 0 &  1 &  0 &  0 &  0 \\
0 & 0 &  0 &  1 &  0 &  0 \\
0 & 0 &  0 &  0 &  1 &  0 \\
0 & 0 &  0 &  0 &  0 &  1 \\ \end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ d \\ e \\ M \end {pmatrix} = \begin {pmatrix} 21 \\ 18 \\ 18 \\ 9 \\ 12 \\ 39 \\ \end {pmatrix}$


Proof













\(\ds \)

\(\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &  0 \\
1 & 1 &  1 &  1 &  1 & -2 &  0 \\
1 & 1 &  0 &  0 &  0 & -1 &  0 \\
1 & 0 &  0 & -1 & -1 &  0 &  0 \\
1 & 1 &  1 &  0 &  1 & -1 & 30 \\
2 & 2 &  2 &  0 &  0 & -1 & 75 \\ \end {array} }\)





















\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &  0 \\
0 & 1 &  2 &  0 &  2 & -2 &  0 \\
0 & 1 &  1 & -1 &  1 & -1 &  0 \\
0 & 0 &  1 & -2 &  0 &  0 &  0 \\
0 & 1 &  2 & -1 &  2 & -1 & 30 \\
0 & 2 &  4 & -2 &  2 & -1 & 75 \\ \end {array} }\)






$r_2 \to r_2 - r_1$, $r_3 \to r_3 - r_1$, $r_4 \to r_4 - r_1$, $r_5 \to r_5 - r_1$, $r_6 \to r_6 - 2 r_1$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &  0 \\
0 & 1 &  2 &  0 &  2 & -2 &  0 \\
0 & 0 & -1 & -1 & -1 &  1 &  0 \\
0 & 0 &  1 & -2 &  0 &  0 &  0 \\
0 & 0 &  0 & -1 &  0 &  1 & 30 \\
0 & 0 &  0 & -2 & -2 &  3 & 75 \\ \end {array} }\)






$r_3 \to r_3 - r_2$, $r_5 \to r_5 - r_2$, $r_6 \to r_6 - 2 r_2$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &  0 \\
0 & 1 &  2 &  0 &  2 & -2 &  0 \\
0 & 0 &  1 &  1 &  1 & -1 &  0 \\
0 & 0 &  1 & -2 &  0 &  0 &  0 \\
0 & 0 &  0 & -1 &  0 &  1 & 30 \\
0 & 0 &  0 & -2 & -2 &  3 & 75 \\ \end {array} }\)






$r_3 \to -r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &  0 \\
0 & 1 &  2 &  0 &  2 & -2 &  0 \\
0 & 0 &  1 &  1 &  1 & -1 &  0 \\
0 & 0 &  0 & -3 & -1 &  1 &  0 \\
0 & 0 &  0 & -1 &  0 &  1 & 30 \\
0 & 0 &  0 & -2 & -2 &  3 & 75 \\ \end {array} }\)






$r_4 \to r_4 - r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &  0 \\
0 & 1 &  2 &  0 &  2 & -2 &  0 \\
0 & 0 &  1 &  1 &  1 & -1 &  0 \\
0 & 0 &  0 & -1 &  0 &  1 & 30 \\
0 & 0 &  0 & -3 & -1 &  1 &  0 \\
0 & 0 &  0 & -2 & -2 &  3 & 75 \\ \end {array} }\)






$r_4 \leftrightarrow r_5$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &   0 \\
0 & 1 &  2 &  0 &  2 & -2 &   0 \\
0 & 0 &  1 &  1 &  1 & -1 &   0 \\
0 & 0 &  0 &  1 &  0 & -1 & -30 \\
0 & 0 &  0 & -3 & -1 &  1 &   0 \\
0 & 0 &  0 & -2 & -2 &  3 &  75 \\ \end {array} }\)






$r_4 \to -r_4$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &   0 \\
0 & 1 &  2 &  0 &  2 & -2 &   0 \\
0 & 0 &  1 &  1 &  1 & -1 &   0 \\
0 & 0 &  0 &  1 &  0 & -1 & -30 \\
0 & 0 &  0 &  0 & -1 & -2 & -90 \\
0 & 0 &  0 &  0 & -2 &  1 &  15 \\ \end {array} }\)






$r_5 \to r_5 + 3 r_4$, $r_6 \to r_6 + 2 r_4$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &   0 \\
0 & 1 &  2 &  0 &  2 & -2 &   0 \\
0 & 0 &  1 &  1 &  1 & -1 &   0 \\
0 & 0 &  0 &  1 &  0 & -1 & -30 \\
0 & 0 &  0 &  0 &  1 &  2 &  90 \\
0 & 0 &  0 &  0 & -2 &  1 &  15 \\ \end {array} }\)






$r_5 \to -r_5$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &   0 \\
0 & 1 &  2 &  0 &  2 & -2 &   0 \\
0 & 0 &  1 &  1 &  1 & -1 &   0 \\
0 & 0 &  0 &  1 &  0 & -1 & -30 \\
0 & 0 &  0 &  0 &  1 &  2 &  90 \\
0 & 0 &  0 &  0 &  0 &  5 & 195 \\ \end {array} }\)






$r_6 \to r_6 + 2 r_5$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &   0 \\
0 & 1 &  2 &  0 &  2 & -2 &   0 \\
0 & 0 &  1 &  1 &  1 & -1 &   0 \\
0 & 0 &  0 &  1 &  0 & -1 & -30 \\
0 & 0 &  0 &  0 &  1 &  2 &  90 \\
0 & 0 &  0 &  0 &  0 &  1 &  39 \\ \end {array} }\)






$r_6 \to r_6 / 5$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 & -1 &  0 &   0 \\
0 & 1 &  2 &  0 &  2 &  0 &  78 \\
0 & 0 &  1 &  1 &  1 &  0 &  39 \\
0 & 0 &  0 &  1 &  0 &  0 &   9 \\
0 & 0 &  0 &  0 &  1 &  0 &  12 \\
0 & 0 &  0 &  0 &  0 &  1 &  39 \\ \end {array} }\)






$r_5 \to r_5 - 2 r_6$, $r_4 \to r_4 + r_6$, $r_3 \to r_3 + r_6$, $r_2 \to r_2 + 2 r_6$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  1 &  0 &  0 &  12 \\
0 & 1 &  2 &  0 &  0 &  0 &  54 \\
0 & 0 &  1 &  1 &  0 &  0 &  27 \\
0 & 0 &  0 &  1 &  0 &  0 &   9 \\
0 & 0 &  0 &  0 &  1 &  0 &  12 \\
0 & 0 &  0 &  0 &  0 &  1 &  39 \\ \end {array} }\)






$r_3 \to r_3 - r_5$, $r_2 \to r_2 - 2 r_5$, $r_1 \to r_1 + r_5$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 & -1 &  0 &  0 &  0 &   3 \\
0 & 1 &  2 &  0 &  0 &  0 &  54 \\
0 & 0 &  1 &  0 &  0 &  0 &  18 \\
0 & 0 &  0 &  1 &  0 &  0 &   9 \\
0 & 0 &  0 &  0 &  1 &  0 &  12 \\
0 & 0 &  0 &  0 &  0 &  1 &  39 \\ \end {array} }\)






$r_3 \to r_3 - r_4$, $r_1 \to r_1 - r_4$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 & 0 &  0 &  0 &  0 &  0 &  21 \\
0 & 1 &  0 &  0 &  0 &  0 &  18 \\
0 & 0 &  1 &  0 &  0 &  0 &  18 \\
0 & 0 &  0 &  1 &  0 &  0 &   9 \\
0 & 0 &  0 &  0 &  1 &  0 &  12 \\
0 & 0 &  0 &  0 &  0 &  1 &  39 \\ \end {array} }\)






$r_2 \to r_2 - 2 r_3$, $r_1 \to r_1 + r_3$



$\blacksquare$





