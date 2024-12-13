# 

Source: https://proofwiki.org/wiki/Intersection_with_Normal_Subgroup_is_Normal



Theorem
Let $G$ be a group.
Let $H$ be a subgroup of $G$, and let $N$ be a normal subgroup of $G$.
Then $H \cap N$ is a normal subgroup of $H$.


Proof
By Intersection of Subgroups is Subgroup, $H \cap N$ is a subgroup of $N$.
It remains to be shown that $H \cap N$ is normal in $H$.
Let $g \in H$ and $x \in H \cap N$. 
However, $H \le G$ and $ g \in H$ imply:

$g \in G$
Because $N \lhd G$:

$\forall n \in N: \forall g \in G: g n g^{-1} \in N$
Because $H \le G$ and therefore closed: 

$\forall x \in H \cap N: \forall g \in H: g x g^{-1} \in H$
Therefore, from the definition of normal subgroups:

$N \lhd G \implies g x g^{-1} \in N$
$x \in N$
$g \in G$
Thus:

$g x g^{-1} \in H \cap N$
Because $H$ is a subgroup, $g x g^{-1} \in H \cap N$, $g \in H$, and the definition of normal subgroups:

$H \cap N \lhd H$
$\blacksquare$


Examples
Subset Product of Normal Subgroup with Intersection
Let $\struct G$ be a group whose identity is $e$.
Let $H_1, H_2$ be subgroups of $G$.
Let:

$N_1 \lhd H_1$
$N_2 \lhd H_2$
where $\lhd$ denotes the relation of being a normal subgroup.

Then:

$N_1 \paren {H_1 \cap N_2} \lhd N_1 \paren {H_1 \cap H_2}$


Subset Product of Intersection with Intersection
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $H_1, H_2$ be subgroups of $G$.
Let:

$N_1 \lhd H_1$
$N_2 \lhd H_2$
where $\lhd$ denotes the relation of being a normal subgroup.

Then:

$\paren {H_1 \cap N_2} \paren {H_2 \cap N_1} \lhd \paren {H_1 \cap H_2}$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Problem $\text{HH}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 46 \delta$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Proposition $7.8$




