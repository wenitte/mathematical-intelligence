# 

Source: https://proofwiki.org/wiki/Dougall%27s_Hypergeometric_Theorem/Corollary_4

Corollary to Dougall's Hypergeometric Theorem
Let $\map \Re {x - n + 1} > 0$.
Then:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, n, n, -x} \atop {\dfrac n 2, x + n + 1, 1, 1} } \, \middle \vert \, 1} = \dfrac {\map \sin {\pi n} \map \Gamma {x + n + 1} \map \Gamma {x - n + 1} } {\pi n \paren {\map \Gamma {x + 1} }^2 } $


Proof
Set $y = z = -n$ in Dougall's Hypergeometric Theorem
Before substitution:














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} }\)










After substitution:














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -\paren {-n}, -\paren {-n} } \atop {\dfrac n 2, x + n + 1, \paren {-n} + n + 1, \paren {-n} + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\paren {-n} + n + 1} \map \Gamma {\paren {-n} + n + 1} \map \Gamma {x + \paren {-n} + \paren {-n} + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + \paren {-n} + n + 1} \map \Gamma {\paren {-n} + \paren {-n} + n + 1} \map \Gamma {x + \paren {-n} + n + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, n, n} \atop {\dfrac n 2, x + n + 1, 1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma 1 \map \Gamma 1 \map \Gamma {x + \paren {-n} + 1} } { \map \Gamma {n + 1} \map \Gamma {x + 1} \map \Gamma {\paren {-n} + 1} \map \Gamma {x + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, n, n} \atop {\dfrac n 2, x + n + 1, 1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {x - n + 1} } { n \map \Gamma n \map \Gamma {1 - n} \paren {\map \Gamma {x + 1} }^2 }\)





Definition of Gamma Function and $\map \Gamma {1} = 1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi n} \map \Gamma {x + n + 1} \map \Gamma {x - n + 1} } {\pi n \paren {\map \Gamma {x + 1} }^2 }\)





Euler's Reflection Formula




$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




