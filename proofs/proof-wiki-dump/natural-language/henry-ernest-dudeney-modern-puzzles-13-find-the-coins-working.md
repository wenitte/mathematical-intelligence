# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/13_-_Find_the_Coins/Working

Working for Modern Puzzles by Henry Ernest Dudeney: $13$ -- Find the Coins
The simultaneous equations in matrix form:

$\begin {bmatrix} 4 & -4 & -4 \\ -2 & 6 & -2 \\ -1 & -1 & 7 \end {bmatrix} \begin {bmatrix} a \\ b \\ c \end {bmatrix} = \begin {bmatrix} 120 \\ 120 \\ 120 \end {bmatrix}$
when converted to reduced echelon form, gives:

$\begin {bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end {bmatrix} \begin {bmatrix} a \\ b \\ c \end {bmatrix} = \begin {bmatrix} 195 \\ 105 \\ 60 \end {bmatrix}$
Proof













\(\ds \)

\(\)







\(\ds \paren {\begin {array} {ccc{{|}}c} 4 & -4 & -4 & 120 \\ -2 & 6 & -2 & 120 \\ -1 & -1 & 7 & 120 \end {array} }\)




















\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccc{{|}}c} 1 & -1 & -1 & 30 \\ -1 & 3 & -1 & 60 \\ -1 & -1 & 7 & 120 \end {array} }\)





$r_1 \to r_1 / 4$, $r_2 \to r_2 / 2$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccc{{|}}c} 1 & -1 & -1 & 30 \\ 0 & 2 & -2 & 90 \\ 0 & -2 & 6 & 150 \end {array} }\)





$r_2 \to r_2 + r_1$, $r_3 \to r_3 + r_1$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccc{{|}}c} 1 & -1 & -1 & 30 \\ 0 & 1 & -1 & 45 \\ 0 & -1 & 3 & 75 \end {array} }\)





$r_2 \to r_2 / 2$, $r_3 \to r_3 / 2$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccc{{|}}c} 1 & -1 & -1 & 30 \\ 0 & 1 & -1 & 45 \\ 0 & 0 & 2 & 120 \end {array} }\)





$r_3 \to r_3 + r_2$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccc{{|}}c} 1 & -1 & -1 & 30 \\ 0 & 1 & -1 & 45 \\ 0 & 0 & 1 & 60 \end {array} }\)





$r_3 \to r_3 / 2$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccc{{|}}c} 1 & -1 & 0 & 90 \\ 0 & 1 & 0 & 105 \\ 0 & 0 & 1 & 60 \end {array} }\)





$r_1 \to r_1 + r_3$, $r_2 \to r_2 + r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {ccc{{|}}c} 1 & 0 & 0 & 195 \\ 0 & 1 & 0 & 105 \\ 0 & 0 & 1 & 60 \end {array} }\)





$r_1 \to r_1 + r_2$



$\blacksquare$





