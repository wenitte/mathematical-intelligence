# 

Source: https://proofwiki.org/wiki/Inversion_Mapping_on_Ordered_Group_is_Dual_Order-Isomorphism

Theorem
Let $\struct {G, \circ, \preceq}$ be an ordered group.
Let $\iota: G \to G$ be the inversion mapping, defined by $\map \phi x = x^{-1}$.

Then $\iota$ is a dual order-isomorphism.


Proof
By Inversion Mapping is Involution and Involution is Permutation, $\iota$ is a permutation and so by definition bijective.
Let $x, y \in G$ such that $x \prec y$.
Then $y^{-1} \prec x^{-1}$ by Inversion Mapping Reverses Ordering in Ordered Group.
Thus $\map \iota y \prec \map \iota x$.
Since this holds for all $x$ and $y$ with $x \prec y$, $\iota$ is strictly decreasing.

If $\map \iota x \prec \map \iota y$, then $\map \iota {\map \iota y} \prec \map \iota {\map \iota x}$ by the above.
Thus by Inverse of Group Inverse: $y \prec x$.
Therefore, $\iota$ reverses ordering in both directions, and is thus a dual isomorphism.
$\blacksquare$





