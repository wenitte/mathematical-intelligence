# 

Source: https://proofwiki.org/wiki/Kummer%27s_Hypergeometric_Theorem/Examples/2F1(0.5,0.5;1;-1)

Example of Use of Kummer's Hypergeometric Theorem
$1 - \paren {\dfrac 1 2}^2 + \paren {\dfrac {1 \times 3} {2 \times 4} }^2 - \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^2 + \cdots = \dfrac {\sqrt \pi} {\sqrt 2 \paren {\map \Gamma {\dfrac 3 4} }^2 }$


Proof
From Kummer's Hypergeometric Theorem:

$\ds \map F {n, -x; x + n + 1; -1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } { \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {n + 1} } $
where:    

$\ds \map F {n, -x; x + n + 1; -1}$ is the Gaussian hypergeometric function of $-1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} } { \paren {x + n + 1}^{\overline k} } \dfrac {\paren {-1}^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

We have:














\(\ds \map F {\dfrac 1 2, \dfrac 1 2; 1; -1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac 1 2}^{\overline k} \paren {\dfrac 1 2}^{\overline k} } { 1^{\overline k} } \dfrac {\paren {-1}^k} {k!}\)





Definition of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds 1 - \dfrac { \paren {\dfrac 1 2}^2 } { \paren {1!}^2 } + \dfrac { \paren {\dfrac 1 2 \times \dfrac 3 2 }^2 } { \paren {2!}^2 } - \dfrac { \paren {\dfrac 1 2 \times \dfrac 3 2 \times \dfrac 5 2 }^2 } { \paren {3!}^2 } + \cdots\)





One to Integer Rising is Integer Factorial, $1^k = 1$, Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds 1 - \paren {\dfrac 1 2}^2 + \paren {\dfrac {1 \times 3} {2 \times 4} }^2 - \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^2 + \cdots\)









and:














\(\ds \map F {\dfrac 1 2, \dfrac 1 2; 1; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {-\dfrac 1 2 + \dfrac 1 2 + 1} \map \Gamma {\dfrac {\dfrac 1 2} 2 + 1} } { \map \Gamma {-\dfrac 1 2 + \dfrac {\dfrac 1 2} 2 + 1} \map \Gamma {\dfrac 1 2 + 1} }\)





Kummer's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {1} \map \Gamma {\dfrac 5 4} } { \map \Gamma {\dfrac 3 4} \map \Gamma {\dfrac 3 2 } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac 1 4 \map \Gamma {\dfrac 1 4} } { \map \Gamma {\dfrac 3 4 } \dfrac 1 2 \map \Gamma {\dfrac 1 2} }\)





Definition of Gamma Function and $\map \Gamma {1} = 1$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {\dfrac 1 4} } { 2 \map \Gamma {\dfrac 3 4 } \sqrt \pi }\)





Gamma Function of $\dfrac 1 2$




Recall from the Euler Reflection Formula: $\map \Gamma z \map \Gamma {1 - z} = \dfrac \pi {\map \sin {\pi z} }$
Therefore:














\(\ds \map \Gamma {\dfrac 1 4} \map \Gamma {1 - \dfrac 1 4}\)

\(=\)







\(\ds \dfrac \pi {\map \sin {\dfrac \pi 4} }\)




















\(\ds \map \Gamma {\dfrac 1 4} \map \Gamma {\dfrac 3 4}\)

\(=\)







\(\ds \dfrac \pi {\dfrac {\sqrt 2} 2 }\)





Sine of $45 \degrees$




\(\text {(2)}: \quad\)









\(\ds \map \Gamma {\dfrac 1 4}\)

\(=\)







\(\ds \dfrac {\sqrt 2 \pi} {\map \Gamma {\dfrac 3 4} }\)









Substituting this result back into our equation above:














\(\ds \map F {\dfrac 1 2, \dfrac 1 2; 1; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {\dfrac 1 4} } { 2\map \Gamma {\dfrac 3 4 } \sqrt \pi }\)





from $\paren {1}$ above














\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac {\sqrt 2 \pi} {\map \Gamma {\dfrac 3 4} }  } { 2 \map \Gamma {\dfrac 3 4 } \sqrt \pi }\)





substituting $\paren {2}$ into $\paren {1}$














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt \pi} {\sqrt 2 \paren {\map \Gamma {\dfrac 3 4} }^2 }\)










Therefore:

$1 - \paren {\dfrac 1 2}^2 + \paren {\dfrac {1 \times 3} {2 \times 4} }^2 - \paren {\dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} }^2 + \cdots = \dfrac {\sqrt \pi} {\sqrt 2 \paren {\map \Gamma {\dfrac 3 4} }^2 }$
$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




