# 

Source: https://proofwiki.org/wiki/Idempotent_Elements_of_Ring_with_No_Proper_Zero_Divisors

Theorem
Let $\struct {R, +, \circ}$ be a non-null ring with no (proper) zero divisors.
Let $x \in R$.

Then:

$x \circ x = x \iff x \in \set {0_R, 1_R}$

That is, the only elements of $\struct {R, \circ}$ that are idempotent are zero and unity.


Proof
We have $0_R \circ 0_R = 0_R$, so that sorts out one element.

Let $R^*$ be the ring $R$ without the zero: $R^* = R \setminus \set {0_R}$.
By Ring Element is Zero Divisor iff not Cancellable, all elements of $R^*$ that are not zero divisors are cancellable.
Therefore all elements of $R^*$ are cancellable.

Suppose $x \circ x = x$ where $x \ne 0_R$.
Then $x \circ x = x = x \circ 1_R$.
As $x$ is cancellable, the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $21$. Rings and Integral Domains: Theorem $21.3$




