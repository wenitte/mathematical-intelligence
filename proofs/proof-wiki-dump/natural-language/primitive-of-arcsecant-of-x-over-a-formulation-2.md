# 

Source: https://proofwiki.org/wiki/Primitive_of_Arcsecant_of_x_over_a/Formulation_2

Theorem
$\ds \int \arcsec \frac x a \rd x = x \arcsec \frac x a - a \ln \size {x + \sqrt {x^2 - a^2} } + C$
for $x^2 > 1$.
$\arcsec \dfrac x a$ is undefined on the real numbers for $x^2 < 1$.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcsec \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \dfrac a {\size x \sqrt {x^2 - a^2} }\)





Derivative of $\arcsec \dfrac x a$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




We then have:














\(\ds \int \arcsec \frac x a \rd x\)

\(=\)







\(\ds x \arcsec \frac x a - \int x \paren {\dfrac a {\size x \sqrt {x^2 - a^2} } } \rd x + C\)





Integration by Parts




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds x \arcsec \frac x a - \int \frac x {\size x} \paren {\frac a {\sqrt {x^2 - a^2} } } \rd x + C\)





rearrangement




Let $x > 1$.
Then:














\(\ds \int \frac x {\size x} \paren {\frac a {\sqrt {x^2 - a^2} } } \rd x\)

\(=\)







\(\ds \int \frac a { {\sqrt {x^2 - a^2} } } \rd x\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds a \int \frac 1 { {\sqrt {x^2 - a^2} } } \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a \size {\ln \size {x + \sqrt {x^2 - a^2} } } + C\)





Integral of One Over Square Root of Binomial














\(\ds \)

\(=\)







\(\ds a \ln \size {x + \sqrt {x^2 - a^2} } + C\)





as argument of logarithm is positive




Similarly, let $x < -1$.
Then: 














\(\ds \int \frac x {\size x} \paren {\frac a {\sqrt {x^2 - a^2} } } \rd x\)

\(=\)







\(\ds \int \paren {-1} \frac a { {\sqrt{x^2 - a^2} } } \rd x\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds -a \int \frac 1 { {\sqrt{x^2 - a^2} } } \rd x\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -a \size {\ln \size {x + \sqrt {x^2 - a^2} } } + C\)





Integral of One Over Square Root of Binomial














\(\ds \)

\(=\)







\(\ds -a \paren {-\ln \size {x + \sqrt {x^2 - a^2} } } + C\)





as argument of logarithm is negative














\(\ds \)

\(=\)







\(\ds a \ln \size {x + \sqrt {x^2 - a^2} } + C\)





as argument of logarithm is negative



$\blacksquare$


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Appendix $2$: Table of derivatives and integrals of common functions: Inverse trigonometric functions




