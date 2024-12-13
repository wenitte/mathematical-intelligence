# 

Source: https://proofwiki.org/wiki/Intersection_of_Normal_Subgroups_is_Normal

Theorem
Let $G$ be a group.
Let $I$ be an indexing set.
Let $\family {N_i}_{i \mathop \in I}$ be a non-empty indexed family of normal subgroups of $G$.

Then $\ds \bigcap_{i \mathop \in I} N_i$ is a normal subgroup of $G$.


Proof
Let $\ds N = \bigcap_{i \mathop \in I} N_i$.
From Intersection of Subgroups is Subgroup, $N \le G$.
Suppose $H \in \set {N_i: i \in I}$.
We have that $N \subseteq H$.
Thus from Subgroup is Superset of Conjugate iff Normal:

$a N a^{-1} \subseteq a H a^{-1} \subseteq H$
Thus $a N a^{-1}$ is a subset of each one of the subgroups in $\set {N_i: i \in I}$, and hence in their intersection $N$.
That is, $a N a^{-1} \subseteq N$.
The result follows by Subgroup is Superset of Conjugate iff Normal.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $7$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Proposition $7.9$




