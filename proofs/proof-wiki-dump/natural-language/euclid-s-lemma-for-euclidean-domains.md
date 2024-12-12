# 

Source: https://proofwiki.org/wiki/Euclid%27s_Lemma_for_Euclidean_Domains



Theorem
Let $\struct {D, +, \times}$ be a Euclidean domain whose unity is $1$.
Let $a, b, c \in D$.
Let $a \divides b \times c$, where $\divides$ denotes divisibility.

Let $a \perp b$, where $\perp$ denotes relative primeness.
Then $a \divides c$.


Proof













\(\ds a\)

\(\perp\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds \gcd \set {a, b}\)

\(=\)







\(\ds 1\)





Definition of Coprime Elements of Euclidean Domain








\(\ds \leadsto \ \ \)

\(\ds \exists x, y \in D: \, \)



\(\ds a \times x + b \times y\)

\(=\)







\(\ds 1\)





Bézout's Identity on Euclidean Domain








\(\ds \leadsto \ \ \)





\(\ds c\)

\(=\)







\(\ds c \times \paren {a \times x + b \times y}\)




















\(\ds \)

\(=\)







\(\ds c \times a \times x + c \times b \times y\)




















\(\ds \)

\(=\)







\(\ds \paren {a \times c} \times x + \paren {b \times c} \times y\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\divides\)







\(\ds c \times \paren {a \times x + b \times y}\)





as $a \divides a \times c$ and $a \divides b \times c$














\(\ds \)

\(=\)







\(\ds c \times 1\)





Bézout's Identity on Euclidean Domain














\(\ds \)

\(=\)







\(\ds c\)









$\blacksquare$


Source of Name
This entry was named for Euclid.


Also see
Euclid's Lemma for Irreducible Elements
Euclid's Lemma, for the usual statement of this result, which is this lemma as applied specifically to the integers.


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 29$. Irreducible elements: Theorem $55$




