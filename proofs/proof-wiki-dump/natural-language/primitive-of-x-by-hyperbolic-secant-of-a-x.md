# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Hyperbolic_Secant_of_a_x



Theorem













\(\ds \int x \sech a x \rd x\)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {E_{2 n} \paren {a x}^{2 n + 2} } {\paren {2 n + 2} \paren {2 n}!} + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {\frac {\paren {a x}^2} 2 - \frac {\paren {a x}^4} 8 + \frac {5 \paren {a x}^6} {144} - \cdots } + C\)









where $E_{2 n}$ denotes the $2 n$th Euler number.


Proof













\(\ds \int x \sech a x \rd x\)

\(=\)







\(\ds \frac 1 {a^2} \int \theta \sech \theta \rd \theta\)





Substitution of $a x \to \theta$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \theta \sum_{n \mathop = 0}^\infty \frac{E_{2 n} \, \theta^{2 n} } {\paren {2 n}!} \rd \theta\)





Power Series Expansion for Hyperbolic Secant Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {E_{2 n} } {\paren {2 n}!} \int \theta^{2 n + 1} \rd \theta\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {E_{2 n} \paren {a x}^{2 n + 2} } {\paren {2 n + 2} \paren {2 n}!}  + C\)





Substituting back $\theta \to ax$



$\blacksquare$


Also see
Primitive of $x \sinh a x$
Primitive of $x \cosh a x$
Primitive of $x \tanh a x$
Primitive of $x \coth a x$
Primitive of $x \csch a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sech a x$: $14.631$




