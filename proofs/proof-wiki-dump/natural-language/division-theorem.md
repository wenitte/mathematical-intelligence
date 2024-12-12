# 

Source: https://proofwiki.org/wiki/Division_Theorem

  This article was Featured Proof between 12 October 2008 and 19 October 2008.




Theorem
For every pair of integers $a, b$ where $b \ne 0$, there exist unique integers $q, r$ such that $a = q b + r$ and $0 \le r < \size b$:

$\forall a, b \in \Z, b \ne 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < \size b$

In the above equation:

$a$ is the dividend
$b$ is the divisor
$q$ is the quotient
$r$ is the remainder.


Half Remainder Version
For every pair of integers $a, b$ where $b \ne 0$, there exist unique integers $q, r$ such that $a = q b + r$ and $-\dfrac {\size b} 2 \le r < \dfrac {\size b} 2$:

$\forall a, b \in \Z, b \ne 0: \exists! q, r \in \Z: a = q b + r, -\dfrac {\size b} 2 \le r < \dfrac {\size b} 2$


Proof 1
From Division Theorem: Positive Divisor:

$\forall a, b \in \Z, b > 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < b$
That is, the result holds for positive $b$.
$\Box$

It remains to show that the result also holds for negative values of $b$.

Let $b < 0$.
Consider:

$\size b = -b > 0$
where $\size b$ denotes the absolute value of $b$: by definition $\size b > 0$.

From Division Theorem: Positive Divisor, we have the existence of $\tilde q, \tilde r \in \Z$ such that:

$a = \tilde q \size b + \tilde r, 0 \le \tilde r < \size b$
Since $\size b = -b$:

$a = \tilde q \paren {-b} + \paren {\tilde r} = \paren {-\tilde q} b + \tilde r$

Taking:

$q = -\tilde q, r = \tilde r$
the existence has been proved of integers $q$ and $r$ that satisfy the requirements.

The proof that they are unique is the same as that for the proof for positive $b$, but with $\size b$ replacing $b$.
$\blacksquare$


Proof 2
Consider the set of integer multiples $x \size b$ of $\size b$ less than or equal to $a$:

$M := \set {k \in \Z: \exists x \in \Z: k = x \size b, k \le a}$
We have that:

$-\size a \size b \le -\size a \le a$
and so $M \ne \O$.
From Set of Integers Bounded Above by Integer has Greatest Element, $M$ has a greatest element $h \size b$.
Then $h \size b \le a$ and so:

$a = h \size b + r$
where $r \ge 0$.
On the other hand:

$\paren {h + 1} \size b = h \size b + \size b > h \size b$
So:

$\paren {h + 1} \size b > a$
and:

$h \size b + \size b > h \size b + r$
Thus:

$r \le b$
Setting:

$q = h$ when $b > 0$
$q = -h$ when $b < 0$
it follows that:

$h \size b = q b$
and so:

$a = q b + r$
as required.
$\blacksquare$


Informal Proof
Existence
Consider the arithmetic sequence:

$\ldots, a - 3 b, a - 2 b, a - b, a, a + b, a + 2 b, a + 3 b, \ldots$
which extends in both directions.
Then by the Well-Ordering Principle, there must exist a smallest non-negative element, denoted by $r$.
So $r = a - q b$ for some $q \in \Z$.
$r$ must be in the interval $\hointr 0 b$ because otherwise $r - b$ would be smaller than $r$ and a non-negative element in the sequence.
$\Box$


Uniqueness
Suppose we have another pair $q_0$ and $r_0$ such that $a = b q_0 + r_0$, with $0 \le r_0 < b$.
Then:

$b q + r = b q_0 + r_0$
Factoring we see that:

$r - r_0 = b \paren {q_0 - q}$
and so:

$b \divides \paren {r - r_0}$
Since $0 \le r < b$ and $0 \le r_0 < b$, we have that:

$-b < r - r_0 < b$
Hence:

$r - r_0 = 0 \implies r = r_0$
So now:

$r - r_0 = 0 = b \paren {q_0 - q}$
which implies that:

$q = q_0$
Therefore the solution is unique.
$\blacksquare$


Also known as
The Division Theorem is otherwise known as the Quotient Theorem, or (more specifically) the Quotient-Remainder Theorem (as there are several other "quotient theorems" around).
Some sources call this the Division Algorithm but it is preferable not to offer up a possible source of confusion between this and the Euclidean Algorithm to which it is closely related.
It is also known by some as Euclid's Division Lemma, and by others as the Euclidean Division Property.


Also see
Definition:Integer Division


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.3$: Some properties of subrings and ideals
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.28$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): remainder: 1.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): division
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): division




