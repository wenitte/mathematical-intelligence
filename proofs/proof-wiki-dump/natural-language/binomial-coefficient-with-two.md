# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_with_Two



Theorem
$\forall r \in \R: \dbinom r 2 = \dfrac {r \paren {r - 1} } 2$


Corollary
The usual presentation of this result is:

$\forall n \in \N: \dbinom n 2 = T_{n - 1} = \dfrac {n \paren {n - 1} } 2$
where $T_n$ is the $n$th triangular number.


Proof
From the definition of binomial coefficients:

$\dbinom r k = \dfrac {r^{\underline k}} {k!}$ for $k \ge 0$
where $r^{\underline k}$ is the falling factorial.
In turn:

$\ds x^{\underline k} := \prod_{j \mathop = 0}^{k - 1} \paren {x - j}$
When $k = 2$:

$\ds \prod_{j \mathop = 0}^1 \paren {x - j} = \frac {\paren {x - 0} \paren {x - 1} } {2!}$
where $2! = 1 \times 2 = 2$.
So:

$\forall r \in \R: \dbinom r 2 = \dfrac {r \paren {r - 1} } 2$
$\blacksquare$


Also see
Particular Values of Binomial Coefficients for other similar results.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $(4)$




