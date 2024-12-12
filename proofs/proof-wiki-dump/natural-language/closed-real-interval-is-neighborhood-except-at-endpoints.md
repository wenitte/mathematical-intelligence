# 

Source: https://proofwiki.org/wiki/Closed_Real_Interval_is_Neighborhood_Except_at_Endpoints

Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $\closedint a b \subset \R$ be a closed interval of $\R$.

Then $\closedint a b$ is a neighborhood of all of its points except $a$ and $b$.


Proof
Let $a < c < b$.
Let $\epsilon < \map \min {b - c, c - a}$.
From the definition of positive it follows that $\epsilon \in \R_{>0}$.

Let $\map {B_\epsilon} c = \openint {c - \epsilon} {c + \epsilon}$ be the open $\epsilon$-ball of $c$.
We have that $c + \epsilon < b$ and $a < c - \epsilon$.
Thus:

$\map {B_\epsilon} c \subseteq \closedint a b$

This article, or a section of it, needs explaining.In particular: There needs to be a result linked to that proves that $\map {B_\epsilon} c$ is in fact a subset of $\closedint a b$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
It follows that, by definition, $\closedint a b$ is a neighborhood of $c$.

Now consider $a$.
Let $\epsilon \in \R_{>0}$.
We have that $a - \epsilon < a$ and so $\map {B_\epsilon} a = \openint {a - \epsilon} {a + \epsilon}$ does not lie entirely in $\closedint a b$.

Similarly, consider $b$.
Let $\epsilon \in \R_{>0}$.
We have that $b < b + \epsilon$ and so $\map {B_\epsilon} b = \openint {b - \epsilon} {b + \epsilon}$ does not lie entirely in $\closedint a b$.

It follows that, by definition, $\closedint a b$ is a neighborhood of neither $a$ nor $b$.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{III}$: Metric Spaces: Compactness




