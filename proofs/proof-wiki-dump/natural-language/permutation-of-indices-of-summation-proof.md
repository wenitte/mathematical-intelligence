# 

Source: https://proofwiki.org/wiki/Permutation_of_Indices_of_Summation/Proof

Theorem
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


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: $(18)$




