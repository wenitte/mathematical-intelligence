# 

Source: https://proofwiki.org/wiki/Euclid%27s_Theorem

  This article was Featured Proof .




Theorem
For any finite set of prime numbers, there exists a prime number not in that set.

In the words of Euclid:

Prime numbers are more than any assigned multitude of prime numbers.
(The Elements: Book $\text{IX}$: Proposition $20$)


Corollary 1
There are infinitely many prime numbers.


Corollary 2
There is no largest prime number.


Proof
Let $\mathbb P$ be a finite set of prime numbers.
Consider the number:

$\ds n_p = \paren {\prod_{p \mathop \in \mathbb P} p} + 1$

Take any $p_j \in \mathbb P$.
We have that:

$\ds p_j \divides \prod_{p \mathop \in \mathbb P} p$
Hence:

$\ds \exists q \in \Z: \prod_{p \mathop \in \mathbb P} p = q p_j$
So:














\(\ds n_p\)

\(=\)







\(\ds q p_j + 1\)





Division Theorem








\(\ds \leadsto \ \ \)





\(\ds n_p\)

\(\perp\)







\(\ds p_j\)





Definition of Coprime Integers




So $p_j \nmid n_p$.

There are two possibilities:

$(1): \quad n_p$ is prime, which is not in $\mathbb P$.
$(2): \quad n_p$ is composite.
But from Positive Integer Greater than 1 has Prime Divisor‎, it must be divisible by some prime.
That means it is divisible by a prime which is not in $\mathbb P$.

So, in either case, there exists at least one prime which is not in the original set $\mathbb P$ we created.
$\blacksquare$


Historical Note
This proof is Proposition $20$ of Book $\text{IX}$ of Euclid's The Elements.


Fallacy
There is a fallacy associated with Euclid's Theorem.
It is often seen to be stated that: the number made by multiplying all the primes together and adding $1$ is not divisible by any members of that set.
So it is not divisible by any primes and is therefore itself prime.
That is, sometimes readers think that if $P$ is the product of the first $n$ primes then $P + 1$ is itself prime.
This is not the case.
For example:

$\left({2 \times 3 \times 5 \times 7 \times 11 \times 13}\right) + 1 = 30\ 031 = 59 \times 509$
both of which are prime, but, take note, not in that list of six primes that were multiplied together to get $30\ 030$ in the first place.


Also see
Furstenberg's Proof of Infinitude of Primes
Definition:Euclid Number


Source of Name
This entry was named for Euclid.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{IX}$. Propositions
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 22 \beta$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Theorem $5$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.4$: Euclid (flourished ca. $300$ B.C.)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.16$: The Sequence of Primes: Theorem $2$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.19$: The Series $\sum 1/ p_n$ of the Reciprocals of the Primes
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Euclid's proof (of the infinity of primes)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euclid's proof (of the infinity of primes)
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Euclid




