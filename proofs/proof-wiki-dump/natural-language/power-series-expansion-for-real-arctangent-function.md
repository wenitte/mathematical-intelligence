# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Real_Arctangent_Function



Theorem
The arctangent function has a Taylor series expansion:

$\arctan x = \begin {cases} \ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {2 n + 1} & : -1 \le x \le 1 \\
\ds \frac \pi 2 - \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac 1 {\paren {2 n + 1} x^{2 n + 1} } & : x \ge 1 \\
\ds -\frac \pi 2 - \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac 1 {\paren {2 n + 1} x^{2 n + 1} } & : x \le -1
\end {cases}$

That is:

$\arctan x = \begin {cases} x - \dfrac {x^3} 3 + \dfrac {x^5} 5 - \dfrac {x^7} 7 + \dfrac {x^9} 9 - \cdots & : -1 \le x \le 1 \\
\dfrac \pi 2 - \dfrac 1 x + \dfrac 1 {3 x^3} - \dfrac 1 {5 x^5} + \cdots & : x \ge 1 \\
-\dfrac \pi 2 - \dfrac 1 x + \dfrac 1 {3 x^3} - \dfrac 1 {5 x^5} + \cdots & : x \le -1
\end {cases}$


Proof
From Sum of Infinite Geometric Sequence:

$(1): \quad \ds \sum_{n \mathop = 0}^\infty \paren {-x^2}^n = \frac 1 {1 + x^2}$
for $-1 < x < 1$.
From Power Series is Termwise Integrable within Radius of Convergence, $(1)$ can be integrated term by term:














\(\ds \int_0^x \frac 1 {1 + t^2} \rd t\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \int_0^x \paren {-t^2}^n \rd t\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \arctan x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {2 n + 1}\)





Primitive of Reciprocal of $\dfrac 1 {1 + t^2}$, Integral of Power



For $-1 \le x \le 1$, the sequence $\sequence {\dfrac {x^{2 n + 1}} {2 n + 1} }$ is decreasing and converges to zero.
Therefore the series converges in the given range by the Alternating Series Test.
$\Box$

Now consider the case $x \ge 1$:














\(\ds \arctan x\)

\(=\)







\(\ds \frac \pi 2 - \map \arccot x\)





Sum of Arctangent and Arccotangent














\(\ds \)

\(=\)







\(\ds \frac \pi 2 - \map \arctan {\frac 1 x}\)





Arctangent of Reciprocal equals Arccotangent














\(\ds \)

\(=\)







\(\ds \frac \pi 2 - \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac 1 {2 n + 1} \paren {\frac 1 x}^{2 n + 1}\)





as $x \ge 1$, $0 < \dfrac 1 x \le 1$, so $(2)$ may be applied




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac \pi 2 - \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac 1 {\paren {2 n + 1} x^{2 n + 1} }\)









$\Box$

We also have: 














\(\ds \map \arctan {-x}\)

\(=\)







\(\ds -\arctan x\)





Arctangent Function is Odd














\(\ds \)

\(=\)







\(\ds -\frac \pi 2 - \sum_{n \mathop = 0}^\infty \paren {-1}^{n + 1} \frac 1 {\paren {2 n + 1} x^{2 n + 1} }\)





from $(3)$



Substituting $x$ for $-x$ gives us the expansion for $x \le -1$: 














\(\ds \arctan x\)

\(=\)







\(\ds -\frac \pi 2 - \sum_{n \mathop = 0}^\infty \paren {-1}^{n + 1} \frac 1 {\paren {2 n + 1} \paren {-x}^{2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds -\frac \pi 2 - \sum_{n \mathop = 0}^\infty \paren {-1}^{n + 1} \frac 1 {-\paren {2 n + 1} x^{2 n + 1} }\)




















\(\ds \)

\(=\)







\(\ds -\frac \pi 2 - \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac 1 {\paren {2 n + 1} x^{2 n + 1} }\)









$\blacksquare$


Also see
Power Series Expansion for Real Arcsine Function
Power Series Expansion for Real Arccosine Function
Power Series Expansion for Real Arccotangent Function
Power Series Expansion for Real Arcsecant Function
Power Series Expansion for Real Arccosecant Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Trigonometric Functions: $20.29$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions




