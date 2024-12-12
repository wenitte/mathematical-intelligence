# 

Source: https://proofwiki.org/wiki/Diffuse_Measure_of_Countable_Set

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Suppose that for all $x \in X$, the singleton $\set x$ is in $\Sigma$.
Suppose further that $\mu$ is a diffuse measure.

Let $E \in \Sigma$ be a countable measurable set.
Then $\map \mu E = 0$.


Proof
It holds trivially that:

$\ds E = \bigcup_{e \mathop \in E} \set e$
and in particular, this union is countable.
Also, $\map \mu {\set e} = 0$ for all $e \in E$ as $\mu$ is diffuse.

Hence Null Sets Closed under Countable Union applies to yield:

$\map \mu E = 0$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 6$: Problem $5 \ \text{(iii)}$




