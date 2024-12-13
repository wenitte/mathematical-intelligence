# 

Source: https://proofwiki.org/wiki/Product_of_Products_over_Overlapping_Domains

Theorem
Let $R: \Z \to \set {\T, \F}$ and $S: \Z \to \set {\T, \F}$ be propositional functions on the set of integers.
Let $\ds \prod_{\map R i} x_i$ denote a continued product over $R$.

Then:

$\ds \prod_{\map R j} a_j \prod_{\map S j} a_j = \paren {\prod_{\map R j \mathop \lor \map S j} a_j} \paren {\prod_{\map R j \mathop \land \map S j} a_j}$
where $\lor$ and $\land$ signify logical disjunction and logical conjunction respectively.


Proof













\(\ds \prod_{\map R j} a_j \times \prod_{\map S j} a_j\)

\(=\)







\(\ds \prod_{j \mathop \in \Z} a_j^{\sqbrk {\map R j} } \times \prod_{j \mathop \in \Z} a_j^{\sqbrk {\map S j} }\)





Definition of Continued Product by Iverson's Convention














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop \in \Z} a_j^{\paren {\sqbrk {\map R j} + \sqbrk {\map S j} } }\)





Product of Powers



Let:

$A := \set {j \in \Z: \map R j}$
$B := \set {j \in \Z: \map S j}$
The result then follows from Cardinality of Set Union.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products




