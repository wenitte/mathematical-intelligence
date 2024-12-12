# 

Source: https://proofwiki.org/wiki/Gauss%27s_Hypergeometric_Theorem/Corollary_2

Corollary to Gauss's Hypergeometric Theorem
Let $\map \Re {a - 1} < 0$.
Then:

$\ds \dfrac 1 a + \dfrac {a } {\paren {a + 1} 1!} + \dfrac {a \paren {a + 1} } {\paren {a + 2} 2!} + \dfrac {a \paren {a + 1} \paren {a + 2} } {\paren {a + 3} 3!} + \cdots = \dfrac {\pi} {\map \sin {\pi a } } $


Proof
Set $c - 1 = a$ in Corollary 1:
Before substitution:














\(\ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } { \paren {c - 1 + k} k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {c - 1} \map \Gamma {1 - a} } {\map \Gamma {c - a} }\)





Corollary 1



After substitution:














\(\ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } { \paren {a + k} k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma a \map \Gamma {1 - a} } {\map \Gamma {\paren {a + 1} - a} }\)




















\(\ds \)

\(=\)







\(\ds \map \Gamma a \map \Gamma {1 - a}\)





Definition of Gamma Function and $\map \Gamma 1 = 1$














\(\ds \)

\(=\)







\(\ds \dfrac {\pi} {\map \sin {\pi a } }\)





Euler's Reflection Formula



$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




