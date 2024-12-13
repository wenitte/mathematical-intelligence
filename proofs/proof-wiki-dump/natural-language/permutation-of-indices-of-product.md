# 

Source: https://proofwiki.org/wiki/Permutation_of_Indices_of_Product

Theorem
Let $R: \Z \to \set {\T, \F}$ be a propositional function on the set of integers.
Let the fiber of truth of $R$ be finite.

Then:

$\ds \prod_{\map R j} a_j = \prod_{\map R {\map \pi j} } a_{\map \pi j}$
where:

$\ds \prod_{\map R j} a_j$ denotes the continued product over $a_j$ for all $j$ that satisfy the propositional function $\map R j$
$\pi$ is a permutation on the fiber of truth of $R$.


Proof













\(\ds \prod_{\map R {\map \pi j} } a_{\map \pi j}\)

\(=\)







\(\ds \prod_{j \mathop \in \Z} {a_{\map \pi j} }^{\sqbrk {\map R {\map \pi j} } }\)





Definition of Continued Product by Iverson's Convention














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop \in \Z} \prod_{i \mathop \in \Z} {a_i}^{\sqbrk {\map R i} \sqbrk {i = \map \pi j} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{i \mathop \in \Z} {a_i}^{\sqbrk {\map R i} } } \uparrow \paren {\prod_{j \mathop \in \Z} \sqbrk {i = \map \pi j} }\)





using Knuth uparrow notation














\(\ds \)

\(=\)







\(\ds \prod_{i \mathop \in \Z} {a_i}^{\sqbrk {\map R i} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{\map R i} a_i\)




















\(\ds \)

\(=\)







\(\ds \prod_{\map R j} a_j\)





Change of Index Variable of Product



$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products




