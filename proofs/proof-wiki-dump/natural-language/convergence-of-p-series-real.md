# 

Source: https://proofwiki.org/wiki/Convergence_of_P-Series/Real

Theorem
Let $p \in \R$ be a real number.
Then the $p$-series:

$\ds \sum_{n \mathop = 1}^\infty n^{-p}$
is convergent if and only if $p > 1$.


Proof 1
By the Cauchy Integral Test:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^x}$ converges if and only if the improper integral $\ds \int_1^\infty \frac {\d t} {t^x}$ exists.
The result follows from Integral to Infinity of Reciprocal of Power of x.
$\blacksquare$


Proof 2
Let $p = 1$.
Then from Harmonic Series is Divergent the $p$-series diverges.
So let $p > 1$.

We note that the sequence of partial sums is increasing.
Hence it is sufficient to show that they are bounded above.
Let:

$s_{2^N} := 1 + \dfrac 1 {2^p} + \dfrac 1 {3^p} + \dotsb + \dfrac 1 {N^p}$
Then:














\(\ds s_N\)

\(\le\)







\(\ds S_{2^N - 1}\)




















\(\ds \)

\(=\)







\(\ds 1 + \dfrac 1 {2^p} + \dfrac 1 {3^p} + \dfrac 1 {4^p} + \dotsb + \dfrac 1 {\paren {2^N - 1}^p}\)




















\(\ds \)

\(=\)







\(\ds 1 + \paren {\dfrac 1 {2^p} + \dfrac 1 {3^p} } + \paren {\dfrac 1 {4^p} + \dfrac 1 {5^p} + \dfrac 1 {6^p} + \dfrac 1 {7^p} } + \dotsb + \paren {\dfrac 1 {2^{\paren {N - 1} p} } + \dotsb + \dfrac 1 {\paren {2^N - 1}^p} }\)




















\(\ds \)

\(\le\)







\(\ds 1 + \paren {\dfrac 1 {2^p} + \dfrac 1 {2^p} } + \paren {\dfrac 1 {4^p} + \dfrac 1 {4^p} + \dfrac 1 {4^p} + \dfrac 1 {4^p} } + \dotsb + \paren {\dfrac 1 {2^{\paren {N - 1} p} } + \dotsb + \dfrac 1 {2^{\paren {N - 1} p} } }\)




















\(\ds \)

\(=\)







\(\ds 1 + \dfrac 2 {2^p} + \dfrac 4 {4^p} + \dotsb + \dfrac {2^{N - 1} } {2^{\paren {N - 1} p} }\)




















\(\ds \)

\(=\)







\(\ds 1 + \dfrac 1 {2^{p - 1} } + \paren {\dfrac 1 {2^{p - 1} } }^2 + \dotsb + \paren {\dfrac 1 {2^{p - 1} } }^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 - \paren {1 / 2^{p - 1} }^N} {1 - \paren {1 / 2^{p - 1} } }\)




















\(\ds \)

\(\le\)







\(\ds \dfrac 1 {1 - \paren {1 / 2^{p - 1} } }\)









Hence the result.
$\blacksquare$





