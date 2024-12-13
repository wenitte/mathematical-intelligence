# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Cosine_p_x_minus_Cosine_q_x_over_x

Theorem
$\ds \int_0^\infty \frac {\cos p x - \cos q x} x \rd x = \ln \frac q p$
where $p$ and $q$ are strictly positive real numbers.


Proof













\(\ds \int_0^\infty \frac {\cos p x - \cos q x} x \rd x\)

\(=\)







\(\ds \int_0^\infty \map {\laptrans {\cos p t - \cos q t} } x \rd x\)





Integral to Infinity of Function over Argument, assuming both integrals converge














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac x {x^2 + p^2} - \frac x {x^2 + q^2} \rd x\)





Laplace Transform of Cosine














\(\ds \)

\(=\)







\(\ds \intlimits {\frac {\map \ln {x^2 + p^2} - \map \ln {x^2 + q^2} } 2} 0 \infty\)





Primitive of $\dfrac x {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \frac 1 2 \map \ln {\frac {x^2 + p^2} {x^2 + q^2} } - \frac 1 2 \map \ln {\frac {0 + p^2} {0 + q^2} }\)





inserting limit values














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \frac 1 2 \map \ln {\frac {x^2 + p^2} {x^2 + q^2} } + \ln \frac q p\)





simplifying














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \frac 1 2 \map \ln {\frac {1 + \frac {p^2} {x^2} } {1 + \frac {q^2} {x^2} } } + \ln \frac q p\)





multiplying numerator and denominator by $\dfrac 1 {x^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {\frac {1 + p^2 \cdot 0^2} {1 + q^2 \cdot 0^2} } +  \ln \frac q p\)





Limit of $\dfrac 1 x$ at $\infty$














\(\ds \)

\(=\)







\(\ds \ln \frac q p\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.38$




