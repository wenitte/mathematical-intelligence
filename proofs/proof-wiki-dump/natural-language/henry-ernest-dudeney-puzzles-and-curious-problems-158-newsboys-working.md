# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/158_-_Newsboys/Working

Working for Puzzles and Curious Problems by Henry Ernest Dudeney: $158$ -- Newsboys
The simultaneous equations in matrix form:

$\begin {pmatrix}
-1 &  0 &  0 &  0 &  0 &  4 \\
-1 &  0 &  0 &  0 &  4 &  1 \\
-1 &  0 &  0 &  4 &  1 &  1 \\
-1 &  0 &  4 &  1 &  1 &  1 \\
-1 &  1 &  1 &  1 &  1 &  1 \\

0 &  0 & -1 &  1 & -1 &  1 \\

\end {pmatrix} \begin {pmatrix} n \\ J_J \\ J_C \\ S_N \\ J_B \\ S_T \end {pmatrix} = \begin {pmatrix} 4 \\ 4 \\ 4 \\ 4 \\ 0 \\ 100 \end {pmatrix}$

when converted to reduced echelon form, gives:

$\begin {pmatrix}
1 &  0 &  0 &  0 &  0 &  0 \\
0 &  1 &  0 &  0 &  0 &  0 \\
0 &  0 &  1 &  0 &  0 &  0 \\
0 &  0 &  0 &  1 &  0 &  0 \\
0 &  0 &  0 &  0 &  1 &  0 \\
0 &  0 &  0 &  0 &  0 &  1 \\

\end {pmatrix} \begin {pmatrix} n \\ J_J \\ J_C \\ S_N \\ J_B \\ S_T \end {pmatrix} = \begin {pmatrix} 1020 \\ 320 \\ 108 \\ 144 \\ 192 \\ 256 \end {pmatrix}$


Proof













\(\ds \)

\(\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
-1 &  0 &  0 &  0 &  0 &  4 &   4 \\
-1 &  0 &  0 &  0 &  4 &  1 &   4 \\
-1 &  0 &  0 &  4 &  1 &  1 &   4 \\
-1 &  0 &  4 &  1 &  1 &  1 &   4 \\
-1 &  1 &  1 &  1 &  1 &  1 &   0 \\

0 &  0 & -1 &  1 & -1 &  1 & 100 \\ \end {array} }\)





















\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &  0 & -4 &  -4 \\

-1 &  0 &  0 &  0 &  4 &  1 &   4 \\
-1 &  0 &  0 &  4 &  1 &  1 &   4 \\
-1 &  0 &  4 &  1 &  1 &  1 &   4 \\
-1 &  1 &  1 &  1 &  1 &  1 &   0 \\

0 &  0 & -1 &  1 & -1 &  1 & 100 \\ \end {array} }\)






$r_1 \to -r_1$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &  0 & -4 &  -4 \\
0 &  0 &  0 &  0 &  4 & -3 &   0 \\
0 &  0 &  0 &  4 &  1 & -3 &   0 \\
0 &  0 &  4 &  1 &  1 & -3 &   0 \\
0 &  1 &  1 &  1 &  1 & -3 &  -4 \\
0 &  0 & -1 &  1 & -1 &  1 & 100 \\ \end {array} }\)






$r_2 \to r_2 + r_1$, $r_3 \to r_3 + r_1$, $r_4 \to r_4 + r_1$, $r_5 \to r_5 + r_1$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &  0 & -4 &   -4 \\
0 &  1 &  1 &  1 &  1 & -3 &   -4 \\
0 &  0 &  1 & -1 &  1 & -1 & -100 \\
0 &  0 &  0 &  0 &  4 & -3 &    0 \\
0 &  0 &  0 &  4 &  1 & -3 &    0 \\
0 &  0 &  4 &  1 &  1 & -3 &    0 \\ \end {array} }\)






rearranging the rows and $r_3 \to -r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &  0 & -4 &   -4 \\
0 &  1 &  1 &  1 &  1 & -3 &   -4 \\
0 &  0 &  1 & -1 &  1 & -1 & -100 \\
0 &  0 &  0 &  0 &  4 & -3 &    0 \\
0 &  0 &  0 &  4 &  1 & -3 &    0 \\
0 &  0 &  0 &  5 & -3 &  1 &  400 \\ \end {array} }\)






$r_6 \to r_6 - 4 r_3$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &  0 & -4 &   -4 \\
0 &  1 &  1 &  1 &  1 & -3 &   -4 \\
0 &  0 &  1 & -1 &  1 & -1 & -100 \\
0 &  0 &  0 &  4 &  1 & -3 &    0 \\
0 &  0 &  0 &  5 & -3 &  1 &  400 \\
0 &  0 &  0 &  0 &  4 & -3 &    0 \\ \end {array} }\)






rearranging the rows














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &          0 &          -4 &   -4 \\
0 &  1 &  1 &  1 &          1 &          -3 &   -4 \\
0 &  0 &  1 & -1 &          1 &          -1 & -100 \\
0 &  0 &  0 &  1 & \tfrac 1 4 & -\tfrac 3 4 &    0 \\
0 &  0 &  0 &  5 &         -3 &           1 &  400 \\
0 &  0 &  0 &  0 &          4 &          -3 &    0 \\ \end {array} }\)






