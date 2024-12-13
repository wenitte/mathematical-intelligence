# 

Source: https://proofwiki.org/wiki/Open_Balls_whose_Distance_between_Centers_is_Twice_Radius_are_Disjoint/Proof_2

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $x, y \in A$ such that $\map d {x, y} = 2 r > 0$.
Let $\map {B_r} x$ denote the open $r$-ball of $x$ in $M$.

Then $\map {B_r} x$ and $\map {B_r} y$ are disjoint.


Proof
Let $z \in \map {B_r} x$.
Then:














\(\ds \map d {z, y}\)

\(\ge\)







\(\ds \size{ \map d {z, x} - \map d {y, x} }\)





Reverse Triangle Inequality














\(\ds \)

\(\ge\)







\(\ds \map d {y, x} - \map d {z, x}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \map d {x, y} - \map d {z, x}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds 2 r - \map d {z, x}\)





by hypothesis














\(\ds \)

\(>\)







\(\ds 2r -r\)





as $z \in \map {B_r} x$














\(\ds \)

\(=\)







\(\ds r\)









That is:

$z \not \in \map {B_r} y$
$\blacksquare$





