# 

Source: https://proofwiki.org/wiki/Point_in_Closure_of_Subset_of_Metric_Space_iff_Limit_of_Sequence

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $H \subseteq A$ be a subset of $A$.
Let $H^-$ denote the closure of $H$.

Let $a \in A$.
Then $a \in H^-$ if and only if there exists a sequence $\sequence {x_n}$ of points of $H$ which converges to the limit $a$.


Proof
From definition of closure, $H^- = H' \cup H^i$.
Suppose that $a \in H^-$.

If $a \in H^i$, then $a \in H$ and so $\sequence {a, a, \ldots}$ is a sequence in $H$ that converges to $a$.
If $a \in H'$, then by Definition of Limit Point (Metric Space) there exists a sequence in $H$ that converges to $a$.
$\Box$

For the converse, let $\sequence {x_n}$ be a sequence in $H$ that converges to a point $a \in A$.
So let $U$ be an open set that contains $a$.

By the definition of an open set, it follows that there exists an open ball centered at $a$ such that $\map {B_\epsilon} a \subseteq U$.
But then because $\sequence {x_n}$ converges to $a$ there exists $m \in \N_{\gt 0}$ such that:














\(\ds \map d {x_m, a}\)

\(<\)







\(\ds \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds x_m\)

\(\in\)







\(\ds \map {B_\epsilon} a\)





Definition of Open Ball








\(\ds \leadsto \ \ \)





\(\ds H \cap \map {B_\epsilon} a\)

\(\ne\)







\(\ds \O\)





by hypothesis $\sequence {x_n}$ is sequence of points of $H$








\(\ds \leadsto \ \ \)





\(\ds H \cap U\)

\(\ne\)







\(\ds \O\)





$x_m \in \map {B_\epsilon} a$ and $\map {B_\epsilon} a \subseteq U$ leads to $x_m \in U$




Because from Set Intersection Preserves Subsets it is seen that $H \cap \map {B_\epsilon} a \subseteq H \cap U$.

It has been shown that every open set that contains $a$ also contains a point in $H$.
So by Condition for Point being in Closure, it is seen that $a \in H^-$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Exercise $6$




