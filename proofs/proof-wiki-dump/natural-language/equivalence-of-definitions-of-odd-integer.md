# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Odd_Integer



Theorem
The following definitions of the concept of Odd Integer are equivalent:

Definition 1
An integer $n \in \Z$ is odd if and only if it is not divisible by $2$.
That is, if and only if it is not even.

Definition 2
An integer $n \in \Z$ is odd if and only if:

$\exists m \in \Z: n = 2 m + 1$
Definition 3
An integer $n \in \Z$ is odd if and only if:

$x \equiv 1 \pmod 2$
where the notation denotes congruence modulo $2$.


Proof
$(1)$ if and only if $(2)$
From the Division Theorem, setting $b = 2$:

$\forall a \in \Z: \exists! q, r \in \Z: a = 2 q + r, 0 \le r < 2$
Thus, either:

$\exists q \in \Z: n = 2 q$
or:

$\exists q \in \Z: n = 2 q + 1$
When $n = 2 q$, $n$ is even by definition.
When $n$ is not even, $n = 2 q + 1$
Likewise, when $n = 2 q + 1$ it follows that $n$ is not even.
Hence both definitions of odd integer are equivalent.
$\Box$


$(2)$ if and only if $(3)$
By definition of congruence modulo $2$:

$x \equiv y \pmod 2 \iff \exists r \in \Z: x - y = 2 r$
Setting $y = 1$:

$x \equiv 1 \pmod 2 \iff \exists r \in \Z: x - y = 2 r$
from which:

$x \equiv 1 \pmod 2 \iff \exists r \in \Z: x = 2 r + 1$
Thus definition 2 is logically equivalent to definition 3.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm




