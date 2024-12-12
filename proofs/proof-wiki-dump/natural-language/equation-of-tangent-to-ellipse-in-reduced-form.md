# 

Source: https://proofwiki.org/wiki/Equation_of_Tangent_to_Ellipse_in_Reduced_Form

Theorem
Let $E$ be an ellipse embedded in a Cartesian plane in reduced form with the equation:

$\dfrac {x^2} {a^2} + \dfrac {y^2} {b^2} = 1$
Let $P = \tuple {x_1, y_1}$ be a point on $E$.

The tangent to $E$ at $P$ is given by the equation:

$\dfrac {x x_1} {a^2} + \dfrac {y y_1} {b^2} = 1$


Proof
From the slope-intercept form of a line, the equation of a line passing through $P$ is:

$y - y_1 = \mu \paren {x - x_1}$
If this line passes through another point $\tuple {x_2, y_2}$ on $E$, the slope of the line is given by:

$\mu = \dfrac {y_2 - y_1} {x_2 - x_1}$

Because $P$ and $Q$ both lie on $E$, we have:














\(\ds \dfrac {x_1^2} {a^2} + \dfrac {y_1^2} {b^2}\)

\(=\)







\(\ds 1 = \dfrac {x_2^2} {a^2} + \dfrac {y_2^2} {b^2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {y_2^2} {b^2} - \dfrac {y_1^2} {b^2}\)

\(=\)







\(\ds \dfrac {x_1^2} {a^2} - \dfrac {x_2^2} {a^2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\paren {y_2 + y_1} \paren {y_2 - y_1} } {b^2}\)

\(=\)







\(\ds \dfrac {\paren {x_1 + x_2} \paren {x_1 - x_2} } {a^2}\)





Difference of Two Squares








\(\ds \leadsto \ \ \)





\(\ds \dfrac {y_2 - y_1} {\paren {x_2 - x_1} }\)

\(=\)







\(\ds -\dfrac {b^2 \paren {x_1 + x_2} } {a^2 \paren {y_1 + y_2} }\)









As $Q$ approaches $P$, we have that $y_2 \to y_1$ and $x_2 \to x_1$.
The limit of the slope is therefore:

$-\dfrac {2 b^2 x_1} {2 a^2 y_1} = -\dfrac {b^2 x_1} {a^2 y_1}$

The equation of the tangent $\TT$ to $\CC$ passing through $\tuple {x_1, y_1}$ is therefore:














\(\ds y - y_1\)

\(=\)







\(\ds -\dfrac {b^2 x_1} {a^2 y_1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {y_1} {b^2} \paren {y - y_1}\)

\(=\)







\(\ds -\dfrac {x_1} {a^2} \paren {x - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x x_1} {a^2} + \dfrac {y y_1} {b^2}\)

\(=\)







\(\ds \dfrac {x_1^2} {a^2} + \dfrac {y_1^2} {b^2}\)




















\(\ds \)

\(=\)







\(\ds 1\)





as $\tuple {x_1, y_1}$ is on $E$



$\blacksquare$


Sources
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {IV}$. The Ellipse: $3$.




