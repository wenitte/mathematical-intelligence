# 

Source: https://proofwiki.org/wiki/Relation_Compatible_with_Group_Operation_is_Strongly_Compatible/Corollary

Theorem
Let $\struct {G, \circ}$ be a group with identity $e$.
Let $\RR$ be a relation compatible with $\circ$.
The following equivalences hold:

$\forall x, y \in G:$
$(1): \quad x \mathrel \RR y \iff e \mathrel \RR y \circ x^{-1}$
$(2): \quad x \mathrel \RR y \iff e \mathrel \RR x^{-1} \circ y$
$(3): \quad x \mathrel \RR y \iff x \circ y^{-1} \mathrel \RR e$
$(4): \quad x \mathrel \RR y \iff y^{-1} \circ x \mathrel \RR e$


Proof
Applying Relation Compatible with Group Operation is Strongly Compatible to $x$, $y$, and $x^{-1}$ we obtain:

$x \mathrel \RR y \iff x \circ x^{-1} \mathrel \RR y \circ x^{-1}$
$x \mathrel \RR y \iff x^{-1} \circ x \mathrel \RR x^{-1} \circ y$
Applying Relation Compatible with Group Operation is Strongly Compatible to $x$, $y$, and $y^{-1}$, on the other hand, yields:

$x \mathrel \RR y \iff x \circ y^{-1} \mathrel \RR y \circ y^{-1}$
$x \mathrel \RR y \iff y^{-1} \circ x \mathrel \RR y^{-1} \circ y$

By the definition of inverse element:

$x \circ x^{-1} = x^{-1} \circ x = y \circ y^{-1} = y^{-1} \circ y = e$
Making these substitutions proves the theorem.
$\blacksquare$





