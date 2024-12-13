# 

Source: https://proofwiki.org/wiki/Negated_Upper_Index_of_Binomial_Coefficient/Corollary_2

Corollary to Negated Upper Index of Binomial Coefficient
Let $n, m \in \Z$.
Then:

$\dbinom n m = \paren {-1}^{n - m} \dbinom {-\paren {m + 1} } {n - m}$
where $\dbinom n m$ is a binomial coefficient.


Proof













\(\ds \dbinom r k\)

\(=\)







\(\ds \paren {-1}^k \dbinom {k - r - 1} k\)





Negated Upper Index of Binomial Coefficient








\(\ds \leadsto \ \ \)





\(\ds \dbinom n {n - m}\)

\(=\)







\(\ds \paren {-1}^{n - m} \dbinom {\paren {n - m} - n - 1} {n - m}\)





setting $r = n$ and $k = n - m$








\(\ds \leadsto \ \ \)





\(\ds \dbinom n m\)

\(=\)







\(\ds \paren {-1}^{n - m} \dbinom {-m - 1} {n - m}\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - m} \dbinom {- \paren {m + 1} } {n - m}\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $(19)$




