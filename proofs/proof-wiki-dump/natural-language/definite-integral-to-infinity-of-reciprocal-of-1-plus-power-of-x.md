# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Reciprocal_of_1_plus_Power_of_x



Theorem
$\ds \int_0^\infty \frac 1 {1 + x^n} \rd x = \frac \pi n \map \csc {\frac \pi n}$
where:

$n$ is a real number greater than 1
$\csc$ is the cosecant function.


Corollary
$\ds \int_0^\infty \frac 1 {a^n + x^n} \rd x = \frac \pi {n a^{n - 1} } \map \csc {\frac \pi n}$


Proof 1
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


Proof 2
Let $R > 1$ be a real number.
Let:

$\ds C_R = \set {R e^{i \theta} : 0 \le \theta \le \frac {2 \pi} n}$

This article, or a section of it, needs explaining.In particular: the fact that we are working in the complex plane. This is not immediately obvious.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $L_R$ be the straight line segment from $0$ to $R e^{\frac {2 \pi i} n}$.
Let $\Gamma_R = \closedint 0 R \cup C_R \cup L_R$, traversed anticlockwise. 


This article, or a section of it, needs explaining.In particular: DiagramYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then: 














\(\ds \oint_{\Gamma_R} \frac 1 {1 + z^n} \rd z\)

\(=\)







\(\ds \int_0^R \frac 1 {1 + x^n} \rd x + \int_{C_R} \frac 1 {1 + z^n} \rd z + \int_{L_R} \frac 1 {1 + z^n} \rd z\)




















\(\ds \)

\(=\)







\(\ds \int_0^R \frac 1 {1 + x^n} \rd x + \int_{C_R} \frac 1 {1 + z^n} \rd z + e^{\frac {2 \pi i} n} \int_R^0 \frac 1 {1 + e^{2 \pi i} x^n} \rd x\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \paren {1 - e^{\frac {2 \pi i} n} } \int_0^R \frac 1 {1 + x^n} \rd x + \int_{C_R} \frac 1 {1 + z^n} \rd z\)









We can show the second integral to vanish as $R \to \infty$: 














\(\ds \cmod {\int_{C_R} \frac 1 {1 + z^n} \rd z}\)

\(\le\)







\(\ds \frac {2 \pi R} n \max_{0 \le \theta \le \frac {2 \pi} n} \cmod {\frac 1 {1 + R^n e^{i n \theta} } }\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds \frac {2 \pi R} {n \paren {R^n - 1} }\)




















\(\ds \)

\(\sim\)







\(\ds \frac {2 \pi} {n R^{n - 1} }\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $n > 1$



So we have: 

$\ds \oint_{\Gamma_\infty} \frac 1 {1 + z^n} \rd z = \paren {1 - e^{\frac {2 \pi i} n} } \int_0^\infty \frac 1 {1 + x^n} \rd x$

We have that the integrand is meromorphic with a single simple pole at $z = e^{\frac \pi n i}$.
This is contained within the contour
Hence Cauchy's Residue Theorem can be applied to evaluate the left hand side:














\(\ds \oint_{\Gamma_\infty} \frac 1 {1 + z^n} \rd z\)

\(=\)







\(\ds 2 \pi i \Res {\frac 1 {1 + z^n} } {e^{\frac \pi n i} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \pi i} {n e^{\frac \pi n \paren {n - 1} i} }\)





Residue at Simple Pole














\(\ds \)

\(=\)







\(\ds \frac {2 \pi i e^{i \frac \pi n} } {n e^{\pi i} }\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 \pi i e^{i \frac \pi n} } n\)





Euler's Identity




So: 

$\ds \paren {e^{\frac {2 \pi i} n} - 1} \int_0^\infty \frac 1 {1 + x^n} \rd x = \frac {2 \pi i e^{i \frac \pi n} } n$
giving: 














\(\ds \int_0^\infty \frac 1 {1 + x^n} \rd x\)

\(=\)







