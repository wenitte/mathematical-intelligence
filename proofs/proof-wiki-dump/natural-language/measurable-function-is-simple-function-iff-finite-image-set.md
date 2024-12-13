# 

Source: https://proofwiki.org/wiki/Measurable_Function_is_Simple_Function_iff_Finite_Image_Set



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f: X \to \R$ be a measurable function.

Then $f$ is a simple function if and only if its image is finite:

$\card {\Img f} < \infty$


Corollary
Let $f: X \to \R$ be a measurable function.

Then $f$ has a standard representation.


Proof
Necessary Condition
Suppose that $f$ is a simple function, and that:

$\ds \forall x \in X: \map f x = \sum_{i \mathop = 1}^n a_i \map {\chi_{S_i} } x$
Since each of the $\chi_{S_i}$ is a characteristic function, it can take only the values $0$ and $1$.
Thus each summand can take two values.
It follows immediately that $f$ can take at most $2^n$ different values.

The conclusion follows from Simple Function is Measurable.
$\Box$


Sufficient Condition
Suppose that the image of $f$ is finite.
Call the distinct values $f$ attains $y_1, \ldots, y_n$.
For brevity, denote $\set {f = a}$ to mean $\set {x \in X: \map f x = a}$ (compare Set Definition by Predicate).

Define for each $i$ with $1 \le i \le n$:

$B_i := \set {f = y_i}$
From Characterization of Measurable Functions $(2)$ and $(4)$, and Sigma-Algebra Closed under Intersection we obtain that:

$\set {f = y_i} = \set {f \ge y_i} \cap \set {f \le y_i} \in \Sigma$

Furthermore, since the $y_i$ are distinct, the $B_i$ are necessarily disjoint.
It follows that:

$(1): \quad \map f x = \ds \sum_{i \mathop = 1}^n y_j \map {\chi_{B_j} } x$
As the $B_i$ are measurable, $f$ is shown to be a simple function.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.7 \ \text{(iii)}$




