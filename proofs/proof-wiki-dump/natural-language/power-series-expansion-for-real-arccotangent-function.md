# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Real_Arccotangent_Function



Theorem
The arccotangent function has a Taylor series expansion:

$\arccot x = \begin {cases} \ds \frac \pi 2 - \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {2 n + 1} & : -1 \le x \le 1 \\
\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac 1 {\paren {2 n + 1} x^{2 n + 1} } & : x \ge 1 \\
\ds \pi + \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac 1 {\paren {2 n + 1} x^{2 n + 1} } & : x \le -1
\end {cases}$

That is:

$\arccot x = \begin {cases} \dfrac \pi 2 - \paren {x - \dfrac {x^3} 3 + \dfrac {x^5} 5 - \dfrac {x^7} 7 + \cdots} & : -1 \le x \le 1 \\
\dfrac 1 x - \dfrac 1 {3 x^3} + \dfrac 1 {5 x^5} - \cdots & : x \ge 1 \\
\pi + \dfrac 1 x - \dfrac 1 {3 x^3} + \dfrac 1 {5 x^5} - \cdots & : x \le -1
\end {cases}$


Proof
From Sum of Arctangent and Arccotangent:

$\arccot x = \dfrac \pi 2 - \arctan x$

The result follows from Power Series Expansion for Real Arctangent Function.
$\blacksquare$


Also see
Power Series Expansion for Real Arcsine Function
Power Series Expansion for Real Arccosine Function
Power Series Expansion for Real Arctangent Function
Power Series Expansion for Real Arcsecant Function
Power Series Expansion for Real Arccosecant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Trigonometric Functions: $20.30$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions




