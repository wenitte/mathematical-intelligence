# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Bernoulli_Polynomials

Theorem
Let $\map {B_n} x$ denote the $n$th Bernoulli polynomial.
Then the generating function for $B_n$ is:

$\ds \frac {t e^{t x} } {e^t - 1} = \sum_{k \mathop = 0}^\infty \frac {\map {B_k} x} {k!} t^k$


Proof
By definition of the generating function for Bernoulli numbers:

$\ds \frac t {e^t - 1} = \sum_{k \mathop = 0}^\infty \frac {B_k} {k!} t^k$

By Power Series Expansion for Exponential Function:

$\ds e^{t x} = \sum_{k \mathop = 0}^\infty \frac {x^k} {k!} t^k$

Thus:

$\ds \frac {t e^{t x} } {e^t - 1} = \paren {\sum_{k \mathop = 0}^\infty \frac {B_k} {k!} t^k} \paren {\sum_{k \mathop = 0}^\infty \frac {x^k} {k!} t^k}$

Combining like powers of $t$ we obtain: 














\(\ds \frac {t e^{t x} } {e^t - 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty t^k \sum_{m \mathop = 0}^k \frac {B_{k - m} } {\paren {k - m}!} \frac {x^m} {m!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {t^k} {k!} \sum_{m \mathop = 0}^k \frac {k!} {\paren {k - m}! m!} B_{k - m} x^m\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {t^k} {k!} \sum_{m \mathop = 0}^k \binom k m B_{k - m} x^m\)





Definition 1 of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\map {B_k} x} {k!} t^k\)





Definition of Bernoulli Polynomial



$\blacksquare$





