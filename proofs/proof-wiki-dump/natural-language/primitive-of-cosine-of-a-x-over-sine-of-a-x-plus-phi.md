# 

Source: https://proofwiki.org/wiki/Primitive_of_Cosine_of_a_x_over_Sine_of_a_x_plus_phi

Theorem
$\ds \int \frac {\cos a x \rd x} {\map \sin {a x + \phi} } = \frac {\ln \size {\map \sin {a x + \phi} } } {a \cos \phi} + \tan \phi \int \frac {\sin a x \rd x} {\map \sin {a x + \phi} } + C$


Proof
First note that:




\(\text {(1)}: \quad\)









\(\ds \map {\frac \d {\d x} } {\map \sin {a x + \phi} }\)

\(=\)







\(\ds a \map \cos {a x + \phi}\)





Derivative of $\sin a x$ etc.




Then:














\(\ds \int \frac {\cos a x \rd x} {\map \sin {a x + \phi} }\)

\(=\)







\(\ds \int \frac {\cos a x \cos \phi \rd x} {\cos \phi \map \sin {a x + \phi} }\)





multiplying top and bottom by $\cos \phi$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {\cos a x \cos \phi - \sin a x \sin \phi + \sin a x \sin \phi} \rd x} {\cos \phi \map \sin {a x + \phi} }\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\paren {\map \cos {a x + \phi} + \sin a x \sin \phi} \rd x} {\cos \phi \map \sin {a x + \phi} }\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds \frac 1 {\cos \phi} \int \frac {\map \cos {a x + \phi} \rd x} {\map \sin {a x + \phi} } + \frac {\sin \phi} {\cos \phi} \int \frac {\sin a x \rd x} {\map \sin {a x + \phi} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {\cos \phi} \ln \size {\map \sin {a x + \phi} } + \frac {\sin \phi} {\cos \phi} \int \frac {\sin a x \rd x} {\map \sin {a x + \phi} }\)





Primitive of Function under its Derivative and $(1)$














\(\ds \)

\(=\)







\(\ds \frac {\ln \size {\map \sin {a x + \phi} } } {a \cos \phi} + \tan \phi \int \frac {\sin a x \rd x} {\map \sin {a x + \phi} } + C\)





Tangent is Sine divided by Cosine



$\blacksquare$





