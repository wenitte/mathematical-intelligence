# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Cosecant_of_x_over_a_over_x



Theorem













\(\ds \int \dfrac 1 x \arcsch \dfrac x a \rd x\)

\(=\)







\(\ds \begin {cases}
\ds \frac 1 2 \map \ln {\dfrac x a} \map \ln {\dfrac {4 a} x} - \sum_{n \mathop \ge 0} \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C & : 0 < x < a \\
\ds \frac 1 2 \map \ln {\dfrac {-x} a} \map \ln {\dfrac {-x} {4 a} } + \sum_{n \mathop \ge 0} \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C & : -a < x < 0 \\
\ds \sum_{n \mathop \ge 0} \frac {\paren {-1}^{n + 1} \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1}^2} \paren {\frac a x}^{2 n + 1} + C & : \size x > a \\
\end {cases}\)





















\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \begin {cases}
\dfrac 1 2 \map \ln {\dfrac x a} \map \ln {\dfrac {4 a} x} + \dfrac 1 {2 \times 2^2} \paren {\dfrac x a}^2 - \dfrac {1 \times 3} {2 \times 4 \times 4^2} \paren {\dfrac x a}^4 + \dotsb + C & : 0 < x < a \\
\dfrac 1 2 \map \ln {\dfrac {-x} a} \map \ln {\dfrac {-x} {4 a} } - \dfrac 1 {2 \times 2^2} \paren {\dfrac x a}^2 + \dfrac {1 \times 3} {2 \times 4 \times 4^2} \paren {\dfrac x a}^4 - \dotsb + C & : -a < x < 0 \\
-\dfrac a x + \dfrac 1 {2 \times 3^2} \paren {\dfrac a x}^3 - \dfrac {1 \times 3} {2 \times 4 \times 5^2} \paren {\dfrac a x}^5 + \dotsb + C & : \size x > a \\
\end {cases}\)












Proof
For $\size x < a$:














\(\ds \arcsch \dfrac x a\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac a x}^{2 n + 1}\)





Power Series Expansion for Real Area Hyperbolic Cosecant








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \arcsch \dfrac x a\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } a^{2 n + 1} \frac 1 {x^{2 n + 2} }\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 x \arcsch \dfrac x a \rd x\)

\(=\)







\(\ds \int \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } a^{2 n + 1} \frac 1 {x^{2 n + 2} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\int \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } a^{2 n + 1} \frac 1 {x^{2 n + 2} } \rd x}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \frac {a^{2 n + 1} } {\paren {-\paren {2 n + 1} } } \frac 1 {x^{2 n + 1} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^{n + 1} \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1}^2} \paren {\frac a x}^{2 n + 1} + C\)





rearranging



$\Box$

For $0 < x < a$:














\(\ds \arcsch \dfrac x a\)

\(=\)







\(\ds \ln \dfrac {2 a} x - \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \paren {\frac x a}^{2 n} }\)





Power Series Expansion for Real Area Hyperbolic Cosecant








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \arcsch \dfrac x a\)

\(=\)







\(\ds \dfrac 1 x \ln \frac {2 a} x - \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \frac 1 {a^{2 n} } x^{2 n - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 x \arcsch \dfrac x a \rd x\)

\(=\)







\(\ds \int \paren {\dfrac 1 x \ln \frac {2 a} x - \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \frac 1 {a^{2 n} } x^{2 n - 1} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac 1 x \ln \frac x {2 a} \rd x - \paren {\sum_{n \mathop = 0}^\infty \int \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \frac 1 {a^{2 n} } x^{2 n - 1} \rd x}\)





Fubini's Theorem and Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\ln^2} {\dfrac x {2 a} } - \paren {\sum_{n \mathop = 0}^\infty \int \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \frac 1 {a^{2 n} } x^{2 n - 1} \rd x} + C\)





Primitive of $\dfrac {\ln x} x$: Corollary














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\ln^2} {\dfrac x {2 a} } - \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 n \paren {2 n} } \frac 1 {a^{2 n} } \dfrac {x^{2 n} } {2 n} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\ln^2} {\dfrac x {2 a} } - \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} + \map {\ln^2} 2 - \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)





Lemma














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} - \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)





subsuming $\map {\ln^2} 2$ into the constant of integration



$\Box$

For $-a < x < 0$:














\(\ds \arcsch \dfrac x a\)

\(=\)







\(\ds -\ln \dfrac {-2 a} x + \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \paren {\frac x a}^{2 n} }\)





Power Series Expansion for Real Area Hyperbolic Cosecant








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \arcsch \dfrac x a\)

\(=\)







\(\ds -\frac 1 x \ln \frac {-2 x} a + \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \frac 1 {a^{2 n} } x^{2 n - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 x \arcsch \dfrac x a \rd x\)

\(=\)







\(\ds \int \frac 1 x \ln \frac {-x} {2 a} \rd x + \paren {\sum_{n \mathop = 0}^\infty \int \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \frac 1 {a^{2 n} } x^{2 n - 1} \rd x}\)





Fubini's Theorem, as above














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \map {\ln^2} {\dfrac {-x} {2 a} } + \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)





from above














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \map \ln {\dfrac {-a} x} \map \ln {\dfrac {-4 a} x} + \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)





from above



$\blacksquare$


Also see
Primitive of $\dfrac 1 x \arsinh \dfrac x a$
Primitive of $\dfrac 1 x \arcosh \dfrac x a$
Primitive of $\dfrac 1 x \artanh \dfrac x a$
Primitive of $\dfrac 1 x \arcoth \dfrac x a$
Primitive of $\dfrac 1 x \arsech \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.671$




