# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/134_-_The_Bag_of_Nuts/Working

Working for Puzzles and Curious Problems by Henry Ernest Dudeney: $134$ -- The Bag of Nuts
The simultaneous equations in matrix form:

$\begin {pmatrix}
1 &  1 &  1 &  1 &  1 \\
1 &  1 &  0 &  0 &  0 \\
0 &  1 &  1 &  0 &  0 \\
0 &  0 &  1 &  1 &  0 \\
0 &  0 &  0 &  1 &  1 \\

\end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ d \\ e \end {pmatrix} = \begin {pmatrix} 100 \\ 52 \\ 43 \\ 34 \\ 30 \end {pmatrix}$

when converted to reduced echelon form, gives:

$\begin {pmatrix}
1 &  0 &  0 &  0 &  0 \\
0 &  1 &  0 &  0 &  0 \\
0 &  0 &  1 &  0 &  0 \\
0 &  0 &  0 &  1 &  0 \\
0 &  0 &  0 &  0 &  1 \end {pmatrix} \begin {pmatrix} a \\ b \\ c \\ d \\ e \end {pmatrix} = \begin {pmatrix} 27 \\ 25 \\ 18 \\ 16 \\ 14 \end {pmatrix}$



Proof













\(\ds \)

\(\)







\(\ds \paren {\begin {array} {ccccc{{|}}c}
1 &  1 &  0 &  0 &  0 &  52 \\
0 &  1 &  1 &  0 &  0 &  43 \\
0 &  0 &  1 &  1 &  0 &  34 \\
0 &  0 &  0 &  1 &  1 &  30 \\
1 &  1 &  1 &  1 &  1 & 100 \\ \end {array} }\)






rearranging for convenience














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccccc{{|}}c}
1 &  1 &  0 &  0 &  0 &  52 \\
0 &  1 &  1 &  0 &  0 &  43 \\
0 &  0 &  1 &  1 &  0 &  34 \\
0 &  0 &  0 &  1 &  1 &  30 \\
0 &  0 &  1 &  1 &  1 &  48 \\ \end {array} }\)






$r_5 \to r_5 - r_1$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccccc{{|}}c}
1 &  1 &  0 &  0 &  0 &  52 \\
0 &  1 &  1 &  0 &  0 &  43 \\
0 &  0 &  1 &  1 &  0 &  34 \\
0 &  0 &  0 &  1 &  1 &  30 \\
0 &  0 &  0 &  0 &  1 &  14 \\ \end {array} }\)






$r_5 \to r_5 - r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccccc{{|}}c}
1 &  1 &  0 &  0 &  0 &  52 \\
0 &  1 &  1 &  0 &  0 &  43 \\
0 &  0 &  1 &  1 &  0 &  34 \\
0 &  0 &  0 &  1 &  0 &  16 \\
0 &  0 &  0 &  0 &  1 &  14 \\ \end {array} }\)






$r_4 \to r_4 - r_5$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccccc{{|}}c}
1 &  1 &  0 &  0 &  0 &  52 \\
0 &  1 &  1 &  0 &  0 &  43 \\
0 &  0 &  1 &  0 &  0 &  18 \\
0 &  0 &  0 &  1 &  0 &  16 \\
0 &  0 &  0 &  0 &  1 &  14 \\ \end {array} }\)






$r_3 \to r_3 - r_4$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccccc{{|}}c}
1 &  1 &  0 &  0 &  0 &  52 \\
0 &  1 &  0 &  0 &  0 &  25 \\
0 &  0 &  1 &  0 &  0 &  18 \\
0 &  0 &  0 &  1 &  0 &  16 \\
0 &  0 &  0 &  0 &  1 &  14 \\ \end {array} }\)






$r_2 \to r_2 - r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccccc{{|}}c}
1 &  0 &  0 &  0 &  0 &  27 \\
0 &  1 &  0 &  0 &  0 &  25 \\
0 &  0 &  1 &  0 &  0 &  18 \\
0 &  0 &  0 &  1 &  0 &  16 \\
0 &  0 &  0 &  0 &  1 &  14 \\ \end {array} }\)






$r_1 \to r_1 - r_2$



$\blacksquare$





