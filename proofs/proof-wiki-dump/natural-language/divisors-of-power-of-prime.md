# 

Source: https://proofwiki.org/wiki/Divisors_of_Power_of_Prime

Theorem
Let $p$ be a prime number.
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.

Then the only divisors of $p^n$ are $1, p, p^2, \ldots, p^{n - 1}, p^n$.


Proof
First it is necessary to establish that every element of the set $\set {1, p, p^2, \ldots, p^{n - 1}, p^n}$ is in fact a divisor of $p^n$.
For any $j \in \set {1, 2, \ldots, n}$:

$p^n = p^j p^{n - j}$
and so each of $1, p, p^2, \ldots, p^{n - 1}, p^n$ is a divisor of $p^n$.
$\Box$

Let:

$a \in \Z_{>0}: a \notin \set {1, p, p^2, \ldots, p^{n - 1}, p^n}$
Let $a = p^j$ where $j \in \Z: j > n$.
Then:

$p^j = p^n p^{j - n}$
and so $p^n$ is a divisor of $p^j$.
Hence $p_j \nmid p^n$.

Now let:

$a \notin \set {p^k: k \in \Z_{>0} }$
Then:

$\exists q \in \Bbb P: q \divides a$
where:

$\Bbb P$ is the set of all prime numbers
$\divides$ denotes divisibility.
Aiming for a contradiction, suppose $a \divides p^n$.
From Divisor Relation is Transitive it follows that $q \divides p^n$.
From Euclid's Lemma for Prime Divisors: General Result it follows that:

$q \divides p$
As $p$ is a prime, by definition its only divisors are $1$ and $p$.
This contradicts the supposition that $q$ is a divisor of $p^n$.
Hence $a \nmid p^n$.
$\blacksquare$





