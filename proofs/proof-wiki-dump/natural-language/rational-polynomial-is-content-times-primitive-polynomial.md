# 

Source: https://proofwiki.org/wiki/Rational_Polynomial_is_Content_Times_Primitive_Polynomial



Theorem
Let $\Q \sqbrk X$ be the ring of polynomial forms over the field of rational numbers in the indeterminate $X$.
Let $\map f X \in \Q \sqbrk X$.
Then:

$\map f X = \cont f \, \map {f^*} X$
where:

$\cont f$ is the content of $\map f X$
$\map {f^*} X$ is a primitive polynomial.

For a given polynomial $\map f X$, both $\cont f$ and $\map {f^*} X$ are unique.


Proof
Proof of Existence
Consider the coefficients of $f$ expressed as fractions.
Let $k$ be any positive integer that is divisible by the denominators of all the coefficients of $f$.
Such a number is bound to exist: just multiply all those denominators together, for example.
Then $\map f X$ is a polynomial equal to $\dfrac 1 k$ multiplied by a polynomial with integral coefficients.
Let $d$ be the GCD of all these integral coefficients.
Then $\map f X$ is equal to $\dfrac h k$ multiplied by a primitive polynomial.
$\Box$


Proof of Uniqueness
Suppose that $a \cdot \map f X = b \cdot \map g X$ where $a, b \in \Q$ and $f, g$ are primitive.
Then:

$\map g X = \dfrac a b \map f X$
where $\dfrac a b$ is some rational number which can be expressed as $\dfrac m n$ where $m$ and $n$ are coprime.
Then:

$\map g X = \dfrac m n \map f X$
that is:

$m \cdot \map f X = n \cdot \map g X$
Suppose $m > 1$.
Then from Euclid's Lemma $m$ has a divisor $p$ which does not divide $n$ (as $m \perp n$).
So $m$ must divide every coefficient of $g$.
But this can not be so, as $g$ is primitive, so $m = 1$.
In a similar way, $n = 1$.
So $f = g$ and $a = b$, so demonstrating uniqueness.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 31$. Polynomials with Integer Coefficients: Theorem $61$




