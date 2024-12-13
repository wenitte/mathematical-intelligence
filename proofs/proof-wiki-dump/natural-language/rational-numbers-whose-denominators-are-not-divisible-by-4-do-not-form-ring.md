# 

Source: https://proofwiki.org/wiki/Rational_Numbers_whose_Denominators_are_not_Divisible_by_4_do_not_form_Ring

Theorem
Let $S$ be the set defined as:

$S = \set {\dfrac m n : m, n \in \Z, m \perp n, 4 \nmid n}$
That is, $S$ is defined as the set of rational numbers such that, when expressed in canonical form, their denominators are not divisible by $4$.

Then the algebraic structure $\struct {S, +, \times}$ is not a ring.


Proof
For $\struct {S, +, \times}$ to be a ring, it is a necessary condition that $\struct {S, \times}$ is a semigroup.
For $\struct {S, \times}$ to be a semigroup, it is a necessary condition that $\struct {S, \times}$ is closed.
That is:

$\forall x, y \in S: x \times y \in S$

Let $x = \dfrac 1 2$ and $y = \dfrac 3 2$.
Both $x$ and $y$ are in $S$, as both are rational numbers expressed in canonical form whose denominators are not divisible by $4$.
But then:

$x \times y = \dfrac 1 2 \times \dfrac 3 2 = \dfrac 3 4$
which is a rational numbers expressed in canonical form whose denominator is divisible by $4$.
Hence $x \times y \notin S$ and so $\struct {S, \times}$ is not closed.
The result follows.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Some 'non-examples': $\text {(b)}$