\(\ds \frac \pi n \cdot 2 i \cdot \frac {e^{i \frac \pi n} } {e^{\frac {2 \pi i} n} - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi n \cdot \frac {2 i e^{i \frac \pi n} } {e^{\frac \pi n i} \paren {e^{\frac \pi n i} - e^{-\frac \pi n i} } }\)




















\(\ds \)

\(=\)







\(\ds \frac \pi n \cdot \frac {2 i} {e^{\frac \pi n i} - e^{-\frac \pi n i} }\)




















\(\ds \)

\(=\)







\(\ds \frac \pi n \map \csc {\frac \pi n}\)





Euler's Cosecant Identity



$\blacksquare$


Proof 3
Let:














\(\ds x\)

\(=\)







\(\ds \paren {\tan \theta}^{\frac 2 n}\)





Integration by Substitution








\(\ds \leadsto \ \ \)





\(\ds \rd x\)

\(=\)







\(\ds \frac 2 n \paren {\tan \theta}^{\frac 2 n - 1} \sec^2 \theta \rd \theta\)





Derivative of Tangent Function, Derivative of Power, Chain Rule for Derivatives




We also have:














\(\ds \tan 0\)

\(=\)







\(\ds 0\)





Tangent of Zero














\(\ds \lim_{\theta \mathop \to \frac \pi 2} \map \tan {\theta}\)

\(\to\)







\(\ds \infty\)





Tangent of Right Angle



Then:














\(\ds \int_0^\infty \frac 1 {1 + x^n} \rd x\)

\(=\)







\(\ds \int_0^{\pi / 2} \frac 1 {1 + \paren {\paren {\tan \theta}^{\frac 2 n} }^n} \cdot \frac 2 n \paren {\tan \theta}^{\frac 2 n - 1} \sec^2 \theta \rd \theta\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \frac 1 {1 + \tan^2 \theta} \cdot \paren {\tan \theta}^{\frac 2 n - 1} \sec^2 \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \frac 1 {\sec^2 \theta} \cdot \paren {\tan \theta}^{\frac 2 n - 1} \sec^2 \theta \rd \theta\)





$\sec^2 \theta = 1 + \tan^2 \theta$














\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \paren {\tan \theta}^{\frac 2 n - 1} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \paren {\frac {\sin \theta} {\cos \theta} }^{\frac 2 n - 1} \rd \theta\)





Definition of Tangent Function














\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \paren {\sin \theta}^{\frac 2 n - 1} \paren {\cos \theta}^{1 - \frac 2 n} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 2 n \int_0^{\pi / 2} \paren {\sin \theta}^{2 \paren {\frac 1 n} - 1} \paren {\cos \theta}^{2 \paren {1 - \frac 1 n} -1 } \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \map \Beta {\frac 1 n, 1 - \frac 1 n}\)





Definition 2 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \frac {\map \Gamma {\frac 1 n} \map \Gamma {1 - \frac 1 n} } {\map \Gamma {1 - \frac 1 n + \frac 1 n} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \dfrac \pi {\map \sin {\frac \pi n} }\)





Euler's Reflection Formula and $\map \Gamma 1 = 1$














\(\ds \)

\(=\)







\(\ds \frac \pi n \map \csc {\frac \pi n}\)





Definition of Cosecant



$\blacksquare$


Proof 4
Let:














\(\ds x\)

\(=\)







\(\ds \paren {\frac t {1 - t} }^{\frac 1 n}\)





Integration by Substitution








\(\ds \leadsto \ \ \)





\(\ds \rd x\)

\(=\)







\(\ds \frac 1 n \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t}^2} \rd t\)





Derivative of Power, Chain Rule for Derivatives




We also have:














\(\ds \lim_{t \mathop \to 0} \paren {\frac t {1 - t} }^{\frac 1 n}\)

\(\to\)







\(\ds 0\)




















\(\ds \lim_{t \mathop \to 1} \paren {\frac t {1 - t} }^{\frac 1 n}\)

\(\to\)







\(\ds \infty\)









Then:














\(\ds \int_0^\infty \frac 1 {1 + x^n} \rd x\)

\(=\)







\(\ds \int_0^1 \frac 1 {1 + \paren {\paren {\frac t {1 - t} }^{\frac 1 n} }^n } \cdot \frac 1 n \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t}^2} \rd t\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 n \int_0^1 \frac 1 {1 + \frac t {1 - t} } \cdot \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t}^2} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \int_0^1 \frac 1 {\frac {1 - t} {1 - t} + \frac t {1 - t} } \cdot \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t}^2} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \int_0^1 \paren {1 - t} \cdot \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t}^2} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \int_0^1 \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \int_0^1 t^{\frac 1 n - 1} \paren {1 - t}^{\paren {1 - \frac 1 n} - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \map \Beta {\frac 1 n, 1 - \frac 1 n}\)





Definition 1 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \frac {\map \Gamma {\frac 1 n} \map \Gamma {1 - \frac 1 n} } {\map \Gamma {1 - \frac 1 n + \frac 1 n} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \dfrac \pi {\map \sin {\frac \pi n} }\)





Euler's Reflection Formula and $\map \Gamma 1 = 1$














\(\ds \)

\(=\)







\(\ds \frac \pi n \map \csc {\frac \pi n}\)





Definition of Cosecant



$\blacksquare$





