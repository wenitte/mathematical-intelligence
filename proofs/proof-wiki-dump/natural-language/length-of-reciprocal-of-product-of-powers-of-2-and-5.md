# 

Source: https://proofwiki.org/wiki/Length_of_Reciprocal_of_Product_of_Powers_of_2_and_5

Theorem
Let $n \in \Z$ be an integer.
Let $\dfrac 1 n$, when expressed as a decimal expansion, terminate after $m$ digits.

Then $n$ is of the form $2^p 5^q$, where $m$ is the greater of $p$ and $q$.


Proof
Since $\dfrac 1 n$ terminates after $m$ digits:

$\dfrac {10^m} n$ is an integer
$\dfrac {10^{m - 1}} n$ is not an integer

From the first condition, we have $n = 2^p 5^q$ for some positive integers $p, q \le m$.
This gives $m \ge \max \set {p, q}$.

From the second condition, we cannot have both $p, q \le m - 1$.
Therefore at least one of $p, q$ is equal to $m$.
This gives $m \le \max \set {p, q}$.

These results give $m = \max \set {p, q}$.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




