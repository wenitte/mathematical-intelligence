# 

Source: https://proofwiki.org/wiki/Maximum_is_Greater_than_or_Equal_to_Geometric_Mean

Theorem
Let $x_1, x_2, \ldots, x_n \in \R_{\ge 0}$ be positive real numbers.
Let $p \in \R$ be a real number.
Let $\map G {x_1, x_2, \ldots, x_n}$ denote the geometric mean of $x_1, x_2, \ldots, x_n$.
Then:

$\max \set {x_1, x_2, \ldots, x_n} \ge \map G {x_1, x_2, \ldots, x_n}$
Equality holds if and only if:

$x_1 = x_2 = \cdots x_n$
or $x_k = 0$ for some $k \in \set {1, 2, \ldots, n}$.


Proof
From Limit of Hölder Mean as Exponent tends to Zero is Geometric Mean:

$\map G {x_1, x_2, \ldots, x_n} = \ds \lim_{p \mathop \to 0} \map {M_p} {x_1, x_2, \ldots, x_n}$
where $\map {M_p} {x_1, x_2, \ldots, x_n}$ denotes the Hölder mean with exponent $p$ of $x_1, x_2, \ldots, x_n$.
Then from Maximum is Greater than or Equal to Hölder Mean:
$\max \set {x_1, x_2, \ldots, x_n} \ge \map {M_p} {x_1, x_2, \ldots, x_n}$
where equality holds if and only if:

$x_1 = x_2 = \cdots x_n$
or:

$p < 0$ and $x_k = 0$ for some $k \in \set {1, 2, \ldots, n}$.
In this context, if such an $x_k = 0$ then:

$\ds \prod_{k \mathop = 1}^n x_k = 0$
and so by definition:
$\map G {x_1, x_2, \ldots, x_n} = 0$
Thus we have:

$\max \set {x_1, x_2, \ldots, x_n} \ge \map G {x_1, x_2, \ldots, x_n}$
$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.2$ Inequalities: Relation Between Arithmetic, Geometric, Harmonic and Generalized Means: $3.2.3$




