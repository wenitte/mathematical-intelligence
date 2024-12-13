# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_squared_minus_square_of_q_by_Cosine_of_a_x



Theorem
$\ds \int \frac {\rd x} {p^2 - q^2 \cos^2 a x} = \begin {cases}
\dfrac 1 {a p \sqrt {p^2 - q^2} } \arctan \dfrac {p \tan a x} {\sqrt {p^2 - q^2} } & : p^2 > q^2 \\
\dfrac 1 {2 a p \sqrt {q^2 - p^2} } \ln \size {\dfrac {p \tan a x - \sqrt {q^2 - p^2} } {p \tan a x + \sqrt {q^2 - p^2} } } & : p^2 < q^2
\end {cases}$


Proof













\(\ds \int \frac {\d x} {p^2 - q^2 \cos^2 a x}\)

\(=\)







\(\ds \int \frac {\csc^2 a x \rd x} {p^2 \csc^2 a x - q^2 \cot^2 a x}\)





multiplying numerator and denominator by $\csc^2 a x$














\(\ds \)

\(=\)







\(\ds \int \frac {\csc^2 a x \rd x} {p^2 \paren {1 + \cot^2 a x} - q^2 \cot^2 a x}\)





Difference of Squares of Cosecant and Cotangent














\(\ds \)

\(=\)







\(\ds \int \frac {\csc^2 a x \rd x} {p^2 + \paren {p^2 - q^2} \cot^2 a x}\)





simplifying



Let:














\(\ds t\)

\(=\)







\(\ds \cot a x\)














\(\ds \leadsto \ \ \)





\(\ds \d t\)

\(=\)







\(\ds -a \csc^2 a x \rd x\)





Derivative of Cotangent Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {p^2 - q^2 \cos^2 a x}\)

\(=\)







\(\ds \frac 1 a \int \frac {-\d t} {p^2 + \paren {p^2 - q^2} t^2}\)





Integration by Substitution: substituting $t = \cot a x$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {-1} {a \paren {p^2 - q^2} } \int \frac {\rd t} {t^2 + \tfrac {p^2} {p^2 - q^2} }\)










There are two cases to address.

First, suppose $p^2 > q^2$.
Then we have that $p^2 - q^2 > 0$, and so:














\(\ds \int \frac {\d x} {p^2 - q^2 \cos^2 a x}\)

\(=\)







\(\ds \frac {-1} {a \paren {p^2 - q^2} } \int \frac {\rd t} {t^2 + \paren {\tfrac p {\sqrt {p^2 - q^2} } }^2}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a \paren {p^2 - q^2} } \frac {\sqrt {p^2 - q^2} } p \map \arctan {\frac {\sqrt {p^2 - q^2} } p t} + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a p \sqrt {p^2 - q^2} } \map \arctan {\frac {\sqrt {p^2 - q^2} } p t} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {a p \sqrt {p^2 - q^2} } \map \arctan {\frac {\sqrt {p^2 - q^2} } p \cot a x} + C\)





substituting $t = \cot a x$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a p \sqrt {p^2 - q^2} } \map \arctan {\frac {\sqrt {p^2 - q^2} } {p \tan a x} } + C\)





Definition of Real Cotangent Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \sqrt {p^2 - q^2} } \map \arccot {\frac {p \tan a x} {\sqrt {p^2 - q^2} } } + C\)





Arctangent of Reciprocal equals Arccotangent














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \sqrt {p^2 - q^2} } \paren {\map \arctan {\frac {p \tan a x} {\sqrt {p^2 - q^2} } } - \dfrac \pi 2} + C\)





Sum of Arctangent and Arccotangent














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \sqrt {p^2 - q^2} } \map \arctan {\frac {p \tan a x} {\sqrt {p^2 - q^2} } } + C\)





subsuming $\dfrac \pi 2$ into constant




Now suppose $p^2 < q^2$.
Then we have that $p^2 - q^2 < 0$, and so:















\(\ds \int \frac {\d x} {p^2 - q^2 \cos^2 a x}\)

\(=\)







\(\ds \frac {-1} {a \paren {p^2 - q^2} } \int \frac {\rd t} {t^2 + \tfrac {p^2} {p^2 - q^2} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a \paren {p^2 - q^2} } \int \frac {\rd t} {t^2 - \tfrac {p^2} {q^2 - p^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {a \paren {p^2 - q^2} } \int \frac {\rd t} {t^2 - \paren {\tfrac p {\sqrt {q^2 - p^2} } }^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a \paren {q^2 - p^2} } \frac {\sqrt {q^2 - p^2} } {2 p} \ln \size {\frac {t - \tfrac p {\sqrt {q^2 - p^2} } } {t + \tfrac p {\sqrt {q^2 - p^2} } } } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {q^2 - p^2} } \ln \size {\frac {\cot a x - \tfrac p {\sqrt {q^2 - p^2} } } {\cot a x + \tfrac p {\sqrt {q^2 - p^2} } } } + C\)





substituting $t = \cot a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {q^2 - p^2} } \ln \size {\frac {\tfrac 1 {\tan a x} - \tfrac p {\sqrt {q^2 - p^2} } } {\tfrac 1 {\tan a x} + \tfrac p {\sqrt {q^2 - p^2} } } } + C\)





Definition of Real Cotangent Function














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {q^2 - p^2} } \ln \size {\frac {\sqrt {q^2 - p^2} - p \tan a x} {\sqrt {q^2 - p^2} + p \tan a x} } + C\)





multiplying top and bottom of argument of $\ln$ by $\sqrt {q^2 - p^2} \tan a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {q^2 - p^2} } \ln \size {\frac {p \tan a x - \sqrt {q^2 - p^2} } {p \tan a x + \sqrt {q^2 - p^2} } } + C\)





as $\size {a - b} = \size {b - a}$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p^2 - q^2 \sin^2 a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.393$




