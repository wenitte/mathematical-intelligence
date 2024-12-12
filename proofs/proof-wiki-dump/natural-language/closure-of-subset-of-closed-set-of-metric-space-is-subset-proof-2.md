# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_of_Closed_Set_of_Metric_Space_is_Subset/Proof_2

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $F$ be a closed set of $M$.
Let $H \subseteq F$ be a subset of $F$.
Let $H^-$ denote the closure of $H$.

Then $H^- \subseteq F$.


Proof
Let $x \in H^-$.
From Point in Closure of Subset of Metric Space iff Limit of Sequence

there exists a sequence $\sequence {a_n}$ of points of $H$ which converges to the limit $x$.
By assumption:

$\sequence {a_n}$ is also a sequence of points of $F$
From Subset of Metric Space contains Limits of Sequences iff Closed:

$x \in F$
Thus it has been shown:

$H^- \subseteq F$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Exercise $6$




