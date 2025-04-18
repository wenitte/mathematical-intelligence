# 

Source: https://proofwiki.org/wiki/H%C3%B6lder_Mean_for_Exponent_-1_is_Harmonic_Mean

Theorem
Let $x_1, x_2, \ldots, x_n \in \R_{\ge 0}$ be real numbers.
For $p \in \R_{\ne 0}$, let $\map {M_p} {x_1, x_2, \ldots, x_n}$ denote the Hölder mean with exponent $p$ of $x_1, x_2, \ldots, x_n$.

Then:

$\map {M_{-1} } {x_1, x_2, \ldots, x_n} = \dfrac 1 {\dfrac 1 n \paren {\dfrac 1 {x_1} + \dfrac 1 {x_2} + \cdots + \dfrac 1 {x_n} } }$
which is the harmonic mean of $x_1, x_2, \ldots, x_n$.


Proof
Recall the definition of the Hölder mean with exponent $p$:

$\ds \map {M_p} {x_1, x_2, \ldots, x_n} = \paren {\frac 1 n \sum_{k \mathop = 1}^n {x_k}^p}^{1 / p}$
Then:














\(\ds \map {M_{-1} } {x_1, x_2, \ldots, x_n}\)

\(=\)







\(\ds \paren {\frac 1 n \sum_{k \mathop = 1}^n {x_k}^{-1} }^{1 / -1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 1 n \sum_{k \mathop = 1}^n {\dfrac 1 {x_k} } }^{-1}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\ds \frac 1 n \sum_{k \mathop = 1}^n {\dfrac 1 {x_k} } }\)





simplifying



which is the harmonic mean by definition.
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.1$ Binomial Theorem etc.: Generalized Mean: $3.1.20$




