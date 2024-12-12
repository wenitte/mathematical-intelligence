# 

Source: https://proofwiki.org/wiki/General_Periodicity_Property/Corollary



Theorem
Let $f: \R \to \R$ be a real function.

Then $L$ is a periodic element of $f$ if and only if:

$\forall x \in \R: \map f {x \bmod L} = \map f x$
where $x \bmod L$ is the modulo operation.


Proof
Necessary Condition
Let $f: \R \to \R$ be a real function with a periodic element $L$.
Then:














\(\ds \map f x\)

\(=\)







\(\ds \map f {n L + r} \quad 0 < r < \size L\)





Definition of Quotient














\(\ds \)

\(=\)







\(\ds \map f r\)





General Periodicity Property














\(\ds \)

\(=\)







\(\ds \map f {x \bmod L}\)









$\Box$


Sufficient Condition
Let $f: \R \to \R$ be a real function such that for all $x \in \R$:

$\map f {x \bmod L} = \map f x$

Let $n = \floor {\dfrac x L}$.
Then:














\(\ds \map f {x + L}\)

\(=\)







\(\ds \map f {\paren {x + L} \bmod L}\)




















\(\ds \)

\(=\)







\(\ds \map f {x + L - \floor {\frac {x + L} L} L}\)




















\(\ds \)

\(=\)







\(\ds \map f {x + L - \paren {n + 1} L}\)




















\(\ds \)

\(=\)







\(\ds \map f {x - n L}\)




















\(\ds \)

\(=\)







\(\ds \map f {x \bmod L}\)




















\(\ds \)

\(=\)







\(\ds \map f x\)









$\blacksquare$





