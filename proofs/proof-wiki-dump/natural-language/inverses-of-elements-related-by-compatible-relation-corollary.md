# 

Source: https://proofwiki.org/wiki/Inverses_of_Elements_Related_by_Compatible_Relation/Corollary

Corollary to Inverses of Elements Related by Compatible Relation
Let $\struct {G, \circ}$ be a group with identity $e$.
Let $\RR$ be a relation compatible with $\circ$.

Then the following hold:

$\forall x, y \in G:$
$x \mathrel \RR e \iff e \mathrel \RR x^{-1}$
$e \mathrel \RR x \iff x^{-1} \mathrel \RR e$


Proof
From Inverse of Identity Element is Itself:

$e^{-1} = e$
From Inverses of Elements Related by Compatible Relation:

$\forall x, y \in G: x \mathrel \RR y \iff y^{-1} \mathrel \RR x^{-1}$

Substituting $e$ for $y$ gives:

$x \mathrel \RR e \iff e \mathrel \RR x^{-1}$
Substituting $e$ for $x$ and $x$ for $y$ gives:

$e \mathrel \RR x \iff x^{-1} \mathrel \RR e$
$\blacksquare$





