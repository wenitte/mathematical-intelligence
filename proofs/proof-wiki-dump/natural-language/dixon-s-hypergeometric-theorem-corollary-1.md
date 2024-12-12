# 

Source: https://proofwiki.org/wiki/Dixon%27s_Hypergeometric_Theorem/Corollary_1



Corollary to Dixon's Hypergeometric Theorem
Let $n \in \C$ be a complex number.
Let $\map \Re n < \dfrac 2 3$.
Then:

$\ds 1 + \paren {\dfrac n {1!} }^3 + \paren {\dfrac {n \paren {n + 1} } {2!} }^3 + \paren {\dfrac {n \paren {n + 1} \paren {n + 2} } {3!} }^3 + \cdots = \dfrac {6 \map \sin {\dfrac {\pi n} 2} \map \sin {\pi n} \map {\Gamma^3} {\dfrac n 2 + 1} } {\pi^2 n^2 \paren {1 + 2 \map \cos {\pi n} } \map \Gamma {\dfrac {3 n} 2 + 1} } $


Proof
From Dixon's Hypergeometric Theorem:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1} = \dfrac {\map \Gamma {x + n + 1} \map \Gamma {y + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {x + y + \dfrac n 2 + 1} } { \map \Gamma {n + 1} \map \Gamma {x + y + n + 1} \map \Gamma {x + \dfrac n 2 + 1} \map \Gamma {y + \dfrac n 2 + 1} } $
where:

