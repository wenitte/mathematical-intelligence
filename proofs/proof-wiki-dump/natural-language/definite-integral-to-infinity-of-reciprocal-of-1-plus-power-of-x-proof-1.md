# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Reciprocal_of_1_plus_Power_of_x/Proof_1

Theorem
$\ds \int_0^\infty \frac 1 {1 + x^n} \rd x = \frac \pi n \map \csc {\frac \pi n}$


Proof
From Euler's Reflection Formula:

$\map \Gamma {\dfrac 1 n} \map \Gamma {1 - \dfrac 1 n} = \pi \map \csc {\dfrac \pi n}$
Then: 














\(\ds \map \Gamma {\frac 1 n} \map \Gamma {1 - \frac 1 n}\)

\(=\)







\(\ds \frac {\map \Gamma {\frac 1 n} \map \Gamma {1 - \frac 1 n} } {\map \Gamma {1 - \frac 1 n + \frac 1 n} }\)





$\map \Gamma 1 = 1$














\(\ds \)

\(=\)







\(\ds \map \Beta {\frac 1 n, 1 - \frac 1 n}\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 2} \paren {\sin \theta}^{\frac 2 n - 1} \paren {\cos \theta}^{1 - \frac 2 n} \rd \theta\)





Definition 2 of Beta Function














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 2} \paren {\frac {\sin \theta} {\cos \theta} }^{\frac 2 n - 1} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 2} \paren {\tan \theta}^{\frac 2 n - 1} \rd \theta\)





Definition of Tangent Function



Note we have: 














\(\ds \frac {\map \d {\paren {\tan \theta}^{\frac 2 n} } } {\d \theta}\)

\(=\)







\(\ds \frac {\map \d {\tan \theta} } {\d \theta} \cdot \frac {\map \d {\paren {\tan \theta}^{\frac 2 n} } } {\map \d {\tan \theta} }\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \sec^2 \theta \cdot \frac 2 n \paren {\tan \theta}^{\frac 2 n - 1}\)





Derivative of Tangent Function, Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac 2 n \paren {1 + \tan^2 \theta} \paren {\tan \theta}^{\frac 2 n - 1}\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 2 n \paren {1 + \paren {\tan^{\frac 2 n} \theta}^n} \cdot \paren {\tan \theta}^{\frac 2 n - 1}\)









As $\theta \to \dfrac \pi 2$, $\tan \theta \to \infty$ and $\tan 0 = 0$, so making a substitution of $x = \paren {\tan \theta}^{\frac 2 n}$ to our original integral:














\(\ds 2 \int_0^{\pi / 2} \paren {\tan \theta}^{\frac 2 n - 1} \rd \theta\)

\(=\)







\(\ds 2 \int_0^\infty \paren {\tan \theta}^{\frac 2 n - 1} \frac {\rd x} {\frac 2 n \paren {1 + \paren {\tan^{\frac 2 n} \theta}^n} \cdot \paren {\tan \theta}^{\frac 2 n - 1} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {2 n} 2 \int_0^\infty \frac {\paren {\tan\theta}^{\frac 2 n - 1} } {\paren {\tan \theta}^{\frac 2 n - 1} } \frac {\rd x} {1 + x^n}\)




















\(\ds \)

\(=\)







\(\ds n \int_0^\infty \frac 1 {1 + x^n} \rd x\)









So we have: 

$\ds \pi \map \csc {\frac \pi n} = n \int_0^\infty \frac 1 {1 + x^n} \rd x$
Hence:

$\ds \int_0^\infty \frac 1 {1 + x^n} \rd x = \frac \pi n \map \csc {\frac \pi n}$
$\blacksquare$





