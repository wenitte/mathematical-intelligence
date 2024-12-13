# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_by_Cosine_of_b_x/Lemma

Lemma for Primitive of $e^{a x} \cos b x$
$\ds \int e^{a x} \cos b x \rd x = \frac {e^{a x} \cos b x} a + \frac b a \int e^{a x} \sin b x \rd x$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v}{\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -b \sin b x\)





Derivative of $\cos a x$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {e^{a x} } a\)





Primitive of $e^{a x}$




Then:














\(\ds \int e^{a x} \cos b x \rd x\)

\(=\)







\(\ds \cos b x \paren {\frac {e^{a x} } a} - \int \paren {\frac {e^{a x} } a} \paren {-b \sin b x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} \cos b x} a + \frac b a \int e^{a x} \sin b x \rd x\)





Primitive of Constant Multiple of Function



$\blacksquare$





