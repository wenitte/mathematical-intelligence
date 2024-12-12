# 

Source: https://proofwiki.org/wiki/Dixon%27s_Hypergeometric_Theorem/Examples/3F2(0.5,0.5,0.5;1,1;1)

Example of Use of Dixon's Hypergeometric Theorem
$1 + \paren {\dfrac 1 2}^3 + \paren {\dfrac {1 \times 3} {2 \times 4} }^3 + \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^3 + \cdots = \dfrac \pi {\paren {\map \Gamma {\dfrac 3 4} }^4 }$


Proof
From Dixon's Hypergeometric Theorem:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} } $
where:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1}$ is the generalized hypergeometric function of $1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {x + n + 1}^{\overline k} \paren {y + n+ 1}^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

We have:














\(\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 2, \dfrac 1 2} \atop {1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac 1 2}^{\overline k} \paren {\dfrac 1 2}^{\overline k} \paren {\dfrac 1 2}^{\overline k} } { 1^{\overline k} 1^{\overline k} } \dfrac {1^k} {k!}\)





Definition of Generalized Hypergeometric Function














\(\ds \)

\(=\)







\(\ds 1 + \dfrac {\paren {\dfrac 1 2}^3} {\paren {1!}^3} + \dfrac {\paren {\dfrac 1 2 \times \dfrac 3 2}^3} {\paren {2!}^3} + \dfrac {\paren {\dfrac 1 2 \times \dfrac 3 2 \times \dfrac 5 2 }^3} {\paren {3!}^3} + \cdots\)





One to Integer Rising is Integer Factorial, $1^k = 1$, Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds 1 + \paren {\dfrac 1 2}^3 + \paren {\dfrac {1 \times 3} {2 \times 4} }^3 + \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^3 + \cdots\)









and:














\(\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 2, \dfrac 1 2} \atop {1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {-\dfrac 1 2 + \dfrac 1 2 + 1} \map \Gamma {-\dfrac 1 2 + \dfrac 1 2 + 1} \map \Gamma {\dfrac {\dfrac 1 2} 2 + 1} \map \Gamma {-\dfrac 1 2 -\dfrac 1 2 + \dfrac {\dfrac 1 2} 2 + 1} } { \map \Gamma {\dfrac 1 2 + 1} \map \Gamma {-\dfrac 1 2 - \dfrac 1 2 + \dfrac 1 2 + 1} \map \Gamma {-\dfrac 1 2 + \dfrac {\dfrac 1 2} 2 + 1} \map \Gamma {-\dfrac 1 2 + \dfrac {\dfrac 1 2} 2 + 1} }\)





Dixon's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1} \map \Gamma 1 \map \Gamma {\dfrac 5 4} \map \Gamma {\dfrac 1 4 } } { \map \Gamma {\dfrac 3 2} \map \Gamma {\dfrac 1 2 } \map \Gamma {\dfrac 3 4} \map \Gamma {\dfrac 3 4} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac 1 4 \map \Gamma {\dfrac 1 4} \map \Gamma {\dfrac 1 4} } { \dfrac 1 2 \map \Gamma {\dfrac 1 2} \map \Gamma {\dfrac 1 2 } \map \Gamma {\dfrac 3 4} \map \Gamma {\dfrac 3 4} }\)





Definition of Gamma Function and $\map \Gamma {1} = 1$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\map \Gamma {\dfrac 1 4} }^2} {2 \pi \paren {\map \Gamma {\dfrac 3 4 } }^2}\)





Gamma Function of One Half




Recall from the Euler's Reflection Formula: $\map \Gamma z \map \Gamma {1 - z} = \dfrac \pi {\map \sin {\pi z} }$
Therefore:














\(\ds \map \Gamma {\dfrac 1 4} \map \Gamma {1 - \dfrac 1 4}\)

\(=\)







\(\ds \dfrac \pi {\map \sin {\dfrac \pi 4} }\)




















\(\ds \map \Gamma {\dfrac 1 4} \map \Gamma {\dfrac 3 4}\)

\(=\)







\(\ds \dfrac \pi {\dfrac {\sqrt 2} 2}\)





Sine of $45 \degrees$














\(\ds \map \Gamma {\dfrac 1 4}\)

\(=\)







\(\ds \dfrac {\sqrt 2 \pi} {\map \Gamma {\dfrac 3 4} }\)










Substituting this result back into our equation above:














\(\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 2, \dfrac 1 2} \atop {1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\paren {\map \Gamma {\dfrac 1 4} }^2} {2 \pi \paren {\map \Gamma {\dfrac 3 4 } }^2}\)





from above














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\dfrac {\sqrt 2 \pi} {\map \Gamma {\dfrac 3 4} } }^2 } { 2 \pi \paren {\map \Gamma {\dfrac 3 4} }^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac \pi {\paren {\map \Gamma {\dfrac 3 4} }^4}\)










Therefore:

$1 + \paren {\dfrac 1 2}^3 + \paren {\dfrac {1 \times 3} {2 \times 4} }^3 + \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^3 + \cdots = \dfrac \pi {\paren {\map \Gamma {\dfrac 3 4} }^4}$
$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




