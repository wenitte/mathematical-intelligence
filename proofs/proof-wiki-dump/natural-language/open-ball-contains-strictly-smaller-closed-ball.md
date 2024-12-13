# 

Source: https://proofwiki.org/wiki/Open_Ball_contains_Strictly_Smaller_Closed_Ball

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $a \in A$.
Let $\epsilon, \delta \in \R_{>0}$ such that $\epsilon < \delta$.
Let $\map {B^-_\epsilon} a$ be the closed $\epsilon$-ball on $a$.
Let $\map {B_\delta} a$ be the open $\delta$-ball on $a$.

Then:

$\map {B^-_\epsilon} a \subseteq \map {B_\delta} a$


Proof













\(\ds x\)

\(\in\)







\(\ds \map {B^-_\epsilon} a\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map \cl {\map {B_\epsilon} a}\)





Definition of Closed Ball of Metric Space








\(\ds \leadsto \ \ \)





\(\ds \map d {x, a}\)

\(\le\)







\(\ds \epsilon\)





Closure of Open Ball in Metric Space








\(\ds \leadsto \ \ \)





\(\ds \map d {x, a}\)

\(<\)







\(\ds \delta\)





As $\epsilon < \delta$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map {B_\delta} a\)





Definition of Open Ball of Metric Space



By definition of subset:

$\map {B^-_\epsilon} a \subseteq \map {B_\delta} a$
$\blacksquare$





