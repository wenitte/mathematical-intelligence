# 

Source: https://proofwiki.org/wiki/Characterization_of_Exponential_Integral_Function/Formulation_1

Theorem
Let $\Ei: \R_{>0} \to \R$ denote the exponential integral function:

$\map \Ei x = \ds \int_{t \mathop = x}^{t \mathop \to +\infty} \frac {e^{-t} } t \rd t$
Then:

$\ds \map \Ei x = -\gamma - \ln x + \int_0^x \frac {1 - e^{-u} } u \rd u$
where $\gamma$ denotes the Euler-Mascheroni constant.


Proof
We have, by Derivative of $e^{a x}$: 

$\map {\dfrac \d {\d u} } {1 - e^{-u} } = e^{-u}$
By Primitive of Reciprocal:

$\ds \int \frac {\d u} u = \ln u + C$
So: 














\(\ds \int_0^x \frac {1 - e^{-u} } u \rd u\)

\(=\)







\(\ds \bigintlimits {\paren {1 - e^{-u} } \ln u} 0 x - \int_0^x e^{-u} \ln u \rd u\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \paren {1 - e^{-x} } \ln x - \lim_{x \mathop \to 0^+} \paren {1 - e^{-x} } \ln x - \paren {\int_0^\infty e^{-u} \ln u \rd u - \int_x^\infty e^{-u} \ln u \rd u}\)





Sum of Integrals on Adjacent Intervals for Integrable Functions



We have: 














\(\ds \lim_{x \mathop \to 0^+} \paren {1 - e^{-x} } \ln x\)

\(=\)







\(\ds \paren {\lim_{x \mathop \to 0^+} \frac {1 - e^{-x} - \paren {1 - e^0} } x} \paren {\lim_{x \mathop \to 0^+} x \ln x}\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \valueat {\map {\frac \d {\d x} } {1 - e^{-x} } } {x \mathop = 0} \paren {\lim_{x \mathop \to 0^+} x \ln x}\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds e^0 \times 0\)





Derivative of $e^{a x}$, Limit of $x^m \paren {\ln x}^n$














\(\ds \)

\(=\)







\(\ds 0\)









Also applying Definite Integral to Infinity of $e^{-x} \ln x$ gives:

$\ds \int_0^x \frac {1 - e^{-u} } u \rd u = \paren {1 - e^{-x} } \ln x + \gamma + \int_x^\infty e^{-u} \ln u \rd u$
We have, by Primitive of $e^{a x}$:

$\ds \int e^{-u} \rd u = -e^{-u} + C$
We have by Derivative of Logarithm Function:

$\dfrac \d {\d u} \paren {\ln u} = \dfrac 1 u$
We therefore have: 














\(\ds \paren {1 - e^{-x} } \ln x + \gamma + \int_x^\infty e^{-u} \ln u \rd u\)

\(=\)







\(\ds \paren {1 - e^{-x} } \ln x + \gamma + \paren {\bigintlimits {-e^{-u} \ln u} x \infty + \int_x^\infty \frac {e^{-u} } u \rd u}\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \paren {1 - e^{-x} } \ln x + \gamma - \lim_{u \mathop \to \infty} \paren {e^{-u} \ln u} + e^{-x} \ln x + \map \Ei x\)





Definition of Exponential Integral Function














\(\ds \)

\(=\)







\(\ds \ln x + \gamma + \map \Ei x - \lim_{u \mathop \to \infty} \paren {e^{-u} \ln u}\)









It remains to evaluate the limit on the right hand side. 
We have, for $u > 1$:

$e^{-u} \ln u > 0$
and by Bounds of Natural Logarithm: 

$e^{-u} \ln u < u e^{-u} - e^{-u}$
We have, from Limit to Infinity of $x^n e^{-a x}$: 

$\ds \lim_{u \mathop \to \infty} \paren {u e^{-u} - e^{-u} } = 0$
So, by the Squeeze Theorem: 

$\ds \lim_{u \mathop \to \infty} \paren {e^{-u} \ln u} = 0$
So: 

$\ds \int_0^x \frac {1 - e^{-u} } u \rd u = \ln x + \gamma + \map \Ei x$
Rearranging gives: 

$\ds \map \Ei x = -\gamma - \ln x + \int_0^x \frac {1 - e^{-u} } u \rd u$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Exponential Integral $\ds \map \Ei x = \int_x^\infty \frac {e^{-u} } u \rd u$: $35.7$




