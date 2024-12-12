# 

Source: https://proofwiki.org/wiki/Compact_Subspace_of_Topological_Vector_Space_is_von_Neumann-Bounded

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a topological vector space over $\Bbb F$. 
Let $K$ be a compact subspace (where subspace is meant in the topological sense) of $X$.

Then $K$ is von Neumann-bounded.


Proof
Let $V$ be an open neighborhood of ${\mathbf 0}_X$.
We aim to find $s > 0$ such that $E \subseteq t V$ for $t > s$.
From Open Neighborhood of Origin in Topological Vector Space contains Balanced Open Neighborhood, there exists $W \subseteq V$ such that $W$ is a balanced open neighborhood of ${\mathbf 0}_X$.
From Topological Vector Space as Union of Dilations of Open Neighborhood of Origin, we have: 

$\ds X = \bigcup_{n \mathop = 1}^\infty n W$
In particular: 

$\ds K \subseteq \bigcup_{n \mathop = 1}^\infty n W$
Since $K$ is compact, there exists $n_1, n_2, \ldots, n_k$ such

$\ds K \subseteq \bigcup_{i \mathop = 1}^k n_i W$
Relabel these $n_i$ so that: 

$n_1 < n_2 < \ldots < n_k$
From Finite Union of Dilations of Balanced Set, we then have: 

$\ds \bigcup_{i \mathop = 1}^k n_i W = n_k W$
so that:

$K \subseteq n_k W$
Since $W$ is balanced, for $t > n_k$ we have: 

$\ds \frac {n_k} t W \subseteq W$
so that: 

$n_k W \subseteq t W$
Then, we have: 

$K \subseteq t W$
Since $W \subseteq V$, we obtain: 

$K \subseteq t V$
for $t > n_k$.
Since $V$ was arbitrary, we have that $K$ is von Neumann-bounded.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.15$: Theorem




