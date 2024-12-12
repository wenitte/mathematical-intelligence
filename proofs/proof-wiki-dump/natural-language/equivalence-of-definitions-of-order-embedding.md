# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Order_Embedding



Theorem
The following definitions of the concept of Order Embedding are equivalent:

Definition 1
$\phi$ is an order embedding of $S$ into $T$ if and only if:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
Definition 2
$\phi$ is an order embedding of $S$ into $T$ if and only if both of the following conditions hold:

$(1): \quad \phi$ is an injection
$(2): \quad \forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
Definition 3
$\phi$ is an order embedding of $S$ into $T$ if and only if both of the following conditions hold:

$(1): \quad \phi$ is an injection
$(2): \quad \forall x, y \in S: x \prec_1 y \iff \map \phi x \prec_2 \map \phi y$
Definition 4
Let $T' = \Img S$ be the image of $S$ under $\phi$.
$\phi$ is an order embedding of $S$ into $T$ if and only if:

the restriction of $\phi$ to $S \times T'$ is an order isomorphism between $\struct {S, \preceq_1}$ and $\struct {T', \preceq_2 \restriction_{T' \times T'} }$.


Proof
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be ordered sets.
Let $\phi: S \to T$ be a mapping.


Definition 1 implies Definition 2
Let $\phi$ be an order embedding by definition 1.
Then by definition:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
It follows from Order Embedding is Injection that $\phi$ is an injection.
Thus $\phi$ is an order embedding by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\phi$ be an order embedding by definition 2.
Then condition $(2)$ of that definition directly states:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
Thus $\phi$ is an order embedding by definition 1.
$\Box$


Definition 1 implies Definition 3
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
$\Box$


Definition 3 implies Definition 1
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
$\Box$


Definition 2 implies Definition 4
Let $\phi$ be an order embedding by definition 2.
Then by definition:

$\phi$ is an injection
$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
Let $T' = \Img S$ be the image of $S$ under $\phi$.

From Injection to Image is Bijection:

$\phi {\restriction_{S \times T'} }: S \to T'$ is a bijection.
It follow by definition that $\phi {\restriction_{S \times T'} }: S \to T'$ is an order isomorphism.
Thus $\phi$ is an order embedding by definition 4.
$\Box$


Definition 4 implies Definition 1
Let $\phi$ be an order embedding by definition 4.
Then by definition:

the restriction of $\phi$ to $S \times T'$ is an order isomorphism between $\struct {S, \preceq_1}$ and $\struct {T', \preceq_2 \restriction_{T' \times T'} }$.
By definition of order isomorphism:

$\forall x, y \in S: x \preceq_1 y \iff \map {\phi {\restriction_{S \times T'} } } x \preceq_2 \map {\phi {\restriction_{S \times T'} } } y$
But by definition of restriction:

$\forall z \in S: \map {\phi {\restriction_{S \times T'} } } z = \map \phi z$

Thus:

$\forall x, y \in S: x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$
and so $\phi$ is an order embedding by definition 1.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Orderings




