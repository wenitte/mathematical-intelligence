# 

Source: https://proofwiki.org/wiki/User:Ascii/Coprime_Relation_for_Integers_is_Not_Transitive

Theorem
The relation "is coprime to" on the integers is not transitive.

That is, it is not the case that:

$\forall m, n, p \in \Z: m \perp n \land n \perp p \implies m \perp p$
where $\perp$ denotes "is coprime to".


Proof
Suppose it is the case that:

$\forall m, n, p \in \Z: m \perp n \land n \perp p \implies m \perp p$

Consider when $m = 2$, $n = 1$, and $p = 2$.
From Divisors of One, the divisors of $1$ are $1$ and $-1$.
From One Divides all Integers, $1$ is a divisor of $2$.
So, $1$ is the greatest common divisor of $1$ and $2$:

$\gcd \set { 2, 1 } = 1$
and by definition of coprime:

$2 \perp 1$ (or $m \perp n$)
From Coprime Relation for Integers is Symmetric we also have:

$1 \perp 2$ (or $n \perp p$)

Now to consider if $2 \perp 2$ (or $m \perp p$).
From Integer Divides Itself, $2$ is a divisor of $2$.
From Absolute Value of Integer is not less than Divisors, $2$ is the greatest divisor of $2$.
So, the greatest common divisor of $2$ and itself is $2$: $\gcd \set {2, 2} = 2$
Hence $\neg \, 2 \perp 2$ (or $m \not \perp p$).

Thus from Proof by Counterexample, it is not the case that:

$\forall m, n, p \in \Z: m \perp n \land n \perp p \implies m \perp p$
$\blacksquare$





