# 

Source: https://proofwiki.org/wiki/Change_of_Index_Variable_of_Product

Theorem
$\ds \prod_{\map R i} a_i = \prod_{\map R j} a_j$
where $\ds \prod_{\map R i} a_i$ denotes the product over $a_i$ for all $i$ that satisfy the propositional function $\map R i$.


Proof
Let $S = \set {i \in \Z: \map R i}$.
Let $T = \set {j \in \Z: \map R j}$.
Let $i \in S$.
Then $\map R i$.
Let $j = i$.
By Leibniz's Law, $\map R j$.
Thus $i \in T$.
By definition of subset:

$S \subseteq T$

Similarly, let $j \in T$.
Then $\map R j$.
Let $i = j$.
By Leibniz's Law, $\map R i$.
Thus $j \in S$.
By definition of subset:

$T \subseteq S$

Thus by definition of set equality:

$S = T$

Thus:














\(\ds \prod_{\map R i} a_i\)

\(=\)







\(\ds \prod a_i \sqbrk {\map R i}\)





Definition of Iverson's Convention














\(\ds \)

\(=\)







\(\ds \prod a_i \times \chi_S\)





Definition of Characteristic Function of Set














\(\ds \)

\(=\)







\(\ds \prod a_j \times \chi_T\)





as $S = T$














\(\ds \)

\(=\)







\(\ds \prod a_j \sqbrk {\map R j}\)





Definition of Iverson's Convention














\(\ds \)

\(=\)







\(\ds \prod_{\map R j} a_j\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products




