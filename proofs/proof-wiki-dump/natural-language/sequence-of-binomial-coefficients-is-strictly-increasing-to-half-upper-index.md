# 

Source: https://proofwiki.org/wiki/Sequence_of_Binomial_Coefficients_is_Strictly_Increasing_to_Half_Upper_Index



Theorem
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $\dbinom n k$ be the binomial coefficient of $n$ over $k$ for a positive integer $k \in \Z_{\ge 0}$.
Let $S_n = \sequence {x_k}$ be the sequence defined as:

$x_k = \dbinom n k$

Then $S_n$ is strictly increasing exactly where $0 \le k < \dfrac n 2$.


Corollary 1
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $\dbinom n k$ be the binomial coefficient of $n$ over $k$ for a positive integer $k \in \Z_{\ge 0}$.
Let $S_n = \left\langle{x_k}\right\rangle$ be the sequence defined as:

$x_k = \dbinom n k$

Then $S_n$ is strictly decreasing exactly where $\dfrac n 2 < k \le n$.


Corollary 2
Maximum Value of Binomial Coefficient

Proof
When $k \ge 0$, we have:














\(\ds \binom n {k + 1}\)

\(=\)







\(\ds \frac {n!} {\paren {k + 1}! \paren {n - k - 1}!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac {n - k} {n - k} \frac {n!} {\paren {k + 1}! \paren {n - k - 1}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {n - k} {\paren {k + 1} \paren {n - k} } \frac {n!} {k! \paren {n - k - 1}!}\)





extracting $k + 1$ from its factorial














\(\ds \)

\(=\)







\(\ds \frac {n - k} {k + 1} \frac {n!} {k! \paren {n - k}!}\)





inserting $n - k$ into its factorial














\(\ds \)

\(=\)







\(\ds \frac {n - k} {k + 1} \binom n k\)





Definition of Binomial Coefficient




In order for $S_n$ to be strictly increasing, it is necessary for $\dfrac {n - k} {k + 1} > 1$.
So:














\(\ds \dfrac {n - k} {k + 1}\)

\(>\)







\(\ds 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds n - k\)

\(>\)







\(\ds k + 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds n\)

\(>\)







\(\ds 2 k + 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds n\)

\(>\)







\(\ds 2 \paren {k + 1} - 1\)









Thus $\dbinom n {k + 1} > \dbinom n k$ if and only if $k + 1$ is less than half of $n$.
Hence the result.
$\blacksquare$





