# 

Source: https://proofwiki.org/wiki/Euclid%27s_Lemma_for_Prime_Divisors

  This article was Featured Proof between 2 April 2009 and 10 April 2009.




Lemma
Let $p$ be a prime number.
Let $a$ and $b$ be integers such that:

$p \divides a b$
where $\divides$ means is a divisor of.
Then $p \divides a$ or $p \divides b$.


General Result
Let $p$ be a prime number.
Let $\ds n = \prod_{i \mathop = 1}^r a_i$.

Then if $p$ divides $n$, it follows that $p$ divides $a_i$ for some $i$ such that $1 \le i \le r$.

That is:

$p \divides a_1 a_2 \ldots a_n \implies p \divides a_1 \lor p \divides a_2 \lor \cdots \lor p \divides a_n$


Corollary
Let $p, p_1, p_2, \ldots, p_n$ be primes such that:

$p \divides \ds \prod_{i \mathop = 1}^n p_i$
Then:

$\exists i \in \closedint 1 n: p = p_i$


Proof 1
We have that the integers form a Euclidean domain.
Then from Irreducible Elements of Ring of Integers we have that the irreducible elements of $\Z$ are the primes and their negatives.

The result then follows directly from Euclid's Lemma for Irreducible Elements.
$\blacksquare$


Proof 2
Let $p \divides a b$.

Suppose $p \nmid a$.
Then from the definition of prime:

$p \perp a$
where $\perp$ indicates that $p$ and $a$ are coprime.
Thus from Euclid's Lemma it follows that:

$p \divides b$

Similarly, if $p \nmid b$ it follows that $p \divides a$.
So:

$p \divides a b \implies p \divides a$ or $p \divides b$
as we needed to show.
$\blacksquare$


Proof 3
Let $p \divides a b$.

Suppose $p \nmid a$.
Then by Proposition $29$ of Book $\text{VII} $: Prime not Divisor implies Coprime:

$p \perp a$
As $p \divides a b$, it follows by definition of divisor:

$\exists e \in \Z: e p = a b$
So by Proposition $19$ of Book $\text{VII} $: Relation of Ratios to Products‎:

$p : a = b : e$
But as $p \perp a$, by:

Proposition $21$ of Book $\text{VII} $: Coprime Numbers form Fraction in Lowest Terms
and: 

Proposition $20$ of Book $\text{VII} $: Ratios of Fractions in Lowest Terms
it follows that:

$p \divides b$
Similarly, if $p \perp b$ then $p \divides a$.

Hence the result.
$\blacksquare$


Also presented as
Some sources present Euclid's Lemma for Prime Divisors as:
Let $p$ be a prime number.
Let $a$ and $b$ be integers such that:

$a b \equiv 0 \pmod p$
Then either $a \equiv 0 \pmod p$ or $b \equiv 0 \pmod p$.
Some sources use this property to define a prime number.


Also known as
Some sources give the name of Euclid's Lemma for Prime Divisors as Euclid's First Theorem.


Source of Name
This entry was named for Euclid.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Exercise $24.8 \ \text{(a)}$
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.) ... (previous) ... (next): $\text I$: The Series of Primes: $1.3$ Statement of the fundamental theorem of arithmetic: Theorem $3$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): prime
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): prime




