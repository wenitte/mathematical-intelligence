# 

Source: https://proofwiki.org/wiki/Permutation_of_Indices_of_Supremum

Theorem
Let $\family {a_i}_{i \mathop \in I}$ be a family of elements of the non-negative real numbers $\R_{\ge 0}$ indexed by $I$.
Let $\map R i$ be a propositional functions of $i \in I$.

Let $\ds \sup_{\map R i} a_i$ be the indexed supremum on $\family {a_i}$.

Then:

$\ds \sum_{\map R i} a_i = \sum_{\map R {\map \pi i} } a_{\map \pi i}$
where $\pi$ is a permutation on the fiber of truth of $R$.


Proof













\(\ds \sup_{\map R {\map \pi j} } a_{\map \pi j}\)

\(=\)







\(\ds \sup_{j \mathop \in I} a_{\map \pi j} \sqbrk {\map R {\map \pi j} }\)




















\(\ds \)

\(=\)







\(\ds \sup_{j \mathop \in I} \paren {\sup_{i \mathop \in I} a_i \sqbrk {\map R i} \sqbrk {i = \map \pi j} }\)




















\(\ds \)

\(=\)







\(\ds \sup_{i \mathop \in I} a_i \sqbrk {\map R i} \sup_{j \mathop \in I} \sqbrk {i = \map \pi j}\)




















\(\ds \)

\(=\)







\(\ds \sup_{i \mathop \in I} a_i \sqbrk {\map R i}\)




















\(\ds \)

\(=\)







\(\ds \sup_{\map R i} a_i\)




















\(\ds \)

\(=\)







\(\ds \sup_{\map R j} a_j\)





Change of Index Variable of Supremum



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $35$




