# 

Source: https://proofwiki.org/wiki/Dougall%27s_Hypergeometric_Theorem/Corollary_3



Corollary to Dougall's Hypergeometric Theorem
Let $\map \Re {2x + 2y + n + 2} > 0$.
Let $n \notin \Z_{\lt 0}$
Then:

$\ds \map { {}_4 \operatorname F_3} { { {\dfrac n 2 + 1, n, -x, -y} \atop {\dfrac n 2, x + n + 1, y + n + 1} } \, \middle \vert \, -1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} } $


Proof
Two lemmata:

Kummer's Hypergeometric Theorem: Lemma 1
$\ds \lim_{y \mathop \to \infty} \dfrac {y^{\underline k} } {\paren {y + n + 1}^{\overline k} } = 1$
$\Box$


Lemma
$\ds \lim_{z \mathop \to \infty} \dfrac {\paren {x + z + n + 1}^{\overline y} } {\paren {z+ n + 1}^{\overline y} } = 1$
$\Box$

Let $z \to \infty$ in Dougall's Hypergeometric Theorem
We have:














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} }\)





Dougall's Hypergeometric Theorem








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} \paren {-z}^{\overline k} } {\paren {\dfrac n 2 }^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} \paren {z + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} }\)





Definition of Generalized Hypergeometric Function








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } {\paren {\dfrac n 2 }^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \dfrac {\paren {-z}^{\overline k} } {\paren {z + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} } \times \dfrac {\map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } {\map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} }\)





reorganizing both sides: isolating $z$








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } {\paren {\dfrac n 2 }^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \dfrac {z^{\underline k} } {\paren {z + n + 1}^{\overline k} } \dfrac {\paren {-1}^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} } \times \dfrac {\map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } {\map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} }\)





on the left hand side: Rising Factorial in terms of Falling Factorial of Negative








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } {\paren {\dfrac n 2 }^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \dfrac {z^{\underline k} } {\paren {z + n + 1}^{\overline k} } \dfrac {\paren {-1}^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} } \times \dfrac {\paren {x + z + n + 1}^{\overline y} } {\paren {z + n + 1}^{\overline y} }\)





on the right hand side: Rising Factorial as Quotient of Factorials








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } {\paren {\dfrac n 2 }^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \paren {1} \dfrac {\paren {-1}^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} } \times \paren {1}\)





Kummer's Hypergeometric Theorem: Lemma 1 and Lemma: Let $z \to \infty$








\(\ds \leadsto \ \ \)





\(\ds \map { {}_4 \operatorname F_3} { { {\dfrac n 2 + 1, n, -x, -y} \atop {\dfrac n 2, x + n + 1, y + n + 1} } \, \middle \vert \, -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} }\)





Definition of Generalized Hypergeometric Function



$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




