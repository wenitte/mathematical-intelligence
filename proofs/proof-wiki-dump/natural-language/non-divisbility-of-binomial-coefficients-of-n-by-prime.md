# 

Source: https://proofwiki.org/wiki/Non-Divisbility_of_Binomial_Coefficients_of_n_by_Prime



Theorem
Let $n \in \Z_{\ge 0}$ be a positive integer.
Let $p$ be a prime number.

Then:

$\dbinom n k$ is not divisible by $p$ for any $k \in \Z_{\ge 0}$ where $0 \le k \le n$
if and only if:

$n = a p^m - 1$ where $1 \le a < p$
for some $m \in \Z_{\ge 0}$.


Proof
The statement:

$\dbinom n k$ is not divisible by $p$
is equivalent to:

$\dbinom n k \not \equiv 0 \pmod p$

The corollary to Lucas' Theorem gives:

$\ds \dbinom n k \equiv \prod_{j \mathop = 0}^r \dbinom {a_j} {b_j} \pmod p$
where:

$n, k \in \Z_{\ge 0}$ and $p$ is prime
the representations of $n$ and $k$ to the base $p$ are given by:
$n = a_r p^r + \cdots + a_1 p + a_0$
$k = b_r p^r + \cdots + b_1 p + b_0$

Consider the form of $n = a p^m - 1$ when represented to the base $p$:














\(\ds n\)

\(=\)







\(\ds a p^m - 1\)




















\(\ds \)

\(=\)







\(\ds a \paren {p^m - 1} + \paren {a - 1}\)




















\(\ds \)

\(=\)







\(\ds a \paren {p - 1} \sum_{j \mathop = 0}^{m - 1} p^i + \paren {a - 1}\)





Sum of Geometric Sequence: Corollary 1














\(\ds \)

\(=\)







\(\ds \paren {a - 1} p^m + \sum_{j \mathop = 0}^{m - 1} \paren {p - 1} p^i\)





after algebra



That is, all of the digits of $n$ are $p - 1$ except perhaps the first one.
For $k$ such that $0 \le k \le n$, the digits of $k$ will all range over $0$ to $p - 1$.


Necessary Condition
Let $n = a p^m - 1$.
Then all the binomial coefficients $\dbinom {a_j} {b_j}$ (except perhaps the first) are of the form $\dbinom {p - 1} k$ for $0 \le k < p$.

By Binomial Coefficient of Prime Minus One Modulo Prime:

$\dbinom {p - 1} k \equiv \paren {-1}^k \pmod p$
and so:

$\dbinom {a_j} {b_j} \equiv \paren {-1}^k \pmod p$ for $0 \le j < r$

For the first digit, we have $0 \le b_r \le a_r < p$.
We have $\dbinom {a_r} {b_r} > 0$.
Since $a_r!$ is not divisible by $p$, neither does $\dbinom {a_r} {b_r}$.
Thus:

$\dbinom {a_r} {b_r} \not \equiv 0 \pmod p$

Hence:

$\ds \prod_{j \mathop = 0}^r \dbinom {a_j} {b_j} \equiv \pm \dbinom {a_r} {b_r} \not \equiv 0 \pmod p$
which means $\dbinom n k$ is not divisible by $p$ for any $k \in \Z_{\ge 0}$ where $0 \le k \le n$.
$\Box$


Sufficient Condition
We show the contrapositive.
Suppose $n \ne a p^m - 1$.
Then one of the digits $a_j$ (that is not the first one) will be less than $p - 1$.
But the digits of all possible $k$ will range over $0$ to $p - 1$.
Therefore there must be at least one $\dbinom {a_j} {b_j}$ such that $b_j > a_j$.
Such a condition leads to $\dbinom {a_j} {b_j} = 0$.
That is:

$\ds \prod_{j \mathop = 0}^r \dbinom {a_j} {b_j} \equiv 0 \pmod p$
which means $\dbinom n k$ is divisible by $p$ for some $k \le n$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $12$




