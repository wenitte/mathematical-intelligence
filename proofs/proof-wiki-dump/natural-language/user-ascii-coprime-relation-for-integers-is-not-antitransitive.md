# 

Source: https://proofwiki.org/wiki/User:Ascii/Coprime_Relation_for_Integers_is_Not_Antitransitive

Theorem
The relation "is coprime to" on the integers is not antitransitive.

That is, it is not the case that:

$\forall m, n, p \in \Z: m \perp n \land n \perp p \implies m \not \perp p$
where $\perp$ denotes "is coprime to".


Proof
Suppose it is the case that:

$\forall m, n, p \in \Z: m \perp n \land n \perp p \implies m \not \perp p$

Consider when $m = 1$, $n = -1$, and $p = 1$.
From Divisors of One, the divisors of $1$ are $1$ and $-1$.
So, $1$ is the greatest common divisor of $1$ and $-1$.
So, $1 \perp -1$ (or $m \perp n$).
From Coprime Relation for Integers is Symmetric we also have $-1 \perp 1$ (or $n \perp p$).

However, $1 \perp 1$ (or $m \perp p$).

Thus from Proof by Counterexample, it is not the case that:

$\forall m, n, p \in \Z: m \perp n \land n \perp p \implies m \perp p$
$\blacksquare$





