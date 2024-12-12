# 

Source: https://proofwiki.org/wiki/Convergent_Complex_Series/Examples/1_over_n%5E2_-_i_n

Example of Convergent Complex Series
The series $\ds \sum_{n \mathop = 1}^\infty a_n$, where:

$a_n = \dfrac 1 {n^2 - i n}$
is convergent.


Proof













\(\ds \sum_{n \mathop = 1}^\infty \cmod {\dfrac 1 {n^2 - i n} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \cmod {\dfrac {n^2 + i n} {\paren {n^2 - i n} \paren {n^2 + i n} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \cmod {\dfrac {n^2 + i n} {n^4 + n^2} }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \cmod {\dfrac {n^2 + i n} {n^4} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \cmod {\dfrac {n + i} {n^3} }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 1}^\infty \dfrac 2 {n^2}\)









Thus $\ds \sum_{n \mathop = 1}^\infty \dfrac 1 {n^2 - i n}$ is absolutely convergent.
The result follows from Absolutely Convergent Series is Convergent: Complex Numbers.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4$. Elementary Functions of a Complex Variable: Exercise $2 \ \text {(i)}$




