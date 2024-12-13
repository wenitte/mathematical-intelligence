# 

Source: https://proofwiki.org/wiki/Metric_Space_is_Hausdorff



Theorem
Let $M = \struct {A, d}$ be a metric space.
Then $M$ is a Hausdorff space.


Proof 1
Let $x, y \in A: x \ne y$.
Then from Distinct Points in Metric Space have Disjoint Open Balls, there exist open $\epsilon$-balls $\map {B_\epsilon} x$ and $\map {B_\epsilon} y$ which are disjoint open sets containing $x$ and $y$ respectively.
Hence the result by the definition of Hausdorff space.
$\blacksquare$


Proof 2
Aiming for a contradiction, suppose $M$ is not Hausdorff.
That is, there are $x, y \in A: x \ne y$ such that:

$\forall \epsilon \in \R_{>0}: \exists z \in \map {B_\epsilon} x \cap \map {B_\epsilon} y$
where $\map {B_\epsilon} x$ denote the open $\epsilon$-ball of $x$ in $M$.

Let $r = \dfrac {\map d {x, y} } 2$.
Let $z \in \map {B_r} x \cap \map {B_r} y$.
Then:














\(\ds z\)

\(\in\)







\(\ds \map {B_r} x \cap \map {B_r} y\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(\in\)







\(\ds \map {B_r} x\)





Definition of Set Intersection












\(\, \ds \land \, \)

\(\ds z\)

\(\in\)







\(\ds \map {B_r} y\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, z}\)

\(<\)







\(\ds r\)





Definition of Open Ball












\(\, \ds \land \, \)

\(\ds \map d {y, z}\)

\(<\)







\(\ds r\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, z} + \map d {y, z}\)

\(<\)







\(\ds 2 r\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, z} + \map d {y, z}\)

\(<\)







\(\ds \map d {x, y}\)









This contradicts Metric Space Axiom $(\text M 2)$: Triangle Inequality.
Thus, $M$ has to be Hausdorff.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: $4.2$: Separation axioms: Example $4.2.3$




