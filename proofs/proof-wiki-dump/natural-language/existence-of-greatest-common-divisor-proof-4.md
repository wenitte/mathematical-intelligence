# 

Source: https://proofwiki.org/wiki/Existence_of_Greatest_Common_Divisor/Proof_4

Theorem
Let $a, b \in \Z$ be integers such that $a \ne 0$ or $b \ne 0$.
Then the greatest common divisor of $a$ and $b$ exists.


Proof
From the Euclidean Algorithm, we have calculated a sequence $\tuple {r_1, r_2, \ldots r_{n - 2}, r_{n - 1}, r_n}$ such that:

$b > r_1 > r_2 > \dotsb > r_{n - 2} > r_{n - 1} > r_n = 0$
We have that:

$r_{n - 1} \divides a$
and:

$r_{n - 1} \divides b$
Working backwards from the final equation, we see that:

$r_k \divides r{k - 1}$
for all $k$ such that $1 < k \le n$.
Hence, if $d \divides a$ and $d \divides b$, we can use induction to proceed through the Euclidean Algorithm and see that $d$ divides $r_1, r_2, \ldots, r_{n - 2}, r_{n - 1}$.
Thus we see that $r_{n - 1}$ fulfils the criteria to be the greatest common divisor of $a$ and $b$.
$\Box$

Suppose $c_1$ and $c_2$ are both greatest common divisors of $a$ and $b$.
Then by definition there exist $g, h \in \Z_{>0}$ such that:

$g c_1 = c_2$
$h c_2 = c_1$
Hence:

$c_2 = g h c_2$
and so:

$g h = 1$
That is:

$g = h = 1$
and so:

$c_1 = c_2$
That is, the greatest common divisor of $a$ and $b$ is unique.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\S 2.2$: Theorem $2.2$




