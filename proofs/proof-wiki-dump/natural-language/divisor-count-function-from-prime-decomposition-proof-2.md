# 

Source: https://proofwiki.org/wiki/Divisor_Count_Function_from_Prime_Decomposition/Proof_2

Theorem
Let $n$ be an integer such that $n \ge 2$.
Let the prime decomposition of $n$ be:

$n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$
Let $\map {\sigma_0} n$ be the divisor count function of $n$.

Then:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$


Proof
From Divisor Count Function of Power of Prime we have:

$\forall j \in \closedint 1 r: \map {\sigma_0} {p_j^{k_j} } = k_j + 1$
The result follows immediately from Divisor Count Function is Multiplicative‎.
$\blacksquare$





