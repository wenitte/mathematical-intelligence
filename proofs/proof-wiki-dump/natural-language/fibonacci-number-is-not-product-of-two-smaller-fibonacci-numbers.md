# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_is_not_Product_of_Two_Smaller_Fibonacci_Numbers

Theorem
Let $m, n \in \Z$ be integers.
Suppose $\size m, \size n \ge 3$.
Let $F_m$ and $F_n$ be the $m$th and $n$th Fibonacci numbers.

Then $F_m \times F_n$ is not a Fibonacci number.


Proof
From Honsberger's Identity:

$F_n = F_{k - 1} F_{n - k + 2} + F_{k - 2} F_{n - k + 1}$
for $2 \le k \le n$.

Aiming for a contradiction, suppose $F_n = F_m F_k$ for some $m, k \ge 3$.
Then:














\(\ds F_m\)

\(=\)







\(\ds \dfrac {F_n} {F_k}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {F_{k - 1} F_{n - k + 2} + F_{k - 2} F_{n - k + 1} } {F_k}\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {F_{k - 1} } {F_{k - 1} + F_{k - 2} } } F_{n - k + 2} + \paren {\dfrac {F_{k - 2} } {F_{k - 1} + F_{k - 2} } } F_{n - k + 1}\)









The right hand side is a weighted mean of $2$ consecutive Fibonacci numbers.
Thus:

$F_{n - k + 2} < F_m < F_{n - k + 1}$
which cannot happen.
The result follows by Proof by Contradiction.
$\blacksquare$


Sources
1993: Joseph F. Stephany: Problems (Math. Mag. Vol. 66: p. 61)  www.jstor.org/stable/2690479
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




