# 

Source: https://proofwiki.org/wiki/Normed_Division_Algebra_is_Unitary_Division_Algebra

Theorem
Let $A = \struct {A_F, \oplus}$ be a normed divison algebra over a field $F$.
Let the unit of $A$ be $1_A$, and the zero of $A$ be $0_A$.

Then $A$ is a unitary division algebra.

Also:

$\norm {1_A} = 1$
where $\norm {1_A}$ denotes the norm of $1_A$.


Proof
Let $A = \struct {A_F, \oplus}$ be a normed divison algebra as defined by hypothesis.
The fact that $A$ is a unitary algebra is a consequence of the definition of normed divison algebra.

From the definition of a norm, we have that:

$\forall a \in A: \norm a = 0 \iff a = 0_A$
So, let $a, b \in A \setminus \set {0_A}$.
We have:














\(\ds \norm a \norm b\)

\(\ne\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \norm {a \oplus b}\)

\(\ne\)







\(\ds 0\)





Definition of Normed Division Algebra: $\norm {a \oplus b} = \norm a \norm b$








\(\ds \leadsto \ \ \)





\(\ds a \oplus b\)

\(\ne\)







\(\ds 0_A\)





Definition of Norm on Vector Space



Thus for any arbitrary $a, b \ne 0_A$ we have shown that $a \oplus b \ne 0_A$.
Thus $A$ is a division algebra.
$\Box$

Next:














\(\ds \)

\(\)







\(\ds \norm a \norm {1_A}\)




















\(\ds \)

\(=\)







\(\ds \norm {a \oplus 1_A}\)





Definition of Normed Division Algebra: $\norm {a \oplus b} = \norm a \norm b$














\(\ds \)

\(=\)







\(\ds \norm a\)





Definition of Norm on Vector Space



demonstrating that $\norm {1_A} = 1$.
$\blacksquare$


Sources
John C. Baez: The Octonions (2002): 1.1 Preliminaries




