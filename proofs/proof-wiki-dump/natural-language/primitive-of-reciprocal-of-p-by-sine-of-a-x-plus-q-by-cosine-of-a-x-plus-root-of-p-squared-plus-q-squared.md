# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_by_Sine_of_a_x_plus_q_by_Cosine_of_a_x_plus_Root_of_p_squared_plus_q_squared



Theorem
$\ds \int \frac {\d x} {p \sin a x + q \cos a x + \sqrt {p^2 + q^2} } = \frac {-1} {a \sqrt {p^2 + q^2} } \map \tan {\frac \pi 4 - \frac {a x + \arctan \frac q p} 2} + C$


Proof
Let $\theta = \arctan \dfrac p q$.
Then by the definitions of sine, cosine and tangent:




\(\text {(1)}: \quad\)









\(\ds \cos \theta\)

\(=\)







\(\ds \frac q {\sqrt {p^2 + q^2} }\)




















\(\ds \sin \theta\)

\(=\)







\(\ds \frac p {\sqrt {p^2 + q^2} }\)










Now consider:














\(\ds \map \cos {\frac \pi 2 - a x - \theta}\)

\(=\)







\(\ds \map \cos {\frac \pi 2 - a x} \cos \theta + \map \sin {\frac \pi 2 - a x} \sin \theta\)





Cosine of Difference














\(\ds \)

\(=\)







\(\ds \sin a x \cos \theta + \cos a x \sin \theta\)





Sine of Complement equals Cosine














\(\ds \)

\(=\)







\(\ds \map \sin {a x + \theta}\)





Sine of Sum




Then let $\theta' = \arctan \dfrac q p$.
From Arctangent of Reciprocal equals Arccotangent:

$\theta' = \arccot \dfrac p q$.
Hence:














\(\ds \map \tan {\frac \pi 2 - \theta}\)

\(=\)







\(\ds \cot \theta\)





Tangent of Complement equals Cotangent














\(\ds \)

\(=\)







\(\ds \tan \theta'\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \frac \pi 2 - \theta'\)










Thus:














\(\ds \int \frac {\d x} {p \sin a x + q \cos a x + \sqrt {p^2 + q^2} }\)

\(=\)







\(\ds \dfrac 1 {\sqrt {p^2 + q^2} } \int \frac {\d x} {\dfrac p {\sqrt {p^2 + q^2} } \sin a x + \dfrac q {\sqrt {p^2 + q^2} } \cos a x + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {p^2 + q^2} } \int \frac {\d x} {\sin \theta \sin a x + \cos \theta \cos a x + 1}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {p^2 + q^2} } \int \frac {\d x} {\map \cos {\theta - a x} + 1}\)





Cosine of Difference














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {p^2 + q^2} } \int \frac {\d x} {\map \cos {\frac \pi 2 - a x - \theta'} + 1}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {p^2 + q^2} } \int \frac {\d x} {2 \map {\cos^2} { {\paren {\frac \pi 2 - a x - \theta'} / 2} } }\)





Square of Cosine














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \sqrt {p^2 + q^2} } \int \map {\sec^2} {\frac \pi 4 - \frac {a x + \theta'} 2} \rd x\)





Definition of Real Secant Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \sqrt {p^2 + q^2} } \dfrac {-2} a \map \tan {\frac \pi 4 - \frac {a x + \theta'} 2} + C\)





Primitive of $\sec^2 a x$














\(\ds \)

\(=\)







\(\ds -\dfrac {-1} {a \sqrt {p^2 + q^2} } \map \tan {\frac \pi 4 - \frac {a x + \arctan \frac q p} 2} + C\)





substituting for $\theta'$ and simplifying



$\blacksquare$


Also see
Primitive of Reciprocal of p by Sine of a x plus q by Cosine of a x plus r: the general case for where $r^2 \ne p^2 + q^2$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.422$




