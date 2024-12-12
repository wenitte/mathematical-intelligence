# 

Source: https://proofwiki.org/wiki/Finite_Integral_Domain_is_Galois_Field/Proof_2

Theorem
A finite integral domain is a Galois field.


Proof
Let $R$ be a finite integral domain with unity $1$ and zero $0$.
Let $R^*$ denote $R \setminus \set 0$, the set $R$ without the zero.
As $R$ is finite, we may enumerate the elements of $R$ as:

$x_0 = 0, x_1 = 1, x_2, x_3, \ldots, x_n$
Let $R^*$.
Consider the elements:

$x_k x_1, x_k x_2, \ldots, x_k x_n$
which are members of $R$ by closure of the ring product.
Since $R$ is an integral domain, by definition it has no proper zero divisors.
Therefore all of $x_k x_1, x_k x_2, \ldots, x_k x_n$ are elements of $R^*$.

Recall:

$x_k x_p = x_k x_q \implies x_p = x_q$
by the Cancellation Law for Ring Product of Integral Domain.
So the list of products consists of $n$ distinct elements and is therefore equal to the whole $R^*$.
Since $1 \in R^*$, we have that $x_k x_{k^*} = 1$ for some $k^*$.

Therefore, there exists an inverse for every non-zero element, so $R$ is a field.
As the underlying set of $R$ is finite, $R$ is by definition a Galois field.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Fields: $\S 15$. Examples of Fields: Theorem $25$
1991: R.B.J.T. Allenby: Rings, Fields and Groups: An Introduction to Abstract Algebra: $\S 3$: Theorem $3.3.4$




