# 

Source: https://proofwiki.org/wiki/Closed_Ball_contains_Smaller_Open_Ball

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $a \in A$.
Let $\epsilon, \delta \in \R_{> 0}$ such that $\epsilon \le \delta$.
Let $\map {B_\epsilon} a$ be the open $\epsilon$-ball on $a$.
Let $\map {B^-_\delta} a$ be the closed $\delta$-ball on $a$.

Then:

$\map {B_\epsilon} a \subseteq \map {B^-_\delta} a$


Proof













\(\ds x \in \map {B_\epsilon} a\)

\(\leadsto\)







\(\ds \map d {x, a} < \epsilon\)





Definition of Open Ball of Metric Space














\(\ds \)

\(\leadsto\)







\(\ds \map d {x, a} < \delta\)





As $\epsilon \le \delta$














\(\ds \)

\(\leadsto\)







\(\ds \map d {x, a} \le \delta\)





Definition of Total Ordering














\(\ds \)

\(\leadsto\)







\(\ds x \in \map {B^-_\delta} a\)





Definition of Closed Ball of Metric Space



By definition of subset:

$\map {B_\epsilon} a \subseteq \map {B^-_\delta} a$
$\blacksquare$





