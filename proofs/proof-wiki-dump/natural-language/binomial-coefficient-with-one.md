# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_with_One



Theorem
$\forall r \in \R: \dbinom r 1 = r$
where $\dbinom r 1$ denotes a binomial coefficient.

The usual presentation of this result is:

$\forall n \in \N: \dbinom n 1 = n$


Proof
From the definition of binomial coefficients:

$\dbinom r k = \dfrac {r^{\underline k} } {k!}$ for $k \ge 0$
where $r^{\underline k}$ is the falling factorial.
In turn:

$\ds x^{\underline k} := \prod_{j \mathop = 0}^{k - 1} \paren {x - j}$
But when $k = 1$, we have:

$\ds \prod_{j \mathop = 0}^0 \paren {x - j} = \paren {x - 0} = x$
So:

$\forall r \in \R: \dbinom r 1 = r$
$\blacksquare$

This is completely compatible with the result for natural numbers:

$\forall n \in \N: \dbinom n 1 = n$
as from the definition:

$\dbinom n 1 = \dfrac {n!} {1! \ \paren {n - 1}!}$
the result following directly, again from the definition of the factorial where $1! = 1$.
$\blacksquare$


Also see
Particular Values of Binomial Coefficients for other similar results.


Sources
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.4$: Factorials and binomial coefficients: $1.28$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $(4)$




