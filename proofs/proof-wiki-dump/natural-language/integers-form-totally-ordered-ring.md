# 

Source: https://proofwiki.org/wiki/Integers_form_Totally_Ordered_Ring

Theorem
The structure $\struct {\Z, +, \times, \le}$ is a totally ordered ring.


Proof
From Integers form Commutative Ring, $\struct {\Z, +, \times}$ is a commutative ring.
We need to show that $\le$ is a compatible ordering on $\Z$.
That is, that:

$(1): \quad \le$ is compatible with $+$
$(2): \quad \forall x, y \in \Z: 0 \le x, 0 \le y \implies 0 \le x \times y$

The first one follows from the fact that Integers under Addition form Totally Ordered Group.
Now, from Multiplicative Ordering on Integers, we have:

$\forall z, x, y \in \Z, 0 < y: z \le x \iff y \times z \le y \times x$

Let $z = 0, 0 \le x$.
Then:

$0 = x \times z \le x \times y = y \times x$

So if $y \ne 0$, the condition $0 \le x, 0 \le y \implies 0 \le x \times y$ holds.
Now if $y = 0$, we have $x \times y = 0$ and thus $0 \le x \times y$.
Thus $\le$ is compatible with $\Z$, and the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers




