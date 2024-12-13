# 

Source: https://proofwiki.org/wiki/Powers_of_Group_Elements/Sum_of_Indices/Additive_Notation

Theorem
Let $\struct {G, +}$ be a group whose identity is $e$.
Let $g \in G$.

Then:

$\forall m, n \in \Z: \paren {m \cdot g} + \paren {n \cdot g} = \paren {m + n} \cdot g$


Proof
All elements of a group are invertible, so we can directly use the result from Index Laws for Monoids: Sum of Indices:

$\forall m, n \in \Z: g^m \circ g^n = g^{m + n}$
where in this context the group operation is $+$ and $n$th power of $g$ is denoted $n g$.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.1$: Subrings: Notation $2$




