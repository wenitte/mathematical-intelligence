# 

Source: https://proofwiki.org/wiki/Binomial_Theorem_for_Negative_Index_and_Negative_Parameter

Theorem
Let $n \in \Z_{\ge 0}$ be a positive integer.
Let $z \in \R$ be a real number such that $\size z < 1$.

Then:














\(\ds \dfrac 1 {\paren {1 - z}^{n + 1} }\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \binom {-n - 1} k \paren {-z}^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \binom {n + k} n z^k\)









where $\dbinom {n + k} n$ denotes a binomial coefficient.


Proof













\(\ds \dfrac 1 {\paren {1 - z}^{n + 1} }\)

\(=\)







\(\ds \paren {1 + \paren {-z} }^{- n - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \binom {- n - 1} k \paren {-z}^k\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \dbinom {n + 1 + k - 1} k \paren {-1}^k \paren {-z}^k\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \dbinom {n + k} k z^k\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(20)$




