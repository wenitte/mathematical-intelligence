# 

Source: https://proofwiki.org/wiki/Periodic_Element_is_Multiple_of_Period

Theorem
Let $f: \R \to \R$ be a real periodic function with period $P$.
Let $L$ be a periodic element of $f$.

Then $P \divides L$.


Proof
Aiming for a contradiction, suppose that $P \nmid L$.
Then by the Division Theorem we have $L = q P + r$ where $q \in \Z$ and $0 < r < P$.
And so:














\(\ds \map f {x + L}\)

\(=\)







\(\ds \map f {x + \paren {q P + r} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\paren {x + r} + q P}\)




















\(\ds \)

\(=\)







\(\ds \map f {x + r}\)





General Periodicity Property














\(\ds \)

\(=\)







\(\ds \map f x\)





Definition of Periodic Element




But then $r$ is a periodic element of $f$ that is less than $P$.
Therefore $P$ cannot be the period of $f$.
The result follows from Proof by Contradiction.
$\blacksquare$





