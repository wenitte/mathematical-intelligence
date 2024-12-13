# 

Source: https://proofwiki.org/wiki/Primitive_of_Secant_of_a_x_over_x



Theorem
$\ds \int \frac {\sec a x} x \rd x = \ln \size x + \frac {\paren {a x}^2} 4 + \frac {5 \paren {a x}^4} {96} + \frac {61 \paren {a x}^6} {4320} + \cdots + \frac {\paren {-1}^n E_n \paren {a x}^{2 n} } {\paren {2 n} \paren {2 n}!} + \cdots + C$
where $E_n$ is the $n$th Euler number.


Proof













\(\ds \int \frac {\sec a x} x \rd x\)

\(=\)







\(\ds \int \frac 1 x \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n E_{2 n} \paren {a x}^{2 n} } {\paren {2 n}!} \rd x\)





Power Series Expansion for Secant Function














\(\ds \)

\(=\)







\(\ds \int \frac {E_0} x \rd x + \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n E_{2 n} a^{2 n} } {\paren {2 n}!} \int  x^{2 n - 1} \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \int \frac 1 x \rd x + \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n E_{2 n} a^{2 n} } {\paren {2 n}!} \paren {\frac {x^{2 n} } {2 n} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \ln \size x + \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n E_{2 n} \paren {a x}^{2 n} } {\paren {2 n} \paren {2 n}!} + C\)





Primitive of Reciprocal



$\blacksquare$


Also see
Primitive of $\dfrac {\sin a x} x$
Primitive of $\dfrac {\cos a x} x$
Primitive of $\dfrac {\tan a x} x$
Primitive of $\dfrac {\cot a x} x$
Primitive of $\dfrac {\csc a x} x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sec a x$: $14.457$




