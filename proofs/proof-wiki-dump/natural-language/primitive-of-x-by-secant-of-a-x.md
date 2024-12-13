# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Secant_of_a_x



Theorem













\(\ds \int x \sec a x \rd x\)

\(=\)







\(\ds \frac 1 {a^2} \paren {\frac {\paren {a x}^2} 2 - \frac {\paren {a x}^4} 8 + \frac {5 \paren {a x}^6} {144} - \cdots + \frac {\paren {-1}^n E_{2 n} \paren {a x}^{2 n + 2} } {\paren {2 n + 2} \paren {2 n}!} + \cdots} + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n E_{2 n} \paren {a x}^{2 n + 2} } {\paren {2 n + 2} \paren {2 n}!} + C\)









where $E_{2 n}$ is the $2 n$th Euler number.


Proof













\(\ds \int x \sec a x \rd x\)

\(=\)







\(\ds \frac 1 {a^2} \int \theta \sec \theta \rd \theta\)





Substitution of $a x \to \theta$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \theta \sum_{n \mathop = 0}^\infty \frac{ \paren {-1}^n E_{2 n} \theta^{2 n} } {\paren {2 n}!} \rd \theta\)





Power Series Expansion for Secant Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n E_{2 n} } {\paren {2 n}!} \int \theta^{2 n + 1} \rd \theta\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n E_{2 n} \paren {a x}^{2 n + 2} } {\paren {2 n + 2} \paren {2 n}!}  + C\)





Substituting back $\theta \to ax$



$\blacksquare$


Also see
Primitive of $x \sin a x$
Primitive of $x \cos a x$
Primitive of $x \tan a x$
Primitive of $x \cot a x$
Primitive of $x \csc a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sec a x$: $14.456$




