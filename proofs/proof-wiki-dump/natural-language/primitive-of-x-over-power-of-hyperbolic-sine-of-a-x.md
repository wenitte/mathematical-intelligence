# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Power_of_Hyperbolic_Sine_of_a_x



Theorem
$\ds \int \frac {x \rd x} {\sinh^n a x} = \frac {-x \cosh a x} {a \paren {n - 1} \sinh^{n - 1} a x} - \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \sinh^{n - 2} a x} - \frac {n - 2} {n - 1} \int \frac {x \rd x} {\sinh^{n - 2} a x}$


Proof













\(\ds \int \frac {x \rd x} {\sinh^n a x}\)

\(=\)







\(\ds \int x \csch^n a x \rd x\)





Definition of Hyperbolic Cosecant














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \int \theta \csch^n \theta \rd \theta\)





Substitution of $a x \to \theta$








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {a^2} \int \theta \csch^n \theta \rd \theta\)

\(=\)







\(\ds \frac 1 {a^2} \int \csch^2 \theta \times \theta \csch^{n - 2} \theta \rd \theta\)





 $\rd u = \csch^2 \theta$ and $v = \theta \csch^{n - 2} \theta$














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {- \theta \coth \theta \csch^{n - 2} \theta - \int - \coth \theta \paren {- \paren {n - 2} \theta \coth \theta + 1} \csch^{n - 2} \theta \rd \theta}\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {- \theta \coth \theta \csch^{n - 2} \theta + \int \coth \theta  \csch^{n - 2} \theta \rd \theta - \paren {n - 2} \int \theta \coth^2 \theta \csch^{n - 2} \theta \rd \theta}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {- \theta \coth \theta \csch^{n - 2} \theta + \int \coth \theta  \csch^{n - 2} \theta \rd \theta - \paren {n - 2} \int \theta \paren {1 + \csch^2 \theta} \csch^{n - 2} \theta \rd \theta}\)





Difference of Squares of Hyperbolic Cotangent and Cosecant














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2} \paren {- \theta \coth \theta \csch^{n - 2} \theta + \int \coth \theta  \csch^{n - 2} \theta \rd \theta - \paren {n - 2} \int \theta \csch^{n - 2} \theta \rd \theta - \paren {n - 2} \int \theta \csch^n \theta \rd \theta}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \frac {1 + \paren {n - 2} } {a^2} \int \theta \csch^n \theta \rd \theta\)

\(=\)







\(\ds \frac 1 {a^2} \paren {- \theta \coth \theta \csch^{n - 2} \theta + \int \coth \theta  \csch^{n - 2} \theta \rd \theta - \paren {n - 2} \int \theta \csch^{n - 2} \theta \rd \theta}\)





adding end term to both sides








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {a^2} \int \theta \csch^n \theta \rd \theta\)

\(=\)







\(\ds \frac 1 {a^2 \paren {n - 1} } \paren {- \theta \coth \theta \csch^{n - 2} \theta + \int \coth \theta  \csch^{n - 2} \theta \rd \theta - \paren {n - 2} \int \theta \csch^{n - 2} \theta \rd \theta}\)





rearranging for the intended primitive














\(\ds \)

\(=\)







\(\ds \frac 1 {a^2 \paren {n - 1} } \paren {- \theta \coth \theta \csch^{n - 2} \theta + \paren {- \frac {\csch^{n - 2} \theta } { \paren {n - 2} } } - \paren {n - 2} \int \theta \csch^{n - 2} \theta \rd \theta}\)





Primitive of Power of Hyperbolic Cosecant of a x by Hyperbolic Cotangent of a x














\(\ds \)

\(=\)







\(\ds - \frac {\theta \cosh \theta} {a^2 \paren {n - 1} \sinh^{n - 1} \theta } - \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \sinh^{n - 2} \theta } - \frac {n - 2} {a^2 \paren {n - 1} } \int \frac {\theta} {\sinh^{n - 2} \theta} \rd \theta\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \int \frac {x \rd x} {\sinh^n a x}\)

\(=\)







\(\ds - \frac {a x \cosh a x} {a^2 \paren {n - 1} \sinh^{n - 1} a x } - \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \sinh^{n - 2} ax } - \frac {n - 2} {n - 1} \int \frac x {\sinh^{n - 2} a x} \rd x\)





substituting back $\theta \to ax$














\(\ds \)

\(=\)







\(\ds \frac {- x \cosh a x} {a \paren {n - 1} \sinh^{n - 1} a x } - \frac 1 {a^2 \paren {n - 1} \paren {n - 2} \sinh^{n - 2} ax } - \frac {n - 2} {n - 1} \int \frac {x \rd x} {\sinh^{n - 2} a x}\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac x {\cosh^n a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.561$




