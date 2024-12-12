# 

Source: https://proofwiki.org/wiki/Area_of_Triangle_in_Determinant_Form



Theorem
Let $A = \tuple {x_1, y_1}, B = \tuple {x_2, y_2}, C = \tuple {x_3, y_3}$ be points in the Cartesian plane.
The area $\AA$ of the triangle whose vertices are at $A$, $B$ and $C$ is given by:

$\AA = \dfrac 1 2 \size {\paren {\begin {vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \\ \end {vmatrix} } }$


Proof 1

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


Proof 2


Let $A$, $B$ and $C$ be as defined..
Let $O$ be the origin of the Cartesian plane in which $\triangle ABC$ is embedded.
Taking into account the signs of the areas of the various triangles involved:

$\triangle ABC = \triangle OAB + \triangle OBC + \triangle OCA$
as it is seen that $\triangle OBC$ and $\triangle OCA$ are described in clockwise sense.

From proof 2 of Area of Triangle in Determinant Form with Vertex at Origin:














\(\ds \triangle OAB\)

\(=\)







\(\ds \dfrac 1 2 \paren {x_1 y_2 - x_2 y_1}\)




















\(\ds \triangle OBC\)

\(=\)







\(\ds \dfrac 1 2 \paren {x_2 y_3 - x_3 y_2}\)




















\(\ds \triangle OBC\)

\(=\)







\(\ds \dfrac 1 2 \paren {x_3 y_1 - x_1 y_3}\)














\(\ds \leadsto \ \ \)





\(\ds \triangle ABC\)

\(=\)







\(\ds \dfrac 1 2 \paren {\paren {x_1 y_2 - x_2 y_1} + \paren {x_2 y_3 - x_3 y_2} + \paren {x_3 y_1 - x_1 y_3} }\)














\(\ds \leadsto \ \ \)





\(\ds \triangle ABC\)

\(=\)







\(\ds \frac 1 2 \paren {\begin {vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \\ \end {vmatrix} }\)





Determinant of Order 3



The result follows.
$\blacksquare$


Proof 3

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


Examples
Vertex at Origin
Let $A = \tuple {0, 0}, B = \tuple {b, a}, C = \tuple {x, y}$ be points in the Cartesian plane.
Let $T$ the triangle whose vertices are at $A$, $B$ and $C$.
Then the area $\AA$ of $T$ is:

$\map \Area T = \dfrac {\size {b y - a x} } 2$


Vertices at $\paren {-4 - i}, \paren {1 + 2 i}, \paren {4 - 3 i}$
Let $T$ be a triangle embedded in the complex plane with vertices at $\paren {-4 - i}, \paren {1 + 2 i}, \paren {4 - 3 i}$.
The area of $T$ is given by:

$\map \Area T = 17$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 10$: Formulas from Plane Analytic Geometry: $10.10$: Area of Triangle with Vertices at $\tuple {x_1, y_1}$, $\tuple {x_2, y_2}$, $\tuple {x_3, y_3}$




