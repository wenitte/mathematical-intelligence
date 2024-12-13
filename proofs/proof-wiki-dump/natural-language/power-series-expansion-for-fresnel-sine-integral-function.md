# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Fresnel_Sine_Integral_Function

Theorem
$\ds \map {\operatorname S} x = \sqrt {\frac 2 \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{4 n + 3} } {\paren {4 n + 3} \paren {2 n + 1}!}$
where $\operatorname S$ denotes the Fresnel sine integral function.


Proof













\(\ds \map {\operatorname S} x\)

\(=\)







\(\ds \sqrt {\frac 2 \pi} \int_0^x \sin u^2 \rd u\)





Definition of Fresnel Sine Integral Function














\(\ds \)

\(=\)







\(\ds \sqrt {\frac 2 \pi} \int_0^x \paren {\sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\paren {u^2}^{2 n + 1} } {\paren {2 n + 1}!} } \rd u\)





Power Series Expansion for Sine Function














\(\ds \)

\(=\)







\(\ds \sqrt {\frac 2 \pi} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {2 n + 1}!} \int_0^x u^{4 n + 2} \rd u\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \sqrt {\frac 2 \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{4 n + 3} } {\paren {4 n + 3} \paren {2 n + 1}!}\)





Primitive of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Fresnel Sine Integral $\ds \map {\operatorname S} x = \sqrt {\frac 2 \pi} \int_0^x \sin u^2 \rd u$: $35.18$




