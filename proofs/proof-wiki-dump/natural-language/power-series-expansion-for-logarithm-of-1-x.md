# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Logarithm_of_1_%2B_x



Theorem
The Newton-Mercator series defines the  natural logarithm function as a power series expansion:














\(\ds \map \ln {1 + x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {x^n} n\)




















\(\ds \)

\(=\)







\(\ds x - \frac {x^2} 2 + \frac {x^3} 3 - \frac {x^4} 4 + \cdots\)









valid for all $x \in \R$ such that $-1 < x \le 1$.


Corollary













\(\ds \map \ln {1 - x}\)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac {x^n} n\)




















\(\ds \)

\(=\)







\(\ds -x - \frac {x^2} 2 - \frac {x^3} 3 - \frac {x^4} 4 - \cdots\)









valid for $-1 \le x < 1$.


Proof
From Sum of Infinite Geometric Sequence, putting $-x$ for $x$:

$(1): \quad \ds \sum_{n \mathop = 0}^\infty \paren {-x}^n = \frac 1 {1 + x}$
for $-1 < x < 1$.

From Power Series Converges Uniformly within Radius of Convergence, $(1)$ is uniformly convergent on every closed interval within the interval $\openint {-1} 1$.
From Power Series is Termwise Integrable within Radius of Convergence, $(1)$ can be integrated term by term:














\(\ds \int_0^x \frac 1 {1 + t} \rd t\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \int_0^x \paren {-t}^n \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {1 + x}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{n + 1} } {n + 1}\)





Primitive of Reciprocal and Integral of Power








\(\ds \leadsto \ \ \)





\(\ds \map \ln {1 + x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {x^n} n\)





letting $n \to n - 1$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Exponential and Logarithmic Functions: $20.17$
1969: J.C. Anderson, D.M. Hum, B.G. Neal and J.H. Whitelaw: Data and Formulae for Engineering Students (2nd ed.) ... (previous) ... (next): $4.$ Mathematics: $4.2$ Series
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.3.2$: Power series: $(1.41)$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(24)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): expansion
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): power series
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): expansion: 1.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): power series




