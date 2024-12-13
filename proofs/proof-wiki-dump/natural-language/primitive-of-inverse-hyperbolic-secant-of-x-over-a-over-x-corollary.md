# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Secant_of_x_over_a_over_x/Corollary

Theorem













\(\ds \int \dfrac 1 x \paren {-\sech^{-1} \dfrac x a} \rd x\)

\(=\)







\(\ds \frac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} + \sum_{n \mathop \ge 1} \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} + \dfrac 1 {2 \times 2^2} \paren {\dfrac x a}^2 - \dfrac {1 \times 3} {2 \times 4 \times 4^2} \paren {\dfrac x a}^4 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6^2} \paren {\dfrac x a}^6 + C\)









where $-\sech^{-1}$ denotes the negative branch of the real inverse hyperbolic secant multifunction.


Proof













\(\ds -\sech^{-1} \frac x a\)

\(=\)







\(\ds -\arsech \frac x a\)





Definition of Real Inverse Hyperbolic Secant








\(\ds \leadsto \ \ \)





\(\ds \int \dfrac 1 x \paren {-\sech^{-1} \dfrac x a} \rd x\)

\(=\)







\(\ds -\int \dfrac 1 x \arsech \dfrac x a \rd x\)




















\(\ds \)

\(=\)







\(\ds -\paren {-\frac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} - \sum_{n \mathop \ge 1} \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C}\)





Primitive of $\dfrac 1 x \arsech \dfrac x a$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\dfrac a x} \map \ln {\dfrac {4 a} x} + \sum_{n \mathop \ge 1} \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n}^2} \paren {\frac x a}^{2 n} + C\)





Definition of Real Inverse Hyperbolic Secant



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.668$




