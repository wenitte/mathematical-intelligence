# 

Source: https://proofwiki.org/wiki/Frobenius%27s_Theorem/Lemma_4

Lemma
Let $\struct {A, \oplus}$ be a quadratic real algebra.
If $A$ is also a division algebra, then every non-zero $u \in U$ can be written as $u = \alpha v$ with $\alpha \in \R$ and $v^2 = -1$.


Proof
This follows directly from the definition of division algebra.
Also, we have that $u^2 \in \R$.

Aiming for a contradiction, suppose $u^2 = 0$.
Since $u$ is non-zero and since $A$ is a division algebra, there exists an inverse $u^{-1}$ such that $u u^{-1} = 1$.
But then $u = u 1 = u u u^{-1} = 0 \cdot u^{-1} = 0$, which cannot be since $u$ was assumed to be non-zero.

Now suppose $u^2 > 0$.
Then there exists an $\alpha \in \R$ such that $\alpha^2 = u^2$.
But then $\paren {u - \alpha} \paren {u + \alpha} = u^2 - \alpha^2$ would be $0$.
Since $A$ is assumed to be a division algebra, this would imply that either $u = \alpha$ or $u = -\alpha$.
This is impossible, since $u \in U$.
So:

$u^2 < 0$
and so:

$u^2 = -\alpha^2$
with $0 \ne \alpha \in \R$.
Thus, $v = \alpha^{-1} u$ is a desired element.
$\blacksquare$





