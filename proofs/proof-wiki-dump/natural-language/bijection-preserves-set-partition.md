# 

Source: https://proofwiki.org/wiki/Bijection_Preserves_Set_Partition

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a bijection

Let $I$ be an indexing set.
Let $\family {S_i}_{i \mathop \in I}$ be a partitioning of $S$ indexed by $I$.
Hence, let $\set {S_i: i \in I}$ be the resulting partition of $S$.

Then the image of $f$ is a partition of $T$ indexed by $I$ such that:

$T = \set {f \sqbrk {S_i}: i \in I}$


Proof
By definition of partitioning:

$(1): \quad \forall i \in I: S_i \ne \O$, that is, none of $S_i$ is empty
$(2): \quad \ds S = \bigcup_{i \mathop \in I} S_i$, that is, $S$ is the union of $\family {S_i}_{i \mathop \in I}$
$(3): \quad \forall i, j \in I: i \ne j \implies S_i \cap S_j = \O$, that is, the elements of $\family {S_i}_{i \mathop \in I}$ are pairwise disjoint.

It is sufficient to check that:

$(1): \quad \forall i \in I: f \sqbrk {S_i} \ne \O$, that is, none of $f \sqbrk {S_i}$ is empty
$(2): \quad \ds T = \bigcup_{i \mathop \in I} f \sqbrk {S_i}$, that is, $T$ is the union of $\family {f \sqbrk {S_i} }_{i \mathop \in I}$
$(3): \quad \forall i, j \in I: i \ne j \implies f \sqbrk {S_i} \cap f \sqbrk {S_j} = \O$, that is, the elements of $\family {f \sqbrk {S_i} }_{i \mathop \in I}$ are pairwise disjoint.

We have that:

$f \sqbrk {S_i} = \set {t \in T: t = \map f s: s \in S_i}$
As $S_i \ne \O$ from $(1)$ it follows that $f \sqbrk {S_i} \ne \O$.
Hence criterion $(1)$ is fulfilled by $f$.
$\Box$

Because $f$ is a bijection, it is a fortiori a surjection.
Hence:

$\forall t \in T: \exists s \in S: \map f s = t$
But as $S = \set {S_i: i \in I}$ is partitioned by $I$, it follows that:

$\exists i \in I: s \in S_i$
Hence:

$\exists i \in I: t \in f \sqbrk {S_i}$
So every element of $T$ is an element of (at least) one of the $f \sqbrk {S_i}$.
That is:

$\ds T = \bigcup_{i \mathop \in I} f \sqbrk {S_i}$
Hence criterion $(2)$ is fulfilled by $f$.
$\Box$

Because $f$ is a bijection, it is a fortiori an injection.
From Image of Intersection under Injection:

$\forall S_i, S_j \subseteq S: f \sqbrk {S_i \cap S_j} = f \sqbrk {S_i} \cap f \sqbrk {S_j}$
But for $i \ne j$ we have that $S_i \cap S_j = \O$.
Hence:

$\forall i, j \in I: i \ne j \implies f \sqbrk {S_i} \cap f \sqbrk {S_j} = \O$
and it follows that criterion $(3)$ is fulfilled by $f$.
$\Box$

Thus all $3$ criteria for $T = \set {f \sqbrk {S_i}: i \in I}$ being a partition are fulfilled.
$\blacksquare$





