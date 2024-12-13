# 

Source: https://proofwiki.org/wiki/Integers_whose_Number_of_Representations_as_Sum_of_Two_Primes_is_Maximum/Sufficient_Condition

Theorem
Let $n$ be a (strictly) positive integer.
Suppose we have for some positive integer $k$:

$p_k \# \divides n$
$n \le 2 {p_{k + 1} }^2$
where $p_k \#$ denotes the product of the first $k$ primes.

Then $n$ can be represented as the sum of two primes in the maximum number of ways.


Proof
From Number of Representations as Sum of Two Primes, the number of ways an integer $n$ can be represented as the sum of two primes is no greater than the number of primes in the interval $\closedint {\dfrac n 2} {n - 2}$.
Suppose we have for some positive integer $k$:

$p_k \# \divides n$
$n \le 2 {p_{k + 1} }^2$
Let $p$ be a prime in $\closedint {\dfrac n 2} {n - 2}$.
Then $2 \le n - p \le \dfrac n 2$.
$p$ must be coprime to $p_1, p_2, \dots, p_k$.
Since $p_1, p_2, \dots, p_k \divides n$:

$n - p$ must also be coprime to $p_1, p_2, \dots, p_k$.
Hence the smallest prime factor of $n - p$ must be at least $p_{k + 1}$.
If $n - p$ is composite:

$n - p \ge {p_{k + 1} }^2$
But we also have:

$n - p \le \dfrac n 2 \le {p_{k + 1} }^2$
This leads to:

$n - p = \dfrac n 2 = {p_{k + 1} }^2$
and thus:

$p = \dfrac n 2 = {p_{k + 1} }^2$
which is a contradiction.
Thus $n - p$ must be prime.

This shows that $m$ is the sum of two primes in the maximum number of ways.
$\blacksquare$


Sources
July 1993: Jean-Marc Deshouillers, Andrew Granville, Wladyslaw Narkiewicz and Carl Pomerance: An Upper Bound in Goldbach's Problem (Math. Comp. Vol. 61, no. 203: pp. 209 – 213)  www.jstor.org/stable/2152947




