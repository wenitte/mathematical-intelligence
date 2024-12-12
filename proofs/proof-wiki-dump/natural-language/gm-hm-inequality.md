# 

Source: https://proofwiki.org/wiki/GM-HM_Inequality



Theorem
Let $x_1, x_2, \ldots, x_n \in \R_{> 0}$ be strictly positive real numbers.
Let $G_n$ be the geometric mean of $x_1, x_2, \ldots, x_n$.
Let $H_n$ be the harmonic mean of $x_1, x_2, \ldots, x_n$.

Then:

$G_n \ge H_n$


Proof 1
Let ${G_n}'$ denotes the geometric mean of the reciprocals of $x_1, x_2, \ldots, x_n$.

By definition of harmonic mean, we have that:

$\ds \dfrac 1 {H_n} := \frac 1 n \paren {\sum_{k \mathop = 1}^n \frac 1 {x_k} }$
That is, $\dfrac 1 {H_n}$ is the arithmetic mean of the reciprocals of $x_1, x_2, \ldots, x_n$.

Then:














\(\ds \dfrac 1 {H_n}\)

\(\ge\)







\(\ds {G_n}'\)





Cauchy's Mean Theorem














\(\ds \)

\(=\)







\(\ds \dfrac 1 {G_n}\)





Geometric Mean of Reciprocals is Reciprocal of Geometric Mean








\(\ds \leadsto \ \ \)





\(\ds H_n\)

\(\le\)







\(\ds G_n\)





Reciprocal Function is Strictly Decreasing



$\blacksquare$


Proof 2
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


Also see
AM-HM Inequality
Cauchy's Mean Theorem


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.2$ Inequalities: Relation Between Arithmetic, Geometric, Harmonic and Generalized Means: $3.2.1$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 36$: Inequalities: Inequalities involving Arithmetic, Geometric and Harmonic Means: $36.4$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): harmonic mean
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): mean
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): mean




