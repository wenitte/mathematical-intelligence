# 

Source: https://proofwiki.org/wiki/Dougall%27s_Hypergeometric_Theorem/Corollary_1

Corollary to Dougall's Hypergeometric Theorem
Let $\map \Re {x + y + 1} > 0$.
Then:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, n, -x, -y} \atop {\dfrac n 2, x + n + 1, y + n + 1, 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {x + y + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + 1} \map \Gamma {x + 1} } $


Proof
Set $z = -n$ in Dougall's Hypergeometric Theorem
Before substitution:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} } $
After substitution:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, n} \atop {\dfrac n 2, x + n + 1, y + n + 1, -n + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {-n + n + 1} \map \Gamma {x + y - n + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y - n + n + 1} \map \Gamma {x - n + n + 1} } $
$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, n, -x, -y} \atop {\dfrac n 2, x + n + 1, y + n + 1, 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {x + y + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + 1} \map \Gamma {x + 1} } $
$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




