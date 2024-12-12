# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ellipse



Theorem
The following definitions of an ellipse are equivalent:

Equidistance Property

Let $F_1$ and $F_2$ be two points in the plane.
Let $d$ be a length greater than the distance between $F_1$ and $F_2$.
Let $K$ be the locus of points $P$ which are subject to the condition:

$d_1 + d_2 = d$
where:

$d_1$ is the distance from $P$ to $F_1$
$d_2$ is the distance from $P$ to $F_2$.
Then $K$ is an ellipse.
This property is known as the equidistance property.


Focus-Directrix Property


Let $D$ be a straight line.
Let $F$ be a point.
Let $e \in \R: 0 < e < 1$.

Let $K$ be the locus of points $P$ such that the distance $p$ from $P$ to $D$ and the distance $q$ from $P$ to $F$ are related by the condition:

$e p = q$

Then $K$ is an ellipse.


Proof
Let $K$ be an ellipse aligned in a cartesian plane in reduced form.
Thus its foci are at $\tuple {\mathop \pm c, 0}$.

Let:

the major axis of $K$ have length $2 a$
the minor axis of $K$ have length $2 b$.
From Equation of Ellipse in Reduced Form, the equation of $K$ is:

$\dfrac {x^2} {a^2} + \dfrac {y^2} {b^2} = 1$
This has been derived from the equidistance property of $K$.
From Focus of Ellipse from Major and Minor Axis:

$a^2 - c^2 = b^2$
and so $K$ can be expressed as:

$(1): \quad \dfrac {x^2} {a^2} + \dfrac {y^2} {a^2 - c^2} = 1$

It remains to be shown that $K$ possesses the focus-directrix property.



Let $D$ be the straight line whose equation is $x = \dfrac {a^2} c$.
It will be shown that the locus of points $P = \tuple {x, y}$ such that:

the distance from $P$ to $F_1$ is $\dfrac c a$ of the distance from $P$ to $D$
is precisely equation $(1)$.

We have that:

$P F_2 = \epsilon \paren {d - x}$
where:

$\epsilon = \dfrac c a$
$d = \dfrac {a^2} c$
Thus:














\(\ds \sqrt {\paren {x - c}^2 + y^2}\)

\(=\)







\(\ds \frac c a \paren {\frac {a^2} c - x}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x - c}^2 + y^2\)

\(=\)







\(\ds \paren {a - \frac c a x}^2\)














\(\ds \leadsto \ \ \)





\(\ds x^2 - 2 c x + c^2 + y^2\)

\(=\)







\(\ds a^2 - 2 c x + \frac {c^2} {a^2} x^2\)














\(\ds \leadsto \ \ \)





\(\ds x^2 \paren {1 - \frac {c^2} {a^2} } + y^2\)

\(=\)







\(\ds a^2 - c^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 - c^2} \frac {x^2} {a^2} + y^2\)

\(=\)







\(\ds a^2 - c^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {x^2} {a^2} + \frac {y^2} {a^2 - c^2}\)

\(=\)







\(\ds 1\)









$\blacksquare$





