# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_x_to_the_x

Theorem













\(\ds \int_0^1 x^x \rd x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {n^n}\)




















\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \paren {-n}^{-n}\)




















\(\ds \)

\(=\)







\(\ds 0.78343 \ 05107 \ 12 \ldots\)











Proof
We can write: 














\(\ds x^x\)

\(=\)







\(\ds \map \exp {x \ln x}\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n \paren {\ln x}^n} {n!}\)





Definition of Exponential Function



So: 














\(\ds \int_0^1 x^x \rd x\)

\(=\)







\(\ds \int_0^1 \paren {\sum_{n \mathop = 0}^\infty \frac {x^n \paren {\ln x}^n} {n!} }\rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} \paren {\int_0^1 x^n \paren {\ln x}^n \rd x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} \paren {\frac {\paren {-1}^n \map \Gamma {n + 1} } {\paren {n + 1}^{n + 1} } }\)





Definite Integral from $0$ to $1$ of $x^m \paren {\ln x}^n$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {n + 1}^{n + 1} }\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {n^n}\)





shifting the index and using $\paren {-1}^{n + 1} = \paren {-1}^2 \paren {-1}^{n - 1} = \paren {-1}^{n - 1}$














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \paren {-\frac 1 n}^n\)




















\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \paren {-n}^{-n}\)









Numerical computation of partial sums gives the decimal approximation.
$\blacksquare$





