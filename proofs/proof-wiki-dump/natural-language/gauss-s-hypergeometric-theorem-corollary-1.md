# 

Source: https://proofwiki.org/wiki/Gauss%27s_Hypergeometric_Theorem/Corollary_1

Corollary to Gauss's Hypergeometric Theorem
Let $\map \Re {1 - a} > 0$.
Let $c \notin \Z_{\le 0}$ and $c \ne 1$.
Then:

$\ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} } {\paren {c - 1 + k} k!} = \dfrac {\map \Gamma {c - 1} \map \Gamma {1 - a} } {\map \Gamma {c - a} }$


Proof
Set $b = c - 1$ in Gauss's Hypergeometric Theorem
Before substitution:














\(\ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} b^{\overline k} } {c^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma c \map \Gamma {c - a - b} } {\map \Gamma {c - a} \map \Gamma {c - b} }\)





Gauss's Hypergeometric Theorem



After substitution:














\(\ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} \paren {c - 1}^{\overline k} } {c^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma c \map \Gamma {c - a - \paren {c - 1} } } {\map \Gamma {c - a} \map \Gamma {c - \paren {c - 1} } }\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} \paren {c - 1}^{\overline k} } {c^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\paren {c - 1} \map \Gamma {c - 1} \map \Gamma {1 - a} } {\map \Gamma {c - a} }\)





Definition of Gamma Function and $\map \Gamma 1 = 1$








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac {a^{\overline k} \paren {c - 1} c^{\overline {k - 1} } } {\paren {c - 1 + k} c^{\overline {k - 1} } } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\paren {c - 1} \map \Gamma {c - 1} \map \Gamma {1 - a} } {\map \Gamma {c - a} }\)





Sum of Indices of Rising Factorial








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren a^{\overline k} \paren {c - 1} } { \paren {c - 1 + k} k!}\)

\(=\)







\(\ds \dfrac {\paren {c - 1} \map \Gamma {c - 1} \map \Gamma {1 - a} } {\map \Gamma {c - a} }\)





$c^{\overline {k - 1} }$ cancels








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} } {\paren {c - 1 + k} k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {c - 1} \map \Gamma {1 - a} } {\map \Gamma {c - a} }\)





$\paren {c - 1}$ cancels



$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




