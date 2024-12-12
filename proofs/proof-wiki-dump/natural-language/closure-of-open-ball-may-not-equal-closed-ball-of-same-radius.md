# 

Source: https://proofwiki.org/wiki/Closure_of_Open_Ball_may_not_equal_Closed_Ball_of_Same_Radius

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $x \in A$.
Let $\map {B_\epsilon} x$ be the open $\epsilon$-ball of $x$ of radius $\epsilon$ for some $\epsilon \in \R_{>0}$.
Let $\map { {B_\epsilon}^-} x$ be the closed $\epsilon$-ball of $x$ of radius $\epsilon$.

Then it is not necessarily the case that:

$\map \cl {\map {B_\epsilon} x} = \map { {B_\epsilon}^-} x$
where $\cl$ denotes closure.


Proof
Proof by Counterexample:
Let $M = \struct {A, d}$ be the standard discrete metric space on a set $A$.
From Closure of Open $1$-Ball in Standard Discrete Metric Space we have that:

$\map \cl {\map {B_1} x} = \set x$
but:














\(\ds \map { {B_1}^-} x\)

\(=\)







\(\ds \set {y \in A: \map d {x, y} \le 1}\)





Definition of Closed Ball of Metric Space














\(\ds \)

\(=\)







\(\ds A\)









Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$




