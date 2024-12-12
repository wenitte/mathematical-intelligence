# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convergent_Sequence_in_Metric_Space



Theorem
Let $M = \struct {A, d}$ be a metric space or a pseudometric space.
Let $\sequence {x_k}$ be a sequence in $A$.

The following definitions of the concept of Convergent Sequence in the context of Metric Spaces are equivalent:


Definition 1
$\sequence {x_k}$ converges to the limit $l \in A$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies \map d {x_n, l} < \epsilon$


Definition 2
$\sequence {x_k}$ converges to the limit $l \in A$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies x_n \in \map {B_\epsilon} l$
where $\map {B_\epsilon} l$ is the open $\epsilon$-ball of $l$.


Definition 3
$\sequence {x_k}$ converges to the limit $l \in A$ if and only if:

$\ds \lim_{n \mathop \to \infty} \map d {x_n, l} = 0$


Definition 4
$\sequence {x_k}$ converges to the limit $l \in A$ if and only if:

for every $\epsilon \in \R_{>0}$, the open $\epsilon$-ball about $l$ contains all but finitely many of the $x_k$.


Proof
Definition 1 iff Definition 2
By definition of an open ball:

$\forall n \in \N: \map d {x_n, l} < \epsilon \iff x_n \in \map {B_\epsilon} l$
The result follows.
$\Box$


Definition 1 iff Definition 3
By definition of a convergent real sequence:

$\ds \lim_{n \mathop \to \infty} \map d {x_n, l} = 0$
if and only if

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: n > N \implies \size {\map d {x_n, l} - 0} < \epsilon$

From Distance in Pseudometric is Non-Negative:

$\forall x, y \in A: \map d {x, y} \ge 0$

Hence:

$\forall n \in \N: \map d {x_n, l} = \size {\map d {x_n, l}} = \size {\map d {x_n, l} - 0}$
The result follows.
$\Box$


Definition 2 implies Definition 4
Let $\sequence {x_k}$ satisfy:

$\forall \epsilon > 0: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies x_n \in \map {B_\epsilon} l$
where $\map {B_\epsilon} l$ is the open $\epsilon$-ball of $l$.

Let a fixed $\epsilon \in \R{>0}$ be selected.
Then:

$\exists N \in \R_{>0}: \forall n \in \N: n > N \implies x_n \in \map {B_\epsilon} l$
Hence the only $x_k$ that cannot be in the open $\epsilon$-ball $\map {B_\epsilon} l$ of $l$ are those for which $n \le N$.
There are finitely many of these.
$\Box$


Definition 4 implies Definition 2
Let $\sequence {x_k}$ satisfy:

for every $\epsilon \in \R{>0}$, the open $\epsilon$-ball about $l$ contains all but finitely many of the $p_n$.

Let $\map {B_\epsilon} l$ be any open $\epsilon$-ball of $l$.
Let $A = \set {n: x_n \notin \map {B_\epsilon} l}$.
By assumption $A$ is finite.
From Finite Non-Empty Subset of Totally Ordered Set has Smallest and Greatest Elements, any finite subset of $\N$ has a maximum.
Let $N$ be the maximum of $A$.
Then for every $n > N$, $x_n$ must be in the open $\epsilon$-ball $\map {B_\epsilon} l$.
$\blacksquare$





