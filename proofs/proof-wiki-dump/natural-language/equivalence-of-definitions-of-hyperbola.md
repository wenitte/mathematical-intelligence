# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Hyperbola



Theorem
The following definitions of the concept of Hyperbola are equivalent:

Equidistance Property
 



Let $F_1$ and $F_2$ be two points in the plane.
Let $d$ be a length less than the distance between $F_1$ and $F_2$.
Let $K$ be the locus of points $P$ which are subject to the condition:

$\size {d_1 - d_2} = d$
where:

$d_1$ is the distance from $P$ to $F_1$
$d_2$ is the distance from $P$ to $F_2$
$\size {d_1 - d_2}$ denotes the absolute value of $d_1 - d_2$.
Then $K$ is a hyperbola.

Focus-Directrix Property


Let $D$ be a straight line.
Let $F_1$ be a point.
Let $e \in \R: e > 1$.

Let $K$ be the locus of points $P$ such that the distance $p$ from $P$ to $D$ and the distance $q$ from $P$ to $F_1$ are related by the condition:

$e p = q$

Then $K$ is a hyperbola.


Proof
Let $K$ be an hyperbola aligned in a cartesian plane in reduced form.
Thus its foci are at $\tuple {\mathop \pm c, 0}$.

Let:

the transverse axis of $K$ have length $2 a$
the conjugate axis of $K$ have length $2 b$.
From Equation of Hyperbola in Reduced Form, the equation of $K$ is:

$\dfrac {x^2} {a^2} - \dfrac {y^2} {b^2} = 1$
This has been derived from the equidistance property of $K$.
From Focus of Hyperbola from Transverse and Conjugate Axis:

$c^2 - a^2 = b^2$
and so $K$ can be expressed as:

$(1): \quad \dfrac {x^2} {a^2} - \dfrac {y^2} {c^2 - a^2} = 1$

It remains to be shown that $K$ possesses the focus-directrix property.



Let $D$ be the straight line whose equation is $x = \dfrac {a^2} c$.
It will be shown that the locus of points $P = \tuple {x, y}$ such that:

the distance from $P$ to $F_1$ is $\dfrac c a$ of the distance from $P$ to $D$
is precisely equation $(1)$.

We have that:

$P F_2 = \dfrac c a d$
where:

$d = x - \dfrac {a^2} c$
Thus:














\(\ds \sqrt {\paren {c - a}^2 + y^2}\)

\(=\)







\(\ds \frac c a \paren {x - \frac {a^2} c}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {c - x}^2 + y^2\)

\(=\)







\(\ds \paren {\frac c a x - a}^2\)














\(\ds \leadsto \ \ \)





\(\ds c^2 - 2 c x + x^2 + y^2\)

\(=\)







\(\ds \frac {c^2} {a^2} x^2 - 2 c x + a^2\)














\(\ds \leadsto \ \ \)





\(\ds x^2 \paren {\frac {c^2} {a^2} - 1} - y^2\)

\(=\)







\(\ds c^2 - a^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {c^2 - a^2} \frac {x^2} {a^2} - y^2\)

\(=\)







\(\ds c^2 - a^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {x^2} {a^2} - \frac {y^2} {c^2 - a^2}\)

\(=\)







\(\ds 1\)









$\blacksquare$





