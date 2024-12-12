# 

Source: https://proofwiki.org/wiki/Compact_Subspace_of_Metric_Space_is_Bounded

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $C$ be a subspace of $M$.

If $C$ is compact, then it is bounded.


Proof
Let $a \in M$.
Let $n \in \N_{>0}$.
Let $\map {B_n} a$ be the open $n$-ball of $a$.
Then $\ds C \subseteq \bigcup_{n \mathop = 1}^\infty \map {B_n} a$ because $\forall x \in C: \map d {x, a} < n$ for some $n \in \N$.
Thus the collection $\set {\map {B_n} a: n \in \N}$ forms an open cover of $C$.
Because $C$ is compact, it has a finite subcover, say: $\set {\map {B_{n_1} } a, \map {B_{n_2} } a, \ldots, \map {B_{n_r} } a}$.
Let $n = \max \set {n_1, n_2, \ldots, n_r}$.
Then:

$\ds C \subseteq \bigcup_{n \mathop = 1}^r \map {B_{n_r} } a = \map {B_n} a$
The result follows by definition of bounded.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.4$: Properties of compact spaces: Proposition $5.4.1$




