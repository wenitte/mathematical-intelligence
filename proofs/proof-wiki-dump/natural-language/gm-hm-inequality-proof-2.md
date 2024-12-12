# 

Source: https://proofwiki.org/wiki/GM-HM_Inequality/Proof_2

Theorem
Let $x_1, x_2, \ldots, x_n \in \R_{> 0}$ be strictly positive real numbers.
Let $G_n$ be the geometric mean of $x_1, x_2, \ldots, x_n$.
Let $H_n$ be the harmonic mean of $x_1, x_2, \ldots, x_n$.

Then:

$G_n \ge H_n$


Proof
For $p \in \R$, let $\map {M_p} {x_1, x_2, \ldots, x_n}$ denote the Hölder mean with exponent $p$ of $x_1, x_2, \ldots, x_n$.
By definition of Hölder Mean with $p = 0$:

$\map {M_0} {x_1, x_2, \ldots, x_n} = \map G {x_1, x_2, \ldots, x_n}$
From Hölder Mean for Exponent -1 is Harmonic Mean:

$\map {M_{-1} } {x_1, x_2, \ldots, x_n} = \map G {x_1, x_2, \ldots, x_n}$
The result follows from Inequality of Hölder Means:

$-1 < 0 \implies \map {M_{-1} } {x_1, x_2, \ldots, x_n} < \map {M_0} {x_1, x_2, \ldots, x_n}$
unless $x_k = 0$ for some $k \in \set {1, 2, \ldots, n}$ or $x_1 = x_2 = \cdots = x_n$, in which case:

$\map {M_{-1} } {x_1, x_2, \ldots, x_n} = \map {M_0} {x_1, x_2, \ldots, x_n}$
Hence the result.
$\blacksquare$





