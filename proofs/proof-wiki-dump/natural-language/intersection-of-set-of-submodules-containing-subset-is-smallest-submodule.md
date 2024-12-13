# 

Source: https://proofwiki.org/wiki/Intersection_of_Set_of_Submodules_containing_Subset_is_Smallest_Submodule

Theorem
Let $R$ be a ring.
Let $\struct {G, +_G}$ be an abelian group.
Let $M = \struct {G, +, \circ}_R$ be an $R$-module.
Let $S \subset M$ be a subset of $M$.
Let $T$ be the set of all submodules of $M$ which contain $S$ as a subset.

Then the intersection $\bigcap T$ is the smallest submodule of $M$ containing $S$.


Proof
By hypothesis, we have:

$\ds T = \bigcap \set { M' \subseteq M : S \subseteq M', \textrm {$M'$ is a submodule of $M$} }$
From Intersection of Submodules is Submodule:General Result, it follows that $\bigcap T$ is a submodule of $M$.
As $S \subseteq M'$ for all $M' \in T$, it follows that $S \subseteq \bigcap T$.

Let $M' \in T$ be a submodule of $M$ such that $S \subseteq M'$.
From Intersection is Subset:General Result, it follows that $M' \subseteq \bigcap T$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 27$. Subspaces and Bases: Theorem $27.2$




