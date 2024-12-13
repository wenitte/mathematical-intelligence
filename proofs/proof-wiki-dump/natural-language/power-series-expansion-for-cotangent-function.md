# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Cotangent_Function



Theorem
The (real) cotangent function has a Taylor series expansion:














\(\ds \cot x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x - \frac x 3 - \frac {x^3} {45} - \frac {2 x^5} {945} + \frac {x^7} {4725} - \cdots\)










where $B_{2 n}$ denotes the Bernoulli numbers.
This converges for $0 < \size x < \pi$.


Proof













\(\ds \cot x\)

\(=\)







\(\ds i \frac {e^{i x} + e^{- i x} } {e^{i x} - e^{- i x} }\)





Euler's Cotangent Identity














\(\ds \)

\(=\)







\(\ds i \frac {e^{2 i x} + 1 } {e^{2 i x} - 1 }\)





multiplying top and bottom by $e^{ix}$














\(\ds \)

\(=\)







\(\ds i \paren {\frac {e^{2 i x} - 1 + 2 } {e^{2 i x} - 1} }\)




















\(\ds \)

\(=\)







\(\ds i \paren {1 + \frac 2 {e^{2 i x} - 1} }\)




















\(\ds \)

\(=\)







\(\ds i + \frac {2 i} {e^{2 i x} - 1}\)




















\(\ds \)

\(=\)







\(\ds i + \frac 1 x \frac {2 i x} {e^{2 i x} - 1}\)





multiplying top and bottom by $x$














\(\ds \)

\(=\)







\(\ds i + \frac 1 x \sum_{n \mathop = 0}^\infty \frac {B_n \paren {2 i x}^n} {n!}\)





Definition of Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds i + \frac 1 x \paren { 1 + \frac {-\dfrac 1 2 \paren {2 i x} } {1!} + \sum_{n \mathop = 2}^\infty \frac {B_n \paren {2 i x}^n} {n!} }\)





as $B_0 = 1$ and $B_1 = -\dfrac 1 2$














\(\ds \)

\(=\)







\(\ds \frac 1 x + \frac 1 x \sum_{n \mathop = 2}^\infty \frac {B_n \paren {2 i x}^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x + \frac 1 x \sum_{n \mathop = 1}^\infty \frac {B_{2 n} \paren {2 i x}^{2 n} } {\paren {2 n}!}\)





Odd Bernoulli Numbers Vanish














\(\ds \)

\(=\)







\(\ds \frac 1 x \sum_{n \mathop = 0}^\infty \frac {B_{2 n} \paren {2 i x}^{2 n} } {\paren {2 n}!}\)





as $B_0 = 1$














\(\ds \)

\(=\)







\(\ds \frac 1 x \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} \, x^{2 n}  } {\paren {2 n}!}\)





$i^2 = -1$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n 2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!}\)





Moving $\dfrac 1 x $ inside the sum




By Combination Theorem for Limits of Real Functions we can deduce the following.














\(\ds \)

\(\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {\frac {\paren {-1}^n 2^{2 n + 2} B_{2 n + 2} \, x^{2 n + 1} } {\paren {2 n + 2}!} } {\frac {\paren {-1}^{n - 1} 2^{2 n} B_{2 n} \, x^{2 n - 1} } {\paren {2 n}!} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac 1 {\paren {2 n + 1} \paren {2 n + 2} } \frac {B_{2 n + 2} } {B_{2 n} } } 4 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {B_{2 n + 2} } {B_{2 n} } } 2 x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size{\frac 1 {\paren {2 n + 1} \paren {n + 1} } \frac {\paren {-1}^{n + 2} 4 \sqrt {\pi (n + 1)} \paren {\frac {n + 1} {\pi e} }^{2 n + 2} } {\paren {-1}^{n + 1} 4 \sqrt {\pi n} \paren {\frac n {\pi e} }^{2 n} } } 2 x^2\)





Asymptotic Formula for Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {n + 1}^2} {\paren {2 n + 1} \paren {n + 1} } \sqrt {\frac {n + 1} n } \paren {\frac {n + 1} n}^{2 n} } \frac 2 {\pi^2 e^2} x^2\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\paren {\frac {n + 1} n}^{2 n} } \frac {x^2} {\pi^2 e^2}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \size {\paren {\paren {1 + \frac 1 n}^n}^2} \frac {x^2} {\pi^2 e^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {e^2 x^2} {\pi^2 e^2}\)





Definition of Euler's Number as Limit of Sequence














\(\ds \)

\(=\)







\(\ds \frac {x^2} {\pi^2}\)









This is less than $1$ if and only if:

$\size x < \pi$
Hence by the Ratio Test, the series converges for $\size x < \pi$.
$\blacksquare$

Also see
Laurent Series Expansion for Cotangent Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Trigonometric Functions: $20.24$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions




