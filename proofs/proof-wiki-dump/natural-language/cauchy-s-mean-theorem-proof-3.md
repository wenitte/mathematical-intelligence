# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Mean_Theorem/Proof_3

Theorem
Let $x_1, x_2, \ldots, x_n \in \R$ be real numbers which are all positive.
Let $A_n$ be the arithmetic mean of $x_1, x_2, \ldots, x_n$.
Let $G_n$ be the geometric mean of $x_1, x_2, \ldots, x_n$.

Then:

$A_n \ge G_n$
with equality holding if and only if:

$\forall i, j \in \set {1, 2, \ldots, n}: x_i = x_j$
That is, if and only if all terms are equal.


Proof
For $p \in \R$, let $\map {M_p} {x_1, x_2, \ldots, x_n}$ denote the Hölder mean with exponent $p$ of $x_1, x_2, \ldots, x_n$.
By definition of Hölder Mean with $p = 0$:

$\map {M_0} {x_1, x_2, \ldots, x_n} = \map G {x_1, x_2, \ldots, x_n}$
From Hölder Mean for Exponent 1 is Arithmetic Mean:

$\map {M_1} {x_1, x_2, \ldots, x_n} = \map G {x_1, x_2, \ldots, x_n}$
The result follows from Inequality of Hölder Means:

$0 < 1 \implies \map {M_0} {x_1, x_2, \ldots, x_n} < \map {M_1} {x_1, x_2, \ldots, x_n}$
unless $x_1 = x_2 = \cdots = x_n$, in which case:

$\map {M_0} {x_1, x_2, \ldots, x_n} = \map {M_1} {x_1, x_2, \ldots, x_n}$
Hence the result.
$\blacksquare$





