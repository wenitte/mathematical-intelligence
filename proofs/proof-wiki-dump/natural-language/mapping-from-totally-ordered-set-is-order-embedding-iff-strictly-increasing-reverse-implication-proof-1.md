# 

Source: https://proofwiki.org/wiki/Mapping_from_Totally_Ordered_Set_is_Order_Embedding_iff_Strictly_Increasing/Reverse_Implication/Proof_1

Theorem
Let $\struct {S, \preceq_1}$ be a totally ordered set.
Let $\struct {T, \preceq_2}$ be an ordered set.
Let $\phi: S \to T$ be a strictly increasing mapping.
Then $\phi$ is an order embedding.


Proof
Let $x \preceq_1 y$.
Then $x = y$ or $x \prec_1 y$.

Let $x = y$.
Then

$\map \phi x = \map \phi y$
so:

$\map \phi x \preceq_2 \map \phi y$

Let $x \prec_1 y$.
Then by the definition of strictly increasing mapping:

$\map \phi x \prec_2 \map \phi y$
so by the definition of $\prec_2$:

$\map \phi x \preceq_2 \map \phi y$
Thus:

$x \preceq_1 y \implies \map \phi x \preceq_2 \map \phi y$

It remains to be shown that:

$\map \phi x \preceq_2 \map \phi y \implies x \preceq_1 y$
Suppose that $x \npreceq_1 y$.
Since $\preceq_1$ is a total ordering:

$y \prec_1 x$
Thus since $\phi$ is strictly increasing:

$\map \phi y \prec_1 \map \phi x$
Thus:

$\map \phi x \npreceq_1 \map \phi y$
Therefore:

$x \npreceq_1 y \implies \map \phi x \npreceq_2 \map \phi y$
By the Rule of Transposition:

$\map \phi x \preceq_2 \map \phi y \implies x \preceq y$
$\blacksquare$





