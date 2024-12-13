# 

Source: https://proofwiki.org/wiki/Sequentially_Compact_Metric_Space_is_Compact/Proof_2

Theorem
A sequentially compact metric space is compact.


Proof
Let $M = \struct {A, d}$ be a sequentially compact metric space.
Let $\UU$ be any open cover of $M$.
By Lebesgue's Number Lemma, there exists a Lebesgue number for $\UU$.
Let $\set {x_1, x_2, \ldots, x_n}$ be a finite $\epsilon$-net for $M$, where $\epsilon$ is this same Lebesgue number.
This exists by Sequentially Compact Metric Space is Totally Bounded.

Let $\map {B_\epsilon} {x_i}$ be the open $\epsilon$-ball of $x_i$.
By definition of Lebesgue number, $\map {B_\epsilon} {x_i}$ is contained in some $U_i \in \UU$.
Since:

$\ds M \subseteq \bigcup_{i \mathop = 1}^n \map {B_\epsilon} {x_i} \subseteq \bigcup_{i \mathop = 1}^n U_i$
we have a finite subcover $\set {U_1, U_2, \ldots, U_n}$ of $\UU$ for $M$.
Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $7.2$: Sequential compactness: Theorem $7.2.13$




