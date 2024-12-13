# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Cosine_Function



Theorem
The cosine function has the power series expansion:














\(\ds \cos x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds 1 - \frac {x^2} {2!} + \frac {x^4} {4!} - \frac {x^6} {6!} + \cdots\)









valid for all $x \in \R$.


Proof
From Derivative of Cosine Function:

$\dfrac \d {\d x} \cos x = -\sin x$
From Derivative of Sine Function:

$\dfrac \d {\d x} \sin x = \cos x$

Hence:














\(\ds \dfrac {\d^2} {\d x^2} \cos x\)

\(=\)







\(\ds -\cos x\)




















\(\ds \dfrac {\d^3} {\d x^3} \cos x\)

\(=\)







\(\ds \sin x\)




















\(\ds \dfrac {\d^4} {\d x^4} \cos x\)

\(=\)







\(\ds \cos x\)










and so for all $m \in \N$:








\(\ds m = 4 k: \ \ \)





\(\ds \dfrac {\d^m} {\d x^m} \cos x\)

\(=\)







\(\ds \cos x\)














\(\ds m = 4 k + 1: \ \ \)





\(\ds \dfrac {\d^m} {\d x^m} \cos x\)

\(=\)







\(\ds -\sin x\)














\(\ds m = 4 k + 2: \ \ \)





\(\ds \dfrac {\d^m} {\d x^m} \cos x\)

\(=\)







\(\ds -\cos x\)














\(\ds m = 4 k + 3: \ \ \)





\(\ds \dfrac {\d^m} {\d x^m} \cos x\)

\(=\)







\(\ds \sin x\)









where $k \in \Z$.

This leads to the Maclaurin series expansion:














\(\ds \sin x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {\frac {x^{4 k} } {\paren {4 k}!} \map \cos 0 - \frac {x^{4 k + 1} } {\paren {4 k + 1}!} \map \sin 0 - \frac {x^{4 k + 2} } {\paren {4 k + 2}!} \map \cos 0 + \frac {x^{4 k + 3} } {\paren {4 k + 3}!} \map \sin 0}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {\frac {x^{4 k} } {\paren {4 k}!} - \frac {x^{4 k + 2} } {\paren {4 k + 2}!} }\)





Sine of Zero is Zero, Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}\)





setting $n = 2 k$



From Series of Power over Factorial Converges, it follows that this series is convergent for all $x$.
$\blacksquare$


Also see
Power Series Expansion for Sine Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Trigonometric Functions: $20.22$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.3.2$: Power series: $(1.47)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): power series
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): power series




