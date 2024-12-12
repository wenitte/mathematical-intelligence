# 

Source: https://proofwiki.org/wiki/Convergent_Complex_Series/Examples/((-1)%5En_%2B_i_cos_n_theta)_over_n%5E2

Example of Convergent Complex Series
The series $\ds \sum_{n \mathop = 1}^\infty a_n$, where:

$a_n = \dfrac {\paren {-1}^n + i \cos n \theta} {n^2}$
is convergent.


Proof 1













\(\ds \dfrac {\paren {-1}^n + i \cos n \theta} {n^2}\)

\(=\)







\(\ds \dfrac {\paren {-1}^n} {n^2} + i \dfrac {\cos n \theta} {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty a_n\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\dfrac {\paren {-1}^n} {n^2} } + i \sum_{n \mathop = 1}^\infty \paren {\dfrac {\cos n \theta} {n^2} }\)









Both of the terms on the right hand side are convergent real series.
Hence from Convergence of Series of Complex Numbers by Real and Imaginary Part, $\ds \sum_{n \mathop = 1}^\infty a_n$ is convergent.
$\blacksquare$


Proof 2













\(\ds \sum_{n \mathop = 1}^\infty \cmod {\dfrac {\paren {-1}^n + i \cos n \theta} {n^2} }\)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \dfrac {1 + \cmod {\cos n \theta} } {n^2}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\dfrac 2 {n^2} }\)









Thus $\ds \sum_{n \mathop = 1}^\infty \paren {\dfrac {\paren {-1}^n + i \cos n \theta} {n^2} }$ is absolutely convergent.
The result follows from Absolutely Convergent Series is Convergent: Complex Numbers.
$\blacksquare$





