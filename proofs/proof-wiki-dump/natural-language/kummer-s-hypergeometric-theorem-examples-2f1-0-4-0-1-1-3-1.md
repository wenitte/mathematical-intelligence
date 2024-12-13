# 

Source: https://proofwiki.org/wiki/Kummer%27s_Hypergeometric_Theorem/Examples/2F1(0.4,0.1;1.3;-1)

Example of Use of Kummer's Hypergeometric Theorem
$1 - \paren {\dfrac {\paren {2} \paren {1} } {\paren {5} \paren {13} } } + \paren {\dfrac {\paren {2 \times 7} \paren {1 \times 11} } {\paren {5 \times 10} \paren {13 \times 23} } } - \paren {\dfrac {\paren {2 \times 7 \times 12} \paren {1 \times 11 \times 21} } {\paren {5 \times 10 \times 15} \paren {13 \times 23 \times 33} } } + \cdots = \dfrac {1944^{\frac 1 5} \pi^{\frac 3 2} } {\phi \map \Gamma {\dfrac 1 {10} } \paren {\map \Gamma {\dfrac 7 {10} } }^2 }$


Proof
From Kummer's Hypergeometric Theorem:

$\ds \map F {n, -x; x + n + 1; -1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {\dfrac n 2 + 1} } { \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {n + 1} } $
where:    

$\ds \map F {n, -x; x + n + 1; -1}$ is the Gaussian hypergeometric function of $-1$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

We have:














\(\ds \map F {\dfrac 2 5, \dfrac 1 {10}; \dfrac {13} {10}; -1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac 2 5}^{\overline k} \paren {\dfrac 1 {10} }^{\overline k} } { \paren {\dfrac {13} {10} }^{\overline k} } \dfrac {\paren {-1}^k} {k!}\)





Definition of Gaussian Hypergeometric Function














\(\ds \)

\(=\)







\(\ds 1 - \dfrac {\paren {\dfrac 2 5} \paren {\dfrac 1 {10} } } {\paren {\dfrac {13} {10} } 1!} + \dfrac {\paren {\dfrac 2 5 \times \dfrac 7 5} \paren {\dfrac 1 {10} \times \dfrac {11} {10} } } {\paren {\dfrac {13} {10} \times \dfrac {23} {10} } 2!} - \dfrac {\paren {\dfrac 2 5 \times \dfrac 7 5 \times \dfrac {12} 5} \paren {\dfrac 1 {10} \times \dfrac {11} {10} \times \dfrac {21} {10} } } {\paren {\dfrac {13} {10} \times \dfrac {23} {10} \times \dfrac {33} {10} } 3!} + \cdots\)





One to Integer Rising is Integer Factorial, $1^k = 1$, Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds 1 - \paren {\dfrac {\paren {2} \paren {1} } {\paren {5} \paren {13} } } + \paren {\dfrac {\paren {2 \times 7} \paren {1 \times 11} } {\paren {5 \times 10} \paren {13 \times 23} } } - \paren {\dfrac {\paren {2 \times 7 \times 12} \paren {1 \times 11 \times 21} } {\paren {5 \times 10 \times 15} \paren {13 \times 23 \times 33} } } + \cdots\)









and:














\(\ds \map F {\dfrac 2 5, \dfrac 1 {10}; \dfrac {13} {10}; -1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {-\dfrac 1 {10} + \dfrac 2 5 + 1} \map \Gamma {\dfrac {\dfrac 2 5} 2 + 1} } {\map \Gamma {-\dfrac 1 {10} + \dfrac {\dfrac 2 5} 2 + 1} \map \Gamma {\dfrac 2 5 + 1} }\)





Kummer's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {\dfrac {13} {10} } \map \Gamma {\dfrac 6 5} } {\map \Gamma {\dfrac {11} {10} } \map \Gamma {\dfrac 7 5} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\dfrac 3 {10} \map \Gamma {\dfrac 3 {10} } \dfrac 1 5 \map \Gamma {\dfrac 1 5 } } {\dfrac 1 {10} \map \Gamma {\dfrac 1 {10} } \dfrac 2 5 \map \Gamma {\dfrac 2 5} }\)





