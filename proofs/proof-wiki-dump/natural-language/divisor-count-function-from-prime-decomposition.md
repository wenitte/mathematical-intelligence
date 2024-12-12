# 

Source: https://proofwiki.org/wiki/Divisor_Count_Function_from_Prime_Decomposition



Theorem
Let $n$ be an integer such that $n \ge 2$.
Let the prime decomposition of $n$ be:

$n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$
Let $\map {\sigma_0} n$ be the divisor count function of $n$.

Then:

$\ds \map {\sigma_0} n = \prod_{j \mathop = 1}^r \paren {k_j + 1}$


Proof 1
We have:

$d \divides n \implies \forall i: 1 \le i \le r: d = p_1^{l_1} p_2^{l_2} \ldots p_1^{l_1}, 0 \le l_i \le k_i$

For each $i$, there are $k_i + 1$ choices for $l_i$, making $\paren {k_1 + 1} \paren {k_2 + 1} \cdots \paren {k_r + 1}$ choices in all.
By the Fundamental Theorem of Arithmetic and hence the uniqueness of prime decomposition, each of these choices results in a different number, therefore a distinct divisor.
$\blacksquare$


Proof 2
From Divisor Count Function of Power of Prime we have:

$\forall j \in \closedint 1 r: \map {\sigma_0} {p_j^{k_j} } = k_j + 1$
The result follows immediately from Divisor Count Function is Multiplicative‎.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 24 \beta$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): divisor function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): divisor function




