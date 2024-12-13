# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Hyperbolic_Sine_Function



Theorem
The hyperbolic sine function has the power series expansion:














\(\ds \sinh x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds x + \frac {x^3} {3!} + \frac {x^5} {5!} + \frac {x^7} {7!} + \cdots\)









valid for all $x \in \R$.


Proof
From Derivative of Hyperbolic Sine:

$\dfrac \d {\d x} \sinh x = \cosh x$
From Derivative of Hyperbolic Cosine:

$\dfrac \d {\d x} \cosh x = \sinh x$

Hence:














\(\ds \dfrac {\d^2} {\d x^2} \sinh x\)

\(=\)







\(\ds \sinh x\)










and so for all $m \in \N$:








\(\ds m = 2 k: \ \ \)





\(\ds \dfrac {\d^m} {\d x^m} \sinh x\)

\(=\)







\(\ds \sinh x\)














\(\ds m = 2 k + 1: \ \ \)





\(\ds \dfrac {\d^m} {\d x^m} \sinh x\)

\(=\)







\(\ds \cosh x\)









where $k \in \Z$.

This leads to the Maclaurin series expansion:














\(\ds \sinh x\)

\(=\)







\(\ds \sum_{r \mathop = 0}^\infty \paren {\frac {x^{2 k} } {\paren {2 k}!} \map \sinh 0 + \frac {x^{2 k + 1} } {\paren {2 k + 1}!} \map \cosh 0}\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^\infty \frac {x^{2 k + 1} } {\paren {2 k + 1}!}\)





$\map \sinh 0 = 0$, $\map \cosh 0 = 1$



From Series of Power over Factorial Converges, it follows that this series is convergent for all $x$.
$\blacksquare$


Also see
Power Series Expansion for Hyperbolic Cosine Function
Power Series Expansion for Hyperbolic Tangent Function
Power Series Expansion for Hyperbolic Cotangent Function
Power Series Expansion for Hyperbolic Secant Function
Power Series Expansion for Hyperbolic Cosecant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Hyperbolic Functions: $20.33$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): hyperbolic functions
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): hyperbolic functions




