# 

Source: https://proofwiki.org/wiki/Gauss%27s_Lemma_on_Primitive_Rational_Polynomials/Proof_2

Theorem
Let $\Q$ be the field of rational numbers.
Let $\Q \sqbrk X$ be the ring of polynomials over $\Q$ in one indeterminate $X$.
Let $\map f X, \map g X \in \Q \sqbrk X$ be primitive polynomials.

Then their product $f g$ is also a primitive polynomial.


Proof
Recall Polynomial has Integer Coefficients iff Content is Integer.
By hypothesis $f$ and $g$ have content $1 \in \Z$.
Therefore:

$f, g \in \Z \sqbrk X$
Aiming for a contradiction, suppose that $f g$ is not primitive, say:

$\cont {f g} = d \ne 1$
By the Fundamental Theorem of Arithmetic we can choose a prime $p$ dividing $d$.
From Quotient Epimorphism from Integers by Principal Ideal, let $\pi : \Z \to \Z / p \Z$ be the quotient epimorphism to the ring of integers modulo $p$.
From Ring of Integers Modulo Prime is Field, $\Z / p \Z$ is a field.

Let $\Pi : \Z \sqbrk X \to \paren {\Z / p \Z} \sqbrk X$ be the induced homomorphism of the polynomial rings.
By construction, $p$ divides each coefficient of $f g$, so:

$\map \Pi {f g} = \map \Pi f \, \map \Pi g = 0$
From Polynomial Forms over Field form Integral Domain, $\paren {\Z / p \Z} \sqbrk X$ is an integral domain.
Thus:

$\map \Pi f = 0$ or $\map \Pi g = 0$
After possibly exchanging $f$ and $g$, we may assume that $\map \Pi f = 0$.

Now by Kernel of Induced Homomorphism of Polynomial Forms, if:

$f = a_0 + a_1 X + \cdots + a_n X^n$
we must have:

$\map \pi {a_i} = 0$
for $i = 0, \ldots, n$.
That is:

$a_i \in p \Z$
for $i = 0, \ldots, n$.
But this says precisely that $p$ divides each $a_i$, $i = 0, \ldots, n$.
Therefore $p$ divides the content of $f$, a contradiction.
Hence our assumption that $f g$ is not primitive was invalid.
The result follows by Proof by Contradiction.
$\blacksquare$





