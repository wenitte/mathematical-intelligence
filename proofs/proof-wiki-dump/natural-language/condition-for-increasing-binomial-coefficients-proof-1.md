# 

Source: https://proofwiki.org/wiki/Condition_for_Increasing_Binomial_Coefficients/Proof_1

Theorem
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.
Let $\dbinom n k$ denote a binomial coefficient for $k \in \N$.

Then:

$\dbinom n k < \dbinom n {k + 1} \iff 0 \le k < \dfrac {n - 1} 2$


Proof













\(\ds \dbinom n k\)

\(<\)







\(\ds \dbinom n {k + 1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {n!} {\paren {n - k}! k!}\)

\(<\)







\(\ds \frac {n!} {\paren {n - k - 1}! \paren {k + 1}!}\)





Definition of Binomial Coefficient








\(\ds \leadstoandfrom \ \ \)





\(\ds k + 1\)

\(<\)







\(\ds n - k\)





Multiplying both sides by $\dfrac {\paren {n - k}! \paren {k + 1}!} {n!}$








\(\ds \leadstoandfrom \ \ \)





\(\ds 2 k\)

\(<\)







\(\ds n - 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds k\)

\(<\)







\(\ds \frac {n - 1} 2\)









$\blacksquare$





