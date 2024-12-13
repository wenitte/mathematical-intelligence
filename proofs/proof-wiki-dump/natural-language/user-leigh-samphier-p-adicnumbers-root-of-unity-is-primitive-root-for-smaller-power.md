# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/P-adicNumbers/Root_of_Unity_is_Primitive_Root_for_Smaller_Power


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $n \in \Z_{> 0}$ be a strictly positive integer.
Let $F$ be a field.
Let $\alpha \ne 1$ be an $n$-th root of unity.

Then:

there exists $k \le n$ such that $\alpha$ is a primitive $k$-th root of unity
Proof
Let $k = \min \set{m : 0 \le m \le n, \alpha^m = 1}$.

Aiming for a contradiction, suppose $k = 1$.
We have














\(\ds 1\)

\(=\)







\(\ds \alpha^k\)





Definition of Min Operation














\(\ds \)

\(=\)







\(\ds \alpha^1\)





By hypothesis














\(\ds \)

\(=\)







\(\ds \alpha\)





Definition of Power of Field Element



This contradicts the premise:

$\alpha \ne 1$
So:

$k \ne 1$

By Definition of Min Operation

$\mathop \forall 0 < m < k: \alpha^m \ne 1$
By Definition of Primitive Root of Unity:

$\alpha$ is a primitive $k$-th root of unity
$\blacksquare$





