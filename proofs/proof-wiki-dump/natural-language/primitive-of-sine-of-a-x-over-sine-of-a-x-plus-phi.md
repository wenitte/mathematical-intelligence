# 

Source: https://proofwiki.org/wiki/Primitive_of_Sine_of_a_x_over_Sine_of_a_x_plus_phi

Theorem
$\ds \int \frac {\sin a x \rd x} {\map \sin {a x + \phi} } = \frac x {\cos \phi} - \tan \phi \int \frac {\cos a x \rd x} {\map \sin {a x + \phi} } + C$


Proof













\(\ds \int \frac {\sin a x \rd x} {\map \sin {a x + \phi} }\)

\(=\)







\(\ds \frac 1 {\cos \phi} \int \frac {\sin a x \cos \phi \rd x} {\map \sin {a x + \phi} }\)





multiplying top and bottom by $\cos \phi$














\(\ds \)

\(=\)







\(\ds \frac 1 {\cos \phi} \int \frac {\paren {\sin a x \cos \phi + \cos a x \sin \phi - \cos a x \sin \phi} \rd x} {\map \sin {a x + \phi} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\cos \phi} \int \frac {\paren {\map \sin {a x + \phi} - \cos a x \sin \phi} \rd x} {\map \sin {a x + \phi} }\)





Sine of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 {\cos \phi} \int \frac {\paren {\map \sin {a x + \phi} - \cos a x \sin \phi} \rd x} {\map \sin {a x + \phi} }\)





Sine of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 {\cos \phi} \int \d x  - \frac {\sin \phi} {\cos \phi} \int \frac {\cos a x \rd x} {\map \sin {a x + \phi} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac x {\cos \phi} - \tan \phi \int \frac {\cos a x \rd x} {\map \sin {a x + \phi} } + C\)





Tangent is Sine divided by Cosine



$\blacksquare$





