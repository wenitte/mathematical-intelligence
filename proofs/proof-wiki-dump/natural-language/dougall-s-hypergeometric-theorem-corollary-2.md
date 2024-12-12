# 

Source: https://proofwiki.org/wiki/Dougall%27s_Hypergeometric_Theorem/Corollary_2

Corollary to Dougall's Hypergeometric Theorem
Let $\map \Re {x + y + n} > 0$.
Then:

$\ds \map { {}_4 \operatorname F_3} { { {\dfrac n 2 + 1, -x, -y, 1} \atop {\dfrac n 2, x + n + 1, y + n + 1} } \, \middle \vert \, 1} = \dfrac {\paren {x + n} \paren {y + n} } {n \paren {x + y + n} } $


Proof
Set $z = -1$ in Dougall's Hypergeometric Theorem
Before substitution:














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} }\)





Dougall's Hypergeometric Theorem



After substitution:














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, 1} \atop {\dfrac n 2, x + n + 1, y + n + 1, -1 + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {-1 + n + 1} \map \Gamma {x + y - 1 + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y - 1 + n + 1} \map \Gamma {x - 1 + n + 1} }\)




















\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, 1} \atop {\dfrac n 2, x + n + 1, y + n + 1, n} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {n} \map \Gamma {x + y + n} } { \map \Gamma {x + n} \map \Gamma {y + n} \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} }\)





rearranging














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, 1} \atop {\dfrac n 2, x + n + 1, y + n + 1, n} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\paren {x + n} \map \Gamma {x + n} \paren {y + n} \map \Gamma {y + n} \map \Gamma {n} \map \Gamma {x + y + n} } { \map \Gamma {x + n} \map \Gamma {y + n} n \map \Gamma n \paren {x + y + n} \map \Gamma {x + y + n} }\)





Definition of Gamma Function














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, 1} \atop {\dfrac n 2, x + n + 1, y + n + 1, n} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\paren {x + n} \paren {y + n} } {n \paren {x + y + n} }\)





canceling terms on the right hand side














\(\ds \map { {}_4 \operatorname F_3} { { {\dfrac n 2 + 1, -x, -y, 1} \atop {\dfrac n 2, x + n + 1, y + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\paren {x + n} \paren {y + n} } {n \paren {x + y + n} }\)





$n$ term cancels on the left hand side



$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




