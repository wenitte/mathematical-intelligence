# 

Source: https://proofwiki.org/wiki/Exchange_of_Order_of_Summation_with_Dependency_on_Both_Indices/Proof

Theorem
$\ds \sum_{\map R i} \sum_{\map S {i, j} } a_{i j} = \sum_{\map {S'} j} \sum_{\map {R'} {i, j} } a_{i j}$
where:

$\map {S'} j$ denotes the propositional function:
there exists an $i$ such that both $\map R i$ and $\map S {i, j}$ hold
$\map {R'} {i, j}$ denotes the propositional function:
both $\map R i$ and $\map S {i, j}$ hold.


Proof













\(\ds \sum_{\map R i} \sum_{\map S {i, j} } a_{i j}\)

\(=\)







\(\ds \sum_{i, j \mathop \in \Z} a_{i j} \sqbrk {\map R i} \sqbrk {\map S {i, j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, j \mathop \in \Z} a_{i j} \sqbrk {\map R i \land \map S {i, j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, j \mathop \in \Z} a_{i j} \sqbrk {\map {S'} j} \sqbrk {\map {R'} {i, j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\map {S'} j} \sum_{\map {R'} {i, j} } a_{i j}\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: $(21)$




