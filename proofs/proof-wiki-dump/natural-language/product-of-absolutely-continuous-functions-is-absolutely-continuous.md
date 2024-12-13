# 

Source: https://proofwiki.org/wiki/Product_of_Absolutely_Continuous_Functions_is_Absolutely_Continuous

Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f, g : \closedint a b \to \R$ be absolutely continuous real functions.

Then $f \times g$ is absolutely continuous.


Proof
From Absolutely Continuous Real Function is Continuous:

$f$ and $g$ are continuous.
From Closed Real Interval is Compact in Metric Space:

$\closedint a b$ is compact.
Therefore, by Continuous Function on Compact Subspace of Euclidean Space is Bounded:

$f$ and $g$ are bounded.
That is, there exists $M_f, M_g \in \R_{> 0}$ such that: 

$\size {\map f x} \le M_f$
$\size {\map g x} \le M_g$
for all $x \in \closedint a b$.
Let $\closedint {a_1} {b_1}, \dotsc, \closedint {a_n} {b_n} \subseteq \closedint a b$ be a set of disjoint closed real intervals.
Then:














\(\ds \sum_{i \mathop = 1}^n \size {\map {\paren {f \times g} } {b_i} - \map {\paren {f \times g} } {a_i} }\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} \map g {b_i} - \map f {a_i} \map g{a_i} + \map f {a_i} \map g {b_i} - \map f {a_i} \map g {b_i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \size {\map g {b_i} \paren {\map f {b_i} - \map f {a_i} } + \map f {a_i} \paren {\map g {b_i} - \map g {a_i} } }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n \size {\map g {b_i} } \size {\map f {b_i} - \map f {a_i} } + \sum_{i \mathop = 1}^n \size {\map f {a_i} } \size {\map g {b_i} - \map g {a_i} }\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds M_g \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} } + M_f \sum_{i \mathop = 1}^n \size {\map g {b_i} - \map g {a_i} }\)





since $a_i, b_i \in \closedint a b$



Let $\epsilon$ be a positive real number.
Since $f$ is absolutely continuous, there exists $\delta_1 > 0$ such that for all sets of disjoint closed real intervals $\closedint {a_1} {b_1}, \dotsc, \closedint {a_n} {b_n} \subseteq \closedint a b$ with: 

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \delta_1$
we have: 

$\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} } < \frac \epsilon {2 M_g}$
Similarly, since $g$ is absolutely continuous, there exists $\delta_2 > 0$ such that whenever:

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \delta_2$
we have:

$\ds \sum_{i \mathop = 1}^n \size {\map g {b_i} - \map g {a_i} } < \frac \epsilon {2 M_f}$
Let:

$\delta = \map \min {\delta_1, \delta_2}$
Then, whenever:

$\ds \sum_{i \mathop = 1}^n \paren {b_i - a_i} < \delta$
We have both:














\(\ds \sum_{i \mathop = 1}^n \size {\map f {b_i} - \map f {a_i} }\)

\(<\)







\(\ds \frac \epsilon {2 M_g}\)




















\(\ds \sum_{i \mathop = 1}^n \size {\map g {b_i} - \map g {a_i} }\)

\(<\)







\(\ds \frac \epsilon {2 M_f}\)









and hence: 














\(\ds \sum_{i \mathop = 1}^n \size {\map {\paren {f \times g} } {b_i} - \map {\paren {f \times g} } {a_i} }\)

\(<\)







\(\ds M_g \times \frac \epsilon {2 M_g} + M_f \times \frac \epsilon {2 M_f}\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Since $\epsilon$ was arbitrary, we have:

$f \times g$ is absolutely continuous.
$\blacksquare$





