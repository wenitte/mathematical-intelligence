# 

Source: https://proofwiki.org/wiki/Raw_Moment_of_Erlang_Distribution

Theorem
Let $n, k$ be strictly positive integers. 
Let $\lambda$ be a strictly positive real number. 
Let $X$ have a continuous random variable with an Erlang distribution with parameters $k$ and $\lambda$.
Then the $n$th raw moment of $X$ is given by:

$\ds \expect {X^n} = \frac 1 {\lambda^n} \prod_{m \mathop = 0}^{n - 1} \paren {k + m}$


Proof
From the definition of the Erlang distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {\lambda^k x^{k - 1} e^{- \lambda x} } {\map \Gamma k}$
From the definition of the expected value of a continuous random variable: 

$\ds \expect {X^n} = \int_0^\infty x^n \map {f_X} x \rd x$
So:














\(\ds \expect {X^n}\)

\(=\)







\(\ds \frac {\lambda^k} {\map \Gamma k} \int_0^\infty x^{n + k - 1} e^{- \lambda x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\lambda^k} {\lambda \map \Gamma k} \int_0^\infty \paren {\frac u \lambda}^{n + k - 1} e^{- u} \rd u\)





substituting $u = \lambda x$














\(\ds \)

\(=\)







\(\ds \frac {\lambda^k} {\lambda^{n + k} \map \Gamma k} \int_0^\infty u^{n + k - 1} e^{- u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\lambda^n \map \Gamma k} \map \Gamma {n + k}\)





Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \frac 1 {\lambda^n} \frac {\map \Gamma k} {\map \Gamma k} \prod_{m \mathop = 0}^{n - 1} \paren {k + m}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac 1 {\lambda^n} \prod_{m \mathop = 0}^{n - 1} \paren {k + m}\)









$\blacksquare$





