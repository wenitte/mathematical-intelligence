# 

Source: https://proofwiki.org/wiki/Equation_of_Straight_Line_in_Plane/Two-Point_Form



Theorem
Let $P_1 := \tuple {x_1, y_1}$ and $P_2 := \tuple {x_2, y_2}$ be points in a cartesian plane.
Let $\LL$ be the straight line passing through $P_1$ and $P_2$.

Then $\LL$ can be described by the equation:

$\dfrac {y - y_1} {x - x_1} = \dfrac {y_2 - y_1} {x_2 - x_1}$
or:

$\dfrac {x - x_1} {x_2 - x_1} = \dfrac {y - y_1} {y_2 - y_1}$
This is known as the two-point form.


Parametric Form
Let $\LL$ be a straight line embedded in a cartesian plane, given in two-point form as:

$\dfrac {x - x_1} {x_2 - x_1} = \dfrac {y - y_1} {y_2 - y_1}$

Then $\LL$ can be expressed by the parametric equations:

$\begin {cases} x = x_1 + t \paren {x_2 - x_1} \\ y = y_1 + t \paren {y_2 - y_1} \end {cases}$


Determinant Form
Let $\LL$ be a straight line embedded in a Cartesian plane, given in two-point form as:

$\dfrac {x - x_1} {x_2 - x_1} = \dfrac {y - y_1} {y_2 - y_1}$

Then $\LL$ can be expressed in the form:

$\begin {vmatrix} x & y & 1 \\ x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \end {vmatrix} = 0$


Proof 1
From the slope-intercept form of the equation of the straight line:

$(1): \quad y = m x + c$
which is to be satisfied by both $\tuple {x_1, y_1}$ and $\tuple {x_2, y_2}$.

We express $m$ and $c$ in terms of $\paren {x_1, y_1}$ and $\paren {x_2, y_2}$:














\(\ds y_1\)

\(=\)







\(\ds m x_1 + c\)




















\(\ds y_2\)

\(=\)







\(\ds m x_2 + c\)














\(\ds \leadsto \ \ \)





\(\ds c\)

\(=\)







\(\ds y_1 - m x_1\)














\(\ds \leadsto \ \ \)





\(\ds y_2\)

\(=\)







\(\ds m x_2 + y_1 - m x_1\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \dfrac {y_2 - y_1} {x_2 - x_1}\)
























\(\ds y_1\)

\(=\)







\(\ds m x_1 + c\)




















\(\ds y_2\)

\(=\)







\(\ds m x_2 + c\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \dfrac {y_2 - c} {x_2}\)














\(\ds \leadsto \ \ \)





\(\ds y_1\)

\(=\)







\(\ds \dfrac {y_2 - c} {x_2} x_1 + c\)














\(\ds \leadsto \ \ \)





\(\ds y_1 x_2\)

\(=\)







\(\ds x_1 y_2  + c \paren {x_2 - x_1}\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds c\)

\(=\)







\(\ds \dfrac {y_1 x_2 - x_1 y_2} {x_2 - x_1}\)










Substituting for $m$ and $c$ in $(1)$:














\(\ds y\)

\(=\)







\(\ds m x + c\)





which is $(1)$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {y_2 - y_1} {x_2 - x_1} x + \dfrac {y_1 x_2 - x_1 y_2} {x_2 - x_1}\)





from $(2)$ and $(3)$








\(\ds \leadsto \ \ \)





\(\ds y \paren {x_2 - x_1} + x_1 y_2\)

\(=\)







\(\ds x \paren {y_2 - y_1} + y_1 x_2\)














\(\ds \leadsto \ \ \)





\(\ds y \paren {x_2 - x_1} + x_1 y_2 - y_1 x_1\)

\(=\)







\(\ds x \paren {y_2 - y_1} + y_1 x_2 - x_1 y_1\)





adding $y_1 x_1 = x_1 y_1$ to both sides








\(\ds \leadsto \ \ \)





