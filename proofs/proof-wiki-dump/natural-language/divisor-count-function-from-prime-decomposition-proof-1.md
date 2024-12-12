# 

Source: https://proofwiki.org/wiki/Divisor_Count_Function_from_Prime_Decomposition/Proof_1

Theorem
Let $n$ be an integer such that $n \ge 2$.
Let the prime decomposition of $n$ be:

$n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$
Let $\map {\sigma_0} n$ be the divisor count function of $n$.

Then:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$


Proof
We have:

$d \divides n \implies \forall i: 1 \le i \le r: d = p_1^{l_1} p_2^{l_2} \ldots p_1^{l_1}, 0 \le l_i \le k_i$

For each $i$, there are $k_i + 1$ choices for $l_i$, making $\paren {k_1 + 1} \paren {k_2 + 1} \cdots \paren {k_r + 1}$ choices in all.
By the Fundamental Theorem of Arithmetic and hence the uniqueness of prime decomposition, each of these choices results in a different number, therefore a distinct divisor.
$\blacksquare$





