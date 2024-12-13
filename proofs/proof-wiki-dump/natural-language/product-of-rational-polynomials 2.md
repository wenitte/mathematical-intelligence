# 

Source: https://proofwiki.org/wiki/Product_of_Rational_Polynomials

Theorem
Let $\Q \sqbrk X$ be the ring of polynomial forms over the field of rational numbers in the indeterminate $X$.
Let $\map f X, \map g X \in \Q \sqbrk X$.
Using Rational Polynomial is Content Times Primitive Polynomial, let these be expressed as:

$\map f X = \cont f \cdot \map {f^*} X$
$\map g X = \cont g \cdot \map {g^*} X$
where:

$\cont f, \cont g$ are the content of $f$ and $g$ respectively
$f^*, g^*$ are primitive.

Let $\map h X = \map f X \map g X$ be the product of $f$ and $g$.
Then:

$\map {h^*} X = \map {f^*} X \map {g^*} X$


Proof
From Rational Polynomial is Content Times Primitive Polynomial:

$\cont h \cdot \map {h^*} X = \cont f \cont g \cdot \map {f^*} X \map {g^*} X$
and this expression is unique.

By Gauss's Lemma on Primitive Rational Polynomials we have that $\map {f^*} X \map {g^*} X$ is primitive.
From Content of Rational Polynomial is Multiplicative:

$\cont f \cont g = \cont f \cont g > 0$.
The result follows.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 31$. Polynomials with Integer Coefficients: Theorem $62$




