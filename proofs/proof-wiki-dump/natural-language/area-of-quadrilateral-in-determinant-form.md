# 

Source: https://proofwiki.org/wiki/Area_of_Quadrilateral_in_Determinant_Form



Theorem
Let $A = \tuple {x_1, y_1}$, $B = \tuple {x_2, y_2}$, $C = \tuple {x_3, y_3}$ and $D = \tuple {x_4, y_4}$ be points in the Cartesian plane.
Let $A$, $B$, $C$ and $D$ form the vertices of a quadrilateral.
The area $\AA$ of $\Box ABCD$ is given by:

$\AA = \dfrac 1 2 \paren {\size {\paren {\begin{vmatrix}
x_1 & y_1 & 1 \\
x_2 & y_2 & 1 \\
x_3 & y_3 & 1 \\
\end{vmatrix} } } + \size {\paren {\begin{vmatrix}
x_1 & y_1 & 1 \\
x_4 & y_4 & 1 \\
x_3 & y_3 & 1 \\
\end{vmatrix} } } }$


Proof
$\Box ABCD$ can be divided into $2$ triangles: $\triangle ABC$ and $\triangle ADC$.
Hence $\AA$ is the sum of the areas of $\triangle ABC$ and $\triangle ADC$.
From Area of Triangle in Determinant Form:














\(\ds \map \Area {\triangle ABC}\)

\(=\)







\(\ds \dfrac 1 2 \size {\paren {\begin{vmatrix}
x_1 & y_1 & 1 \\
x_2 & y_2 & 1 \\
x_3 & y_3 & 1 \\
\end{vmatrix} } }\)





















\(\ds \map \Area {\triangle ADC}\)

\(=\)







\(\ds \dfrac 1 2 \size {\paren {\begin{vmatrix}
x_1 & y_1 & 1 \\
x_4 & y_4 & 1 \\
x_3 & y_3 & 1 \\
\end{vmatrix} } }\)










Hence the result.
$\blacksquare$


Examples
Vertices at $\tuple {2, -1}, \tuple {4, 3}, \tuple {-1, 2}, \tuple {-3, -2}$
Let $Q$ be a quadrilateral embedded in the cartesian plane with vertices at $\tuple {2, -1}$, $\tuple {4, 3}$, $\tuple {-1, 2}$ and $\tuple {-3, -2}$.
The area of $Q$ is given by:

$\map \Area Q = 18$




