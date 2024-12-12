# 

Source: https://proofwiki.org/wiki/Area_of_Triangle_in_Determinant_Form/Proof_1

Theorem
Let $A = \tuple {x_1, y_1}, B = \tuple {x_2, y_2}, C = \tuple {x_3, y_3}$ be points in the Cartesian plane.
The area $\AA$ of the triangle whose vertices are at $A$, $B$ and $C$ is given by:

$\AA = \dfrac 1 2 \size {\paren {\begin {vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \\ \end {vmatrix} } }$


Proof

Let $A$, $B$ and $C$ be defined as complex numbers in the complex plane.
The vectors from $C$ to $A$ and from $C$ to $B$ are given by:

$z_1 = \paren {x_1 - x_3} + i \paren {y_1 - y_3}$
$z_2 = \paren {x_2 - x_3} + i \paren {y_2 - y_3}$
From Area of Triangle in Terms of Side and Altitude, $\AA$ is half that of a parallelogram contained by $z_1$ and $z_2$.
Thus:














\(\ds \AA\)

\(=\)







\(\ds \frac 1 2 z_1 \times z_2\)





Area of Parallelogram in Complex Plane














\(\ds \)

\(=\)







\(\ds \frac 1 2 \size {\paren {\map \Im {\paren {x_1 - x_3} - i \paren {y_1 - y_3} } \paren {\paren {x_2 - x_3} - i \paren {y_2 - y_3} } } }\)





Definition 3 of Vector Cross Product














\(\ds \)

\(=\)







\(\ds \frac 1 2 \size {\paren {x_1 - x_3} \paren {y_2 - y_3} - \paren {y_1 - y_3} \paren {x_2 - x_3} }\)





Definition of Complex Multiplication














\(\ds \)

\(=\)







\(\ds \frac 1 2 \size {x_1 y_2 - y_1 x_2 + x_2 y_3 - y_2 x_3 + x_3 y_1 - y_3 x_1}\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac 1 2 \size {\paren {\begin {vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \\ \end {vmatrix} } }\)





Determinant of Order 3



$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: Dot and Cross Product: $42$




