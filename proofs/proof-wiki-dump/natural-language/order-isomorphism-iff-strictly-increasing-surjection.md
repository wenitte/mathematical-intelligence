# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_iff_Strictly_Increasing_Surjection


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: This page unnecessarily requires the codomain to be totally ordered. Take into account Mapping from Totally Ordered Set is Order Embedding iff Strictly Increasing.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be totally ordered sets.
A mapping $\phi: \struct {S, \preceq_1} \to \struct {T, \preceq_2}$ is an order isomorphism if and only if:

$(1): \quad \phi$ is a surjection
$(2): \quad \forall x, y \in S: x \mathop {\prec_1} y \implies \map \phi x \mathop {\prec_2} \map \phi y$


Proof
Necessary Condition
Let $\phi: \struct {S, \preceq_1} \to \struct {T, \preceq_2}$ be an order isomorphism.
Then by definition $\phi$ is a bijection and so a surjection.
Suppose $x \mathop {\prec_1} y$.
That is:

$x \mathop {\preceq_1} y$
$x \ne y$
Then:

$x \mathop {\prec_1} y \implies \map \phi x \mathop {\preceq_2} \map \phi y$
as $\phi$ is an order isomorphism.
But as $\phi$ is a bijection it is also an injection.
Thus:

$\map \phi x = \map \phi y \implies x = y$
and so it follows that:

$x \mathop {\prec_1} y \implies \map \phi x \mathop {\prec_2} \map \phi y$
$\Box$


Sufficient Condition
Suppose $\phi$ is a mapping which satisfies the conditions:

$(1): \quad \phi$ is a surjection
$(2): \quad \forall x, y \in S: x \mathop {\prec_1} y \implies \map \phi x \mathop {\prec_2} \map \phi y$
From $(2)$ and Strictly Increasing Mapping is Increasing we have:

$x \mathop {\preceq_1} y \implies \map \phi x \mathop {\preceq_2} \map \phi y$

Now suppose $\map \phi x \mathop {\preceq_2} \map \phi y$.
Suppose $y \mathop {\prec_1} x$.
Then from $(2)$ it would follow that $\map \phi y \mathop {\prec_2} \map \phi x$.
So it is not the case that $y \mathop {\prec_1} x$.
So from the Trichotomy Law:

$x \mathop {\preceq_1} y$
Thus it follows that:

$x \mathop {\preceq_1} y \iff \map \phi x \mathop {\preceq_2} \map \phi y$
It follows from Order Isomorphism is Surjective Order Embedding that $\phi$ is an order isomorphism.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 7$: Theorem $7.2$




