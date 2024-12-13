# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Hyperbolic_Cosine_Function



Theorem
The hyperbolic cosine function has the power series expansion:














\(\ds \cosh x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac {x^2} {2!} + \frac {x^4} {4!} + \frac {x^6} {6!} + \cdots\)









valid for all $x \in \R$.


Proof
From Derivative of Hyperbolic Cosine:

$\dfrac \d {\d x} \cosh x = \sinh x$
From Derivative of Hyperbolic Sine:

$\dfrac \d {\d x} \sinh x = \cosh x$

Hence:

$\dfrac {\d^2} {\d x^2} \cosh x = \cosh x$
and so for all $m \in \N$:








\(\ds m = 2 k: \ \ \)





\(\ds \dfrac {\d^m} {\d x^m} \cosh x\)

\(=\)







\(\ds \cosh x\)














\(\ds m = 2 k + 1: \ \ \)





\(\ds \dfrac {\d^m} {\d x^m} \cosh x\)

\(=\)







\(\ds \sinh x\)









where $k \in \Z$.

This leads to the Maclaurin series expansion:














\(\ds \cosh x\)

\(=\)







\(\ds \sum_{r \mathop = 0}^\infty \paren {\frac {x^{2 k} } {\paren {2 k}!} \map \cosh 0 + \frac {x^{2 k + 1} } {\paren {2 k + 1}!} \map \sinh 0}\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 0}^\infty \frac {x^{2 k} } {\paren {2 k}!}\)





$\map \sinh 0 = 0$, $\map \cosh 0 = 1$



From Series of Power over Factorial Converges, it follows that this series is convergent for all $x$.
$\blacksquare$


Also see
Power Series Expansion for Hyperbolic Sine Function
Power Series Expansion for Hyperbolic Tangent Function
Power Series Expansion for Hyperbolic Cotangent Function
Power Series Expansion for Hyperbolic Secant Function
Power Series Expansion for Hyperbolic Cosecant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Hyperbolic Functions: $20.34$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): hyperbolic functions
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): hyperbolic functions




