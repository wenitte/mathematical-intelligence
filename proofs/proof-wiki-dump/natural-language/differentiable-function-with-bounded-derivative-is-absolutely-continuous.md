# 

Source: https://proofwiki.org/wiki/Differentiable_Function_with_Bounded_Derivative_is_Absolutely_Continuous

Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f: \closedint a b \to \R$ be a continuous function.
Let $f$ be differentiable on $\openint a b$, with bounded derivative.

Then $f$ is absolutely continuous.


Proof
Since the derivative of $f$ is bounded, there exists some $M \in \R_{> 0}$ such that: 

$\size {\map {f'} x} \le M$
for all $x \in \openint a b$.
Let $\closedint {a_1} {b_1}, \dotsc, \closedint {a_n} {b_n} \subseteq \closedint a b$ be a collection of disjoint closed real intervals.
Note that for each $i \in \set {1, 2, \ldots, n}$:

$f$ is continuous on $\closedint {a_i} {b_i}$ and differentiable on $\openint {a_i} {b_i}$.
So, by the Mean Value Theorem, for each $i$ there exists some $\xi_i \in \openint {a_i} {b_i}$ such that:

$\map {f'} {\xi_i} = \dfrac {\map f {b_i} - \map f {a_i} } {b_i - a_i}$
We then have:














\(\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} }\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map {f'} {\xi_i} } \paren {b_i - a_i}\)




















\(\ds \)

\(\le\)







\(\ds M \sum_{i \mathop = 1}^n \paren {b_i - a_i}\)





since $\xi_i \in \openint a b$, we have $\size {\map {f'} {\xi_i} } \le M$



Let $\epsilon$ be a positive real number. 
Then for all collections of disjoint closed real intervals $\closedint {a_1} {b_1}, \dotsc, \closedint {a_n} {b_n} \subseteq \closedint a b$ with:

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \frac \epsilon M$
we have:

$\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} } < \epsilon$
Since $\epsilon$ was arbitrary:

$f$ is absolutely continuous.
$\blacksquare$





