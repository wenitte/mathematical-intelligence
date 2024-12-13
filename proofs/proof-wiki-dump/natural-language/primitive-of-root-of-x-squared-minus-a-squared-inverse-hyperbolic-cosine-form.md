# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_x_squared_minus_a_squared/Inverse_Hyperbolic_Cosine_Form

Theorem
$\ds \int \sqrt {x^2 - a^2} \rd x = \frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \cosh^{-1} \frac x a + C$


Proof
Let:














\(\ds x\)

\(=\)







\(\ds a \cosh \theta\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds a \sinh \theta\)





Derivative of Hyperbolic Cosine




Also:














\(\ds x\)

\(=\)







\(\ds a \cosh \theta\)














\(\ds \leadsto \ \ \)





\(\ds x^2 - a^2\)

\(=\)







\(\ds a^2 \cosh^2 \theta - a^2\)




















\(\ds \)

\(=\)







\(\ds a^2 \paren {\cosh^2 \theta - 1}\)




















\(\ds \)

\(=\)







\(\ds a^2 \sinh^2 \theta\)





Difference of Squares of Hyperbolic Cosine and Sine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sqrt {x^2 - a^2}\)

\(=\)







\(\ds a \sinh \theta\)










and:














\(\ds x\)

\(=\)







\(\ds a \cosh \theta\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \cosh^{-1} \frac x a\)





Definition 1 of Real Inverse Hyperbolic Cosine




Thus:














\(\ds \int \sqrt {x^2 - a^2} \rd x\)

\(=\)







\(\ds \int \sqrt {x^2 - a^2} \, a \sinh \theta \rd \theta\)





Integration by Substitution from $(1)$














\(\ds \)

\(=\)







\(\ds \int a^2 \sinh^2 \theta \rd \theta\)





substituting for $\sqrt {x^2 - a^2}$ from $(2)$














\(\ds \)

\(=\)







\(\ds a^2 \int \sinh^2 \theta \rd \theta\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a^2 \frac {\sinh \theta \cosh \theta - \theta} 2 + C\)





Primitive of $\sinh^2 \theta$: Corollary














\(\ds \)

\(=\)







\(\ds \frac 1 2 a \sinh \theta a \cosh \theta - \frac {a^2 \theta} 2 + C\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac 1 2 x a \sinh \theta - \frac {a^2 \theta} 2 + C\)





substituting $x = a \cosh \theta$














\(\ds \)

\(=\)







\(\ds \frac 1 2 x \sqrt {x^2 - a^2} - \frac {a^2 \theta} 2 + C\)





substituting $\sqrt {x^2 - a^2} = a \sinh \theta$ from $(2)$














\(\ds \)

\(=\)







\(\ds \frac {x \sqrt {x^2 - a^2} } 2 - \frac {a^2} 2 \cosh^{-1} \frac x a + C\)





substituting for $\theta$ from $(3)$



$\blacksquare$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $37$.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




