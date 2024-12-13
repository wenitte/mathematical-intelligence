# 

Source: https://proofwiki.org/wiki/Kummer%27s_Quadratic_Transformation



Theorem
Let $a, b \in \C$.
Let $z < 3 - 2 \sqrt 2$
Let $\size z < 1$
Then:

$\ds \map F {a, b; 1 + a - b; z} = \paren {1 - z}^{-a} \map F {\dfrac a 2, \dfrac {1 + a} 2 - b; 1 + a - b; \dfrac {-4 z} {\paren {1 - z}^2} }$

where:

$\map F {a, b; 1 + a - b; z}$ is the Gaussian hypergeometric function of $z$: $\ds \sum_{k \mathop = 0}^\infty \dfrac { a^{\overline k} b^{\overline k} } {\paren {1 + a - b}^{\overline k} } \dfrac {z^k} {k!}$
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$
$\map \Gamma {n + 1} = n!$ is the Gamma function.


Proof
On the right hand side, our $z$ variable transforms to $\dfrac {-4 z} {\paren {1 - z}^2}$, therefore:














\(\ds \size {\dfrac {-4 z} {\paren {1 - z}^2} }\)

\(<\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds 4 z\)

\(<\)







\(\ds \paren {1 - z}^2\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds 1 - 6 z + z^2\)









By the Quadratic Formula, either $z > 3 + 2 \sqrt 2$ or $z < 3 - 2 \sqrt 2$.
Because $\size z < 1$, we have:

$\size z < 3 - 2 \sqrt 2$
This means our sum is analytic and can be expanded in powers in $z$ for $\size z < 3 - 2 \sqrt 2$
From the definition of Gaussian hypergeometric function, the right hand side can be written as:














\(\ds \paren {1 - z}^{-a} \map F {\dfrac a 2, \dfrac {1 + a} 2 - b; 1 + a - b; \dfrac {-4 z} {\paren {1 - z}^2} }\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac { \paren {\dfrac a 2}^{\overline k} \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {k! \paren {1 + a - b}^{\overline k} } \paren {-4 z}^k \paren {1 - z}^{-a - 2 k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-4}^k \paren {\dfrac a 2}^{\overline k} \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {k! \paren {1 + a - b}^{\overline k} } \sum_{n \mathop = 0}^\infty \dbinom {-a - 2 k} n \paren {-z}^{n + k}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-4}^k \paren {\dfrac a 2}^{\overline k} \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {k! \paren {1 + a - b}^{\overline k} } \sum_{n \mathop = 0}^\infty \paren {\dbinom {a + 2 k + n - 1} n \paren {-1}^n} \paren {\paren {-1}^n z^{n + k} }\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-4}^k \paren {\dfrac a 2}^{\overline k} \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {k! \paren {1 + a - b}^{\overline k} } \sum_{n \mathop = 0}^\infty \dfrac {\paren {a + 2 k + n - 1}!} {n! \paren {a + 2 k - 1}!} z^{n + k}\)





Definition of Binomial Coefficient and $\paren {-1}^n \times \paren {-1}^n = 1$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-4}^k \paren {\dfrac a 2}^{\overline k} \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {k! \paren {1 + a - b}^{\overline k} } \sum_{n \mathop = 0}^\infty \dfrac {\paren {a + 2 k}^{\overline n} } {n!} z^{n + k}\)





Definition of Rising Factorial



The coefficient of $z^n$ on the right hand side is:














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac a 2}^{\overline k} \dfrac {\paren {-4}^k \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {k! \paren {1 + a - b}^{\overline k} } \dfrac {\paren {a + 2 k}^{\overline {n - k} } } {\paren {n - k}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dfrac {\map \Gamma {\dfrac a 2 + k} } {\map \Gamma {\dfrac a 2} } \dfrac {\paren {-1}^k 2^{2 k} \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {k! \paren {1 + a - b}^{\overline k} } \dfrac {\map \Gamma {a + 2 k + n - k} } {\map \Gamma {a + 2 k} \paren {n - k}!}\)





Rising Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dfrac {\dfrac {2^{1-\paren {a + 2 k} } \map \Gamma {\dfrac 1 2} \map \Gamma {a + 2 k} } {\map \Gamma {\dfrac {1 + a} 2 + k} } } {\dfrac {2^{1-a} \map \Gamma {\dfrac 1 2} \map \Gamma a} {\map \Gamma {\dfrac {1 + a} 2} } } \dfrac {\paren {-1}^k 2^{2 k} \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {k! \paren {1 + a - b}^{\overline k} } \dfrac {\map \Gamma {a + k + n} } {\map \Gamma {a + 2 k} \paren {n - k}!}\)





Legendre's Duplication Formula














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dfrac {\map \Gamma {\dfrac {1 + a} 2} } {\map \Gamma a \map \Gamma {\dfrac {1 + a} 2 + k} } \dfrac {\paren {-1}^k \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {k! \paren {1 + a - b}^{\overline k} } \dfrac {\map \Gamma {a + k + n} } {\paren {n - k}!}\)





simplifying: $\dfrac {2^{1-\paren {a + 2 k} } 2^{2 k} } {2^{1-a} } = 1 $ and canceling $\map \Gamma {\dfrac 1 2}$ and $\map \Gamma {a + 2 k}$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dfrac {\paren {-1}^k \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {\map \Gamma a k! \paren {1 + a - b}^{\overline k} \paren {\dfrac {1 + a} 2}^{\overline k} } \dfrac {\map \Gamma {a + k + n} } {\paren {n - k}!}\)





Rising Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dfrac {\paren {-1}^k \paren {\dfrac {1 + a} 2 - b}^{\overline k} } {\map \Gamma a k! \paren {1 + a - b}^{\overline k} \paren {\dfrac {1 + a} 2}^{\overline k} } \dfrac {\map \Gamma {a + k + n} } {\paren {n - k}!} \times \dfrac {\map \Gamma {a + n} } {\map \Gamma {a + n} } \times \dfrac {n!} {n!}\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} } {n!} \sum_{k \mathop = 0}^n \dfrac {\paren {\dfrac {1 + a} 2 - b}^{\overline k} \paren {a + n}^{\overline k} } {\paren {1 + a - b}^{\overline k} \paren {\dfrac {1 + a} 2}^{\overline k} } \paren {-1}^k  n^{\underline k} \dfrac 1 {k!}\)





