# 

Source: https://proofwiki.org/wiki/Poincar%C3%A9_Plane_is_Abstract_Geometry



Theorem
The Poincaré plane $\struct {\H, L_H}$ is an abstract geometry.


Proof
We will show that the axioms for an abstract geometry hold.


Axiom 1
Let $P = \tuple {x_1, y_1}$ and $Q = \tuple {x_2, y_2}$ be two points in $\struct {\H, L_H}$.
If $x_1 = x_2 = a$ then $P, Q \in {}_a L$.
If $x_1 \ne x_2$ then let:

$c = \dfrac {y_2^2 - y_1^2 + x_2^2 - x_1^2} {2 \paren {x_2 - x_1} }$
$r = \sqrt{\paren{x_1 - c}^2 + y_1^2}$
From definition of ${}_c L_r$:

${}_c L_r := \set {\tuple {x, y} \in \H : \paren {x - c}^2 + y^2 = r^2}$
We have:














\(\ds \paren{x_1 - c}^2 + y_1^2\)

\(=\)







\(\ds r^2\)




















\(\ds \paren{x_2 - c}^2 + y_2^2\)

\(=\)







\(\ds y_2^2 + x_2^2 - 2 x_2 c + c^2\)




















\(\ds \)

\(=\)







\(\ds y_2^2 + x_2^2 - 2 x_2 \dfrac {y_2^2 - y_1^2 + x_2^2 - x_1^2} {2 \paren {x_2 - x_1} } + c^2\)




















\(\ds \)

\(=\)







\(\ds c^2 + \dfrac 1 {x_2 - x_1} \paren {y_2^2 x_2 - y_2^2 x_1 + x_2^3 - x_2^2 x_1 - x_2 y_2^2 + x_2 y_1^2 - x_2^3 + x_2 x_1^2}\)




















\(\ds \)

\(=\)







\(\ds c^2 + \dfrac 1 {x_2 - x_1} \paren {- y_2^2 x_1 - x_2^2 x_1 + x_2 y_1^2 + x_2 x_1^2}\)




















\(\ds \)

\(=\)







\(\ds c^2 + \dfrac 1 {x_2 - x_1} \paren {- y_2^2 x_1 - x_2^2 x_1 + x_2 y_1^2 + x_2 x_1^2 + y_1^2 x_1 - y_1^2 x_1 + x_1^3 - x_1^3}\)




















\(\ds \)

\(=\)







\(\ds c^2 + \dfrac 1 {x_2 - x_1} \paren {x_2 y_1^2 - y_1^2 x_1 + x_2 x_1^2 - x_1^3 - y_2^2 x_1 + y_1^2 x_1 - x_2^2 x_1 + x_1^3}\)




















\(\ds \)

\(=\)







\(\ds y_1^2 + x_1^2 - x_1 \dfrac {y_2^2 - y_1^2 + x_2^2 - x_1^2} {x_2 - x_1} + c^2\)




















\(\ds \)

\(=\)







\(\ds y_1^2 + \paren {x_1 - c}^2\)




















\(\ds \)

\(=\)







\(\ds r^2\)









Thus $P, Q \in {}_c L_r$.
So any two points in $\H$ lie on a line in $L_H$.
$\blacksquare$


Axiom 2
For any $a \in \R$:

$\tuple {a, 1}, \tuple {a, 2} \in {}_a L$

Also for any $c \in \R$ and $r \in \R_{>0}$:

$\tuple {c + \dfrac 1 2 r, \dfrac {\sqrt 3} 2 r}, \tuple {c - \dfrac 1 2 r, \dfrac {\sqrt 3} 2 r} \in {}_c L_r$

So every line in $L_H$ has at least two points.
$\Box$

Hence $\struct {\H, L_H}$ is an abstract geometry.
$\blacksquare$


Sources
1991: Richard S. Millman and George D. Parker: Geometry: A Metric Approach with Models (2nd ed.) ... (previous) ... (next): $\S 2.1$




