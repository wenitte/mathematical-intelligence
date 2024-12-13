# 

Source: https://proofwiki.org/wiki/Prime_not_Divisor_implies_Coprime



Theorem
Let $p, a \in \Z$.
If $p$ is a prime number then:

$p \nmid a \implies p \perp a$
where:

$p \nmid a$ denotes that $p$ does not divide $a$
$p \perp a$ denotes that $p$ and $a$ are coprime.

It follows directly that if $p$ and $q$ are primes, then:

$p \divides q \implies p = q$
$p \ne q \implies p \perp q$


Proof 1
Let $p \in \Bbb P, p \nmid a$.
We need to show that $\gcd \set {a, p} = 1$.
Let $\gcd \set {a, p} = d$.
As $d \divides p$, we must have $d = 1$ or $d = p$ by GCD with Prime.
But if $d = p$, then $p \divides a$ by definition of greatest common divisor.
So $d \ne p$ and therefore $d = 1$.
$\blacksquare$


Proof 2
Let $p$ be a prime number.
Let $a \in \Z$ be such that $p$ is not a divisor of $a$.
Aiming for a contradiction, suppose $p$ and $a$ are not coprime.
Then:

$\exists c \in \Z_{>1}: c \divides p, c \divides a$
where $\divides$ denotes divisibility.
But then by definition of prime:

$c = p$
Thus:

$p \divides a$
The result follows by Proof by Contradiction.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Example $\text {2-11}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 12.1$: Highest common factors and Euclid's algorithm




