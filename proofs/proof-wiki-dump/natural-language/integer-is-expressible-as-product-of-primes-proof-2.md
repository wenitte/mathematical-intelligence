# 

Source: https://proofwiki.org/wiki/Integer_is_Expressible_as_Product_of_Primes/Proof_2

Theorem
Let $n$ be an integer such that $n > 1$.

Then $n$ can be expressed as the product of one or more primes.


Proof
If $n$ is prime, the result is immediate.

Let $n$ be composite.
Then by Composite Number has Two Divisors Less Than It:

$\exists r, s \in \Z: n = r s, 1 < r < n, 1 < s < n$
This being the case, the set $S_1 = \set {d: d \divides n, 1 < d < n}$ is nonempty, and bounded below by $1$.
By Set of Integers Bounded Below by Integer has Smallest Element, $S_1$ has a smallest element, which we will call $p_1$.
Aiming for a contradiction, suppose $p_1$ is composite.
By Composite Number has Two Divisors Less Than It, there exist $a, b$ such that $a, b \divides p_1$ and $1 < a < p_1, 1 < b < p_1$.
But by Divisor Relation on Positive Integers is Partial Ordering, it follows that $a, b \divides n$ and hence $a, b \in S_1$.
This contradicts the assertion that $p_1$ is the smallest element of $S_1$.
Thus, $p_1$ is necessarily prime.

We may now write $n = p_1 n_1$, where $n > n_1 > 1$.
If $n_1$ is prime, the proof is complete.

Otherwise, the set $S_2 = \set {d: d \divides n_1, 1 < d < n_1}$ is nonempty, and bounded below by $1$.
By the above argument, the smallest element $p_2$ of $S_2$ is prime.
Thus we may write $n_1 = p_2 n_2$, where $1 < n_2 < n_1$.
This gives us $n = p_1 p_2 n_2$.
If $n_2$ is prime, we are done.
Otherwise, we continue this process.

Since $n > n_1 > n_2 > \cdots > 1$ is a (strictly) decreasing sequence of positive integers, there must be a finite number of $n_i$'s.
That is, we will arrive at some prime number $n_{k - 1}$, which we will call $p_k$.
This results in the prime decomposition $n = p_1 p_2 \cdots p_k$.
$\blacksquare$


Sources
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.) ... (previous) ... (next): $\text I$: The Series of Primes: $1.2$ Prime numbers: Theorem $1$




