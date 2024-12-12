# 

Source: https://proofwiki.org/wiki/Dougall%27s_Hypergeometric_Theorem/Corollary_6

Corollary to Dougall's Hypergeometric Theorem
Let $\map \Re {n} < \dfrac 2 3$.
Then:

$\ds \map { {}_4 \operatorname F_3} { { {\dfrac n 2 + 1, n, n, n} \atop {\dfrac n 2, 1, 1} } \, \middle \vert \, -1} = \dfrac {\map \sin {\pi n} } {\pi n } $


Proof
Let $x = y = -n$ in Dougall's Hypergeometric Theorem: Corollary 3
Before substitution:














\(\ds \map { {}_4 \operatorname F_3} { { {\dfrac n 2 + 1, n, -x, -y} \atop {\dfrac n 2, x + n + 1, y + n + 1} } \, \middle \vert \, -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} }\)





Dougall's Hypergeometric Theorem: Corollary 3




After substitution:














\(\ds \map { {}_4 \operatorname F_3} { { {\dfrac n 2 + 1, n, -\paren {-n}, -\paren {-n} } \atop {\dfrac n 2, \paren {-n} + n + 1, \paren {-n} + n + 1} } \, \middle \vert \, -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {\paren {-n} + n + 1} \map \Gamma {\paren {-n} + n + 1} } {\map \Gamma {n + 1} \map \Gamma {\paren {-n} + \paren {-n} + n + 1} }\)





Dougall's Hypergeometric Theorem: Corollary 3








\(\ds \leadsto \ \ \)





\(\ds \map { {}_4 \operatorname F_3} { { {\dfrac n 2 + 1, n, n, n} \atop {\dfrac n 2, 1, 1} } \, \middle \vert \, -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma 1 \map \Gamma 1 } {\map \Gamma {n + 1} \map \Gamma {1 - n} }\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac 1 {n \map \Gamma n \map \Gamma {1 - n} }\)





Definition of Gamma Function and $\map \Gamma {1} = 1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi n} } {\pi n }\)





Euler's Reflection Formula




$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




