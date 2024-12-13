# 

Source: https://proofwiki.org/wiki/Mapping_from_Totally_Ordered_Set_is_Order_Embedding_iff_Strictly_Increasing



Theorem
Let $\struct {S, \preceq_1}$ be a totally ordered set.
Let $\struct {T, \preceq_2}$ be an ordered set.
Let $\phi: S \to T$ be a mapping.

Then $\phi$ is an order embedding if and only if $\phi$ is strictly increasing.

That is:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
if and only if:

$\forall x, y \in S: x \prec_1 y \implies \map \phi x \prec_2 \map \phi y$


Proof
Forward Implication
Let $\phi$ be an order embedding.
Let $x, y \in S$ with $x \prec_1 y$, where $\prec_1$ is the strict predecessor relation.
Then:














\(\ds \)

\(\)







\(\ds x \prec_1 y \land x \ne y\)





Definition 2 of Strictly Precedes














\(\ds \)

\(\leadsto\)







\(\ds \map \phi x \preceq_2 \map \phi y\)





Definition of Order Embedding














\(\ds \)

\(\leadsto\)







\(\ds \map \phi x \prec_2 \map \phi y\)





$\phi$ is injective



So by definition, $\phi$ is strictly increasing.
$\Box$


Reverse Implication
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


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.9: \ 2^\circ$




