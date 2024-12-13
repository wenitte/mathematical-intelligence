# 

Source: https://proofwiki.org/wiki/Rational_Polynomial_is_Content_Times_Primitive_Polynomial/Uniqueness

Theorem
Let $\Q \sqbrk X$ be the ring of polynomial forms over the field of rational numbers in the indeterminate $X$.
Let $\map f X \in \Q \sqbrk X$ be given.
Then there exist unique content $\cont f$ of $\map f X$ and primitive polynomial $\map {f^*} X$ such that:

$\map f X = \cont f \, \map {f^*} X$


Proof
Existence is proved in Rational Polynomial is Content Times Primitive Polynomial: Existence.

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