\(\ds y \paren {x_2 - x_1} - y_1 \paren {x_2 - x_1}\)

\(=\)







\(\ds x \paren {y_2 - y_1} - x_1 \paren {y_2 - y_1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {y - y_1} \paren {x_2 - x_1}\)

\(=\)







\(\ds \paren {x - x_1} \paren {y_2 - y_1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {y - y_1} {x - x_1}\)

\(=\)







\(\ds \dfrac {y_2 - y_1} {x_2 - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x - x_1} {x_2 - x_1}\)

\(=\)







\(\ds \dfrac {y - y_1} {y_2 - y_1}\)









$\blacksquare$


Proof 2
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


Proof 3


Let $P = \tuple {x, y}$ be an arbitrary point on the straight line through $P_1 = \tuple {x_1, y_1}$ and $P_2 = \tuple {x_2, y_2}$.
Construct the straight line $P_1 H K$ perpendicular to the $x$-axis.
We have that $\triangle P_1 H P_2$ and $\triangle P_1 K P$ are similar.
Hence:














\(\ds \dfrac {P_1 K} {P_1 H}\)

\(=\)







\(\ds \dfrac {K P} {H P_2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x - x_1} {x_2 - x_1}\)

\(=\)







\(\ds \dfrac {y - y_1} {y_2 - y_1}\)









$\blacksquare$


Proof 4


Let $z_1 = x_1 + i y_1$ and $z_2 = x_2 + i y_2$ be the position vectors of the points $A$ and $B$ embedded in the complex plane.
Let $z = x + i y$ be the position vector of an arbitrary point $P$ on the straight line $AB$.
From the diagram:














\(\ds OA + AP\)

\(=\)







\(\ds OP\)














\(\ds \leadsto \ \ \)





\(\ds z_1 + AP\)

\(=\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds AP\)

\(=\)







\(\ds z - z_1\)









and:














\(\ds OA + AB\)

\(=\)







\(\ds OB\)














\(\ds \leadsto \ \ \)





\(\ds z_1 + AB\)

\(=\)







\(\ds z_2\)














\(\ds \leadsto \ \ \)





\(\ds AB\)

\(=\)







\(\ds z_2 - z_1\)










Then:










\(\ds \exists t \in \R: \, \)



\(\ds AP\)

\(=\)







\(\ds t AB\)





as $A$, $P$ and $B$ are collinear








\(\ds \leadsto \ \ \)





\(\ds z - z_1\)

\(=\)







\(\ds t \paren {z_2 - z_1}\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \paren {1 - t} z_1 + t z_2\)














\(\ds \leadsto \ \ \)





\(\ds x - x_1\)

\(=\)







\(\ds t \paren {x_2 - x_1}\)




















\(\ds y - y_1\)

\(=\)







\(\ds t \paren {y_2 - y_1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x - x_1} {x_2 - x_1}\)

\(=\)







\(\ds \dfrac {y - y_1} {y_2 - y_1}\)









$\blacksquare$


Examples
$\tuple {1, 3}$ and $\tuple {-2, 4}$
Two-Point Form of Equation of Straight Line in Plane/Examples/(1, 3) and (-2, 4)

$\tuple {2, 1}$ and $\tuple {-6, 7}$
Let $\LL$ be the straight line passing through the points $\tuple {2, 1}$ and $\tuple {-6, 7}$.
Then $\LL$ has the equation:

$\dfrac {x - 2} {-6 - 2} = \dfrac {y - 1} {7 - 1}$
which after rearranging, can be written in the general form:

$4 y = -3 x + 10$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 10$: Formulas from Plane Analytic Geometry: $10.3$: Equation of Line joining Two Points $\map {P_1} {x_1, y_1}$ and $\map {P_2} {x_2, y_2}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): line: 2.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): two-point form
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): line: 2.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): two-point form
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): line (in two dimensions) Two-point form
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): straight line (in the plane)




