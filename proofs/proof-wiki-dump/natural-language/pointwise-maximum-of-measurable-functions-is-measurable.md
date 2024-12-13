# 

Source: https://proofwiki.org/wiki/Pointwise_Maximum_of_Measurable_Functions_is_Measurable

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f, g: X \to \overline \R$ be $\Sigma$-measurable functions.

Then the pointwise maximum $\max \set {f, g}: X \to \overline \R$ is also $\Sigma$-measurable.


Proof
For all $x \in X$ and $a \in \R$, we have by Max Operation Yields Supremum of Parameters that:

$\max \set {\map f x, \map g x} \le a$
if and only if both $\map f x \le a$ and $\map g x \le a$.

That is, for all $a \in \R$:

$\set {x \in X: \max \set {\map f x, \map g x} \le a} = \set {x \in X: \map f x \le a} \cap \set {x \in X: \map g x \le a}$
By Characterization of Measurable Functions: $(1) \implies (2)$, the two sets on the RHS are elements of $\Sigma$, i.e. measurable.

By Sigma-Algebra Closed under Intersection, it follows that:

$\set {x \in X: \max \set {\map f x, \map g x} \le a} \in \Sigma$
Hence $\max \set {f, g}$ is measurable, by Characterization of Measurable Functions: $(2) \implies (1)$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.10$




