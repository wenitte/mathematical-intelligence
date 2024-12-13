# 

Source: https://proofwiki.org/wiki/Limit_to_Infinity_of_Exponential_Integral_Function

Theorem
Let $\Ei: \R_{>0} \to \R$ denote the exponential integral function:

$\map \Ei x = \ds \int_{t \mathop = x}^{t \mathop \to +\infty} \frac {e^{-t} } t \rd t$
Then:

$\ds \lim_{x \mathop \to \infty} \map \Ei x = 0$


Proof













\(\ds \lim_{x \mathop \to \infty} \map \Ei x\)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \int_x^\infty \frac {e^{-u} } u \rd u\)





Definition of Exponential Integral Function














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \int_1^\infty \frac {e^{-x t} } {x t} x \rd t\)





substituting $u = x t$














\(\ds \)

\(=\)







\(\ds \int_1^\infty \lim_{x \mathop \to \infty} \paren {\frac {e^{-x t} } t} \rd t\)





Lebesgue's Dominated Convergence Theorem














\(\ds \)

\(=\)







\(\ds \int_1^\infty \frac 0 t \rd t\)





Exponential Tends to Zero and Infinity














\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Exponential Integral $\ds \map \Ei x = \int_x^\infty \frac {e^{-u} } u \rd u$: $35.10$




