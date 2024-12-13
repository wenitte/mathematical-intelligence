# 

Source: https://proofwiki.org/wiki/Integer_is_Expressible_as_Product_of_Primes



Theorem
Let $n$ be an integer such that $n > 1$.

Then $n$ can be expressed as the product of one or more primes.


Proof 1
Aiming for a contradiction, suppose this supposition is false.
Let $m$ be the smallest integer which can not be expressed as the product of primes.
As a prime number is trivially a product of primes, $m$ can not itself be prime.
Hence:

$\exists r, s \in \Z: 1 < r < m, 1 < s < m: m = r s$
As $m$ is our least counterexample, both $r$ and $s$ can be expressed as the product of primes.
Say $r = p_1 p_2 \cdots p_k$ and $s = q_1 q_2 \cdots q_l$, where all of $p_1, \ldots, p_k, q_1, \ldots, q_l$ are prime.
Hence $m = r s = p_1 p_2 \cdots p_k q_1 q_2 \cdots q_l$, which is a product of primes.
Hence there is no such counterexample.
$\blacksquare$


Proof 2
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


Proof 3
The proof proceeds by induction.
For all $n \in \N_{> 1}$, let $\map P n$ be the proposition:

$n$ can be expressed as a product of prime numbers.

First note that if $n$ is prime, the result is immediate.


Basis for the Induction
$\map P 2$ is the case:

$n$ can be expressed as a product of prime numbers.
As $2$ itself is a prime number, and the result is immediate.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true, for all $j$ such that $2 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

For all $j \in \N$ such that $2 \le j \le k$, $j$ can be expressed as a product of prime numbers.
from which it is to be shown that:

$k + 1$ can be expressed as a product of prime numbers.


Induction Step
This is the induction step:

If $k + 1$ is prime, then the result is immediate.
Otherwise, $k + 1$ is composite and can be expressed as:

$k + 1 =  r s$
where $2 \le r < k + 1$ and $2 \le s < k + 1$
That is, $2 \le r \le k$ and $2 \le s \le k$.
Thus by the induction hypothesis, both $r$ and $s$ can be expressed as a product of primes.
So $k + 1 = r s$ can also be expressed as a product of primes.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Therefore, for all $n \in \N_{> 1}$:

$n$ can be expressed as a product of prime numbers.


Also see
Expression for Integer as Product of Primes is Unique


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.2$: More about Numbers: Irrationals, Perfect Numbers and Mersenne Primes
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.16$: The Sequence of Primes: Problem $1 \ \text{(a)}$
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Euclid




