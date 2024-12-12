# 

Source: https://proofwiki.org/wiki/Dixon%27s_Hypergeometric_Theorem/Examples/3F2(0.5,0.25,0.25;1.25,1.25;1)

Example of Use of Dixon's Hypergeometric Theorem
$1 + \dfrac 1 {5^2} \paren {\dfrac 1 2} + \dfrac 1 {9^2} \paren {\dfrac {1 \times 3} {2 \times 4} } + \dfrac 1 {13^2} \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} } + \cdots = \dfrac {\pi^{\frac 5 2} } {8 \sqrt 2 \paren {\map \Gamma {\dfrac 3 4} }^2}$


Proof
From Dixon's Hypergeometric Theorem:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} }$
where:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1}$ is the generalized hypergeometric function of $1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {x + n + 1}^{\overline k} \paren {y + n+ 1}^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

We have:














\(\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 4, \dfrac 1 4} \atop {\dfrac 5 4, \dfrac 5 4} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac 1 2}^{\overline k} \paren {\dfrac 1 4}^{\overline k} \paren {\dfrac 1 4}^{\overline k} } {\paren {\dfrac 5 4}^{\overline k} \paren {\dfrac 5 4}^{\overline k} } \dfrac {1^k} {k!}\)





Definition of Generalized Hypergeometric Function














\(\ds \)

\(=\)







\(\ds 1 + \dfrac {\paren {\dfrac 1 2} \paren {\dfrac 1 4}^2} {\paren {1!} \paren {\dfrac 5 4}^2} + \dfrac {\paren {\dfrac 1 2 \times \dfrac 3 2} \paren {\dfrac 1 4 \times \dfrac 5 4}^2} {\paren {2!} \paren {\dfrac 5 4 \times \dfrac 9 4}^2} + \dfrac {\paren {\dfrac 1 2 \times \dfrac 3 2 \times \dfrac 5 2} \paren {\dfrac 1 4 \times \dfrac 5 4 \times \dfrac 9 4}^2} {\paren {3!} \paren {\dfrac 5 4 \times \dfrac 9 4 \times \dfrac {13} 4}^2} + \cdots\)





One to Integer Rising is Integer Factorial, $1^k = 1$, Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds 1 + \dfrac 1 {5^2} \paren {\dfrac 1 2} + \dfrac 1 {9^2} \paren {\dfrac {1 \times 3} {2 \times 4} } + \dfrac 1 {13^2} \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} } + \cdots\)









and:














\(\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 4, \dfrac 1 4} \atop {\dfrac 5 4, \dfrac 5 4} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {-\dfrac 1 4 + \dfrac 1 2 + 1} \map \Gamma {-\dfrac 1 4 + \dfrac 1 2 + 1} \map \Gamma {\dfrac {\dfrac 1 2} 2 + 1} \map \Gamma {-\dfrac 1 4 -\dfrac 1 4 + \dfrac {\dfrac 1 2} 2 + 1} } { \map \Gamma {\dfrac 1 2 + 1} \map \Gamma {-\dfrac 1 4 - \dfrac 1 4 + \dfrac 1 2 + 1} \map \Gamma {-\dfrac 1 4 + \dfrac {\dfrac 1 2} 2 + 1} \map \Gamma {-\dfrac 1 4 + \dfrac {\dfrac 1 2} 2 + 1} }\)





Dixon's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {\dfrac 5 4} \map \Gamma {\dfrac 5 4} \map \Gamma {\dfrac 5 4} \map \Gamma {\dfrac 3 4 } } { \map \Gamma {\dfrac 3 2} \map \Gamma 1 \map \Gamma 1 \map \Gamma 1}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\dfrac 1 4 \map \Gamma {\dfrac 1 4} }^3 \map \Gamma {\dfrac 3 4} } {\dfrac 1 2 \map \Gamma {\dfrac 1 2} }\)





Definition of Gamma Function and $\map \Gamma 1 = 1$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\map \Gamma {\dfrac 1 4} }^2 \paren {\map \Gamma {\dfrac 1 4} \map \Gamma {\dfrac 3 4 } } } {32 \sqrt \pi}\)





Gamma Function of One Half, rearranging




Recall the Euler's Reflection Formula:

$\map \Gamma z \map \Gamma {1 - z} = \dfrac \pi {\map \sin {\pi z} }$
Therefore:














\(\ds \map \Gamma {\dfrac 1 4} \map \Gamma {1 - \dfrac 1 4}\)

\(=\)







\(\ds \dfrac \pi {\map \sin {\dfrac \pi 4} }\)




















\(\ds \map \Gamma {\dfrac 1 4} \map \Gamma {\dfrac 3 4}\)

\(=\)







\(\ds \dfrac \pi {\dfrac {\sqrt 2} 2 }\)





Sine of 45 Degrees




\(\text {(2)}: \quad\)









\(\ds \map \Gamma {\dfrac 1 4}\)

\(=\)







\(\ds \dfrac {\sqrt 2 \pi} {\map \Gamma {\dfrac 3 4} }\)









Substituting these results back into our equation above:














\(\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 4, \dfrac 1 4} \atop {\dfrac 5 4, \dfrac 5 4} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\paren {\map \Gamma {\dfrac 1 4} }^2 \paren {\map \Gamma {\dfrac 1 4} \map \Gamma {\dfrac 3 4 } } } {32 \sqrt \pi}\)





from $\paren {1}$ above














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\dfrac {\sqrt 2 \pi} {\map \Gamma {\dfrac 3 4} } }^2 \paren {\sqrt 2 \pi} } {32 \sqrt \pi}\)





substituting $\paren {2}$ into $\paren {1}$














\(\ds \)

\(=\)







\(\ds \dfrac {\pi^{\frac 5 2} } {8 \sqrt 2 \paren {\map \Gamma {\dfrac 3 4} }^2}\)










Therefore:

$1 + \dfrac 1 {5^2} \paren {\dfrac 1 2} + \dfrac 1 {9^2} \paren {\dfrac {1 \times 3} {2 \times 4} } + \dfrac 1 {13^2} \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} } + \cdots = \dfrac {\pi^{\frac 5 2} } {8 \sqrt 2 \paren {\map \Gamma {\dfrac 3 4} }^2 }$
$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




