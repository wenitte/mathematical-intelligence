# 

Source: https://proofwiki.org/wiki/Finite_Integral_Domain_is_Galois_Field



Theorem
A finite integral domain is a Galois field.


Proof 1
Let $R$ be a finite integral domain whose unity is $1$ and whose zero is $0$.

Let $a \in R$ such that $a \ne 0$.
We wish to show that $a$ has a product inverse in $R$. So consider the map $f: R \to R$ defined by $f: x \mapsto a x$.

We first show that the kernel of $f$ is trivial.
Consider that:

$\map \ker f = \set {x \in R: \map f x = 0} = \set {x \in R: a x = 0}$
Since $R$ is an integral domain, it has no proper zero divisors and thus $a x = 0$ means that $a = 0$ or $x = 0$.
Since, by definition, $a \ne 0$, then it must be true that $x = 0$.
Therefore, $\map \ker f = \set 0$ and so $f$ is injective.

Next, the Pigeonhole Principle gives us that an injective mapping from a finite set onto itself is surjective.
Since $R$ is finite, the mapping $f$ is surjective.

Finally, since $f$ is surjective and $1 \in R$, we have:

$\exists x \in R: \map f x = a x = 1$
So this $x$ is the product inverse of $a$ and the proof is complete.
$\blacksquare$


Proof 2
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


Proof 3
An integral domain is by definition a ring which has no proper zero divisors.
By definition, a Galois field is a field whose underlying set is finite.
The result follows from Finite Ring with No Proper Zero Divisors is Field.
$\blacksquare$


Proof 4
Aiming for a contradiction, suppose $\struct {D, +, \circ}$ is a finite integral domain which is not a field.
From Non-Field Integral Domain has Infinite Number of Ideals, $\struct {D, +, \circ}$ has an infinite number of distinct ideals.
But this contradicts the assertion that $\struct {D, +, \circ}$ is finite.
Hence the result by Proof by Contradiction.
$\blacksquare$


Also see
Generalization
Finite-Dimensional Integral Domain over Field is Field




