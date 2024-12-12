# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_x_to_the_minus_x

Theorem













\(\ds \int_0^1 x^{-x} \rd x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty n^{-n}\)




















\(\ds \)

\(=\)







\(\ds 1.29128 \ 5997 \ldots\)









This sequence is A073009 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
We can write: 














\(\ds x^{-x}\)

\(=\)







\(\ds \map \exp {-x \ln x}\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-x}^n \paren {\ln x}^n} {n!}\)





Definition of Exponential Function



So: 














\(\ds \int_0^1 x^{-x} \rd x\)

\(=\)







\(\ds \int_0^1 \paren {\sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^n \paren {\ln x}^n} {n!} }\rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {n!} \paren {\int_0^1 x^n \paren {\ln x}^n \rd x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {n!} \paren {\frac {\paren {-1}^n \map \Gamma {n + 1} } {\paren {n + 1}^{n + 1} } }\)





Definite Integral from $0$ to $1$ of $x^m \paren {\ln x}^n$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {\paren {n + 1}^{n + 1} }\)





Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty n^{-n}\)





shifting the index



Numerical computation of partial sums gives the decimal approximation.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Miscellaneous Definite Integrals: $15.119$




