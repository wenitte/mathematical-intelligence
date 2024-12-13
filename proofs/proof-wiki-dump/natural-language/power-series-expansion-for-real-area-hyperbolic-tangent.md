# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Real_Area_Hyperbolic_Tangent



Theorem
The (real) area hyperbolic tangent function has a Taylor series expansion:














\(\ds \artanh x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^{2 n + 1} } {2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds x + \frac {x^3} 3 + \frac {x^5} 5 + \frac {x^7} 7 + \cdots\)









for $\size x < 1$.


Proof
From Sum of Infinite Geometric Sequence:

$(1): \quad \ds \frac 1 {1 - x^2} = \sum_{n \mathop = 0}^\infty \paren {x^2}^n$
for $-1 < x < 1$.
From Power Series is Termwise Integrable within Radius of Convergence, $(1)$ can be integrated term by term:














\(\ds \int_0^x \frac 1 {1 - t^2} \rd t\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \int_0^x \paren {t^2}^n \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \artanh x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^{2 n + 1} } {2 n + 1}\)





Primitive of Reciprocal of $\dfrac 1 {1 - t^2}$, Integral of Power



For $-1 < x < 1$, the sequence $\sequence {\dfrac {x^{2 n + 1} } {2 n + 1} }$ is decreasing and converges to zero.
Hence the result.
$\blacksquare$


Also see
Power Series Expansion for Real Area Hyperbolic Sine
Power Series Expansion for Real Area Hyperbolic Cosine
Power Series Expansion for Real Area Hyperbolic Cotangent
Power Series Expansion for Real Area Hyperbolic Secant
Power Series Expansion for Real Area Hyperbolic Cosecant


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Hyperbolic Functions: $20.41$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions




