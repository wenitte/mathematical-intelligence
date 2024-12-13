# 

Source: https://proofwiki.org/wiki/Projection_is_Injection_iff_Factor_is_Singleton/Family_of_Sets/Sufficient_Condition

Theorem
Let $\family {S_i}_{i \mathop \in I}$ be a non-empty family of non-empty sets where $I$ is an arbitrary index set.
Let $S = \ds \prod_{i \mathop \in I} S_i$ be the Cartesian product of $\family {S_i}_{i \mathop \in I}$.
Let $\pr_j: S \to S_j$ be the $j$th projection on $S$.
Let $S_i$ be a singleton for all $i \in I \setminus \set j$.

Then $\pr_j$ is an injection.


Proof
Let $S_i = \set {s_i}$ for all $i \in I \setminus \set {j}$.
Let $\map {\pr_j} x = \map {\pr_j} y = s_j$ for $x, y \in S$.

By definition of $j$th projection:

$\map x j = \map {\pr_j} x = s_j$
$\map y j = \map {\pr_j} y = s_j$
and so $\map x j = \map y j$.

By the definition of Cartesian product, for all $i \in I \setminus \set j$:

$\map x i, \map y i \in S_i = \set {s_i}$
and so $\map x i = \map y i$ for all $i \in I \setminus \set j$.

Thus $x = y$.
Thus $\pr_j$ is an injection by definition.
$\blacksquare$





