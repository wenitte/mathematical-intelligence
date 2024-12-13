# 

Source: https://proofwiki.org/wiki/Permutation_of_Indices_of_Summation



Theorem
Let $R: \Z \to \set {\T, \F}$ be a propositional function on the set of integers.
Let the fiber of truth of $R$ be finite.

Then:

$\ds \sum_{\map R j} a_j = \sum_{\map R {\map \pi j} } a_{\map \pi j}$
where:

$\ds \sum_{\map R j} a_j$ denotes the summation over $a_j$ for all $j$ that satisfy the propositional function $\map R j$
$\pi$ is a permutation on the fiber of truth of $R$.


Infinite Series
Let the fiber of truth of $R$ be infinite.

Let $\ds \sum_{\map R i} a_i$ be absolutely convergent.

Then:

$\ds \sum_{\map R j} a_j = \sum_{\map R {\map \pi j} } a_{\map \pi j}$


Proof













\(\ds \sum_{\map R {\map \pi j} } a_{\map \pi j}\)

\(=\)







\(\ds \sum_{j \mathop \in \Z} a_{\map \pi j} \sqbrk {\map R {\map \pi j} }\)





Definition of Summation by Iverson's Convention














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop \in \Z} \sum_{i \mathop \in \Z} a_i \sqbrk {\map R i} \sqbrk {i = \map \pi j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \Z} a_i \sqbrk {\map R i} \sum_{j \mathop \in \Z} \sqbrk {i = \map \pi j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \Z} a_i \sqbrk {\map R i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{\map R i} a_i\)




















\(\ds \)

\(=\)







\(\ds \sum_{\map R j} a_j\)





Change of Index Variable of Summation



$\blacksquare$


Also known as
The operation of permutation of indices of a summation can be seen referred to as a permutation of the range.
However, as the term range is ambiguous in the literature, and as its use here is not strictly accurate (it is the fiber of truth of $R$, not its range, which is being permuted, its use on $\mathsf{Pr} \infty \mathsf{fWiki}$ is discouraged.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: $(5)$




