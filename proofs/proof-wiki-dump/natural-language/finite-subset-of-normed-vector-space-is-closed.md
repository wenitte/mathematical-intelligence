# 

Source: https://proofwiki.org/wiki/Finite_Subset_of_Normed_Vector_Space_is_Closed

Theorem
Let $M = \struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $F \subseteq X$ be finite.

Then $F$ is closed in $M$.


Proof
Suppose $F$ is empty.
By Empty Set is Closed in Normed Vector Space, $F$ is closed.

Suppose, for some $n \in \N$, that:

$\ds F = \bigcup_{i \mathop = 1}^n \set {x_i}$
We have that Singleton in Normed Vector Space is Closed.
Hence $F$ is a finite union of closed sets.
By Finite Union of Closed Sets is Closed in Normed Vector Space, $F$ is closed.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.3$: Normed and Banach spaces. Topology of normed spaces




