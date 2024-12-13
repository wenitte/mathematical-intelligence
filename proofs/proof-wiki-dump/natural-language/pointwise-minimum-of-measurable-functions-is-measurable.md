# 

Source: https://proofwiki.org/wiki/Pointwise_Minimum_of_Measurable_Functions_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f, g: X \to \overline \R$ be $\Sigma$-measurable functions.

Then the pointwise minimum $\min \set {f, g}: X \to \overline \R$ is also $\Sigma$-measurable.


Proof
For all $x \in X$ and $a \in \R$, we have by Min Operation Yields Infimum of Parameters that:

$a \le \min \set {\map f x, \map g  x}$
if and only if both $a \le \map f x$ and $a \le \map g x$.

That is, for all $a \in \R$:

$\set {x \in X: \min \set {\map f x, \map g x} \ge a} = \set {x \in X: \map f x \ge a} \cap \set {x \in X: \map g x \ge a}$
By Characterization of Measurable Functions: $(1) \implies (4)$, the two sets on the RHS are elements of $\Sigma$, that is, measurable.

By Sigma-Algebra Closed under Intersection:

$\set {x \in X: \min \set {\map f x, \map g x} \ge a} \in \Sigma$
Hence $\min \set {f, g}$ is measurable, by Characterization of Measurable Functions: $(4) \implies (1)$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.10$




