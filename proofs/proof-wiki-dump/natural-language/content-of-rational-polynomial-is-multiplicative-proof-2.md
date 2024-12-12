# 

Source: https://proofwiki.org/wiki/Content_of_Rational_Polynomial_is_Multiplicative/Proof_2

Theorem
Let $h \in \Q \sqbrk X$ be a polynomial with rational coefficients.
Let $\cont h$ denote the content of $h$.

Then for any polynomials $f, g \in \Q \sqbrk X$ with rational coefficients:

$\cont {f g} = \cont f \cont g$


Proof
From Rational Polynomial is Content Times Primitive Polynomial, let $\map f X$ and $\map g X$ be expressed as:

$\map f X = \cont f \cdot \map {f^*} X$
$\map g X = \cont g \cdot \map {g^*} X$
where:

$\cont f, \cont g$ are the content of $f$ and $g$ respectively
$f^*, g^*$ are primitive.

We have, by applications of Rational Polynomial is Content Times Primitive Polynomial:

$\cont h \cdot \map {h^*} X = \cont f \cont g \cdot \map {f^*} X \, \map {g^*} X$
By Gauss's Lemma on Primitive Rational Polynomials we have that $\map {f^*} X \, \map {g^*} X$ is primitive.
As $\cont f > 0$ and $\cont g > 0$, then so is $\cont f \cont g > 0$.
By the uniqueness clause in Rational Polynomial is Content Times Primitive Polynomial, the result follows.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 31$. Polynomials with Integer Coefficients: Theorem $62$




