# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Metric_Space/Absolute_Value_Rule

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\R$ denote the real numbers.
Let $f: M \to \R$ be a real-valued function from $M$ to $\R$
Let $f$ be continuous at $a \in M$.

Then:

$\size f$ is continuous at $a$
where:

$\map {\size f} x$ is defined as $\size {\map f x}$.


Proof
Let $\epsilon \in \R_{>0}$ be a positive real number.

Because $f$ is continuous at $a$:

$\exists \delta \in \R_{>0}: \map d {x, a} < \delta \implies \size {\map f x - \map f a} < \epsilon$
From Reverse Triangle Inequality:

$\size {\size {\map f x} - \size {\map f a} } \le \size {\map f x - \map f a}$
and so:

$\exists \delta \in \R_{>0}: \map d {x, a} < \delta \implies \size {\size {\map f x} - \size {\map f a} } < \epsilon$

$\epsilon$ is arbitrary, so:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \map d {x, a} < \delta \implies \size {\size {\map f x} - \size {\map f a} } < \epsilon$
That is, by definition:

$\size f$ is continuous at $a$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 14$




