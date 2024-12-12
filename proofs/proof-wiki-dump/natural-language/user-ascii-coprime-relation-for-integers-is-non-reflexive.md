# 

Source: https://proofwiki.org/wiki/User:Ascii/Coprime_Relation_for_Integers_is_Non-Reflexive



Theorem
The relation "is coprime to" on the integers is non-reflexive.

That is, it is neither reflexive:

$\exists n \in \Z: \neg n \perp n$
nor antireflexive:

$\exists n \in \Z: n \perp n$
where $\perp$ denotes "is coprime to".


Proof
Coprime Relation for Integers is Not Reflexive
Consider $2$.
From Integer Divides Itself, $2$ is a divisor of $2$.
From Absolute Value of Integer is not less than Divisors, $2$ is the greatest divisor of $2$.
So, the greatest common divisor of $2$ and itself is $2$: $\gcd \set {2, 2} = 2$
Hence $\neg \, 2 \perp 2$ and $\perp$ is not reflexive.
$\Box$


Coprime Relation for Integers is Not Antireflexive
Consider $1$.
From Integer Divides Itself, $1$ is a divisor of $1$.
From Absolute Value of Integer is not less than Divisors, $1$ is the greatest divisor of $1$.
So, the greatest common divisor of $1$ and itself is $1$: $\gcd \set {1, 1} = 1$
Hence $1 \perp 1$ and $\perp$ is not antireflexive.
$\blacksquare$





