# 

Source: https://proofwiki.org/wiki/Negated_Upper_Index_of_Binomial_Coefficient/Corollary_1

Corollary to Negated Upper Index of Binomial Coefficient
Let $r \in \R, k \in \Z$.
Then:

$\dbinom {-r} k = \paren {-1}^k \dbinom {r + k - 1} k$
where $\dbinom {-r} k$ is a binomial coefficient.


Proof 1













\(\ds \binom {-r} k\)

\(=\)







\(\ds \paren {-1}^k \binom {k - \paren {-r} - 1} k\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \paren {-1}^k \binom {r + k - 1} k\)









$\blacksquare$


Proof 2













\(\ds \binom {-r} k\)

\(=\)







\(\ds \frac {\paren {-r}^{\underline k} } {k!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac {-r \paren {-r - 1} \paren {-r - 2} \dotsm \paren {-r - k + 1} } {k!}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^k \frac {\paren r \paren {r + 1} \paren {r + 2} \dotsm \paren {r + k - 1} }{k!}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^k \frac {\paren {r + k - 1} \paren {r + k - 2} \paren {r + k - 3} \dotsm \paren {r + k - k} } {k!}\)





reversing the order














\(\ds \)

\(=\)







\(\ds \paren {-1}^k \frac {\paren {r + k - 1} \paren {r + k - 2} \paren {r + k - 3} \dotsm \paren {r + k - 1 - \paren {k - 1} } } {k!}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^k \binom {r + k - 1} k\)









$\blacksquare$





