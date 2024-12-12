# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-a_x_minus_Exponential_of_-b_x_over_x

Theorem
$\ds \int_0^\infty \frac {e^{-a x} - e^{-b x} } x \rd x = \ln \frac b a$
where $a$ and $b$ are strictly positive real numbers.


Proof
Note that the integrand is of the form: 

$\ds \int_0^\infty \frac {\map f {a x} - \map f {b x} } x \rd x$
where:

$\map f x = e^{-x}$
We have, by Derivative of Exponential Function:

$\map {f'} x = -e^{-x}$
which is continuous on $\R$.
We also have, by Exponential Tends to Zero and Infinity: 

$\ds \lim_{x \mathop \to \infty} \map f x = \lim_{x \mathop \to \infty} e^{-x} = 0$
As $f$ is continuously differentiable, and $\ds \lim_{x \mathop \to \infty} \map f x$ exists and is finite, we may apply Frullani's Integral, giving: 














\(\ds \int_0^\infty \frac {e^{-a x} - e^{-b x} } x \rd x\)

\(=\)







\(\ds \paren {\lim_{x \mathop \to \infty} e^{-x} - e^0} \ln \frac a b\)




















\(\ds \)

\(=\)







\(\ds -\ln \frac a b\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds \ln \frac b a\)





Logarithm of Reciprocal



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.71$




