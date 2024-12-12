# 

Source: https://proofwiki.org/wiki/Area_of_Triangle_in_Determinant_Form_with_Vertex_at_Origin



Example of Area of Triangle in Determinant Form
Let $A = \tuple {0, 0}, B = \tuple {b, a}, C = \tuple {x, y}$ be points in the Cartesian plane.
Let $T$ the triangle whose vertices are at $A$, $B$ and $C$.
Then the area $\AA$ of $T$ is:

$\map \Area T = \dfrac {\size {b y - a x} } 2$


Proof 1













\(\ds \map \Area T\)

\(=\)







\(\ds \dfrac 1 2 \size {\paren {\begin {vmatrix} 0 & 0 & 1 \\ b & a & 1 \\ x & y & 1 \end {vmatrix} } }\)





Area of Triangle in Determinant Form














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \size {b y - a x}\)





Determinant of Order 3



$\blacksquare$


Proof 2
Let the polar coordinates of $B$ and $C$ be:














\(\ds B\)

\(=\)







\(\ds \polar {r_1, \theta_1}\)




















\(\ds C\)

\(=\)







\(\ds \polar {r_2, \theta_2}\)









Let $\theta$ be the angle between $AB$ and $AC$.
Then we have:














\(\ds \map \Area {\triangle ABC}\)

\(=\)







\(\ds \dfrac 1 2 AB \cdot AC \sin \theta\)





Area of Triangle in Terms of Two Sides and Angle














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 r_1 r_2 \map \sin {\theta_2 - \theta_1}\)





Definition of $\theta$














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 r_1 r_2 \paren {\sin \theta_2 \cos \theta_1 - \cos \theta_2 \sin \theta_1}\)





Sine of Difference














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {r_1 \cos \theta_1 r_2 \sin \theta_2 - r_1 \sin \theta_1 r_2 \cos \theta_2}\)





rearranging














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {b y - a x}\)





rearranging



We can define the area of $\triangle ABC$ as being positive or negative according to the sign of $\dfrac 1 2 \paren {b y - a x}$.
However, if we are interested only in the absolute value of $\triangle ABC$, as in this context, we can report:

$\map \Area {\triangle ABC} = \dfrac {\size {b y - a x} } 2$
$\blacksquare$


Example
Let $A = \tuple {0, 0}, B = \tuple {b, a}, C = \tuple {x_0, y_0}$ be points in the Cartesian plane.
Let $\tuple {x_0, y_0}$ be a solution to the linear diophantine equation:

$a x - b y = 1$
Let $T$ the triangle whose vertices are at $A$, $B$ and $C$.
Then the area $\AA$ of $T$ is:

$\map \Area T = \dfrac 1 2$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {III}$. Analytical Geometry: The Straight Line: The area of the triangle $ABC$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-3}$ The Linear Diophantine Equation: Exercise $4$




