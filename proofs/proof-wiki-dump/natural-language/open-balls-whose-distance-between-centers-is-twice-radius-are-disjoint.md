# 

Source: https://proofwiki.org/wiki/Open_Balls_whose_Distance_between_Centers_is_Twice_Radius_are_Disjoint



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $x, y \in A$ such that $\map d {x, y} = 2 r > 0$.
Let $\map {B_r} x$ denote the open $r$-ball of $x$ in $M$.

Then $\map {B_r} x$ and $\map {B_r} y$ are disjoint.


Proof 1
Aiming for a contradiction, suppose $\map {B_r} x \cap \map {B_r} y \ne \O$.
Then:










\(\ds \exists z \in A: \, \)



\(\ds z \in \map {B_r} x\)

\(\text { and }\)







\(\ds z \in \map {B_r} y\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds \map d {x, z} < r\)

\(\text { and }\)







\(\ds \map d {z, y} < r\)





Definition of Open Ball of Metric Space








\(\ds \leadsto \ \ \)





\(\ds \map d {x, z} + \map d {z, y}\)

\(<\)







\(\ds 2 r\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, y}\)

\(<\)







\(\ds 2 r\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality: $\map d {x, y} \le \map d {x, z} + \map d {z, y}$



But this contradicts our initial assertion that $\map d {x, y} = 2 r$.
The result follows by Proof by Contradiction.
$\blacksquare$


Proof 2
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


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 1$




