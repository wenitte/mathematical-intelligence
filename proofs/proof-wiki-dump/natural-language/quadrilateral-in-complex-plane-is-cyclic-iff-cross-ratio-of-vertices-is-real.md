# 

Source: https://proofwiki.org/wiki/Quadrilateral_in_Complex_Plane_is_Cyclic_iff_Cross_Ratio_of_Vertices_is_Real

Theorem
Let $z_1, z_2, z_3, z_4$ be distinct complex numbers.
Then:

$z_1, z_2, z_3, z_4$ define the vertices of a cyclic quadrilateral
if and only if their cross-ratio:

$\paren {z_1, z_3; z_2, z_4} = \dfrac {\paren {z_1 - z_2} \paren {z_3 - z_4} } {\paren {z_1 - z_4} \paren {z_3 - z_2} }$
is wholly real.


Proof
Let $z_1 z_2 z_3 z_4$ be a cyclic quadrilateral.
By Geometrical Interpretation of Complex Subtraction, the four sides of $z_1 z_2 z_3 z_4$ can be defined as $z_1 - z_2$, $z_3 - z_2$, $z_3 - z_4$ and $z_1 - z_4$.




From Opposite Angles of Cyclic Quadrilateral sum to Two Right Angles, the opposite angles of $z_1 z_2 z_3 z_4$ sum to $\pi$ radians.
By Complex Multiplication as Geometrical Transformation, it follows that:














\(\ds \angle \, z_1\)

\(=\)







\(\ds \map \arg {\dfrac {z_1 - z_2} {z_1 - z_4} }\)




















\(\ds \angle \, z_2\)

\(=\)







\(\ds \map \arg {\dfrac {z_3 - z_2} {z_1 - z_2} }\)




















\(\ds \angle \, z_3\)

\(=\)







\(\ds \map \arg {\dfrac {z_3 - z_4} {z_3 - z_2} }\)




















\(\ds \angle \, z_4\)

\(=\)







\(\ds \map \arg {\dfrac {z_1 - z_4} {z_3 - z_4} }\)










Thus:














\(\ds \angle \, z_1 + \angle \, z_3\)

\(=\)







\(\ds \pi\)














\(\ds \leadsto \ \ \)





\(\ds \map \arg {\dfrac {z_1 - z_2} {z_1 - z_4} } + \arg \paren {\dfrac {z_3 - z_4} {z_3 - z_2} }\)

\(=\)







\(\ds \pi\)














\(\ds \leadsto \ \ \)





\(\ds \map \arg {\paren {\dfrac {z_1 - z_2} {z_1 - z_4} } \paren {\dfrac {z_3 - z_4} {z_3 - z_2} } }\)

\(=\)







\(\ds \pi\)





Argument of Product equals Sum of Arguments








\(\ds \leadsto \ \ \)





\(\ds \map \Im {\dfrac {\paren {z_1 - z_2} \paren {z_3 - z_4} } {\paren {z_1 - z_4} \paren {z_3 - z_2} } }\)

\(=\)







\(\ds 0\)





Argument of Negative Real Number is Pi



Hence the result.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations: Exercise $6$.




