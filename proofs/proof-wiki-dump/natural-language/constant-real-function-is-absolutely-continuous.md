# 

Source: https://proofwiki.org/wiki/Constant_Real_Function_is_Absolutely_Continuous

Theorem
Let $I \subseteq \R$ be a real interval.
Let $f : I \to \R$ be an constant real function.

Then $f$ is absolutely continuous.


Proof
Let $\delta, \epsilon$ be positive real numbers.
Let $\closedint {a_1} {b_1}, \dotsc, \closedint {a_n} {b_n} \subseteq I$ be a collection of disjoint closed real intervals with: 

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \delta$
Since $f$ is constant, for all $i \in \set {1, 2, \ldots, n}$ we have:

$\size {\map f {b_i} - \map f {a_i} } = 0$
so:

$\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} } = 0 < \epsilon$
Since $\epsilon$ was arbitrary: 

$f$ is absolutely continuous.
$\blacksquare$





