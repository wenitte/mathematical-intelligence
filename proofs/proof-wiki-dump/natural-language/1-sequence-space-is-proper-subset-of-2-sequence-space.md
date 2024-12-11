# 

Source: https://proofwiki.org/wiki/1-Sequence_Space_is_Proper_Subset_of_2-Sequence_Space



Theorem
Let $\ell^1$ and $\ell^2$ be the $1$-sequence space and $2$-sequence space respectively.

Then $\ell^1$ is a proper subset of $\ell^2$.


Proof
$\ell^1$ is a subset of $\ell^2$
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $\ell^1$.
By definition of $1$-sequence space:

$\ds \sum_{n \mathop = 0}^\infty \size {x_n} < \infty$
By Terms in Convergent Series Converge to Zero:

$\ds \lim_{n \mathop \to \infty} \size {x_n} = 0$
By definition of convergent sequence:

$\exists N \in \N : \forall n > N : \size {x_n} < 1$
Furthermore:

$\forall \size {x_n} < 1 : \size {x_n}^2 < \size {x_n}$
By Comparison Test:

$\ds \sum_{n \mathop = 0}^\infty \size {x_n}^2 < \infty$
Hence:

$\sequence {x_n}_{n \mathop \in \N} \in \ell^2$
That is:

$\ell^1 \subseteq \ell^2$
$\Box$


$\ell^2$ is not a subset of $\ell^1$
Let $x := \tuple {1, \dfrac 1 2, \ldots, \dfrac 1 n, \ldots}$ with $n \in \N_{>0}$.
From Basel Problem:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2} < \infty$
From Harmonic Series is Divergent:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 n$
diverges.
Hence:

$x \in \ell^2$
but:

$x \notin \ell^1$
That is:

$\ell^2 \nsubseteq \ell^1$
$\Box$

By definition, $\ell^1$ and $\ell^2$ are not equal.
Therefore:

$\ell^1 \subsetneqq \ell^2$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




