# 

Source: https://proofwiki.org/wiki/Rotation_of_Rectangular_Hyperbola_from_Reduced_to_Standard_Form

Theorem
Let $\KK$ be a rectangular hyperbola embedded in a Cartesian plane in reduced form:

$x^2 - y^2 = a^2$
Let $\KK$ be rotated $45 \degrees$ clockwise about the origin.

Then $\KK$ is in standard form:

$x y = c^2$
where $c = \dfrac a {\sqrt 2}$.


Proof
Let $\tuple {x, y}$ denote an arbitrary point on $\KK$ before rotation.
Let $\tuple {x', y'}$ denote the image of $\tuple {x, y}$ after rotation.

Then:














\(\ds \begin {pmatrix} x' \\ y' \end {pmatrix}\)

\(=\)







\(\ds \begin {bmatrix} \map \cos {-45 \degrees} & -\map \sin {-45 \degrees} \\ \map \sin {-45 \degrees} & \map \cos {-45 \degrees} \end {bmatrix} \begin {pmatrix} x \\ y \end {pmatrix}\)





Matrix Equation of Plane Rotation: clockwise is negative














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \map \cos {45 \degrees} & \map \sin {45 \degrees} \\ -\map \sin {45 \degrees} & \map \cos {45 \degrees} \end {bmatrix} \begin {pmatrix} x \\ y \end {pmatrix}\)





Sine Function is Odd, Cosine Function is Even














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \dfrac {\sqrt 2} 2 & \dfrac {\sqrt 2} 2 \\ -\dfrac {\sqrt 2} 2 & \dfrac {\sqrt 2} 2 \end {bmatrix} \begin {pmatrix} x \\ y \end {pmatrix}\)





Sine of $45 \degrees$, Cosine of $45 \degrees$














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \dfrac {\sqrt 2} 2 x + \dfrac {\sqrt 2} 2 y \\ -\dfrac {\sqrt 2} 2 x + \dfrac {\sqrt 2} 2 y \end {bmatrix}\)





Definition of Matrix Product (Conventional)




Substituting for $x$ and $y$ in $x^2 - y^2 = a^2$:














\(\ds \paren {\dfrac {\sqrt 2} 2 x + \dfrac {\sqrt 2} 2 y}^2 - \paren {-\dfrac {\sqrt 2} 2 x + \dfrac {\sqrt 2} 2 y}\)

\(=\)







\(\ds a^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {\dfrac {\sqrt 2} 2}^2 x^2 + 2 \times \paren {\dfrac {\sqrt 2} 2}^2 x y + \paren {\dfrac {\sqrt 2} 2}^2 y^2} - \paren {\paren {\dfrac {\sqrt 2} 2}^2 x^2 - 2 \times \paren {\dfrac {\sqrt 2} 2}^2 x y + \paren {\dfrac {\sqrt 2} 2}^2 y^2}\)

\(=\)







\(\ds a^2\)





Square of Sum








\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac 1 2 x^2 + x y + \dfrac 1 2 y^2} - \paren {\dfrac 1 2 x^2 - x y + \dfrac 1 2 y^2}\)

\(=\)







\(\ds a^2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds 2 x y\)

\(=\)







\(\ds a^2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds x y\)

\(=\)







\(\ds \dfrac {a^2} 2\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac a {\sqrt 2} }^2\)









Hence the result.
$\blacksquare$

Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): hyperbola
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): hyperbola




