# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Cosecant_of_a_x



Theorem
$\ds \int x \csc a x \rd x = \frac 1 {a^2} \paren {a x + \frac {\paren {a x}^3} {18} + \frac {7 \paren {a x}^5} {1800} + \cdots + \frac {\paren {-1}^{n - 1} 2 \paren {2^{2 n - 1} - 1} B_{2n} \paren {a x}^{2 n + 1} } {\paren {2 n + 1}!} + \cdots} + C$
where $B_{2 n}$ is the $2 n$th Bernoulli number.


Proof













\(\ds \int x \csc a x \rd x\)

\(=\)







\(\ds \frac 1 {a^2} \int \theta \csc \theta \rd \theta\)





Substitution of $a x \to \theta$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \theta \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^{n - 1} 2 \paren {2^{2 n - 1} - 1} B_{2 n} \, \theta^{2 n - 1} } {\paren {2 n}!} \rd \theta\)





Power Series Expansion for Cosecant Function














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^{n - 1} 2 \paren {2^{2 n - 1} - 1} B_{2 n} } {\paren {2 n}!} \int \theta^{2 n} \rd \theta\)





Power Series is Termwise Integrable within Radius of Convergence














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^{n - 1} 2 \paren {2^{2 n - 1} - 1} B_{2 n} \paren {a x}^{2 n + 1} } {\paren {2 n + 1}!}  + C\)





Substituting back $\theta \to ax$



$\blacksquare$


Also see
Primitive of $x \sin a x$
Primitive of $x \cos a x$
Primitive of $x \tan a x$
Primitive of $x \cot a x$
Primitive of $x \sec a x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\csc a x$: $14.466$




