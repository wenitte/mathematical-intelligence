# 

Source: https://proofwiki.org/wiki/Existence_of_Fibonacci_Number_Divisible_by_Number

Theorem
Let $m \in \Z_{\ne 0}$ be an integer.
Then in the first $m^2$ Fibonacci numbers there exists at least one Fibonacci number which is divisible by $m$.


Proof
Consider pairs of Fibonacci numbers $\tuple {F_i, F_{i + 1}}$ modulo $m$.
There are $m^2$ possible pairs of remainders.
Thus by Pigeonhole Principle, among the $\paren {m^2 + 1}$ pairs of $\tuple {F_i, F_{i + 1}}$ with $0 \le i \le m^2$, at least two of them are identical modulo $m$.
That is, there exists $0 \le i < j \le m^2$ such that:

$\tuple {F_i, F_{i + 1}} \equiv \tuple {F_j, F_{j + 1}} \pmod m$
It is trivial to then show by induction that:

$F_{i - k} \equiv F_{j - k} \pmod m$
for any integer $k$.
In particular:

$F_{j - i} \equiv F_{i - i} = F_0 = 0 \pmod m$
so $m \divides F_{j - i}$.
Note that $0 < j - i \le m^2$.
Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




