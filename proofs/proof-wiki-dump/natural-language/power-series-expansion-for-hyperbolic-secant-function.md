# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Hyperbolic_Secant_Function



Theorem
The hyperbolic secant function has a Taylor series expansion:














\(\ds \sech x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {E_{2 n} x^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds 1 - \frac {x^2} 2 + \frac {5 x^4} {24} - \frac {61 x^6} {720} + \cdots\)










where $E_{2 n}$ denotes the Euler numbers.
This converges for $\size x < \dfrac \pi 2$.


Proof
By definition of the Euler numbers:

$\ds \sech x = \sum_{n \mathop = 0}^\infty \frac {E_n x^n} {n!}$

From Odd Euler Numbers Vanish:

$E_{2 k + 1} = 0$
for $k \in \Z$.
Hence the result.
$\blacksquare$


Also see
Power Series Expansion for Hyperbolic Sine Function
Power Series Expansion for Hyperbolic Cosine Function
Power Series Expansion for Hyperbolic Tangent Function
Power Series Expansion for Hyperbolic Cotangent Function
Power Series Expansion for Hyperbolic Cosecant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Hyperbolic Functions: $20.37$




