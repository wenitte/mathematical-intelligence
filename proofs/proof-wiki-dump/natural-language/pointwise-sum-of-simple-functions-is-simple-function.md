# 

Source: https://proofwiki.org/wiki/Pointwise_Sum_of_Simple_Functions_is_Simple_Function



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f, g : X \to \R$ be simple functions.

Then the pointwise sum $f + g: X \to \R$ of $f$ and $g$:

$\forall x, y \in X: \map {\paren {f + g} } x := \map f x + \map g x$
is also a simple function.


Proof
We have $f + g = + \circ \innerprod f g \circ \Delta_X$, where:

$\Delta_X: X \to X \times X$ is the diagonal mapping on $X$
$\innerprod f g: X \times X \to \R \times \R, \map {\innerprod f g} {x, y} := \tuple {\map f x, \map g y}$
$+: \R \times \R \to \R$ is real addition.

This article, or a section of it, needs explaining.In particular: What is the meaning of the notation $\innerprod f g$? Inner product? And what exactly does the notation in $+ \circ \innerprod f g \circ \Delta_X$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From this, we see that $+$ may be restricted to $\Img {\innerprod f g}$, the image of $\sequence {f, g}$.
It is immediate that this image equals $\Img f \times \Img g$.

By Measurable Function is Simple Function iff Finite Image Set, $\Img f$ and $\Img g$ are finite.
Therefore, by Cardinality of Cartesian Product of Finite Sets, $\Img {\sequence {f, g} }$ is also finite.
Next, from Corollary to Image of Composite Mapping:

$\Img {\innerprod f g \circ \Delta_X} \subseteq \Img {\innerprod f g}$
whence the former is finite.

Now $+$ is a surjection:

$+: \Img {\innerprod f g \circ \Delta_X} \to \Img {f + g}$
by Restriction of Mapping to Image is Surjection.

By Cardinality of Codomain of Surjection, this implies that $\Img {f + g}$ is finite.
Whence Measurable Function is Simple Function iff Finite Image Set grants that $f + g$ is a simple function.
$\blacksquare$


Also see
Definition:Pointwise Operation, of which the definition of $f + g$ is an instantiation
Scalar Multiple of Simple Function is Simple Function
Pointwise Product of Simple Functions is Simple Function
Space of Simple Functions forms Algebra


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.7 \ \text{(iv)}$




