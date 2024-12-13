# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Secant_of_x_over_a_over_x



Theorem













\(\ds \int \dfrac 1 x \arsech \dfrac x a \rd x\)

\(=\)







\(\ds -\frac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} - \sum_{n \mathop \ge 1} \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} - \dfrac 1 {2 \times 2^2} \paren {\dfrac x a}^2 - \dfrac {1 \times 3} {2 \times 4 \times 4^2} \paren {\dfrac x a}^4 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6^2} \paren {\dfrac x a}^6 + C\)









where $\arsech$ denotes the real area hyperbolic secant.


Corollary













\(\ds \int \dfrac 1 x \paren {-\sech^{-1} \dfrac x a} \rd x\)

\(=\)







\(\ds \frac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} + \sum_{n \mathop \ge 1} \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} + \dfrac 1 {2 \times 2^2} \paren {\dfrac x a}^2 - \dfrac {1 \times 3} {2 \times 4 \times 4^2} \paren {\dfrac x a}^4 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6^2} \paren {\dfrac x a}^6 + C\)









where $-\sech^{-1}$ denotes the negative branch of the real inverse hyperbolic secant multifunction.


Proof













\(\ds \arsech \dfrac x a\)

\(=\)







\(\ds \ln \frac {2 a} x - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \paren {\frac x a}^{2 n} }\)





Power Series Expansion for Real Area Hyperbolic Secant








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \arsech \dfrac x a\)

\(=\)







\(\ds \dfrac 1 x \ln \frac {2 a} x - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \frac 1 {a^{2 n} } x^{2 n - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 x \arsech \dfrac x a \rd x\)

\(=\)







\(\ds \int \paren {\dfrac 1 x \ln \frac {2 a} x - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \frac 1 {a^{2 n} } x^{2 n - 1} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac 1 x \ln \frac x {2 a} \rd x - \paren {\sum_{n \mathop = 1}^\infty \int \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \frac 1 {a^{2 n} } x^{2 n - 1} \rd x}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \map {\ln^2} {\dfrac x {2 a} } - \paren {\sum_{n \mathop = 1}^\infty \int \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \frac 1 {a^{2 n} } x^{2 n - 1} \rd x} + C\)





Primitive of $\dfrac {\ln x} x$: Corollary














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \map {\ln^2} {\dfrac x {2 a} } - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 n \paren {2 n} } \frac 1 {a^{2 n} } \dfrac {x^{2 n} } {2 n} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} + \map {\ln^2} 2 - \sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)





rearranging














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} - \sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)





subsuming $\map {\ln^2} 2$ into the constant of integration



$\blacksquare$


Also see
Primitive of $\dfrac 1 x \arsinh \dfrac x a$
Primitive of $\dfrac 1 x \arcosh \dfrac x ax$
Primitive of $\dfrac 1 x \artanh \dfrac x a$
Primitive of $\dfrac 1 x \arcoth \dfrac x a$
Primitive of $\dfrac 1 x \arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.668$




