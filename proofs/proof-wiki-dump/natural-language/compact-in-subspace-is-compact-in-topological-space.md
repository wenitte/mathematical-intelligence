# 

Source: https://proofwiki.org/wiki/Compact_in_Subspace_is_Compact_in_Topological_Space

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $K \subseteq S$ be a subset.
Let $\tau_K$ be the subspace topology on $K$.
Let $T' = \struct {K, \tau_K}$ be the topological subspace of $T$ determined by $K$.
Let $H \subseteq K$ be compact in $T'$.

Then $H$ is compact in $T$.


Proof
Suppose that $H$ is compact in $T'$.
Let $\set {W_i}_{i \mathop \in J}$ be an open cover of $H$ in $T$.
Then $\ds H \subseteq \bigcup_{i \mathop \in J} W_i$.
Then: 














\(\ds H\)

\(=\)







\(\ds H \cap K\)





Intersection with Subset is Subset: from $H \subseteq K$














\(\ds \)

\(\subseteq\)







\(\ds \paren {\bigcup_{i \mathop \in J} W_i} \cap K\)





Set Intersection Preserves Subsets: Corollary: from $\ds H \subseteq \bigcup_{i \mathop \in J} W_i$














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop \in J} \paren {W_i \cap K}\)





Intersection Distributes over Union of Family



Since $W_i \cap K \in \tau_K$, $\set {W_i \cap K}_{i \mathop \in J}$ is an open cover of $H$ in $T'$.

Since $H$ is compact in $T'$, $\set {W_i \cap K}_{i \mathop \in J}$ has some finite subcover $\set {W_i \cap K}_{i \mathop = 1}^r$.
Therefore:














\(\ds H\)

\(\subseteq\)







\(\ds \set {W_i \cap K}_{i \mathop = 1}^r\)





Definition of Finite Subcover














\(\ds \)

\(\subseteq\)







\(\ds \paren {\bigcup_{i \mathop = 1}^r W_i} \cap K\)





Intersection Distributes over Union of Family














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop = 1}^r W_i\)





Intersection is Subset




So $\set {W_i}_{i \mathop = 1}^r$ is an open cover of $H$ in $T$, which is a finite subcover.
As $\set {W_i}_{i \mathop \in J}$ is arbitrary:
Any open cover of $H$ has a finite subcover in $T$.
So $H$ is compact in $T$.
$\blacksquare$





