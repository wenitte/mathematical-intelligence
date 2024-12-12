# 

Source: https://proofwiki.org/wiki/Antiperiodic_Element_is_Multiple_of_Antiperiod



Theorem
Let $f: \R \to \R$ be a real anti-periodic function with anti-period $A$.
Let $L$ be an anti-periodic element of $f$.

Then $A \divides L$.


Proof
Aiming for a contradiction, suppose that $A \nmid L$.
By the Division Theorem we have:

$\exists! q \in \Z, r \in \R: L = q A + r, 0 < r < A$
By Even and Odd Integers form Partition of Integers, it follows that $q$ must be either even or odd.


Case 1
Suppose $q$ is even.
Then:














\(\ds \map f {x + L}\)

\(=\)







\(\ds \map f {x + \paren {q A + r} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\paren {x + r} + q A}\)




















\(\ds \)

\(=\)







\(\ds \map f {x + r}\)





General Antiperiodicity Property














\(\ds \)

\(=\)







\(\ds -\map f x\)









And so $r$ is an anti-periodic element of $f$ that is less than $A$.
But then $A$ cannot be the anti-period of $f$.
Therefore by contradiction $q$ cannot be even.


Case 2
Suppose $q$ is odd.
Then:














\(\ds - \map f x\)

\(=\)







\(\ds \map f {x + L}\)




















\(\ds \)

\(=\)







\(\ds \map f {x + \paren {q A + r} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\paren {x + r} + q A}\)




















\(\ds \)

\(=\)







\(\ds - \map f {x + r}\)





General Antiperiodicity Property




So:

$-\map f x = - \map f {x + r} \implies \map f x = \map f {x + r}$
It is seen that $r$ is a periodic element of $f$ such that $0 < r < A$.
But consider $0 < A - r < A$:














\(\ds \map f {x + \paren {A - r} }\)

\(=\)







\(\ds \map f {\paren {x + A} - r}\)




















\(\ds \)

\(=\)







\(\ds \map f {x + A}\)




















\(\ds \)

\(=\)







\(\ds -\map f x\)










This contradicts the fact that $A$ is the anti-period of $f$.
Hence the result.
$\blacksquare$





