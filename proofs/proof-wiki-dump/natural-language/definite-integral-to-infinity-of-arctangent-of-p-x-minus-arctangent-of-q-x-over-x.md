# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Arctangent_of_p_x_minus_Arctangent_of_q_x_over_x

Theorem
$\ds \int_0^\infty \frac {\arctan p x - \arctan q x} x \rd x = \frac \pi 2 \ln \frac p q$
where $p$ and $q$ are strictly positive real numbers.


Proof
Note that the integrand is of the form: 

$\ds \int_0^\infty \frac {\map f {p x} - \map f {q x} } x \rd x$
where:

$\map f x = \arctan x$
We have, by Derivative of Arctangent Function:

$\map {f'} x = \dfrac 1 {1 + x^2}$
which is continuous on $\R$. 
By Limit to Infinity of Arctangent Function: 

$\ds \lim_{x \mathop \to \infty} \map f x =  \lim_{x \mathop \to \infty} \arctan x = \frac \pi 2$
As $f$ is continuously differentiable and $\ds \lim_{x \mathop \to \infty} \map f x$ exists and is finite, we may apply Frullani's Integral, giving:














\(\ds \int_0^\infty \frac {\arctan p x - \arctan q x} x \rd x\)

\(=\)







\(\ds \paren {\lim_{x \mathop \to \infty} \arctan x - \arctan 0} \ln \frac p q\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 \ln \frac p q\)





Arctangent of Zero is Zero



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.67$




