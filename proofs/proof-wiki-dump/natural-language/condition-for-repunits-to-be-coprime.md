# 

Source: https://proofwiki.org/wiki/Condition_for_Repunits_to_be_Coprime



Theorem
Let $R_p$ and $R_q$ be repunit numbers with $p$ and $q$ digits respectively.
Then $R_p$ and $R_q$ are coprime if and only if $p$ and $q$ are coprime.


Proof
Necessary Condition
We show the contrapositive.
Suppose $p$ and $q$ are not coprime.
Then there exists some $d > 1$ such that $p = d m$ and $q = d n$.
Then by Divisors of Repunit with Composite Index:

$R_d \divides R_p$
and:

$R_d \divides R_q$
where $\divides$ denotes divisibility.
That is, $R_d$ is a common divisor of $R_p$ and $R_q$.
Therefore $R_p$ and $R_q$ are not coprime.

Thus we have shown the contrapositive of the necessary condition.
$\Box$


Sufficient Condition
Let $p$ and $q$ be coprime.
Let $R_p$ and $R_q$ be repunits in base $b$.

By Integer Combination of Coprime Integers, there exists integers $m, n$ such that $m p + n q = 1$.
One of $m, n$ is strictly positive while the other is negative.

Without loss of generality, suppose $m > 0$ and $n \le 0$.
Then from $m p = 1 - n q$:
We have $R_{m p} - b R_{- n q} = 1$.
By Divisors of Repunit with Composite Index, $R_p$ is a divisor of $R_{m p}$, while $R_q$ is a divisor of $R_{- n q}$.
By definition of divisibility, there exists integers $c, d$ such that $R_{m p} = c R_p, R_{- n q} = d R_q$.
Therefore $c R_p - b d R_q = 1$.

Note that both $c$ and $- b d$ are integers.
By Integer Combination of Coprime Integers, $R_p$ and $R_q$ are coprime.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1,111,111,111,111,111,111$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1,111,111,111,111,111,111$




