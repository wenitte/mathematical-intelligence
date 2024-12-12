# 

Source: https://proofwiki.org/wiki/Area_of_Triangle_in_Determinant_Form/Proof_3

Theorem
Let $A = \tuple {x_1, y_1}, B = \tuple {x_2, y_2}, C = \tuple {x_3, y_3}$ be points in the Cartesian plane.
The area $\AA$ of the triangle whose vertices are at $A$, $B$ and $C$ is given by:

$\AA = \dfrac 1 2 \size {\paren {\begin {vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \\ \end {vmatrix} } }$


Proof

Let $A$, $B$ and $C$ be defined as $\tuple {x_1, y_1}$, $\tuple {x_2, y_2}$ and $\tuple {x_3, y_3}$ respectively.
From the figure, we see that:














\(\ds \map \Area {ABC}\)

\(=\)







\(\ds \map \Area {PACR} + \map \Area {RCBQ} - \map \Area {PABQ}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {x_3 - x_1} \paren {y_3 + y_1} } 2 + \dfrac {\paren {x_2 - x_3} \paren {y_2 + y_3} } 2 - \dfrac {\paren {x_2 - x_1} \paren {y_1 + y_2} } 2\)





Area of Trapezium














\(\ds \)

\(=\)







\(\ds \dfrac {x_1 y_2 - x_2 y_1 + x_2 y_3 - x_3 y_2 + x_3 y_1 - x_1 y_3} 2\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \size {\paren {\begin {vmatrix}  x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \\ \end {vmatrix} } }\)





Determinant of Order 3



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {III}$. Analytical Geometry: The Straight Line: The area of the triangle $ABC$




