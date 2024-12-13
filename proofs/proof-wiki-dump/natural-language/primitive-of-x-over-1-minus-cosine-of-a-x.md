# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_1_minus_Cosine_of_a_x



Theorem
$\ds \int \frac {x \rd x} {1 - \cos a x} = \frac {-x} a \cot \frac {a x} 2 + \frac 2 {a^2} \ln \size {\sin \frac {a x} 2} + C$


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





Primitive of Power




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \frac 1 {1 - \cos a x}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-1} a \cot \frac {a x} 2\)





Primitive of $\dfrac 1 {1 - \cos a x}$




Then:














\(\ds \int \frac {x \rd x} {1 - \cos a x}\)

\(=\)







\(\ds \int u \rd v\)




















\(\ds \)

\(=\)







\(\ds x \paren {\frac {-1} a \cot \frac {a x} 2} - \int \paren {\frac {-1} a \cot \frac {a x} 2} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {-x} a \cot \frac {a x} 2 - \frac {-1} a \paren {\frac 2 a \ln \size {\sin \frac {a x} 2} } + C\)





Primitive of $\cot a x$














\(\ds \)

\(=\)







\(\ds \frac {-x} a \cot \frac {a x} 2 + \frac 2 {a^2} \ln \size {\sin \frac {a x} 2} + C\)





simplifying



$\blacksquare$


Also see
Primitive of $\dfrac x {1 - \sin a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\cos a x$: $14.385$




