# 

Source: https://proofwiki.org/wiki/Abelianization_of_Group_is_Abelian

Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $G^{\mathrm {ab} }$ denote the abelianization of $G$.

Then $G^{\mathrm {ab} }$ is an abelian group.


Proof
Recall the definition of Abelianization of Group:
Let $G$ be a group.

The abelianization of $G$ is the quotient of $G$ by its derived subgroup:

$G^{\mathrm {ab} } = G / \sqbrk {G, G}$

From Derived Subgroup is Normal, $\sqbrk {G, G}$ is a normal subgroup of $G$.
Hence the above definition is valid.

By definition of derived subgroup:

$\forall x, y \in G: \sqbrk {x, y} \in \sqbrk {G, G}$
where $\sqbrk {x, y}$ denotes the commutator of $x$ and $y$.

Hence from Quotient Group is Abelian iff All Commutators in Divisor it follows that $G^{\mathrm {ab} }$ is an abelian group.
$\blacksquare$


Sources
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): commutator




