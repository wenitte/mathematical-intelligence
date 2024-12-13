# 

Source: https://proofwiki.org/wiki/Number_of_Odd_Entries_in_Row_of_Pascal%27s_Triangle_is_Power_of_2

Theorem
The number of odd entries in a row of Pascal's triangle is a power of $2$.


Proof
Let $n, k \in \Z$.
Let the representations of $n$ and $k$ to the base $p$ be given by:

$n = 2^r a_r + \cdots + 2 a_1 + a_0$
$k = 2^r b_r + \cdots + 2 b_1 + b_0$

By Corollary to Lucas' Theorem:

$\ds \dbinom n k \equiv \prod_{j \mathop = 0}^r \dbinom {a_j} {b_j} \pmod 2$

By definition, $a_j$ and $b_j$ are either $0$ or $1$.
We have:

$\dbinom 0 1 = 0$
$\dbinom 0 0 = \dbinom 1 0 = \dbinom 1 1 = 1$
Thus $\dbinom n k$ is odd if and only if none of $\dbinom {a_j} {b_j} = 0$.

We are to determine how many values of $k$ there are such that $\dbinom n k$ is odd.
We construct a $k$ such that $\dbinom n k$ is odd.
For each $a_j = 1$, we can have $b_j = 0$ or $1$.
For each $a_j = 0$, we must have $b_j = 0$.
Hence for each $a_j$, there are $2^{a_j}$ ways for the corresponding $b_j$ to be such that $\dbinom {a_j} {b_j} \ne 0$.
By Product Rule for Counting, the number of choices for $a_0, \dots, a_r$ for which $k$ is such that $\dbinom n k$ is odd is given by: 

$\ds \prod_{j \mathop = 0}^r 2^{a_j} = 2^{\sum_{j = 0}^r {a_j} }$
which is a power of $2$.

Thus the number of odd entries in a row of Pascal's triangle is a power of $2$.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$




