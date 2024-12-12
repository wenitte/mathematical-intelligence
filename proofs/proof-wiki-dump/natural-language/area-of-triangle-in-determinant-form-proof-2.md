# 

Source: https://proofwiki.org/wiki/Area_of_Triangle_in_Determinant_Form/Proof_2

Theorem
Let $A = \tuple {x_1, y_1}, B = \tuple {x_2, y_2}, C = \tuple {x_3, y_3}$ be points in the Cartesian plane.
The area $\AA$ of the triangle whose vertices are at $A$, $B$ and $C$ is given by:

$\AA = \dfrac 1 2 \size {\paren {\begin {vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \\ \end {vmatrix} } }$


Proof


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


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text I$. Coordinates: $8$. Area of any triangle




