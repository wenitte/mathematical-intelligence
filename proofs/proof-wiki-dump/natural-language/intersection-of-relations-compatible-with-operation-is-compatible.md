# 

Source: https://proofwiki.org/wiki/Intersection_of_Relations_Compatible_with_Operation_is_Compatible

Theorem
Let $\struct {S, \circ}$ be a closed algebraic structure.
Let $\mathscr F$ be a indexed family of relations on $S$.
Suppose that each element of $\mathscr F$ is compatible with $\circ$.
Let $\QQ = \bigcap \mathscr F$ be the intersection of $\mathscr F$.

Then $\QQ$ is a relation compatible with $\circ$.


Proof
Let $x, y, z \in S$.
Suppose that $x \mathrel \QQ y$.
Then for each $\RR \in \mathscr F$:

$x \mathrel \RR y$
Then since $\RR$ is a relation compatible with $\circ$:

$\paren {x \circ z} \mathrel \RR \paren {y \circ z}$
Since this holds for each $\RR \in \mathscr F$:

$\paren {x \circ z} \mathrel \QQ \paren {y \circ z}$
We have shown that:

$\forall x, y, z \in S: x \mathrel \QQ y \implies \paren {x \circ z} \mathrel \QQ \paren {y \circ z}$

A similar argument shows that:

$\forall x, y, z \in S: x \mathrel \QQ y \implies \paren {z \circ x} \mathrel \QQ \paren {z \circ y}$
so $Q$ is a relation compatible with $\circ$.
$\blacksquare$