$r_4 \to r_4 / 4$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &              0 &            -4 &   -4 \\
0 &  1 &  1 &  1 &              1 &            -3 &   -4 \\
0 &  0 &  1 & -1 &              1 &            -1 & -100 \\
0 &  0 &  0 &  1 &     \tfrac 1 4 &   -\tfrac 3 4 &    0 \\
0 &  0 &  0 &  0 & -\tfrac {17} 4 & \tfrac {19} 4 &  400 \\
0 &  0 &  0 &  0 &              4 &            -3 &    0 \\ \end {array} }\)






$r_5 \to r_5 - 5 r_4$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &              0 &            -4 &   -4 \\
0 &  1 &  1 &  1 &              1 &            -3 &   -4 \\
0 &  0 &  1 & -1 &              1 &            -1 & -100 \\
0 &  0 &  0 &  1 &     \tfrac 1 4 &   -\tfrac 3 4 &    0 \\
0 &  0 &  0 &  0 &              4 &            -3 &    0 \\
0 &  0 &  0 &  0 & -\tfrac {17} 4 & \tfrac {19} 4 &  400 \\ \end {array} }\)






$r_5 \leftrightarrow r_6$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &              0 &            -4 &   -4 \\
0 &  1 &  1 &  1 &              1 &            -3 &   -4 \\
0 &  0 &  1 & -1 &              1 &            -1 & -100 \\
0 &  0 &  0 &  1 &     \tfrac 1 4 &   -\tfrac 3 4 &    0 \\
0 &  0 &  0 &  0 &              1 &   -\tfrac 3 4 &    0 \\
0 &  0 &  0 &  0 & -\tfrac {17} 4 & \tfrac {19} 4 &  400 \\ \end {array} }\)






$r_5 \to r_5 / 4$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &          0 &               -4 &   -4 \\
0 &  1 &  1 &  1 &          1 &               -3 &   -4 \\
0 &  0 &  1 & -1 &          1 &               -1 & -100 \\
0 &  0 &  0 &  1 & \tfrac 1 4 &      -\tfrac 3 4 &    0 \\
0 &  0 &  0 &  0 &          1 &      -\tfrac 3 4 &    0 \\
0 &  0 &  0 &  0 &          0 & \tfrac {25} {16} &  400 \\ \end {array} }\)






$r_6 \to r_6 + \tfrac {17} 4 r_5$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &          0 &          -4 &   -4 \\
0 &  1 &  1 &  1 &          1 &          -3 &   -4 \\
0 &  0 &  1 & -1 &          1 &          -1 & -100 \\
0 &  0 &  0 &  1 & \tfrac 1 4 & -\tfrac 3 4 &    0 \\
0 &  0 &  0 &  0 &          1 & -\tfrac 3 4 &    0 \\
0 &  0 &  0 &  0 &          0 &           1 &  256 \\ \end {array} }\)






$r_6 \to \tfrac {16} {25} r_6$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 &          0 &  0 & 1020 \\
0 &  1 &  1 &  1 &          1 &  0 &  768 \\
0 &  0 &  1 & -1 &          1 &  0 &  156 \\
0 &  0 &  0 &  1 & \tfrac 1 4 &  0 &  192 \\
0 &  0 &  0 &  0 &          1 &  0 &  192 \\
0 &  0 &  0 &  0 &          0 &  1 &  256 \\ \end {array} }\)






$r_5 \to r_5 + \dfrac 3 4 r_6$, $r_4 \to r_4 + \dfrac 3 4 r_6$, $r_3 \to r_3 + r_6$, $r_2 \to r_2 + 3 r_6$, $r_1 \to r_1 + 4 r_6$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 & 0 &  0 & 1020 \\
0 &  1 &  1 &  1 & 0 &  0 &  572 \\
0 &  0 &  1 & -1 & 0 &  0 &  -36 \\
0 &  0 &  0 &  1 & 0 &  0 &  144 \\
0 &  0 &  0 &  0 & 1 &  0 &  192 \\
0 &  0 &  0 &  0 & 0 &  1 &  256 \\ \end {array} }\)






$r_4 \to r_4 - \dfrac 1 4 r_5$, $r_3 \to r_3 - r_5$, $r_2 \to r_2 - r_5$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 & 0 &  0 & 1020 \\
0 &  1 &  1 &  0 & 0 &  0 &  428 \\
0 &  0 &  1 &  0 & 0 &  0 &  108 \\
0 &  0 &  0 &  1 & 0 &  0 &  144 \\
0 &  0 &  0 &  0 & 1 &  0 &  192 \\
0 &  0 &  0 &  0 & 0 &  1 &  256 \\ \end {array} }\)






$r_3 \to r_3 + r_4$, $r_2 \to r_2 + r_4$














\(\ds \)

\(\leadsto\)







\(\ds \paren {\begin {array} {cccccc{{|}}c}
1 &  0 &  0 &  0 & 0 &  0 & 1020 \\
0 &  1 &  0 &  0 & 0 &  0 &  320 \\
0 &  0 &  1 &  0 & 0 &  0 &  108 \\
0 &  0 &  0 &  1 & 0 &  0 &  144 \\
0 &  0 &  0 &  0 & 1 &  0 &  192 \\
0 &  0 &  0 &  0 & 0 &  1 &  256 \\ \end {array} }\)






$r_2 \to r_2 - r_3$



$\blacksquare$





