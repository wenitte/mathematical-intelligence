# 

Source: https://proofwiki.org/wiki/Closed_Ball_contains_Smaller_Closed_Ball

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $a \in A$.
Let $\epsilon, \delta \in \R_{> 0}$ such that $\epsilon \le \delta$.
Let $\map {B^-_\epsilon} a$ be the closed $\epsilon$-ball on $a$.
Let $\map {B^-_\delta} a$ be the closed $\delta$-ball on $a$.

Then:

$\map {B^-_\epsilon} a \subseteq \map {B^-_\delta} a$


Proof













\(\ds x \in \map {B^-_\epsilon} a\)

\(\leadsto\)







\(\ds \map d {x, a} \le \epsilon\)





Definition of Closed Ball














\(\ds \)

\(\leadsto\)







\(\ds \map d {x, a} \le \delta\)





As $\epsilon \le \delta$














\(\ds \)

\(\leadsto\)







\(\ds x \in \map {B^-_\delta} a\)





Definition of Closed Ball



By definition of subset:

$\map {B^-_\epsilon} a \subseteq \map {B^-_\delta} a$
$\blacksquare$





