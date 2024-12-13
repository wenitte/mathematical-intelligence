# 

Source: https://proofwiki.org/wiki/Group_whose_Derived_Subgroup_is_Trivial_is_Abelian

Theorem
Let $G$ be a group with identity $e$.
Let $G'$ be the derived subgroup of $G$.
Let $G'$ be the trivial group $\set e$.

Then $G$ is abelian.


Proof
We assume by hypothesis that the derived subgroup of $G$ is $\set e$.
Aiming for a contradiction, suppose $G$ is non-abelian.
Hence by definition:

$\exists g, h \in G: g h \ne h g$
Multiplying both sides by $g^{-1} h^{-1}$:

$\exists g, h \in G: g^{-1} h^{-1} g h \ne e$
But from the definition of the derived subgroup:

$G' := \set {g^{-1} h^{-1} g h : g, h \in G}$
Hence:

$G' \ne \set e$
So by definition, $G'$ is not a trivial group.
By Proof by Contraposition it follows that $G$ is abelian.
$\blacksquare$


Also see
Derived Subgroup of Abelian Group is Trivial




