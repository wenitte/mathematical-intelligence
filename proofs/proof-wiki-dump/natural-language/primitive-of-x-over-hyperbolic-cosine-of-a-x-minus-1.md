# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Hyperbolic_Cosine_of_a_x_minus_1



Theorem
$\ds \int \frac {x \rd x} {\cosh a x - 1} = -\frac x a \coth \frac {a x} 2 + \frac 2 {a^2} \ln \size {\sinh \frac {a x} 2} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 1\)





Derivative of Identity Function




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {\cosh a x + 1}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\frac 1 a \coth \frac {a x} 2\)





Primitive of $\dfrac 1 {\cosh a x - 1}$




Then:














\(\ds \int \frac {x \rd x} {\cosh a x - 1}\)

\(=\)







\(\ds x \paren {-\frac 1 a \coth \frac {a x} 2} - \int \paren {-\frac 1 a \coth \frac {a x} 2} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac x a \coth \frac {a x} 2 + \frac 1 a \int \coth {a x} 2 \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds -\frac x a \tanh \frac {a x} 2 + \frac 1 a \paren {\frac 2 a \ln \size {\sinh \frac {a x} 2} } + C\)





Primitive of $\coth a x$














\(\ds \)

\(=\)







\(\ds -\frac x a \coth \frac {a x} 2 + \frac 2 {a^2} \ln \size {\sinh \frac {a x} 2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac x {\cosh a x + 1}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cosh a x$: $14.578$




