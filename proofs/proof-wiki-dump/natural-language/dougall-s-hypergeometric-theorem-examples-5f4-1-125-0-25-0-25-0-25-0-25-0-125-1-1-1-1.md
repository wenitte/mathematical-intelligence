# 

Source: https://proofwiki.org/wiki/Dougall%27s_Hypergeometric_Theorem/Examples/5F4(1.125,0.25,0.25,0.25,0.25;0.125,1,1,1;1)

Example of Use of Dougall's Hypergeometric Theorem
$1 + 9 \paren {\dfrac 1 4}^4 + 17 \paren {\dfrac {1 \times 5} {4 \times 8} }^4 + 25 \paren {\dfrac {1 \times 5 \times 9} {4 \times 8 \times 12} }^4 + \cdots = \dfrac {2 \sqrt 2 } { \sqrt \pi \paren {\map \Gamma {\dfrac 3 4} }^2 }$


Proof
From Dougall's Hypergeometric Theorem:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {z + n + 1} \map \Gamma {x + y + z + n + 1} } {\map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {y + z + n + 1} \map \Gamma {x + z + n + 1} }$
where:

$\ds \map { {}_5 \operatorname F_4} { { {\dfrac n 2 + 1, n, -x, -y, -z} \atop {\dfrac n 2, x + n + 1, y + n + 1, z + n + 1} } \, \middle \vert \, 1}$ is the generalized hypergeometric function of $1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac n 2 + 1}^{\overline k} n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} \paren {-z}^{\overline k} } {\paren {\dfrac n 2}^{\overline k} \paren {x + n + 1}^{\overline k} \paren {y + n + 1}^{\overline k} \paren {z + n + 1}^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

We have:














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac 9 8, \dfrac 1 4, \dfrac 1 4, \dfrac 1 4, \dfrac 1 4} \atop {\dfrac 1 8, 1, 1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {\dfrac 9 8}^{\overline k} \paren {\paren {\dfrac 1 4}^{\overline k} }^4 } { \paren {\dfrac 1 8}^{\overline k} \paren {1^{\overline k} }^3} \dfrac {1^k} {k!}\)





Definition of Generalized Hypergeometric Function














\(\ds \)

\(=\)







\(\ds 1 + \dfrac {\paren {\dfrac 9 8} \paren {\dfrac 1 4}^4 } {\paren {\dfrac 1 8} \paren {1!}^4 } + \dfrac {\paren {\dfrac 9 8 \times \dfrac {17} 8} \paren {\dfrac 1 4 \times \dfrac 5 4}^4} {\paren {\dfrac 1 8 \times \dfrac 9 8} \paren {2!}^4} + \dfrac {\paren {\dfrac 9 8 \times \dfrac {17} 8 \times \dfrac {25} 8} \paren {\dfrac 1 4 \times \dfrac 5 4 \times \dfrac 9 4}^4} {\paren {\dfrac 1 8 \times \dfrac 9 8 + \dfrac {17} 8} \paren {3!}^4} + \cdots\)





One to Integer Rising is Integer Factorial, $1^k = 1$, Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds 1 + 9 \paren {\dfrac 1 4}^4 + 17 \paren {\dfrac {1 \times 5} {4 \times 8} }^4 + 25 \paren {\dfrac {1 \times 5 \times 9} {4 \times 8 \times 12} }^4 + \cdots\)









and:














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac 9 8, \dfrac 1 4, \dfrac 1 4, \dfrac 1 4, \dfrac 1 4} \atop {\dfrac 1 8, 1, 1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {-\dfrac 1 4 + \dfrac 1 4 + 1} \map \Gamma {-\dfrac 1 4 + \dfrac 1 4 + 1} \map \Gamma {-\dfrac 1 4 + \dfrac 1 4 + 1} \map \Gamma {-\dfrac 1 4 - \dfrac 1 4 - \dfrac 1 4 + \dfrac 1 4 + 1} } {\map \Gamma {\dfrac 1 4 + 1} \map \Gamma {-\dfrac 1 4 - \dfrac 1 4 + \dfrac 1 4 + 1} \map \Gamma {-\dfrac 1 4 - \dfrac 1 4 + \dfrac 1 4 + 1} \map \Gamma {-\dfrac 1 4 - \dfrac 1 4 + \dfrac 1 4 + 1} }\)





Dougall's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\map \Gamma 1}^3  \map \Gamma {\dfrac 1 2 } } {\map \Gamma {\dfrac 5 4} \paren {\map \Gamma {\dfrac 3 4} }^3}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {\dfrac 1 2} } {\dfrac 1 4 \map \Gamma {\dfrac 1 4} \paren {\map \Gamma {\dfrac 3 4} }^3}\)





Definition of Gamma Function and $\map \Gamma {1} = 1$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {4 \sqrt \pi} {\paren {\map \Gamma {\dfrac 1 4} \map \Gamma {\dfrac 3 4 } } \paren {\map \Gamma {\dfrac 3 4} }^2}\)





Gamma Function of One Half, reorganizing




Recall the Euler's Reflection Formula:

$\map \Gamma z \map \Gamma {1 - z} = \dfrac \pi {\map \sin {\pi z} }$
Therefore:














\(\ds \map \Gamma {\dfrac 1 4} \map \Gamma {1 - \dfrac 1 4}\)

\(=\)







\(\ds \dfrac \pi {\map \sin {\dfrac \pi 4} }\)




















\(\ds \map \Gamma {\dfrac 1 4} \map \Gamma {\dfrac 3 4}\)

\(=\)







\(\ds \dfrac \pi {\dfrac {\sqrt 2} 2}\)





Sine of $45 \degrees$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sqrt 2 \pi\)










Substituting these results back into our equation above:














\(\ds \map { {}_5 \operatorname F_4} { { {\dfrac 9 8, \dfrac 1 4, \dfrac 1 4, \dfrac 1 4, \dfrac 1 4} \atop {\dfrac 1 8, 1, 1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {4 \sqrt \pi} {\paren {\map \Gamma {\dfrac 1 4} \map \Gamma {\dfrac 3 4 } } \paren {\map \Gamma {\dfrac 3 4} }^2}\)





from $\paren {1}$ above














\(\ds \)

\(=\)







\(\ds \dfrac {4 \sqrt \pi} {\paren {\sqrt 2 \pi} \paren {\map \Gamma {\dfrac 3 4} }^2}\)





substituting $\paren {2}$ into $\paren {1}$














\(\ds \)

\(=\)







\(\ds \dfrac {2 \sqrt 2} {\sqrt \pi \paren {\map \Gamma {\dfrac 3 4} }^2}\)










Therefore:

$1 + 9 \paren {\dfrac 1 4}^4 + 17 \paren {\dfrac {1 \times 5} {4 \times 8} }^4 + 25 \paren {\dfrac {1 \times 5 \times 9} {4 \times 8 \times 12} }^4 + \cdots = \dfrac {2 \sqrt 2} {\sqrt \pi \paren {\map \Gamma {\dfrac 3 4} }^2}$
$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




