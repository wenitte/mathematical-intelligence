# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Integral_Domain



Theorem
The following definitions of the concept of Integral Domain are equivalent:

Definition 1
An integral domain $\struct {D, +, \circ}$ is:

a commutative ring which is non-null
with a unity
in which there are no (proper) zero divisors, that is:
$\forall x, y \in D: x \circ y = 0_D \implies x = 0_D \text{ or } y = 0_D$
that is, in which all non-zero elements are cancellable.

Definition 2
An integral domain $\struct {D, +, \circ}$ is a commutative ring such that $\struct {D^*, \circ}$ is a monoid, all of whose elements are cancellable.
In this context, $D^*$ denotes the ring $D$ without zero: $D \setminus \set {0_D}$.


Proof
$(1)$ implies $(2)$
Let $\struct {D, +, \circ}$ be an integral domain in sense $1$.

As $\struct {D, +, \circ}$ is already a commutative ring, it remains to show that $\struct {D^*, \circ}$ is a monoid.
Because $\circ$ is a ring product, and $\struct {D, +, \circ}$ has no zero divisors, we conclude Closure and Associativity.
Furthermore, $\struct {D, +, \circ}$ is non-null, hence $0_D \ne 1_D$, and we conclude $1_D \in D^*$.
Therefore, we also have an Identity for $\struct {D^*, \circ}$, and hence it is a monoid.

It remains to show that all elements of $\struct {D^*, \circ}$ are cancellable.
As $\struct {D, +, \circ}$ has no zero divisors, this follows from Ring Element is Zero Divisor iff not Cancellable.
$\Box$


$(2)$ implies $(1)$
Let $\struct {D, +, \circ}$ be an integral domain in sense $2$.

$\struct {D, +, \circ}$ is already a commutative ring.
Furthermore, as $\struct {D^*, \circ}$ is a monoid, it is nonempty.
Also, we conclude that $\struct {D, +, \circ}$ is a non-null ring with unity.

It remains to show that $\struct {D, +, \circ}$ has no zero divisors.
We know all elements of $\struct {D^*, \circ}$ are cancellable.
From Ring Element is Zero Divisor iff not Cancellable, we conclude that $\struct {D, +, \circ}$ cannot have zero divisors.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $21$. Rings and Integral Domains: Theorem $21.2$




