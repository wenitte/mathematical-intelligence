# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Cosine_of_x_over_a_over_x



Theorem













\(\ds \int \dfrac 1 x \arcosh \dfrac x a \rd x\)

\(=\)







\(\ds \dfrac 1 2 \ln^2 \paren {\dfrac {2 x} a} + \sum_{n \mathop \ge 1} \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac a x}^{2 n} + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \ln^2 \paren {\dfrac {2 x} a} + \dfrac 1 {2 \times 2^2} \paren {\dfrac a x}^2 + \dfrac {1 \times 3} {2 \times 4 \times 4^2} \paren {\dfrac a x}^4 + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6^2} \paren {\dfrac a x}^6 + \dotsb + C\)









where $\arcosh$ denotes the real area hyperbolic cosine.


Corollary













\(\ds \int \dfrac 1 x \paren {-\cosh^{-1} \dfrac x a} \rd x\)

\(=\)







\(\ds -\dfrac 1 2 \ln^2 \paren {\dfrac {2 x} a} - \sum_{n \mathop \ge 1} \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac a x}^{2 n} + C\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 2 \ln^2 \paren {\dfrac {2 x} a} - \dfrac 1 {2 \times 2^2} \paren {\dfrac a x}^2 - \dfrac {1 \times 3} {2 \times 4 \times 4^2} \paren {\dfrac a x}^4 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6^2} \paren {\dfrac a x}^6 + \dotsb + C\)









where $-\cosh^{-1}$ denotes the negative branch of the real inverse hyperbolic cosine multifunction.


Proof
For $\arcosh \dfrac x a > 0$:














\(\ds \arcosh \dfrac x a\)

\(=\)







\(\ds \ln \frac {2 x} a - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } \paren {\frac a x}^{2 n} }\)





Power Series Expansion for Real Area Hyperbolic Cosine








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \arcosh \dfrac x a\)

\(=\)







\(\ds \dfrac 1 x \ln \frac {2 x} a - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } a^{2 n} \paren {\frac 1 x}^{2 n + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 x \arcosh \dfrac x a \rd x\)

\(=\)







\(\ds \int \paren {\dfrac 1 x \ln \frac {2 x} a - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } a^{2 n} \paren {\frac 1 x}^{2 n + 1} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac 1 x \ln \frac {2 x} a \rd x - \paren {\sum_{n \mathop = 1}^\infty \int \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } a^{2 n} \paren {\frac 1 x}^{2 n + 1} \rd x}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\ln^2} {\dfrac {2 x} a} - \paren {\sum_{n \mathop = 1}^\infty \int \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} } a^{2 n} \paren {\frac 1 x}^{2 n + 1} \rd x} + C\)





Primitive of $\dfrac {\ln x} x$: Corollary














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\ln^2} {\dfrac {2 x} a} - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 n \paren {-2 n} } a^{2 n} \paren {\dfrac 1 x}^{2 n} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\ln^2} {\dfrac {2 x} a} + \sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac a x}^{2 n} + C\)





rearranging



$\blacksquare$


Also see
Primitive of $\dfrac 1 x \arsinh \dfrac x a$
Primitive of $\dfrac 1 x \artanh \dfrac x a$
Primitive of $\dfrac 1 x \arcoth \dfrac x a$
Primitive of $\dfrac 1 x \arsech \dfrac x a$
Primitive of $\dfrac 1 x \arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.654$




