# 

Source: https://proofwiki.org/wiki/Equation_of_Tangent_to_Circle_Centered_at_Origin

Theorem
Let $\CC$ be a circle whose radius is $r$ and whose center is at the origin of a Cartesian plane.
Let $P = \tuple {x_1, y_1}$ be a point on $\CC$.
Let $\TT$ be a tangent to $\CC$ passing through $P$.

Then $\TT$ can be defined by the equation:

$x x_1 + y y_1 = r^2$


Proof 1
From Equation of Straight Line Tangent to Circle we have that for a general circle of radius $r$ and center $\tuple {a, b}$:

$y - y_1 = \dfrac {a - x_1} {y_1 - b} \paren {x - x_1}$
is the equation of a tangent $\TT$ to $\CC$ passing through $\tuple {x_1, y_1}$.

Setting the center to $\tuple {0, 0}$:














\(\ds y - y_1\)

\(=\)







\(\ds -\dfrac {x_1} {y_1} \paren {x - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds y_1 \paren {y - y_1}\)

\(=\)







\(\ds -x_1 \paren {x - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds x x_1 + y y_1\)

\(=\)







\(\ds x_1^2 + y_1^2\)




















\(\ds \)

\(=\)







\(\ds r^2\)





as $\tuple {x_1, y_1}$ is on $\CC$



$\blacksquare$


Proof 2
From the slope-intercept form of a line, the equation of a line passing through $P$ is:

$y - y_1 = \mu \paren {x - x_1}$
If this line passes through another point $\tuple {x_2, y_2}$ on $\CC$, the slope of the line is given by:

$\mu = \dfrac {y_2 - y_1} {x_2 - x_1}$

Because $P$ and $Q$ both lie on $\CC$, we have:














\(\ds x_1^2 + y_1^2\)

\(=\)







\(\ds r^2 = x_2^2 + y_2^2\)














\(\ds \leadsto \ \ \)





\(\ds y_2^2 - y_1^2\)

\(=\)







\(\ds x_2^2 - x_1^2\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {y_2 - y_1} {x_2 - x_1}\)

\(=\)







\(\ds -\dfrac {x_1 + x_2} {y_1 + y_2}\)









As $Q$ approaches $P$, we have that $y_2 \to y_1$ and $x_2 \to x_1$.
The limit of the slope is therefore:

$-\dfrac {2 x_1} {2 y_1} = -\dfrac {x_1} {y_1}$

The equation of the tangent $\TT$ to $\CC$ passing through $\tuple {x_1, y_1}$ is therefore:














\(\ds y - y_1\)

\(=\)







\(\ds -\dfrac {x_1} {y_1} \paren {x - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds y_1 \paren {y - y_1}\)

\(=\)







\(\ds -x_1 \paren {x - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds x x_1 + y y_1\)

\(=\)







\(\ds x_1^2 + y_1^2\)




















\(\ds \)

\(=\)







\(\ds r^2\)





as $\tuple {x_1, y_1}$ is on $\CC$



$\blacksquare$





