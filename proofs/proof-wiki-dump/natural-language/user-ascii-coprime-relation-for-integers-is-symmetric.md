# 

Source: https://proofwiki.org/wiki/User:Ascii/Coprime_Relation_for_Integers_is_Symmetric

Theorem
The relation "is coprime to" on the integers is symmetric.
That is:

$\forall m, n \in \Z: m \perp n \iff n \perp m$
where $\perp$ denotes "is coprime to".


Proof













\(\ds m \perp n\)

\(\iff\)







\(\ds \gcd \set {m, n} = 1\)





Definition of Coprime Integers














\(\ds \)

\(\iff\)







\(\ds \not \exists \, p > 1 \in \Z: m \divides p \, \land \, n \divides p\)





Definition of Greatest Common Divisor of Integers














\(\ds \)

\(\iff\)







\(\ds \not \exists \, p > 1 \in \Z: n \divides p \, \land \, m \divides p\)





Conjunction is Commutative














\(\ds \)

\(\iff\)







\(\ds \gcd \set {n, m} = 1\)





Definition of Greatest Common Divisor of Integers














\(\ds \)

\(\iff\)







\(\ds n \perp m\)





Definition of Coprime Integers



$\blacksquare$





