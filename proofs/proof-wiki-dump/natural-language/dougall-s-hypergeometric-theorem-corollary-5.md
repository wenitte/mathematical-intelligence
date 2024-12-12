# 

Source: https://proofwiki.org/wiki/Dougall%27s_Hypergeometric_Theorem/Corollary_5

Corollary to Dougall's Hypergeometric Theorem
Let $\map \Re {n} < \dfrac 1 2$.
Then:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, n, n, n} \atop {\dfrac n 2, 1, 1, 1} } \, \middle \vert \, 1} = \dfrac {\paren {\map \Gamma n}^2 \map \sin {\pi n} \map \tan {\pi n} } {\pi^2 \map \Gamma {2n + 1} } $


Proof
Set $x = y = z = -n$ in Dougall's Hypergeometric Theorem
Before substitution:














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} }\)










After substitution:














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -\paren {-n}, -\paren {-n}, -\paren {-n} } \atop {\dfrac n 2, \paren {-n} + n + 1, \paren {-n} + n + 1, \paren {-n} + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {\paren {-n} + n + 1} \map \Gamma {\paren {-n} + n + 1} \map \Gamma {\paren {-n} + n + 1} \map \Gamma {\paren {-n} + \paren {-n} + \paren {-n} + n + 1} } { \map \Gamma {n + 1} \map \Gamma {\paren {-n} + \paren {-n} + n + 1} \map \Gamma {\paren {-n} + \paren {-n} + n + 1} \map \Gamma {\paren {-n} + \paren {-n} + n + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, n, n, n} \atop {\dfrac n 2,1, 1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma 1 \map \Gamma 1 \map \Gamma 1 \map \Gamma {1 - 2n} } { \map \Gamma {1 + n} \paren {\map \Gamma {1 - n} }^3 }\)














\(\ds \leadsto \ \ \)





\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, n, n, n} \atop {\dfrac n 2,1, 1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {1 - 2n} } { n \map \Gamma n \paren {\map \Gamma {1 - n} }^3 }\)





Definition of Gamma Function and $\map \Gamma {1} = 1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1 - 2n} } { n \map \Gamma n \paren {\map \Gamma {1 - n} }^3 } \times \dfrac {\map \Gamma {2n} } {\map \Gamma {2n} } \times \dfrac {\paren {\map \Gamma n}^2 } {\paren {\map \Gamma n}^2 }\)





multiplying by $1$








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \paren {\map \Gamma {1 - 2n} \map \Gamma {2n} } \paren {\dfrac 1 {\paren {\map \Gamma n }^3 \paren {\map \Gamma {1 - n} }^3} } \paren {\dfrac {\paren {\map \Gamma n}^2} {n \map \Gamma {2n} } }\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \paren {\dfrac \pi {\map \sin {2\pi n} } } \paren {\dfrac {\map \sin {\pi n} } \pi }^3 \paren {\dfrac {\paren {\map \Gamma n}^2} {n \map \Gamma {2n} } }\)





Euler's Reflection Formula








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \paren {\dfrac \pi {2 \map \sin {\pi n} \map \cos {\pi n} } } \paren {\dfrac {\map \sin {\pi n} } \pi }^3 \paren {\dfrac {\paren {\map \Gamma n}^2} {n \map \Gamma {2n} } }\)





Double Angle Formula for Sine








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \paren {\dfrac \pi {\map \sin {\pi n} \map \cos {\pi n} } } \paren {\dfrac {\map \sin {\pi n} } \pi }^3 \paren {\dfrac {\paren {\map \Gamma n}^2} {\map \Gamma {2n + 1} } }\)





Definition of Gamma Function








\(\ds \leadsto \ \ \)





\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\map \Gamma n}^2 \map \sin {\pi n} \map \tan {\pi n} } {\pi^2 \map \Gamma {2n + 1} }\)










$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




