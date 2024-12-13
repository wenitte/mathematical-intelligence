# 

Source: https://proofwiki.org/wiki/Product_of_nth_Lucas_and_Fibonacci_Numbers

Theorem
Let $L_k$ be the $k$th Lucas number.
Let $F_k$ be the $k$th Fibonacci number.

Then:

$\forall n \in \N_{>0}: F_n L_n = F_{2 n}$


Proof
By definition of Lucas numbers:

$L_n = F_{n - 1} + F_{n + 1}$
Hence:

$F_n L_n = F_n \paren {F_{n - 1} + F_{n + 1} }$
From Honsberger's Identity:

$\forall m, n \in \Z_{>0}: F_{m + n} = F_{m - 1} F_n + F_m F_{n + 1}$
The result follows by setting $m = n$.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-1}$ Principle of Mathematical Induction: Exercise $15$




