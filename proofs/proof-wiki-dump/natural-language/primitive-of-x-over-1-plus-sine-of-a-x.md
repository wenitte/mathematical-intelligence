# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_1_plus_Sine_of_a_x



Theorem
$\ds \int \frac {x \rd x} {1 + \sin a x} = -\frac x a \map \tan {\frac \pi 4 - \frac {a x} 2} + \frac 2 {a^2} \ln \size {\map \sin {\frac \pi 4 + \frac {a x} 2} } + C$


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







\(\ds \frac 1 {1 + \sin a x}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\frac 1 a \map \tan {\frac \pi 4 - \frac {a x} 2}\)





Primitive of $\dfrac 1 {1 + \sin a x}$




Then:














\(\ds \int \frac {x \rd x} {1 + \sin a x}\)

\(=\)







\(\ds x \paren {-\frac 1 a \map \tan {\frac \pi 4 - \frac {a x} 2} } - \int \paren {-\frac 1 a \map \tan {\frac \pi 4 - \frac {a x} 2} } \times 1 \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac x a \map \tan {\frac \pi 4 - \frac {a x} 2} + \frac 1 a \int \map \tan {\frac \pi 4 - \frac {a x} 2} \rd x + C\)





simplifying




Then:














\(\ds z\)

\(=\)







\(\ds \frac \pi 4 - \frac {a x} 2\)




















\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds -\frac a 2\)





Derivative of Power








\(\ds \leadsto \ \ \)





\(\ds \frac 1 a \int \map \tan {\frac \pi 4 - \frac {a x} 2} \rd x\)

\(=\)







\(\ds -\frac 1 a \int \frac 2 a \tan z \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\frac {-2} {a^2} \ln \size {\cos z} + C\)





Primitive of $\tan z$: Cosine Form














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \ln \size {\map \cos {\frac \pi 4 - \frac {a x} 2} } + C\)





substituting back for $z$














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \ln \size {\map \sin {\frac \pi 2 - \paren {\frac \pi 4 - \frac {a x} 2} } } + C\)





Sine of Complement equals Cosine














\(\ds \)

\(=\)







\(\ds \frac 2 {a^2} \ln \size {\map \sin {\frac \pi 4 + \frac {a x} 2} } + C\)










Putting it all together:

$\ds \int \frac {x \rd x} {1 - \sin a x} = -\frac x a \map \tan {\frac \pi 4 - \frac {a x} 2} + \frac 2 {a^2} \ln \size {\map \sin {\frac \pi 4 + \frac {a x} 2} } + C$
$\blacksquare$


Also see
Primitive of $\dfrac x {1 + \cos a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.357$