$\ds \map { {}_3 \operatorname F_2} { { {n, -x, -y} \atop {x + n + 1, y + n + 1} } \, \middle \vert \, 1}$ is the generalized hypergeometric function of $1$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { n^{\overline k} \paren {-x}^{\overline k} \paren {-y}^{\overline k} } { \paren {x + n + 1}^{\overline k} \paren {y + n+ 1}^{\overline k} } \dfrac {1^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.

Set $x = y = -n$:














\(\ds \map { {}_3 \operatorname F_2} { { {n, n, n} \atop {1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {n^{\overline k} n^{\overline k} n^{\overline k} } { 1^{\overline k} 1^{\overline k} } \dfrac {1^k} {k!}\)





Definition of Generalized Hypergeometric Function














\(\ds \)

\(=\)







\(\ds 1 + \dfrac {n^3} {\paren {1!}^3} + \dfrac {\paren {n \paren {n + 1} }^3} {\paren {2!}^3} + \dfrac {\paren {n \paren {n + 1} \paren {n + 2} }^3} {\paren {3!}^3} + \cdots\)





One to Integer Rising is Integer Factorial, $1^k = 1$, Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds 1 + \paren {\dfrac n {1!} }^3 + \paren {\dfrac {n \paren {n + 1} } {2!} }^3 + \paren {\dfrac {n \paren {n + 1} \paren {n + 2} } {3!} }^3 + \cdots\)









and:














\(\ds \map { {}_3 \operatorname F_2} { { {n, n, n} \atop {1, 1} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\map \Gamma {-n + n + 1} \map \Gamma {-n + n + 1} \map \Gamma {\dfrac n 2 + 1} \map \Gamma {-n -n + \dfrac n 2 + 1} } {\map \Gamma {n + 1} \map \Gamma {-n - n + n + 1} \map \Gamma {-n + \dfrac n 2 + 1} \map \Gamma {-n + \dfrac n 2 + 1} }\)





Dixon's Hypergeometric Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma 1 \map \Gamma 1 \map \Gamma {\dfrac n 2 + 1} \map \Gamma {-\dfrac {3 n} 2 + 1} } {\map \Gamma {n + 1} \map \Gamma {1 - n} \map {\Gamma^2} {-\dfrac n 2 + 1} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {\dfrac n 2 + 1} \map \Gamma {-\dfrac {3 n} 2 + 1} } {n \map \Gamma n \map \Gamma {1 - n} \map {\Gamma^2} {-\dfrac n 2 + 1} }\)





Definition of Gamma Function and $\map \Gamma {1} = 1$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi n} } \pi \times \dfrac {\map \Gamma {\dfrac n 2 + 1} \map \Gamma {-\dfrac {3 n} 2 + 1} } {n \map {\Gamma^2} {-\dfrac n 2 + 1} }\)





Euler's Reflection Formula: $\map \Gamma n \map \Gamma {1 - n} = \dfrac \pi {\map \sin {\pi n} }$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi n} } \pi \times \dfrac {\map \Gamma {\dfrac n 2 + 1} \map \Gamma {-\dfrac {3 n} 2 + 1} } {n \map {\Gamma^2} {-\dfrac n 2 + 1} } \times \paren {\dfrac {\map {\Gamma^2} {\dfrac n 2} } {\map {\Gamma^2} {\dfrac n 2} } \times \dfrac {\paren {\dfrac n 2}^2} {\paren {\dfrac n 2}^2} }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi n} } \pi \times \dfrac {\map {\sin^2} {\dfrac {\pi n} 2} } {\pi^2} \times \dfrac {\map {\Gamma^3} {\dfrac n 2 + 1} \map \Gamma {-\dfrac {3 n} 2 + 1} } {n \paren {\dfrac n 2}^2}\)





Euler's Reflection Formula and Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi n} } \pi \times \dfrac {\map {\sin^2} {\dfrac {\pi n} 2} } {\pi^2} \times \dfrac {\map {\Gamma^3} {\dfrac n 2 + 1} \map \Gamma {-\dfrac {3 n} 2 + 1} } {n \paren {\dfrac n 2}^2} \times \paren {\dfrac {\map \Gamma {\dfrac {3 n} 2} } {\map \Gamma {\dfrac {3 n} 2} } }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi n} } \pi \times \dfrac {\map {\sin^2} {\dfrac {\pi n} 2} } {\pi^2} \times \dfrac \pi {\map \sin {\dfrac {3\pi n} 2} } \times \dfrac {\map {\Gamma^3} {\dfrac n 2 + 1} } {n \paren {\dfrac n 2}^2 \map \Gamma {\dfrac {3 n} 2} }\)





Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \dfrac {4 \map \sin {\pi n} \map {\sin^2} {\dfrac {\pi n} 2} \map {\Gamma^3} {\dfrac n 2 + 1} } {\pi^2 \map \sin {\dfrac {3\pi n} 2} n^3 \map \Gamma {\dfrac {3 n} 2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {4 \map \sin {\pi n} \map {\sin^2} {\dfrac {\pi n} 2} \map {\Gamma^3} {\dfrac n 2 + 1} } {\pi^2 \map \sin {\dfrac {3\pi n} 2} n^3 \map \Gamma {\dfrac {3 n} 2} } \times \paren {\dfrac {\dfrac {3 n} 2} {\dfrac {3 n} 2} }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac {6 \map \sin {\pi n} \map {\sin^2} {\dfrac {\pi n} 2} \map {\Gamma^3} {\dfrac n 2 + 1} } {\pi^2 \map \sin {\dfrac {3\pi n} 2} n^2  \map \Gamma {\dfrac {3 n} 2 + 1} }\)





Definition of Gamma Function and simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {6 \map \sin {\pi n} \map {\sin^2} {\dfrac {\pi n} 2} \map {\Gamma^3} {\dfrac n 2 + 1} } {\pi^2 \paren {\paren {\map \sin {\dfrac {\pi n} 2} } \paren {2 \map \cos {\pi n} + 1} } n^2  \map \Gamma {\dfrac {3 n} 2 + 1} }\)





Sine of Integer Multiple of Argument/Formulation 6














\(\ds \)

\(=\)







\(\ds \dfrac {6 \map \sin {\dfrac {\pi n} 2} \map \sin {\pi n} \map {\Gamma^3} {\dfrac n 2 + 1} } {\pi^2 n^2 \paren {1 + 2 \map \cos {\pi n} } \map \Gamma {\dfrac {3 n} 2 + 1} }\)





$\map \sin {\dfrac {\pi n} 2}$ cancels and rearranging



Note the $\map \sin {\dfrac {3\pi n} 2}$ in the denominator which is why $\map \Re n < \dfrac 2 3$.
$\blacksquare$


Also see
Morley's Formula


Sources
1989: Bruce C. Berndt: Ramanujan's Notebooks: Part II: Chapter $\text {10}$. Hypergeometric Series: $\text I$




