# 

Source: https://proofwiki.org/wiki/Log_of_Gamma_Function_is_Convex_on_Positive_Reals/Proof_3

Theorem
Let $\Gamma: \R_{>0} \to \R$ be the Gamma function, restricted to the strictly positive real numbers.
Let $\ln$ denote the natural logarithm function.

Then the composite mapping $\ln \circ \operatorname \Gamma$ is a convex function.


Proof
The strategy is to use the Euler Form of the Gamma function and directly calculate the second derivative of $\ln \map \Gamma z$.















\(\ds \map \Gamma z\)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {m^z m!} {z \paren {z + 1} \paren {z + 2} \dotsm \paren {z + m} }\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^2 \ln \map \Gamma z} {\d z^2}\)

\(=\)







\(\ds \dfrac {\d^2} {\d z^2} \map \ln {\lim_{m \mathop \to \infty} \frac {m^z m!} {z \paren {z + 1} \paren {z + 2} \dotsm \paren {z + m} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \dfrac {\d^2} {\d z^2} \map \ln {\frac {m^z m!} {z \paren {z + 1} \paren {z + 2} \dotsm \paren {z + m} } }\)










The limit interchange is justified because Gamma Function is Smooth on Positive Reals.















\(\ds \lim_{m \mathop \to \infty} \dfrac {\d^2} {\d z^2} \paren {z \map \ln m + \map \ln {m!} - \sum_{n \mathop = 0}^m \map \ln {z + n} }\)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \sum_{n \mathop = 0}^m \dfrac 1 {\paren {z + n}^2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^2 \ln \map \Gamma z} {\d z^2}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac 1 {\paren {z + n}^2} > 0\)










Logarithmic convexity then follows from Real Function with Strictly Positive Second Derivative is Strictly Convex.
$\blacksquare$





