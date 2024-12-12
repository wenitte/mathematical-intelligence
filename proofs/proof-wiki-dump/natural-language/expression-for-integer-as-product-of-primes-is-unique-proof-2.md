# 

Source: https://proofwiki.org/wiki/Expression_for_Integer_as_Product_of_Primes_is_Unique/Proof_2

Theorem
Let $n$ be an integer such that $n > 1$.

Then the expression for $n$ as the product of one or more primes is unique up to the order in which they appear.


Proof
Aiming for a contradiction, suppose $n$ has two prime factorizations:

$n = p_1 p_2 \dots p_r = q_1 q_2 \dots q_s$
where $r \le s$ and each $p_i$ and $q_j$ is prime with $p_1 \le p_2 \le \dots \le p_r$ and $q_1 \le q_2 \le \dots \le q_s$. 
Since $p_1 \divides q_1 q_2 \dots q_s$, it follows from Euclid's Lemma for Prime Divisors that $p_1 = q_j$ for some $1 \le j \le s$.
Thus:

$p_1 \ge q_1$
Similarly, since $q_1 \divides p_1 p_2 \dots p_r$, from Euclid's Lemma for Prime Divisors:

$q_1 \ge p_1$
Thus, $p_1 = q_1$, so we may cancel these common factors, which gives:

$p_2 p_3 \cdots p_r = q_2 q_3 \dots q_s$

This process is repeated to show that:

$p_2 = q_2, p_3 = q_3, \ldots, p_r = q_r$
If $r < s$, we arrive at $1 = q_{r + 1} q_{r + 2} \cdots q_s$ after canceling all common factors.
But by Divisors of One, the only divisors $1$ are $1$ and $-1$.
Hence $q_{r + 1}, q_{r + 2}, \ldots, q_s$ cannot be prime numbers
From that contradiction it follows that $r = s$.
Thus:

$p_1 = q_1, p_2 = q_2, \ldots, p_r = q_s$
which means the two factorizations are identical.
Therefore, the prime factorizations of $n$ is unique.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Theorem $4$




