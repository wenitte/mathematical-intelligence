# 

Source: https://proofwiki.org/wiki/Integer_Multiples_form_Commutative_Ring



Theorem
Let $n \Z$ be the set of integer multiples of $n$.

Then $\struct {n \Z, +, \times}$ is a commutative ring.

Unless $n = 1$, $\struct {n \Z, +, \times}$ is not a ring with unity.


Proof
From Integer Multiples under Addition form Infinite Cyclic Group, $\struct {n \Z, +}$ is a cyclic group
From Cyclic Group is Abelian, $\struct {n \Z, +}$ is abelian.
From Integer Multiples Closed under Multiplication and Integer Multiplication is Associative, we have that $\struct {n \Z, \times}$ is a semigroup.
From Integer Multiplication Distributes over Addition it follows that $\struct {n \Z, +, \times}$ is a ring.
From Integer Multiplication is Commutative we have that $\struct {n \Z, +, \times}$ is a commutative ring.
So $\struct {n \Z, +, \times}$ is a commutative ring.
$\Box$

The unity of $\struct {\Z, +, \times}$ is $1$.
But unless $n = 1$, we have that $1 \notin n \Z$.
As $\struct {\Z, +, \times}$ is an integral domain, all its elements are cancellable, by the Cancellation Law for Ring Product of Integral Domain.
We have that Subrings of Integers are Sets of Integer Multiples.
From Identity of Cancellable Monoid is Identity of Submonoid it follows that $\struct {n \Z, +, \times}$ has no unity, because if it did, that unity would be $1$.
$\blacksquare$


Examples
Even Integers form Commutative Ring
Let $2 \Z$ be the set of even integers.

Then $\struct {2 \Z, +, \times}$ is a commutative ring.

However, $\struct {2 \Z, +, \times}$ is not an integral domain.


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $1$




