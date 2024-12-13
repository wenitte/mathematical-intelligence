# 

Source: https://proofwiki.org/wiki/Prime_not_Divisor_implies_Coprime/Proof_2



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

In the words of Euclid:

Any prime number is prime to any number which it does not measure.
(The Elements: Book $\text{VII}$: Proposition $29$)


Proof
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


Historical Note
This proof is Proposition $29$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions




