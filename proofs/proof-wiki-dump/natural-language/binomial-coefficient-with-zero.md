# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_with_Zero



Theorem
$\forall r \in \R: \dbinom r 0 = 1$

The usual presentation of this result is:

$\forall n \in \N: \dbinom n 0 = 1$


Proof
From the definition of binomial coefficients:

$\dbinom r k = \dfrac {r^{\underline k} } {k!}$ for $k \ge 0$
where $r^{\underline k}$ is the falling factorial.
In turn:

$\ds x^{\underline k} := \prod_{j \mathop = 0}^{k - 1} \paren {x - j}$
But when $k = 0$, we have:

$\ds \prod_{j \mathop = 0}^{-1} \paren {x - j} = 1$
as $\ds \prod_{j \mathop = 0}^{-1} \paren {x - j}$ is a vacuous product.
From the definition of the factorial we have that $0! = 1$.
Thus:

$\forall r \in \R: \dbinom r 0 = 1$
$\blacksquare$


Integer Coefficients
This is completely compatible with the result for natural numbers:

$\forall n \in \N: \dbinom n 0 = 1$

From the definition:














\(\ds \binom n 0\)

\(=\)







\(\ds \frac {n!} {0! \ n!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac {n!} {1 \cdot n!}\)





Definition of Factorial of $0$














\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Also see
Particular Values of Binomial Coefficients for other similar results.


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.2$ The Binomial Theorem
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $(4)$




