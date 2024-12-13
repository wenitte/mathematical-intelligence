# 

Source: https://proofwiki.org/wiki/Inverses_of_Elements_Related_by_Compatible_Relation

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\RR$ be a relation compatible with $\circ$.
Then:

$\forall x, y \in G: x \mathrel \RR y \iff y^{-1} \mathrel \RR x^{-1}$


Corollary
$\forall x, y \in G:$
$x \mathrel \RR e \iff e \mathrel \RR x^{-1}$
$e \mathrel \RR x \iff x^{-1} \mathrel \RR e$


Proof
Let $e$ be the group identity of $G$.
By Relation Compatible with Group Operation is Strongly Compatible: Corollary:

$(1): \quad x \mathrel \RR y \iff e \mathrel \RR y \circ x^{-1}$
By Relation Compatible with Group Operation is Strongly Compatible: Corollary, also:

$(2): \quad y^{-1} \mathrel \RR x^{-1} \iff e \mathrel \RR \paren {y^{-1} }^{-1} \circ x^{-1}$
By Inverse of Group Inverse:

$\paren {y^{-1} }^{-1} = y$
Thus, we can rewrite $(2)$ as:

$(3): \quad y^{-1} \mathrel \RR x^{-1} \iff e \mathrel \RR y \circ x^{-1}$

Now note that the right hand side of $(3)$ is the same as the right hand side in $(1)$.
We conclude that:

$x \mathrel \RR y \iff y^{-1} \mathrel \RR x$
$\blacksquare$





