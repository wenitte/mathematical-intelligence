# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Fresnel_Cosine_Integral_Function

Theorem
$\ds \map {\operatorname C} x = \sqrt {\frac 2 \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{4 n + 1} } {\paren {4 n + 1} \paren {2 n}!}$
where $\operatorname C$ denotes the Fresnel cosine integral function.


Proof













\(\ds \map {\operatorname C} x\)

\(=\)







\(\ds \sqrt {\frac 2 \pi} \int_0^x \cos u^2 \rd u\)





Definition of Fresnel Cosine Integral Function














\(\ds \)

\(=\)







\(\ds \sqrt {\frac 2 \pi} \int_0^x \paren {\sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\paren {u^2}^{2 n} } {\paren {2 n}!} } \rd u\)





Power Series Expansion for Cosine Function














\(\ds \)

\(=\)







\(\ds \sqrt {\frac 2 \pi} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {2 n}!} \int_0^x u^{4 n} \rd u\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \sqrt {\frac 2 \pi} \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{4 n + 1} } {\paren {4 n + 1} \paren {2 n}!}\)





Primitive of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Fresnel Cosine Integral $\ds \map {\operatorname C} x = \sqrt {\frac 2 \pi} \int_0^x \cos u^2 \rd u$: $35.21$




