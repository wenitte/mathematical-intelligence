# 

Source: https://proofwiki.org/wiki/Real_Sequence_with_Nonzero_Limit_is_Eventually_Nonzero

Theorem
Let $\sequence {x_n}$ be a real sequence.
Let $\sequence {x_n}$ converge to $a \ne 0$.

Then:

$\exists N \in \N: \forall n \ge N: x_n \ne 0$

That is, eventually every term of $\sequence {x_n}$ becomes non-zero.


Proof
Suppose $a > 0$. 
By Sequence Converges to Within Half Limit:

$\exists N \in \N: \forall n > N: x_n > \dfrac a 2 > 0$

Now suppose $a < 0$. 
By Sequence Converges to Within Half Limit:

$\exists N \in \N: \forall n > N: x_n < \dfrac a 2 < 0$

This shows that if $a \ne 0$:

$\exists N \in \N: \forall n > N: x_n \ne 0$
$\blacksquare$


Also see
Limit of Positive Real Sequence is Positive




