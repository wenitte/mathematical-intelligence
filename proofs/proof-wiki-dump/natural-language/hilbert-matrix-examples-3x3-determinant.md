# 

Source: https://proofwiki.org/wiki/Hilbert_Matrix/Examples/3x3/Determinant

Examples of Hilbert Matrices
The determinant of the order $3$ Hilbert matrix is given by:

$\map \det {H_3} = \dfrac 1 {2160}$


Proof













\(\ds \map \det {H_3}\)

\(=\)







\(\ds \begin {vmatrix}
1 & \tfrac 1 2 & \tfrac 1 3 \\
\tfrac 1 2 & \tfrac 1 3 & \tfrac 1 4 \\
\tfrac 1 3 & \tfrac 1 4 & \tfrac 1 5 \\
\end {vmatrix}\)





Definition of Hilbert Matrix














\(\ds \)

\(=\)







\(\ds 1 \times \begin {vmatrix} \dfrac 1 3 & \dfrac 1 4 \\ \dfrac 1 4 & \dfrac 1 5 \end {vmatrix}
 - \dfrac 1 2 \times \begin {vmatrix} \dfrac 1 2 & \dfrac 1 4 \\ \dfrac 1 3 & \dfrac 1 5 \end {vmatrix}
 + \dfrac 1 3 \times \begin {vmatrix} \dfrac 1 2 & \dfrac 1 3 \\ \dfrac 1 3 & \dfrac 1 4 \end {vmatrix}\)





Expansion Theorem for Determinants














\(\ds \)

\(=\)







\(\ds 1 \times \paren {\dfrac 1 3 \times \dfrac 1 5 - \dfrac 1 4 \times \dfrac 1 4}
 - \dfrac 1 2 \times \paren {\dfrac 1 2 \times \dfrac 1 5 - \dfrac 1 4 \times \dfrac 1 3}
 + \dfrac 1 3 \times \paren {\dfrac 1 2 \times \dfrac 1 4 - \dfrac 1 3 \times \dfrac 1 3}\)





Expansion Theorem for Determinants














\(\ds \)

\(=\)







\(\ds \paren {\dfrac 1 {15} - \dfrac 1 {16} }
 - \dfrac 1 2 \times \paren {\dfrac 1 {10} - \dfrac 1 {12} }
 + \dfrac 1 3 \times \paren {\dfrac 1 8 - \dfrac 1 9}\)





Multiplication of Fractions














\(\ds \)

\(=\)







\(\ds \dfrac {16 - 15} {15 \times 16} - \dfrac {12 - 10} {2 \times 10 \times 12} + \dfrac {9 - 8} {3 \times 8 \times 9}\)





Addition of Fractions and Multiplication of Fractions














\(\ds \)

\(=\)







\(\ds \dfrac 1 {240} - \dfrac 1 {120} + \dfrac 1 {216}\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {216} - \dfrac 1 {240}\)





simplification, noting that $\dfrac 1 {240} = \dfrac 1 2 \times \dfrac 1 {120}$














\(\ds \)

\(=\)







\(\ds \dfrac {240 - 216} {216 \times 240}\)





Addition of Fractions














\(\ds \)

\(=\)







\(\ds \dfrac {24} {51 \, 840}\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2160}\)





dividing top and bottom by $24$



$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Hilbert matrix
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Hilbert matrix




