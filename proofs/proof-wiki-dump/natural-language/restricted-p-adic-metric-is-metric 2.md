# 

Source: https://proofwiki.org/wiki/Restricted_P-adic_Metric_is_Metric

Theorem
Let $p \in \N$ be a prime.

Let $d^\Z_p$ be the $p$-adic metric on $\Z$:

$\forall x, y \in \Z: \map {d^\Z_p} {x, y} = \norm {x - y}_p$
where $\norm {x - y}_p$ denotes the $p$-adic norm.

Then $d^\Z_p$ is a metric.


Proof
From $p$-adic Metric is Metric, the $p$-adic metric on $\Q$:

$\forall x, y \in \Q: \map {d_p} {x, y} = \norm {x - y}_p$
forms a metric space $\struct {\Q, d_p}$.
The mapping:

$\forall x, y \in \Z: \map {d^\Z_p} {x, y} = \norm {x - y}_p$
is the restriction of $d_p$ to the integers.
Hence the $p$-adic metric on $\Z$ is a metric subspace $\struct {\Z, d^\Z_p}$ of $\struct {\Q, d_p}$.
The result follows from Subspace of Metric Space is Metric Space.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 2$: Metric Spaces: Exercise $8$




