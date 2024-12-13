# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Exponential_Integral_Function/Formulation_2

Theorem
Let $\Ei: \R_{>0} \to \R$ denote the exponential integral function:

$\map \Ei x = \ds \int_{t \mathop \to -\infty}^{t \mathop = x} \frac {e^t} t \rd t$
Then:














\(\ds \map \Ei x\)

\(=\)







\(\ds \gamma + \ln x + \sum_{n \mathop = 1}^\infty \frac {x^n} {n \times n!}\)




















\(\ds \)

\(=\)







\(\ds \gamma + \ln x + \frac x {1 \times 1!} + \frac {x^2} {2 \times 2!} + \frac {x^3} {3 \times 3!} + \dots\)









where $\gamma$ denotes the Euler-Mascheroni constant.


Proof













\(\ds \map \Ei x\)

\(=\)







\(\ds \gamma + \ln x + \int_0^x \frac {e^u - 1} u \rd u\)





Characterization of Exponential Integral Function














\(\ds \)

\(=\)







\(\ds \gamma + \ln x + \int_0^x \frac 1 u \paren {\sum_{n \mathop = 0}^\infty \frac {u^n} {n!} - 1} \rd u\)





Definition of Real Exponential Function














\(\ds \)

\(=\)







\(\ds \gamma + \ln x + \int_0^x \frac 1 u \paren {\sum_{n \mathop = 1}^\infty \frac {u^n} {n!} } \rd u\)




















\(\ds \)

\(=\)







\(\ds \gamma + \ln x + \sum_{n \mathop = 1}^\infty \frac 1 {n!} \paren {\int_0^x u^{n - 1} \rd u}\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \gamma + \ln x + \sum_{n \mathop = 1}^\infty \frac {x^n} {n \times n!}\)





Primitive of Power



$\blacksquare$


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): Introduction: $3$. Auxiliary Functions and Arguments




