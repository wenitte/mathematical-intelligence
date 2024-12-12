# 

Source: https://proofwiki.org/wiki/Area_of_Triangle_Inscribed_in_Parabola/Proof_1

Theorem
Let $T$ be the parabola which is
the locus of points $\tuple {x, y}$ satisfying $y = x^2$.
Let $A$ and $B$ be two arbitrary points on $T$ with coordinates:

$A = \tuple {u, u^2}$
$B = \tuple {v, v^2}$, with $u > v$
Let $C$ be a third point on $T$ whose $x$-coordinate is the average of those of $A$ and $B$.
The area of $\triangle ABC$ is:

$\map \AA {\triangle ABC} = \dfrac 1 8 \paren {u - v}^3$


Proof
The point $\tuple {x = 0, y = 0}$ satisfies $y = x^2$.
Since $x^2 \ge 0$, $0$ is the minimum value for $y$.
Thus, the vertex of $T$ lies at the origin.
The coordinates of $C$ are given as the average those for $A$ and $B$.
Given:

$A = \tuple {u, u^2}$
$B = \tuple {v, v^2}$, with $u > v$
By the definition of average: 

$C = \tuple {\dfrac 1 2 \paren {u + v}, \dfrac 1 4 \paren {u + v}^2 } $
Let $P$ be the midpoint of $AB$, such that $AP = BP$.
Let the coordinates of $P$ be $\tuple {P_x, P_y}$.
By the Midline Theorem:

$P_x = \dfrac 1 2 \paren {u + v}$
Also by the Midline Theorem:

$P_y = \dfrac 1 2 \paren {u^2 + v^2}$
Let $h$ be one-half the distance between the $x$-coordinates of $A$ and $B$:

$h = \dfrac 1 2 \paren {u - v}$
By construction:

the height of both $\triangle APC$ and $\triangle BPC$ is equal to $h$.
Let $b$ be the length of $PC$, the shared base of $\triangle APC$ and $\triangle BPC$.














\(\ds b\)

\(=\)







\(\ds P_y - C_y\)





Definition above














\(\ds b\)

\(=\)







\(\ds \dfrac 1 2 \paren {u^2 + v^2} - \dfrac 1 4 \paren {u + v}^2\)





Substitution














\(\ds b\)

\(=\)







\(\ds \dfrac 1 4 \paren {2 u^2 + 2 v^2 - \paren {u + v}^2}\)





Factor out $\dfrac 1 2$














\(\ds b\)

\(=\)







\(\ds \dfrac 1 4 \paren {u^2 - 2 u v + v^2}\)





Expansion and subtraction














\(\ds b\)

\(=\)







\(\ds \dfrac 1 4 \paren {u - v}^2\)





Factor



In the words of Euclid:

Triangles which are on equal bases and in the same parallels are equal to one another.
(The Elements: Book $\text{I}$: Proposition $38$)

By Area of Triangle:

$\map \AA {\triangle APC} = \dfrac 1 2 h b$
Substituting from above:

$\map \AA {\triangle APC} = \dfrac 1 {16} \paren {u - v}^3$
Since they have the same height and a shared base:

$\map \AA {\triangle APC} = \map \AA {\triangle BPC}$
But:

$\map \AA {\triangle ABC} = \map \AA {\triangle APC} + \map \AA {\triangle BPC}$
By addition:

$\map \AA {\triangle ABC} = h b = \dfrac 1 8 \paren {u - v}^3$
$\blacksquare$





