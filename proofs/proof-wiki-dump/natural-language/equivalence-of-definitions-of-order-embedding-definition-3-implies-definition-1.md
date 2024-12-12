# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Order_Embedding/Definition_3_implies_Definition_1

Theorem
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be ordered sets.
Let $\phi: S \to T$ be a mapping.

Let $\phi: S \to T$ be an order embedding by Definition 3:
$\phi$ is an order embedding of $S$ into $T$ if and only if both of the following conditions hold:

$(1): \quad \phi$ is an injection
$(2): \quad \forall x, y \in S: x \prec_1 y \iff \map \phi x \prec_2 \map \phi y$

Then $\phi: S \to T$ is an order embedding by Definition 1:
$\phi$ is an order embedding of $S$ into $T$ if and only if:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$


Proof
Let $\phi$ be an order embedding by definition 3.
Then by definition:

$(1): \quad \phi$ is injective
$(2): \quad \forall x, y, \in S: x \prec_1 y \iff \map \phi x \prec_2 \map \phi y$

Let $x \preceq_1 y$.
Then $x \prec_1 y$ or $x = y$.

If $x \prec_1 y$, then by hypothesis:

$\map \phi x \prec_2 \map \phi y$
Thus:

$\map \phi x \preceq_2 \map \phi y$

If $x = y$, then:

$\map \phi x = \map \phi y$
Thus:

$\map \phi x \preceq_2 \map \phi y$

Thus it has been shown that:

$x \preceq_1 y \implies \map \phi x \preceq_2 \map \phi y$
$\Box$

Let $\map \phi x \preceq_2 \map \phi y$.
Then:

$\map \phi x \prec_2 \map \phi y$
or:

$\map \phi x = \map \phi y$
Suppose $\map \phi x \prec_2 \map \phi y$.
Then by hypothesis:

$x \prec_1 y$
and so:

$x \preceq_1 y$

Suppose $\map \phi x = \map \phi y$.
Then since $\phi$ is injective:

$x = y$
and so:

$x \preceq_1 y$
Thus in both cases:

$x \preceq_1 y$
and so:

$\map \phi x \preceq_2 \map \phi y \implies x \preceq_1 y$
$\Box$

Hence the result:

$x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
and so $\phi$ is an order embedding by definition 1.
$\blacksquare$