Definition of Gamma Function




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {3 \map \Gamma {\dfrac 3 {10} } \map \Gamma {\dfrac 1 5 } } {2 \map \Gamma {\dfrac 1 {10} } \map \Gamma {\dfrac 2 5} }\)










Recall from the Euler Reflection Formula: $\map \Gamma z \map \Gamma {1 - z} = \dfrac \pi {\map \sin {\pi z} }$
Therefore:














\(\ds \map \Gamma {\dfrac 3 {10} } \map \Gamma {1 - \dfrac 3 {10} }\)

\(=\)







\(\ds \dfrac \pi {\map \sin {\dfrac {3\pi} {10} } }\)




















\(\ds \map \Gamma {\dfrac 3 {10} } \map \Gamma {\dfrac 7 {10} }\)

\(=\)







\(\ds \dfrac \pi {\dfrac \phi 2 }\)





Sine of Complement: $\map \sin {\dfrac \pi 2 - \dfrac \pi 5} = \cos \dfrac \pi 5$ and Golden Ratio: $\cos \dfrac \pi 5 = \dfrac \phi 2$




\(\text {(2)}: \quad\)









\(\ds \map \Gamma {\dfrac 3 {10} }\)

\(=\)







\(\ds \dfrac {2 \pi} {\phi \map \Gamma {\dfrac 7 {10} } }\)









Recall from the Legendre Duplication Formula: $\map \Gamma z \map \Gamma {z + \dfrac 1 2} = 2^{1 - 2 z} \sqrt \pi \, \map \Gamma {2 z}$
Therefore:














\(\ds \map \Gamma {\dfrac 1 5} \map \Gamma {\dfrac 1 5 + \dfrac 1 2}\)

\(=\)







\(\ds 2^{1 - \frac 2 5} \sqrt \pi \, \map \Gamma {\dfrac 2 5}\)










\(\text {(3)}: \quad\)









\(\ds \dfrac {\map \Gamma {\dfrac 1 5} } {\map \Gamma {\dfrac 2 5} }\)

\(=\)







\(\ds \dfrac {2^{1 - \frac 2 5} \sqrt \pi} {\map \Gamma {\dfrac 7 {10} } }\)










Substituting these results back into our equation above:














\(\ds \map F {\dfrac 2 5, \dfrac 1 {10}; \dfrac {13} {10}; -1}\)

\(=\)







\(\ds \dfrac {3 \map \Gamma {\dfrac 3 {10} } \map \Gamma {\dfrac 1 5 } } {2 \map \Gamma {\dfrac 1 {10} } \map \Gamma {\dfrac 2 5} }\)





from $\paren {1}$ above














\(\ds \)

\(=\)







\(\ds \dfrac {3 \paren {\dfrac {2 \pi} {\phi \map \Gamma {\dfrac 7 {10} } } } } {2 \map \Gamma {\dfrac 1 {10} } } \times \dfrac {2^{1 - \frac 2 5} \sqrt \pi} {\map \Gamma {\dfrac 7 {10} } }\)





substituting $\paren {2}$ and $\paren {3}$ into $\paren {1}$














\(\ds \)

\(=\)







\(\ds \dfrac {1944^{\frac 1 5} \pi^{\frac 3 2} } {\phi \map \Gamma {\dfrac 1 {10} } \paren {\map \Gamma {\dfrac 7 {10} } }^2}\)





$1944 = 3^5 \times 2^3$




Therefore:

$1 - \paren {\dfrac {\paren {2} \paren {1} } {\paren {5} \paren {13} } } + \paren {\dfrac {\paren {2 \times 7} \paren {1 \times 11} } {\paren {5 \times 10} \paren {13 \times 23} } } - \paren {\dfrac {\paren {2 \times 7 \times 12} \paren {1 \times 11 \times 21} } {\paren {5 \times 10 \times 15} \paren {13 \times 23 \times 33} } } + \cdots = \dfrac {1944^{\frac 1 5} \pi^{\frac 3 2} } {\phi \map \Gamma {\dfrac 1 {10} } \paren {\map \Gamma {\dfrac 7 {10} } }^2 }$
$\blacksquare$


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




