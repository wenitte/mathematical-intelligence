# 

Source: https://proofwiki.org/wiki/Decomposition_into_Product_of_Power_of_2_and_Odd_Integer_is_Unique

Theorem
Let $n \in \Z$ be an integer.
Then $n$ can be decomposed into the product of a power of $2$ and an odd integer.


Proof
Aiming for a contradiction, suppose there exists $n \in \Z$ which can be decomposed into a power of $2$ and an odd integer in more than one way.
That is:

$n = 2^a r$
and:

$n = 2^b s$
where:

$a, b \in \Z_{\ge 0}$
$r$ and $s$ are odd integers.
either $a \ne b$ or $r \ne s$.

Suppose $r = s$.
Then:

$\dfrac n r = \dfrac n s = 2^a = 2^b$
which leads to:

$a = b$
which contradicts our supposition that either $r \ne s$ or $a \ne b$.

Similarly, suppose $a = b$.
Then:

$\dfrac n {2^a} = \dfrac n {2^b} = r = s$
which also contradicts our supposition that either $r \ne s$ or $a \ne b$.

Thus both $r \ne s$ and $a \ne b$.
Without loss of generality, let $a > b$.
Then $2^{a - b} = 2^c$ where $c \ge 1$.
Thus:

$\dfrac n {2^b} = 2^c r = s$
which means $s = 2 u$ for some $u \in \Z$.
Thus $s$ is an even integer.
This contradicts our supposition that $r$ and $s$ are both odd.

All possibilities have been investigated:

$a = b, r \ne s$
$a \ne b, r = s$
$a \ne b, r \ne s$
All have been shown to lead to a contradiction.

Thus by Proof by Contradiction it can be seen that an decomposition of $n$ into the product of a power of $2$ and an odd integer is unique.
Hence the result.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-4}$ The Fundamental Theorem of Arithmetic: Exercise $2$




