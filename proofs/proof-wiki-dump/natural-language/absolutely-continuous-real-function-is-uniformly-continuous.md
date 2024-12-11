# 

Source: https://proofwiki.org/wiki/Absolutely_Continuous_Real_Function_is_Uniformly_Continuous

Theorem
Let $I \subseteq \R$ be a real interval.
Let $f: I \to \R$ be an absolutely continuous real function.

Then $f$ is uniformly continuous.


Proof
Let $\epsilon$ be a positive real number.
Since $f$ is absolutely continuous, there exists real $\delta > 0$ such that for all collections of pairwise disjoint closed real intervals $\closedint {a_1} {b_1}, \dotsc, \closedint {a_n} {b_n} \subseteq I$ with: 

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \delta$
we have: 

$\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} } < \epsilon$
Consider specifically the case $n = 1$.
Suppose that $a \le x \le y \le b$ and:

$0 \le y - x < \delta$
so that: 

$\size {x - y} < \delta$
From the absolute continuity of $f$ we then have:

$\size {\map f y - \map f x} < \epsilon$
so:

$\size {\map f x - \map f y} < \epsilon$
Now suppose that $y < x$ and: 

$\size {x - y} < \delta$
then: 

$0 < x - y < \delta$
and: 

$\size {\map f x - \map f y} < \epsilon$
So, in fact, for all $x, y \in \closedint a b$ with:

$\size {x - y} < \delta$
we have:

$\size {\map f x - \map f y} < \epsilon$
Since $\epsilon$ was arbitrary:

$f$ is uniformly continuous.
$\blacksquare$





