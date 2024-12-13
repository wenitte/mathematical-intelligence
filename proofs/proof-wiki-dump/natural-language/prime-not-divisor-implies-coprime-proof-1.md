# 

Source: https://proofwiki.org/wiki/Prime_not_Divisor_implies_Coprime/Proof_1

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


Proof
Let $p \in \Bbb P, p \nmid a$.
We need to show that $\gcd \set {a, p} = 1$.
Let $\gcd \set {a, p} = d$.
As $d \divides p$, we must have $d = 1$ or $d = p$ by GCD with Prime.
But if $d = p$, then $p \divides a$ by definition of greatest common divisor.
So $d \ne p$ and therefore $d = 1$.
$\blacksquare$





