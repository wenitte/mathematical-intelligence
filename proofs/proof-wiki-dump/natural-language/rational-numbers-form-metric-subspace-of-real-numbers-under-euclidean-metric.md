# 

Source: https://proofwiki.org/wiki/Rational_Numbers_form_Metric_Subspace_of_Real_Numbers_under_Euclidean_Metric

Theorem
Let $\struct {\Q, d_\Q}$ be the set of rational numbers under the function $d_\Q: \Q \times \Q \to \R$ defined as:

$\forall x, y \in \Q: \map {d_\Q} {x, y} = \size {x - y}$
Let $\struct {\R, d}$ denote the real number line with the usual (Euclidean) metric.

Then $\struct {\Q, d_\Q}$ is a metric subspace of $\struct {\R, d}$.


Proof
From Rational Numbers form Subfield of Real Numbers:

$\Q \subseteq \R$
By definition of the Euclidean metric on $\R$:

$\forall x, y \in \R: \map d {x, y} = \size {x - y}$
and so $d_\Q$ is a restriction of $d$:

$d_\Q = d {\restriction}_{\Q \times \Q}$
From Euclidean Metric on Real Number Line is Metric, $d$ is a metric on $\R$.
The result follows by definition of metric subspace.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 7$: Subspaces and Equivalence of Metric Spaces: Example $1$




