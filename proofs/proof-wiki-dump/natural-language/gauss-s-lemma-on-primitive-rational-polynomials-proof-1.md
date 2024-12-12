# 

Source: https://proofwiki.org/wiki/Gauss%27s_Lemma_on_Primitive_Rational_Polynomials/Proof_1

Theorem
Let $\Q$ be the field of rational numbers.
Let $\Q \sqbrk X$ be the ring of polynomials over $\Q$ in one indeterminate $X$.
Let $\map f X, \map g X \in \Q \sqbrk X$ be primitive polynomials.

Then their product $f g$ is also a primitive polynomial.


Proof
Let $f$ and $g$ be as follows:














\(\ds f\)

\(=\)







\(\ds \sum_{k \mathop \in \Z} a_k X^k\)




















\(\ds g\)

\(=\)







\(\ds \sum_{k \mathop \in \Z} b_k X^k\)









From the definition of primitive polynomial, the coefficients of $f$ and $g$ are all integers.
From the definition of polynomial product:

$\ds f g = \sum_{k \mathop \in \Z} c_k \mathbf X^k$
where:

$\ds c_k = \sum_{\substack {p \mathop + q \mathop = k \\ p, q \mathop \in \Z} } a_p b_q$
it is clear that the coefficients of $f g$ are also all integers.

Aiming for a contradiction, suppose $f g$ is not primitive.
Then its coefficients must have a GCD greater than $1$.
Therefore there exists some prime $p$ which divides all the coefficients of $fg$.
Now $p$ can not divides all the coefficients of either $f$ or $g$, because they are primitive polynomials.
So:

Let $i$ be the smallest integer such that $p$ does not divide $a_i$
Let $j$ be the smallest integer such that $p$ does not divide $b_j$.
Consider the coefficient $c_{i+j}$ of $f g$:

$\ds c_{i + j} = \sum_{k \mathop = 0}^{i + j} a_k b_{i + j - k} = a_0 b_{i + j} + a_1 b_{i + j - 1} + \cdots + a_i b_j + \cdots + a_{i + j - 1} b_1 + a_{i + j} b_0$
From the assumption, it follows that $p \divides c_{i + j}$, and so:

$\ds p \divides \sum_{k \mathop = 0}^{i + j} a_k b_{i + j - k}$
where $\divides$ denotes divisibility.
Also, from the choice of $i$ and $j$, we have:

$p \divides a_m$ whenever $m < i$
$p \divides b_n$ whenever $n < j$
Now all the terms of $\ds \sum_{k \mathop = 0}^{i + j} a_k b_{i + j - k}$, except for $a_i b_j$, contain a factor from either $\set {a_0, a_1, \ldots, a_{i - 1} }$ or $\set {b_0, b_1, \ldots, b_{j - 1} }$.
It follows that we have:

$p \divides \paren {\ds \sum_{k \mathop = 0}^{i - 1} a_k b_{i + j - k} + \sum_{k \mathop = i + 1}^{i + j} a_k b_{i + j - k} }$
But then, as also $p \divides c_{i + j}$, it follows that $p \divides a_i b_j$ as well.
From Euclid's Lemma for Prime Divisors, $p$ has to divide one or the other.
This contradicts the definition of $i$ and $j$.
So $i$ and $j$ cannot both exist.
It follows that $p$ divides at least one of $f$ and $g$, one of which is therefore not primitive.

From this contradiction, we conclude that $f g$ must be primitive.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 31$. Polynomials with Integer Coefficients: Theorem $60$




