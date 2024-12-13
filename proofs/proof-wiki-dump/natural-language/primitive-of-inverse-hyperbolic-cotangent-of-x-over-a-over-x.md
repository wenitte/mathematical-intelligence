# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Cotangent_of_x_over_a_over_x



Theorem













\(\ds \int \dfrac 1 x \arcoth \dfrac x a \rd x\)

\(=\)







\(\ds -\sum_{k \mathop \ge 0} \frac 1 {\paren {2 k + 1}^2} \paren {\frac a x}^{2 k + 1} + C\)




















\(\ds \)

\(=\)







\(\ds -\paren {\frac a x + \frac {\paren {a / x}^3} {3^2} + \frac {\paren {a / x}^5} {5^2} + \frac {\paren {a / x}^7} {7^2} + \cdots} + C\)











Proof













\(\ds \arcoth \dfrac x a\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {2 n + 1} \paren {\frac a x}^{2 n + 1}\)





Power Series Expansion for Real Area Hyperbolic Cotangent








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x \arcoth \dfrac x a\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {2 n + 1} a^{2 n + 1} \frac 1 {x^{2 n + 2} }\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac 1 x \arcoth \dfrac x a \rd x\)

\(=\)







\(\ds \int \paren {\sum_{n \mathop = 0}^\infty \frac 1 {2 n + 1} a^{2 n + 1} \frac 1 {x^{2 n + 2} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \int \paren {\frac 1 {2 n + 1} a^{2 n + 1} \frac 1 {x^{2 n + 2} } \rd x}\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {2 n + 1} a^{2 n + 1} \frac {-1} {2 n + 1}\frac 1 {x^{2 n + 1} } + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\sum_{k \mathop \ge 0} \frac 1 {\paren {2 k + 1}^2} \paren {\frac a x}^{2 k + 1} + C\)





rearranging



$\blacksquare$


Also see
Primitive of $\dfrac 1 x \arsinh \dfrac x a$
Primitive of $\dfrac 1 x \arcosh \dfrac x a$
Primitive of $\dfrac 1 x \artanh \dfrac x a$
Primitive of $\dfrac 1 x \arsech \dfrac x a$
Primitive of $\dfrac 1 x \arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.664$




