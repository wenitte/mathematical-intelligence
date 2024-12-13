# 

Source: https://proofwiki.org/wiki/Periodic_Element_is_Multiple_of_Antiperiod

Theorem
Let $f: \R \to \R$ be a real anti-periodic function with anti-period $A$.
Let $L$ be a periodic element of $f$.

Then $A \divides L$.


Proof
Consider $A + L$:














\(\ds \map f {x + \paren {A + L} }\)

\(=\)







\(\ds \map f {\paren {x + A} + L}\)




















\(\ds \)

\(=\)







\(\ds \map f {x + A}\)




















\(\ds \)

\(=\)







\(\ds -\map f x\)









Hence $A + L$ is an anti-periodic element of $f$.

Combining Antiperiodic Element is Multiple of Antiperiod, Divides is Reflexive, and Common Divisor Divides Difference yields: 

$A \divides \paren {A + L} \land A \divides A \implies A \divides L$
Hence the result.
$\blacksquare$





