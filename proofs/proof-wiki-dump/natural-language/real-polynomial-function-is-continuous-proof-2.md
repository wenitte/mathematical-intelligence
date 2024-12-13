# 

Source: https://proofwiki.org/wiki/Real_Polynomial_Function_is_Continuous/Proof_2

Theorem
A (real) polynomial function is continuous at every point.
Thus a (real) polynomial function is continuous on every interval of $\R$.


Proof
From Linear Function is Continuous‎, setting $\alpha = 1$ and $\beta = 0$, we have that:

$\ds \lim_{x \mathop \to c} x = c$
Repeated application of the Product Rule for Limits of Real Functions shows us that:

$\ds \forall k \in \N: \lim_{x \mathop \to c} x^k = c^k$

Now let $\map P x = a_n x^N + a_{n - 1} x^{n - 1} + \cdots + a_1 x + a_0$.
By repeated application of the Combined Sum Rule for Limits of Real Functions, we find that:

$\ds \lim_{x \mathop \to c} \map P x = \map P c$

So whatever value we choose for $c$, we have that $\map P x$ is continuous at $c$.

From the definition of continuity on an interval, the second assertion follows.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 8.13$




