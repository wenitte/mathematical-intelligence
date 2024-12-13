# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Exponential_Function



Theorem
Let $\exp x$ be the exponential function.

Then:










\(\ds \forall x \in \R: \, \)



\(\ds \exp x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + x + \frac {x^2} {2!} + \frac {x^3} {3!} + \cdots\)











Proof
From Higher Derivatives of Exponential Function, we have:

$\forall n \in \N: \map {f^{\paren n} } {\exp x} = \exp x$

Since $\exp 0 = 1$, the Taylor series expansion for $\exp x$ about $0$ is given by:

$\ds \exp x = \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$

From Radius of Convergence of Power Series over Factorial, we know that this power series expansion converges for all $x \in \R$.
From Taylor's Theorem, we know that

$\ds \exp x = 1 + \frac x {1!} + \frac {x^2} {2!} + \cdots + \frac {x^{n - 1} } {\paren {n - 1}!} + \frac {x^n} {n!} \map \exp \eta$
where $0 \le \eta \le x$.
Hence:














\(\ds \size {\exp x - \paren {1 + \frac x {1!} + \frac {x^2} {2!} + \cdots + \frac {x^{n - 1} } {\paren {n - 1}!} } }\)

\(=\)







\(\ds \size {\frac {x^n} {n!} \map \exp \eta}\)




















\(\ds \)

\(\le\)







\(\ds \frac {\size {x^n} } {n!} \map \exp {\size x}\)





Exponential is Strictly Increasing














\(\ds \)

\(\to\)







\(\ds 0\)

\(\ds \text { as } n \to \infty\)



Series of Power over Factorial Converges




So the partial sums of the power series converge to $\exp x$.
The result follows.
$\blacksquare$


Historical Note
The power series expansion for $e^x$ was first established by Isaac Newton in $1665$.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Exponential and Logarithmic Functions: $20.15$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-4}$ Generating Functions: Example $\text {3-7}$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 15.5$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.3.2$: Power series: $(1.45)$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(22)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): exponential series
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): power series
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): exponential series
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): power series




