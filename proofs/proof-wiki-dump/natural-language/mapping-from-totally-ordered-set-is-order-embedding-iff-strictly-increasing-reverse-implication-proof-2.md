# 

Source: https://proofwiki.org/wiki/Mapping_from_Totally_Ordered_Set_is_Order_Embedding_iff_Strictly_Increasing/Reverse_Implication/Proof_2

Theorem
Let $\struct {S, \preceq_1}$ be a totally ordered set.
Let $\struct {T, \preceq_2}$ be an ordered set.
Let $\phi: S \to T$ be a strictly increasing mapping.
Then $\phi$ is an order embedding.


Proof
Let $\phi$ be strictly increasing.
Let $\map \phi x \preceq_2 \map \phi y$.
As $\struct {S, \prec_1}$ is a strictly totally ordered set:

Either $y \prec_1 x$, $y = x$, or $x \prec_1 y$.

Aiming for a contradiction, suppose that $y \prec_1 x$.
By the definition of a strictly increasing mapping:

$\map \phi y \prec_2 \map \phi x$
which contradicts the fact that $\map \phi x \preceq_2 \map \phi y$.

Therefore $y \nprec_1 x$.
Thus $y = x$, or $x \prec_1 y$, so $x \preceq_1 y$.

Hence:

$\map \phi x \preceq_2 \map \phi y \iff x \preceq_1 y$
and $\phi$ has been proved to be an order embedding.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.9: \ 2^\circ$




