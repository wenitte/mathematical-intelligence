# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_in_Positive_Integers_under_Scaled_Euclidean_Metric

Theorem
Let $\Z_{>0}$ be the set of (strictly) positive integers.
Let $\delta: \Z_{>0} \times \Z_{>0} \to \R$ be the scaled Euclidean metric on $\Z_{>0}$ defined as:

$\forall x, y \in \Z_{>0}: \map \delta {x, y} = \dfrac {\size {x - y} } {x y}$

The sequence $\sequence {x_n}$ in $\Z_{>0}$ defined as:

$\forall n \in \N: x_n = n$
is a Cauchy sequence in $\struct {\Z_{>0}, \delta}$.


Proof
For a general $x_m, x_n \in \sequence {x_n}$ as defined:














\(\ds \map \delta {x, y}\)

\(=\)







\(\ds \frac {\size {x_m - x_n} } {x_m x_n}\)





Definition of $\delta$














\(\ds \)

\(=\)







\(\ds \size {\frac 1 {x_m} - \frac 1 {x_n} }\)





algebra




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \size {\frac 1 m - \dfrac 1 n}\)





Definition of $\sequence {x_n}$




Let $\epsilon \in \R_{>0}$.
Then by the Axiom of Archimedes:

$\exists N \in \N: N > \dfrac 1 \epsilon$
from which it follows that:

$\epsilon > \dfrac 1 N$

Thus:










\(\ds \forall m, n \in \N: \, \)



\(\ds m, n\)

\(>\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds \map \delta {x_m, x_n}\)

\(=\)







\(\ds \size {\frac 1 m - \frac 1 n}\)





from $(1)$ above














\(\ds \)

\(<\)







\(\ds \max \set {\frac 1 m, \frac 1 n}\)




















\(\ds \)

\(<\)







\(\ds \frac 1 N\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)










Therefore $\sequence {x_n}$ is a Cauchy sequence in $\struct {\Z_{>0}, \delta}$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $10$




