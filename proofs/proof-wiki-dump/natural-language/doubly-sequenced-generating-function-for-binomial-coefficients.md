# 

Source: https://proofwiki.org/wiki/Doubly_Sequenced_Generating_Function_for_Binomial_Coefficients

Theorem
Let $\sequence {a_{m n} }$ be the doubly subscripted sequence defined as:

$\forall m, n \in \N_{\ge 0}: a_{m n} = \dbinom n m$
where $\dbinom n m$ denotes a binomial coefficient.

Then the generating function for $\sequence {a_{m n} }$ is given as:

$\map G {w, z} = \dfrac 1 {1 - z - w z}$


Proof













\(\ds \map G {w, z}\)

\(=\)







\(\ds \sum_{m, \, n \mathop \ge 0} a_{m n} w^m z^n\)





Definition of Generating Function for Doubly Subscripted Sequence














\(\ds \)

\(=\)







\(\ds \sum_{m, \, n \mathop \ge 0} \dbinom n m w^m z^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {1 + w}^n z^n\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {\paren {1 + w} z}^n\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - \paren {1 + w} z}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - z - w z}\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $12$




