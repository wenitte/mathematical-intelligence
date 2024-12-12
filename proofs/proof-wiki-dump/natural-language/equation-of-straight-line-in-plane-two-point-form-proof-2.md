# 

Source: https://proofwiki.org/wiki/Equation_of_Straight_Line_in_Plane/Two-Point_Form/Proof_2

Theorem
Let $P_1 := \tuple {x_1, y_1}$ and $P_2 := \tuple {x_2, y_2}$ be points in a cartesian plane.
Let $\LL$ be the straight line passing through $P_1$ and $P_2$.

Then $\LL$ can be described by the equation:

$\dfrac {y - y_1} {x - x_1} = \dfrac {y_2 - y_1} {x_2 - x_1}$
or:

$\dfrac {x - x_1} {x_2 - x_1} = \dfrac {y - y_1} {y_2 - y_1}$
This is known as the two-point form.


Proof
Let $\tuple {x, y}$ be an arbitrary point on the straight line through $\tuple {x_1, y_1}$ and $\tuple {x_2, y_2}$.
The area of the triangle formed by $\tuple {x, y}$, $\tuple {x_1, y_1}$ and $\tuple {x_2, y_2}$ is equal to $0$.
Hence from Area of Triangle in Determinant Form:

$\AA = \dfrac 1 2 \size {\paren {\begin {vmatrix} x & y & 1 \\ x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ \end {vmatrix} } }$
Hence:














\(\ds 0\)

\(=\)







\(\ds \dfrac 1 2 \size {\paren {\begin {vmatrix} x & y & 1 \\ x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ \end {vmatrix} } }\)





Area of Triangle in Determinant Form














\(\ds \)

\(=\)







\(\ds x_1 y_2 - x_2 y_1 + x_2 y - x y_2 + x y_1 - x_1 y\)














\(\ds \leadsto \ \ \)





\(\ds x_2 \paren {y - y_1} - y_2 \paren {x - x_1}\)

\(=\)







\(\ds y x_1 - x y_1\)




















\(\ds \)

\(=\)







\(\ds x_1 \paren {y - y_1} - y_1 \paren {x - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x_2 - x_1} \paren {y - y_1}\)

\(=\)







\(\ds \paren {y_2 - y_1} \paren {x - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x_2 - x_1} {x - x_1}\)

\(=\)







\(\ds \dfrac {y_2 - y_1} {y - y_1}\)









$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {III}$. Analytical Geometry: The Straight Line: Equation of a Straight Line




