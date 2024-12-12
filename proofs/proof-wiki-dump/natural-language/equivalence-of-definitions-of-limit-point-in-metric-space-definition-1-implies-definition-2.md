# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_Point_in_Metric_Space/Definition_1_implies_Definition_2

Theorem
Let $M = \struct {S, d}$ be a metric space.
Let $\tau$ be the topology induced by the metric $d$.
Let $A \subseteq S$ be a subset of $S$.
Let $\alpha \in S$. 

Let:

$\forall \epsilon \in \R_{>0}: \paren {\map {B_\epsilon} \alpha \setminus \set \alpha} \cap A \ne \O$

Then:

there is a sequence $\sequence{\alpha_n}$ in $A$ such that $\alpha$ is a limit of the sequence $\sequence{\alpha_n}$, considered as sequence in $S$.


Proof
A sequence $\sequence {\alpha_n}$ is constructed using finite recursion.
Let $\alpha_0$ be some arbitrary point in $A \cap \paren{\map {B_1} \alpha \setminus \set \alpha}$.
$\alpha_{n + 1}$ is some arbitrary point in $A \cap \paren{\map {B_{\frac {\map d {\alpha, \alpha_n} } 2} } \alpha \setminus \set \alpha}$ where $\map {B_{\frac {\map d {\alpha, \alpha_n} } 2} } \alpha$ denotes the open $\dfrac {\map d {\alpha, \alpha_n} } 2$-ball of $\alpha$.
We can be assured that such a point exists by hypothesis.
Then:

$\map d {\alpha_n, \alpha} < 2^{-n} \map d {\alpha_0, \alpha}$
Since $\map d {\alpha_0, \alpha}$ is fixed:

$\map d {\alpha_n, \alpha} < 2^{-n} \map d {\alpha_0, \alpha} < r$
for some $n$ because the natural numbers are Archimedean.
Therefore $\alpha$ is the limit of the sequence $\sequence {\alpha_n}$ by definition.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis: $3.2d$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Definition $6.6$




