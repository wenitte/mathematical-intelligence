# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Absolutely_Continuous_Function_is_Absolutely_Continuous

Theorem
Let $I \subseteq \R$ be a real interval.
Let $f : I \to \R$ be an absolutely continuous function.

Then $\size f$ is absolutely continuous.


Proof
Let $\epsilon$ be a positive real number.
Since $f$ is absolutely continuous, there exists real $\delta > 0$ such that for all collections of disjoint closed real intervals $\closedint {a_1} {b_1}, \dotsc, \closedint {a_n} {b_n} \subseteq I$ with: 

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \delta$
we have: 

$\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} } < \epsilon$
By the Reverse Triangle Inequality, we have: 

$\size {\map f {b_i} - \map f {a_i} } \ge \size {\size {\map f {b_i} } - \size {\map f {a_i} } }$
Therefore: 

$\ds \sum_{i \mathop = 1}^n \size {\size {\map f {b_i} } - \size {\map f {a_i} } } \le \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} } < \epsilon$
whenever:

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \delta$
Since $\epsilon$ was arbitrary:

$\size f$ is absolutely continuous.
$\blacksquare$





