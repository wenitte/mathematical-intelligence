# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Sine_of_x_over_a_over_x



Theorem













\(\ds \int \dfrac 1 x \arsinh \dfrac x a \rd x\)

\(=\)







\(\ds \begin {cases}
\ds \sum_{n \mathop \ge 0} \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1}^2} \paren {\frac x a}^{2 n + 1} + C & : \size x < a \\
\ds \frac 1 2 \map {\ln^2} {\dfrac {2 x} a} + \sum_{n \mathop \ge 0} \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac a x}^{2 n} + C & : x > a \\
\ds -\frac 1 2 \map {\ln^2} {\dfrac {-2 x} a} + \sum_{n \mathop \ge 0} \frac {\paren {-1}^{n + 1} \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac a x}^{2 n} + C & : x < -a
\end {cases}\)





















\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \begin {cases}
\dfrac x a - \dfrac 1 {2 \times 3^2} \paren {\dfrac x a}^3 + \dfrac {1 \times 3} {2 \times 4 \times 5^2} \paren {\dfrac x a}^5 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 7^2} \paren {\dfrac x a}^7 \dotsb + C & : \size x < a \\
\ds \frac 1 2 \map {\ln^2} {\dfrac {2 x} a} - \dfrac 1 {2 \times 2^2} \paren {\dfrac a x}^2 + \dfrac {1 \times 3} {2 \times 4 \times 4^2} \paren {\dfrac a x}^4 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 5^2} \paren {\dfrac a x}^6 + \dotsb + C & : x > a \\
\ds -\frac 1 2 \map {\ln^2} {\dfrac {-2 x} a} + \dfrac 1 {2 \times 2^2} \paren {\dfrac a x}^2 - \dfrac {1 \times 3} {2 \times 4 \times 4^2} \paren {\dfrac a x}^4 + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 5^2} \paren {\dfrac a x}^6 - \dotsb + C & : x < -a
\end {cases}\)












Proof
For $\size x < a$:














\(\ds \arsinh \dfrac x a\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac x a}^{2 n + 1}\)





Power Series Expansion for Real Area Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \arsinh \dfrac x a\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac 1 a}^{2 n + 1} x^{2 n}\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 x \arsinh \dfrac x a \rd x\)

\(=\)







\(\ds \int \paren {\sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac 1 a}^{2 n + 1} x^{2 n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\int \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac 1 a}^{2 n + 1} x^{2 n} \rd x}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1} } \paren {\frac 1 a}^{2 n + 1} \frac {x^{2 n + 1} } {2 n + 1} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n + 1}^2} \paren {\frac x a}^{2 n + 1} + C\)





rearranging



$\Box$

For $x > a$:














\(\ds \arsinh \dfrac x a\)

\(=\)







\(\ds \ln \frac {2 x} a - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n + 1} \paren {n!}^2 n} \paren {\dfrac a x}^{2 n} }\)





Power Series Expansion for Real Area Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \arsinh \dfrac x a\)

\(=\)







\(\ds \frac 1 x \ln \frac {2 x} a - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n + 1} \paren {n!}^2 n} a^{2 n} \paren {\dfrac 1 x}^{2 n + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 x \arsinh \dfrac x a \rd x\)

\(=\)







\(\ds \int \paren {\frac 1 x \ln \frac {2 x} a - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n + 1} \paren {n!}^2 n} a^{2 n} \paren {\dfrac 1 x}^{2 n + 1} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac 1 x \ln \frac {2 x} a \rd x - \paren {\sum_{n \mathop = 1}^\infty \int \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n + 1} \paren {n!}^2 n} a^{2 n} \paren {\dfrac 1 x}^{2 n + 1} \rd x}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\ln^2} {\dfrac {2 x} a} - \paren {\sum_{n \mathop = 1}^\infty \int \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n + 1} \paren {n!}^2 n} a^{2 n} \paren {\dfrac 1 x}^{2 n + 1} \rd x} + C\)





Primitive of $\dfrac {\ln x} x$: Corollary














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\ln^2} {\dfrac {2 x} a} - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n + 1} \paren {n!}^2 n \paren {-2 n} } a^{2 n} \paren {\dfrac 1 x}^{2 n} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\ln^2} {\dfrac {2 x} a} + \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac a x}^{2 n}  + C\)





rearranging



$\Box$

For $x < a$:














\(\ds \arsinh \dfrac x a\)

\(=\)







\(\ds -\ln \paren {-2 x} + \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n + 1} \paren {n!}^2 n x^{2 n} } }\)





Power Series Expansion for Real Area Hyperbolic Sine








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \arsinh \dfrac x a\)

\(=\)







\(\ds -\frac 1 x \ln \frac {-2 x} a + \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n + 1} \paren {n!}^2 n} a^{2 n} \paren {\dfrac 1 x}^{2 n + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 x \arsinh \dfrac x a \rd x\)

\(=\)







\(\ds -\int \frac 1 x \ln \frac {2 x} a \rd x + \paren {\sum_{n \mathop = 1}^\infty \int \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n + 1} \paren {n!}^2 n} a^{2 n} \paren {\dfrac 1 x}^{2 n + 1} \rd x}\)





from above














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \map {\ln^2} {\dfrac {-2 x} a} - \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac a x}^{2 n} + C\)





from above














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \map {\ln^2} {\dfrac {-2 x} a} + \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^{n + 1} \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac a x}^{2 n} + C\)





from above



$\blacksquare$


Also see
Primitive of $\dfrac 1 x \arcosh \dfrac x a$
Primitive of $\dfrac 1 x \artanh \dfrac x a$
Primitive of $\dfrac 1 x \arcoth \dfrac x a$
Primitive of $\dfrac 1 x \arsech \dfrac x a$
Primitive of $\dfrac 1 x \arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.649$




