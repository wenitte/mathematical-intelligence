# 

Source: https://proofwiki.org/wiki/Mapping_from_Totally_Ordered_Set_is_Order_Embedding_iff_Strictly_Increasing/Reverse_Implication


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Clean up all this stuff about strict and weak orders; consider re-merging proofsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $\struct {S, \preceq_1}$ be a totally ordered set.
Let $\struct {T, \preceq_2}$ be an ordered set.
Let $\phi: S \to T$ be a strictly increasing mapping.
Then $\phi$ is an order embedding.


Proof 1
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


Proof 2
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






