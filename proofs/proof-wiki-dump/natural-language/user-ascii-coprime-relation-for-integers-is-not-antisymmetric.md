# 

Source: https://proofwiki.org/wiki/User:Ascii/Coprime_Relation_for_Integers_is_Not_Antisymmetric

Theorem
The relation "is coprime to" on the integers is not antisymmetric.

That is, it is not the case that:

$\forall m, n \in \Z: m \perp n \, \land \, n \perp m \implies m = n$
where $\perp$ denotes "is coprime to".


Proof
Suppose it is the case that:

$\forall m, n \in \Z: m \perp n \, \land \, n \perp m \implies m = n$

From Divisors of One, the divisors of $1$ are $1$ and $-1$.
From One Divides all Integers, $1$ is a divisor of $2$.
So, $1$ is the greatest common divisor of $1$ and $2$:

$\gcd \set { 1, 2 } = 1$
and by definition of coprime:

$1 \perp 2$

From Coprime Relation for Integers is Symmetric we also have:

$2 \perp 1$
And clearly:

$1 \neq 2$

Hence, from Proof by Counterexample it is not the case that:

$\forall m, n \in \Z: m \perp n \, \land \, n \perp m \implies m = n$
$\blacksquare$





