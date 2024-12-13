# 

Source: https://proofwiki.org/wiki/Relation_Compatible_with_Group_Operation_is_Strongly_Compatible

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\RR$ be a relation on $G$ compatible with $\circ$.

$\RR$ is strongly compatible with $\circ$:

$\forall x, y, z \in G:$
$x \mathrel \RR y \iff x \circ z \mathrel \RR y \circ z$
$x \mathrel \RR y \iff z \circ x \mathrel \RR z \circ y$


Corollary
$\forall x, y \in G:$
$(1): \quad x \mathrel \RR y \iff e \mathrel \RR y \circ x^{-1}$
$(2): \quad x \mathrel \RR y \iff e \mathrel \RR x^{-1} \circ y$
$(3): \quad x \mathrel \RR y \iff x \circ y^{-1} \mathrel \RR e$
$(4): \quad x \mathrel \RR y \iff y^{-1} \circ x \mathrel \RR e$


Proof
Since $\RR$ is compatible with $\circ$:

$\forall a, b, c \in G: a \mathrel \RR b \implies a \circ c \mathrel \RR b \circ c$

In particular, letting $a = x$, $b = y$, and $c = z$, we see that:

$x \mathrel \RR y \implies x \circ z \mathrel \RR y \circ z$

On the other hand, letting $a = x \circ z$, $b = y \circ z$, and $c = z^{-1}$, we see that:

$x \circ z \mathrel \RR y \circ z \implies \paren {x \circ z} \circ z^{-1} \mathrel \RR \paren {y \circ z} \circ z^{-1}$
By the associativity of $\circ$ and the definition of inverse, this reduces to:

$x \circ z \mathrel \RR y \circ z \implies x \mathrel \RR y$

We have thus shown that:

$x \mathrel \RR y \iff x \circ z \mathrel \RR y \circ z$
A similar argument shows that:

$x \mathrel \RR y \iff z \circ x \mathrel \RR z \circ y$
so $\RR$ is strongly compatible with $\circ$.
$\blacksquare$





