# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Power_of_Hyperbolic_Cosine_of_a_x



Theorem
$\ds \int \frac {x \rd x} {\cosh^n a x} = \frac {x \sinh a x} {a \paren {n - 1} \cosh^{n - 1} a x} + \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \cosh^{n - 2} a x} + \frac {n - 2} {n - 1} \int \frac {x \rd x} {\cosh^{n - 2} a x} + C$


Proof













\(\ds \int \frac {x \rd x} {\cosh^n a x}\)

\(=\)







\(\ds \int x \sech^n a x \rd x\)





Definition of Hyperbolic Secant














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \theta \sech^n \theta \rd \theta\)





Substitution of $a x \to \theta$








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {a^2} \int \theta \sech^n \theta \rd \theta\)

\(=\)







\(\ds \frac 1 {a^2} \int \sech^2 \theta \times \theta \sech^{n - 2} \theta \rd \theta\)





 $\rd u = \sech^2 \theta$ and $v = \theta \sech^{n - 2} \theta$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {\theta \tanh \theta \sech^{n - 2} \theta - \int \tanh \theta \paren {- \paren {n - 2} \theta \tanh \theta + 1} \sech^{n - 2} \theta \rd \theta}\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {\theta \tanh \theta \sech^{n - 2} \theta - \int \tanh \theta  \sech^{n - 2} \theta \rd \theta + \paren {n - 2} \int \theta \tanh^2 \theta \sech^{n - 2} \theta \rd \theta}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {\theta \tanh \theta \sech^{n - 2} \theta - \int \tanh \theta  \sech^{n - 2} \theta \rd \theta + \paren {n - 2} \int \theta \paren {1 - \sech^2 \theta} \sech^{n - 2} \theta \rd \theta}\)





Sum of Squares of Hyperbolic Secant and Tangent














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {\theta \tanh \theta \sech^{n - 2} \theta - \int \tanh \theta  \sech^{n - 2} \theta \rd \theta + \paren {n - 2} \int \theta \sech^{n - 2} \theta \rd \theta - \paren {n - 2} \int \theta \sech^n \theta \rd \theta}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {1 + \paren {n - 2} } {a^2} \int \theta \sech^n \theta \rd \theta\)

\(=\)







\(\ds \frac 1 {a^2} \paren {\theta \tanh \theta \sech^{n - 2} \theta - \int \tanh \theta  \sech^{n - 2} \theta \rd \theta + \paren {n - 2} \int \theta \sech^{n - 2} \theta \rd \theta}\)





adding end term to both sides








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {a^2} \int \theta \sech^n \theta \rd \theta\)

\(=\)







\(\ds \frac 1 {a^2 \paren {n - 1} } \paren {\theta \tanh \theta \sech^{n - 2} \theta - \int \tanh \theta  \sech^{n - 2} \theta \rd \theta + \paren {n - 2} \int \theta \sech^{n - 2} \theta \rd \theta}\)





rearranging for the intended primitive














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2 \paren {n - 1} } \paren {\theta \tanh \theta \sech^{n - 2} \theta - \paren {- \frac {\sech^{n - 2} \theta } { \paren {n - 2} } } + \paren {n - 2} \int \theta \sech^{n - 2} \theta \rd \theta}\)





Primitive of Power of Hyperbolic Secant of a x by Hyperbolic Tangent of a x














\(\ds \)

\(=\)







\(\ds \frac {\theta \sinh \theta} {a^2 \paren {n - 1} \cosh^{n - 1} \theta } + \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \cosh^{n - 2} \theta } + \frac {n - 2} {a^2 \paren {n - 1} } \int \frac {\theta} {\cosh^{n - 2} \theta} \rd \theta\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \int \frac {x \rd x} {\cosh^n a x}\)

\(=\)







\(\ds \frac {a x \sinh a x} {a^2 \paren {n - 1} \cosh^{n - 1} a x } + \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \cosh^{n - 2} ax } + \frac {n - 2} {n - 1} \int \frac x {\cosh^{n - 2} ax} \rd x\)





Substituting back $\theta \to ax$














\(\ds \)

\(=\)







\(\ds \frac {x \sinh a x} {a \paren {n - 1} \cosh^{n - 1} a x } + \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \cosh^{n - 2} ax } + \frac {n - 2} {n - 1} \int \frac {x \rd x} {\cosh^{n - 2} ax} + C\)





simplifying and adding integration constant



$\blacksquare$


Also see
Primitive of $\dfrac x {\sinh^n a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.589$




