# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Continuous_Real_Function_is_Continuous

Theorem
Let $f: \R \to \R$ be a real function.
Let $f$ be continuous at a point $a \in \R$.

Then:

$\size f$ is continuous at $a$
where:

$\map {\size f} x$ is defined as $\size {\map f x}$.


Proof
Let $\epsilon \in \R_{>0}$ be a positive real number.

Because $f$ is continuous at $a$:

$\exists \delta \in \R_{>0}: \size {x - a} < \delta \implies \size {\map f x - \map f a} < \epsilon$
From Reverse Triangle Inequality:

$\size {\size {\map f x} - \size {\map f a} } \le \size {\map f x - \map f a}$
and so:

$\exists \delta \in \R_{>0}: \size {x - a} < \delta \implies \size {\size {\map f x} - \size {\map f a} } < \epsilon$

$\epsilon$ is arbitrary, so:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \size {x - a} < \delta \implies \size {\size {\map f x} - \size {\map f a} } < \epsilon$
That is, by definition:

$\size f$ is continuous at $a$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 17$




