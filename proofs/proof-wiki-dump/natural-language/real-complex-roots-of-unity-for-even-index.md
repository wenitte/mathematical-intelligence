# 

Source: https://proofwiki.org/wiki/Real_Complex_Roots_of_Unity_for_Even_Index

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer such that $n$ is even.
Let $U_n = \set {z \in \C: z^n = 1}$ be the set of complex $n$th roots of unity.

The only $x \in U_n$ such that $x \in \R$ are:

$x = 1$ or $x \in -1$

That is, $1$ and $-1$ are the only complex $n$th roots of unity which are real number.


Proof
From Positive Real Complex Root of Unity, we have that $1$ is the only element of $U_n$ which is a positive real number.
We note that $\paren {-1}^n = 1$ as $n$ is even.
Thus $-1$ is also an element of $U_n$.
Now let $z \in U_n$ such that $\cmod z \ne 1$.

Let $z > 0$.
From Positive Power Function on Non-negative Reals is Strictly Increasing it follows that:

$z < 1 \implies z^n < 1$
and:

$z > 1 \implies z^n > 1$

Let $z < 0$.
From Positive Power Function on Negative Reals is Strictly Decreasing it follows that:

$z < -1 \implies z^n > 1$
and:

$z > -1 \implies z^n < 1$
That is, in all cases where $\cmod z \ne 1$ we have that $z^n \ne 1$.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity




