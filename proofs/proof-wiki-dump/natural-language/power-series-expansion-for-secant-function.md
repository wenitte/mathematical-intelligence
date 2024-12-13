# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Secant_Function

Theorem
The (real) secant function has a Taylor series expansion:














\(\ds \sec x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {E_{2 n} x^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac {x^2} 2 + \frac {5 x^4} {24} + \frac {61 x^6} {720} + \dfrac {1385 x^8} {40320} + \cdots\)










where $E_{2 n}$ denotes the Euler numbers.
This converges for $\size x < \dfrac \pi 2$.


Proof













\(\ds \sec x\)

\(=\)







\(\ds \map \sech {i x}\)





Secant in terms of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {E_n \paren {i x}^n} {n!}\)





Definition of Euler Numbers














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {E_{2 n} \paren {i x}^{2 n} } {\paren {2 n}!}\)





Odd terms vanish














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n E_{2 n} x^{2 n} } {\paren {2 n}!}\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Trigonometric Functions: $20.25$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions




