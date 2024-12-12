# 

Source: https://proofwiki.org/wiki/Dixon%27s_Hypergeometric_Theorem/Proof_1



Theorem
$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} } $


Proof
From Dougall's Hypergeometric Theorem, we have:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} } $
where:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1}$ is the generalized hypergeometric function of $1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} \paren {-z}^{\overline k} } { \paren {\dfrac n 2}^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} \paren {z + n + 1}^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

Setting $z = -\dfrac n 2$, we obtain:














\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} \paren {-z}^{\overline k} } { \paren {\dfrac n 2}^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} \paren {z + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} }\)





before substitution














\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} \paren {\dfrac n 2}^{\overline k} } { \paren {\dfrac n 2}^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} \paren {-\dfrac n 2 + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {-\dfrac n 2 + n + 1} \map \Gamma {x + y - \dfrac n 2 + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y - \dfrac n 2 + n + 1} \map \Gamma {x - \dfrac n 2 + n + 1} }\)





after substitution














\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac n 2}^{\overline k} \paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {\dfrac n 2}^{\overline k} \paren {\dfrac n 2 + 1}^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + \dfrac n 2 + 1} \map \Gamma {x + \dfrac n 2 + 1} }\)





reorganizing














\(\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + \dfrac n 2 + 1} \map \Gamma {x + \dfrac n 2 + 1} }\)





$\paren {\dfrac n 2}^{\overline k}$ and $\paren {\dfrac n 2 + 1}^{\overline k}$ cancel



Therefore:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} }$
$\blacksquare$


Source of Name
This entry was named for Alfred Cardew Dixon.


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




