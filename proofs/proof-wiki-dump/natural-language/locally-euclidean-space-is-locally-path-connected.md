# 

Source: https://proofwiki.org/wiki/Locally_Euclidean_Space_is_Locally_Path-Connected

Theorem
Let $M$ be a locally Euclidean space of some dimension $d$.

Then $M$ is locally path-connected.


Proof
Let $m \in M$ be arbitrary.

From Locally Euclidean Space has Countable Local Basis Homeomorphic to Open Balls:

there exists a local basis $\family{U_n}_{n \in \N}$ of $m$ where each $U_n$ is the homeomorphic image of an open ball of $\R^d$.

For all $n \in \N$, let:

$U_n = \phi_n \sqbrk {B_n}$
where $B_n$ is an open ball of $\R^d$ and $\phi_n: B_n \to U_n$ is a homeomorphism.

From Open Ball in Normed Vector Space is Path-Connected:

$B_n$ is path-connected.

From Continuous Image of Path-Connected Set is Path-Connected: Metric Space:

$U_n$ is path-connected.

Hence $m$ has a local basis of path-connected sets. 

Since $m$ was arbitrary, it follows that $M$ is locally path-connected by definition.
$\blacksquare$





