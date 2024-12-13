# 

Source: https://proofwiki.org/wiki/Multiplicative_Inverse_in_Nicely_Normed_Star-Algebra

Theorem
Let $A = \struct {A_F, \oplus}$ be a nicely normed $*$-algebra whose conjugation is denoted $*$.
Let $a \in A$.

Then the multiplicative inverse of $a$ is given by:

$a^{-1} = \dfrac {a^*} {\norm a^2}$
where:

$a^*$ is the conjugate of $a$
$\norm a$ is the norm of $a$.


Proof
For the result to hold, we need to show that $a \oplus \dfrac {a^*} {\norm a^2} = 1 = \dfrac {a^*} {\norm a^2} \oplus a$.














\(\ds \)

\(\)







\(\ds a \oplus \dfrac {a^*} {\norm a^2}\)




















\(\ds \)

\(=\)







\(\ds a \oplus a^* \cdot \dfrac 1 {\norm a^2}\)




















\(\ds \)

\(=\)







\(\ds \norm a^2 \cdot \dfrac 1 {\norm a^2}\)





Definition of Nicely Normed Star-Algebra














\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm a^2} \cdot \norm a^2\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\norm a^2} \cdot a^* \oplus a\)





Definition of Nicely Normed Star-Algebra














\(\ds \)

\(=\)







\(\ds \dfrac {a^*} {\norm a^2}\oplus a\)









$\blacksquare$

Note that this construction works whether $\oplus$ is associative or not.


Sources
2002: John C. Baez: The Octonions: 2.2 The Cayley-Dickson Construction




