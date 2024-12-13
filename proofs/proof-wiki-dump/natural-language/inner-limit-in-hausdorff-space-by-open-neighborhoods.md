# 

Source: https://proofwiki.org/wiki/Inner_Limit_in_Hausdorff_Space_by_Open_Neighborhoods

Theorem
Let $\sequence {C_n}_{n \mathop \in \N}$ be a sequence of sets in a Hausdorff topological space $\struct {\XX, \tau}$.
Let $x \in \XX$.
Let $\map \mho x := \set {V \in \tau:\ x \in V}$ denote the set of open neighborhoods of $x$.
Let $\NN_\infty$ denote the set of cofinite subsets of $\N$:

$\NN_\infty := \set {N \subset \N: \N \setminus N \text{ is finite} }$

Then the inner limit of $\sequence {C_n}_{n \mathop \in \N}$ is:

$\ds \liminf_n C_n = \set {x \in \XX: \forall V \in \map \mho x: \exists N \in \NN_\infty: \forall n \in N: C_n \cap V \ne \O}$
or equivalently:

$\ds \liminf_n C_n = \set {x \in \XX: \forall V \in \map \mho x: \exists N_0 \in \N: \forall n \ge N_0: C_n \cap V \ne \O}$


Proof
If $x \in \liminf_n C_n$ then there exist a sequence $\sequence {x_k}_{n \mathop \in \N}$ such that $x_k \to x$ while:

$x_k \in C_{n_k}$
and 

$\sequence {n_k}_{k \mathop \in \N} \subseteq \N$ is a strictly increasing sequence of indices.
For any $V \in \map \mho x$ there exists $N_0 \in\N$ such that for all $i \ge N_0$: 

$x_i \in V$
and:

$x_i \in C_{n_i}$

Thus:

$C_{n_i} \cap V \ne \O$
Therefore $x \in \set {x \in \XX: \forall V \in \map \mho x: \exists N_0 \in \N: \forall n \ge N_0: C_n \cap V \ne \O}$.
$\Box$

Let $x \in \set {x \in \XX: \forall V \in \map \mho x: \exists N \in \NN_\infty: \forall n \in N: C_n \cap V \ne \O}$.
Thus:

$\forall V \in \map \mho x: \exists N \in \NN_\infty: \forall n \in N: C_n \cap V \ne \O$
Then there exists a strictly increasing sequence:

$\sequence {n_k}_{k \mathop \in \N} \subseteq \N$
such that for every $V \in \map \mho x$:

$\exists x_k \in C_{n_k} \cap V$.
Hence $x_k \to x$ in the topology $\tau$.
$\blacksquare$


This article, or a section of it, needs explaining.In particular: A general increase in clarity needed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Also see
Inner Limit of Sequence of Sets in Normed Space described via the point-to-set distance function induced by the norm of the space
Inner Limit in Normed Spaces by Open Balls
Inner Limit in Hausdorff Space by Set Closures
Inner Limit is Closed Set




