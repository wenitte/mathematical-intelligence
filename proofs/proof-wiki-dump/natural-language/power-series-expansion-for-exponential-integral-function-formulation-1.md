# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Exponential_Integral_Function/Formulation_1

Theorem
Let $\Ei: \R_{>0} \to \R$ denote the exponential integral function:

$\map \Ei x = \ds \int_{t \mathop = x}^{t \mathop \to +\infty} \frac {e^{-t} } t \rd t$
Then:














\(\ds \map \Ei x\)

\(=\)







\(\ds -\gamma - \ln x + \sum_{n \mathop = 1}^\infty \paren {-1}^{n + 1} \frac {x^n} {n \times n!}\)




















\(\ds \)

\(=\)







\(\ds -\gamma - \ln x + \frac x {1 \times 1!} - \frac {x^2} {2 \times 2!} + \frac {x^3} {3 \times 3!} - \dots\)









where $\gamma$ denotes the Euler-Mascheroni constant.


Proof













\(\ds \map \Ei x\)

\(=\)







\(\ds -\gamma - \ln x + \int_0^x \frac {1 - e^{-u} } u \rd u\)





Characterization of Exponential Integral Function














\(\ds \)

\(=\)







\(\ds -\gamma - \ln x + \int_0^x \frac 1 u \paren {1 - \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {u^n} {n!} } \rd u\)





Definition of Real Exponential Function














\(\ds \)

\(=\)







\(\ds -\gamma - \ln x + \int_0^x \frac 1 u \paren {\sum_{n \mathop = 1}^\infty \paren {-1}^{n + 1} \frac {u^n} {n!} } \rd u\)




















\(\ds \)

\(=\)







\(\ds -\gamma - \ln x + \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {n!} \paren {\int_0^x u^{n - 1} \rd u}\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds -\gamma - \ln x + \sum_{n \mathop = 1}^\infty \paren {-1}^{n + 1} \frac {x^n} {n \times n!}\)





Primitive of Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Exponential Integral $\ds \map \Ei x = \int_x^\infty \frac {e^{-u} } u \rd u$: $35.8$




