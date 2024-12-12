# 

Source: https://proofwiki.org/wiki/Division_Theorem/Proof_1

Theorem
For every pair of integers $a, b$ where $b \ne 0$, there exist unique integers $q, r$ such that $a = q b + r$ and $0 \le r < \size b$:

$\forall a, b \in \Z, b \ne 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < \size b$


Proof
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


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.1$ The Division Algorithm: Theorem $2 \text{-} 1$ (Division Algorithm): Corollary




