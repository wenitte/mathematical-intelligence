# 

Source: https://proofwiki.org/wiki/Kummer%27s_Hypergeometric_Theorem/Proof_1



Theorem
$\map F {n, -x; x + n + 1; -1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } {\map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {n + 1} }$


Proof
First we note the definition of Gaussian hypergeometric function:

$\map F {n, -x; x + n + 1; -1} = \ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} } {\paren {x + n + 1}^{\overline k} } \dfrac {\paren {-1}^k} {k!}$
where $x^{\overline k}$ denotes the $k$th rising factorial power of $x$.

Two lemmata:

Lemma 1
$\ds \lim_{y \mathop \to \infty} \dfrac {y^{\underline k} } {\paren {y + n + 1}^{\overline k} } = 1$
$\Box$


Lemma 2
$\ds \lim_{y \mathop \to \infty} \dfrac {\paren {y + \dfrac n 2 + 1}^{\overline x} } {\paren {y + n + 1}^{\overline x} } = 1$
$\Box$

We use Dixon's Hypergeometric Theorem:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} }$
where $\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1}$ is the generalized hypergeometric function of $1$.

So:














\(\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} }\)





Dixon's Hypergeometric Theorem








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} }\)





Definition of Generalized Hypergeometric Function








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} } { \paren {x + n + 1}^{\overline k} } \dfrac {\paren {-y}^{\overline k} } {\paren {y + n + 1}^{\overline k} } \dfrac {1^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + \dfrac n 2 + 1} } \times \dfrac {\map \Gamma {y + n + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {x + y + n + 1} \map \Gamma {y + \dfrac n 2 + 1} }\)





reorganizing both sides: isolating $y$








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren{-x}^{\overline k} } { \paren {x + n + 1}^{\overline k} } \dfrac {y^{\underline k} } {\paren {y + n + 1}^{\overline k} } \dfrac {\paren {-1}^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + \dfrac n 2 + 1} } \times \dfrac {\map \Gamma {y + n + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {x + y + n + 1} \map \Gamma {y + \dfrac n 2 + 1} }\)





on the left hand side: Rising Factorial in terms of Falling Factorial of Negative








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren{-x}^{\overline k} } { \paren {x + n + 1}^{\overline k} } \dfrac {y^{\underline k} } {\paren {y + n + 1}^{\overline k} } \dfrac {\paren {-1}^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + \dfrac n 2 + 1} } \times \dfrac {\paren {y + \dfrac n 2 + 1}^{\overline x} } {\paren {y + n + 1}^{\overline x} }\)





on the right hand side: Rising Factorial as Quotient of Factorials








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \dfrac {n^{\overline k} \paren{-x}^{\overline k} } {\paren {x + n + 1}^{\overline k} } \paren 1 \dfrac {\paren {-1}^k} {k!}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } {\map \Gamma {n + 1} \map \Gamma {x + \dfrac n 2 + 1} } \times 1\)





Lemma 1 and Lemma 2: letting $y \to \infty$








\(\ds \leadsto \ \ \)





\(\ds \map F {n, -x; x + n + 1; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } {\map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {n + 1} }\)





Definition of Gaussian Hypergeometric Function



$\blacksquare$


Source of Name
This entry was named for Ernst Eduard Kummer.


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




