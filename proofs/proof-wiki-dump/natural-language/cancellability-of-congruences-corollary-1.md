# 

Source: https://proofwiki.org/wiki/Cancellability_of_Congruences/Corollary_1



Corollary to Cancellability of Congruences
Let $c$ and $n$ be coprime integers, that is:

$c \perp n$
Then:

$c a \equiv c b \pmod n \implies a \equiv b \pmod n$
where $\equiv$ denotes congruence.


Proof 1
Recall that $c \perp n$ means $\gcd \set {c, n} = 1$.
The result follows directly from Cancellability of Congruences.
$\blacksquare$


Proof 2
We are given that $c$ and $n$ are coprime.
So:










\(\ds \exists x, y \in \Z: \, \)



\(\ds c x + n y\)

\(=\)







\(\ds 1\)





Integer Combination of Coprime Integers








\(\ds \leadsto \ \ \)





\(\ds 1 - cx\)

\(=\)







\(\ds y n\)










\(\text {(1)}: \quad\)









\(\ds c x\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod n\)



Definition of Congruence




Then:














\(\ds a\)

\(\equiv\)







\(\ds a\)

\(\ds \pmod n\)



Equal Numbers are Congruent




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a c x\)

\(\equiv\)







\(\ds a\)

\(\ds \pmod n\)



Modulo Multiplication is Well-Defined and from $(1)$














\(\ds b\)

\(\equiv\)







\(\ds b\)

\(\ds \pmod n\)



Equal Numbers are Congruent




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds b c x\)

\(\equiv\)







\(\ds b\)

\(\ds \pmod n\)



Modulo Multiplication is Well-Defined and from $(1)$




\(\text {(4)}: \quad\)









\(\ds x c a\)

\(\equiv\)







\(\ds x c b\)

\(\ds \pmod n\)



Modulo Multiplication is Well-Defined and from $c a \equiv c b \pmod n$




Thus:














\(\ds a\)

\(\equiv\)







\(\ds a c x\)

\(\ds \pmod n\)



from $(2)$ above














\(\ds \)

\(\equiv\)







\(\ds b c x\)

\(\ds \pmod n\)



from $(4)$ above














\(\ds \)

\(\equiv\)







\(\ds b\)

\(\ds \pmod n\)



from $(3)$ above



$\blacksquare$


Proof 3
Let:

$c a \equiv c b \pmod n$
Then by definition of congruence:

$n \divides k \paren {x - y}$
We have that:

$c \perp n$
Thus by Euclid's Lemma:

$n \divides \paren {x - y}$
So by definition of congruence:

$a \equiv b \pmod n$
$\blacksquare$





