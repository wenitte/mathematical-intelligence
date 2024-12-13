# 

Source: https://proofwiki.org/wiki/Multiple_of_Absolutely_Continuous_Function_is_Absolutely_Continuous

Theorem
Let $k$ be a real number.
Let $I \subseteq \R$ be a real interval.
Let $f : I \to \R$ be an absolutely continuous real function.

Then $k f$ is absolutely continuous.


Proof
Note that if $k = 0$, then $k f$ is constant. 
Hence, by Constant Real Function is Absolutely Continuous: 

$k f$ is absolutely continuous if $k = 0$.
Take now $k \ne 0$.
Let $\epsilon$ be a positive real number.
Since $f$ is  absolutely continuous, there exists real $\delta > 0$ such that for every set of disjoint closed real intervals $\closedint {a_1} {b_1}, \dotsc, \closedint {a_n} {b_n} \subseteq I$ with: 

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \delta$
we have: 

$\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} } < \frac \epsilon {\size k}$
Then:














\(\ds \sum_{i \mathop = 1}^n \size {\map {\paren {k f} } {b_i} - \map {\paren {k f} } {a_i} }\)

\(=\)







\(\ds \size k \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} }\)




















\(\ds \)

\(<\)







\(\ds \size k \times \frac \epsilon {\size k}\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









whenever:

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \delta$
Since $\epsilon$ was arbitrary: 

$k f$ is absolutely continuous if $k \ne 0$.
Therefore: 

$k f$ is absolutely continuous for all $k \in \R$.
$\blacksquare$





