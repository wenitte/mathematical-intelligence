# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Order_Embedding/Definition_1_implies_Definition_3

Theorem
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be ordered sets.
Let $\phi: S \to T$ be a mapping.

Let $\phi: S \to T$ be an order embedding by Definition 1:
$\phi$ is an order embedding of $S$ into $T$ if and only if:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$

Then $\phi: S \to T$ is an order embedding by Definition 3:
$\phi$ is an order embedding of $S$ into $T$ if and only if both of the following conditions hold:

$(1): \quad \phi$ is an injection
$(2): \quad \forall x, y \in S: x \prec_1 y \iff \map \phi x \prec_2 \map \phi y$


Proof
Let $\phi$ be an order embedding by definition 1.
Then by definition:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
$\phi$ is injective by Order Embedding is Injection.

It remains to be shown that:

$x \prec_1 y \iff \map \phi x \prec_2 \map \phi y$

Suppose first that $x \prec_1 y$.
Then $x \preceq_1 y$ and $x \ne y$.
Thus by the premise:

$\map \phi x \preceq_2 \map \phi y$
Since $\phi$ is injective:

$\map \phi x \ne \map \phi y$
Therefore:

$\map \phi x \prec_2 \map \phi y$

Suppose instead that $\map \phi x \prec_2 \map \phi y$
Then:

$\map \phi x \preceq_2 \map \phi y$
and:

$\map \phi x \ne \map \phi y$
By the premise:

$x \preceq_1 y$
By the substitutive property of equality:

$x \ne y$
Thus:

$x \prec_1 y$

Thus $\phi$ is an order embedding by definition 3.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $20 \ \text {(a)}$