Rising Factorial as Quotient of Factorials and Falling Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} } {n!} \sum_{k \mathop = 0}^n \dfrac {\paren {\dfrac {1 + a} 2 - b}^{\overline k} \paren {a + n}^{\overline k} \paren {-n}^{\overline k} } {\paren {1 + a - b}^{\overline k} \paren {\dfrac {1 + a} 2}^{\overline k} } \dfrac 1 {k!}\)





Rising Factorial in terms of Falling Factorial of Negative














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} } {n!} \map { {}_3 \operatorname F_2} { { {\paren {\dfrac {1 + a} 2 - b}, \paren {a + n}, -n} \atop {\paren {1 + a - b}, \dfrac {1 + a} 2} } \, \middle \vert \, 1}\)





Definition of Hypergeometric Function














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} } {n!} \dfrac {\paren {\paren {1 + a - b} - \paren {\dfrac {1 + a} 2 - b} }^{\overline n} \paren {\paren {1 + a - b} - \paren {a + n} }^{\overline n} } { \paren {1 + a - b}^{\overline n} \paren {\paren {1 + a - b} - \paren {\dfrac {1 + a} 2 - b} - \paren {a + n} }^{\overline n} }\)





Pfaff-Saalschütz Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} } {n!} \dfrac {\paren {\dfrac {1 + a} 2}^{\overline n} \paren {1 - b - n}^{\overline n} } { \paren {1 + a - b}^{\overline n}\paren {\dfrac {1 - a} 2 - n}^{\overline n} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} } {\paren {1 + a - b }^{\overline n} n!} \dfrac {\map \Gamma {\dfrac {1 + a} 2 + n} \map \Gamma {1 - \paren {\dfrac {1 + a} 2 + n} } } {\map \Gamma {\dfrac {1 + a} 2} \map \Gamma {1 - \paren {\dfrac {1 + a} 2} } } \dfrac {\map \Gamma {1 - b} } {\map \Gamma {1 - b - n} }\)





Rising Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} } {\paren {1 + a - b }^{\overline n} n!} \dfrac {\map \Gamma {\dfrac {1 + a} 2 + n} \map \Gamma {1 - \paren {\dfrac {1 + a} 2 + n} } } {\map \Gamma {\dfrac {1 + a} 2} \map \Gamma {1 - \paren {\dfrac {1 + a} 2} } } \paren {-b}^{\underline n}\)





Falling Factorial as Quotient of Factorials














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} b^{\overline n} } {\paren {1 + a - b }^{\overline n} n!} \dfrac {\map \Gamma {\dfrac {1 + a} 2 + n} \map \Gamma {1 - \paren {\dfrac {1 + a} 2 + n} } } {\map \Gamma {\dfrac {1 + a} 2} \map \Gamma {1 - \paren {\dfrac {1 + a} 2} } } \paren {-1}^n\)





Rising Factorial in terms of Falling Factorial of Negative














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} b^{\overline n} } {\paren {1 + a - b }^{\overline n} n!} \dfrac \pi {\map \sin {\pi \paren {\dfrac {1 + a} 2 + n} } } \dfrac {\map \sin {\pi \paren {\dfrac {1 + a} 2} } } \pi \paren {-1}^n\)





Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} b^{\overline n} } {\paren {1 + a - b }^{\overline n} n!} \dfrac {\map \sin {\pi \paren {\dfrac {1 + a} 2} } } {\map \sin {\pi \paren {\dfrac {1 + a} 2} } \map \cos {\pi n} + \map \cos {\pi \paren {\dfrac {1 + a} 2} } \map \sin {\pi n} } \paren {-1}^n\)





Sine of Sum














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} b^{\overline n} } {\paren {1 + a - b }^{\overline n} n!} \dfrac 1 {\map \cos {\pi n} } \paren {-1}^n\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} b^{\overline n} } {\paren {1 + a - b }^{\overline n} n!} \paren {-1}^{-n} \paren {-1}^n\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \dfrac {a^{\overline n} b^{\overline n} } {\paren {1 + a - b }^{\overline n} n!}\)










We now observe that the coefficients of $z^n$ on the right hand side are identical to the coefficients of $z^n$ on the left hand side.
Therefore:

$\ds \map F {a, b; 1 + a - b; z} = \paren {1 - z}^{-a} \map F {\dfrac a 2, \dfrac {1 + a} 2 - b; 1 + a - b; \dfrac {-4 z} {\paren {1 - z}^2} }$
$\blacksquare$


Also see
Euler's Transformation
Pfaff's Transformation


Source of Name
This entry was named for Ernst Eduard Kummer.


Sources
1999: George E. Andrews, Richard Askey and Ranjan Roy: Special Functions: Chapter $\text {2}$. The Hypergeometric Functions
1935: W.N. Bailey: Generalized Hypergeometric Series Chapter $\text {2}$. The hypergeometric series
Weisstein, Eric W. "Kummer's Quadratic Transformation." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/KummersQuadraticTransformation.html




