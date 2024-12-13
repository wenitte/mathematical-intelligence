# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Hyperbolic_Cosecant_of_a_x



Theorem













\(\ds \int x \csch a x \rd x\)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {2 \paren {1 - 2^{2 n - 1} } B_{2 n} \paren {a x}^{2 n + 1} } {\paren {2 n + 1}!} + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {a^2} \paren {a x - \dfrac {\paren {a x}^3} {18} + \dfrac {7 \paren {a x}^5} {1800} - \cdots} + C\)









where $B_{2 n}$ denotes the $2 n$th Bernoulli number.


Proof













\(\ds \int x \csch a x \rd x\)

\(=\)







\(\ds \frac 1 {a^2} \int \theta \csch \theta \rd \theta\)





Substitution of $a x \to \theta$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \theta \sum_{n \mathop = 0}^\infty \frac {2 \paren {1 - 2^{2 n - 1} } B_{2 n} \, \theta^{2 n - 1} } {\paren {2 n}!} \rd \theta\)





Power Series Expansion for Hyperbolic Cosecant Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {2 \paren {1 - 2^{2 n - 1} } B_{2 n} } {\paren {2 n}!} \int \theta^{2 n} \rd \theta\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {2 \paren {1 - 2^{2 n - 1} } B_{2 n} \paren {a x}^{2 n + 1} } {\paren {2 n + 1}!}  + C\)





Substituting back $\theta \to ax$



$\blacksquare$


Also see
Primitive of $x \sinh a x$
Primitive of $x \cosh a x$
Primitive of $x \tanh a x$
Primitive of $x \coth a x$
Primitive of $x \sech a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\csch a x$: $14.641$




