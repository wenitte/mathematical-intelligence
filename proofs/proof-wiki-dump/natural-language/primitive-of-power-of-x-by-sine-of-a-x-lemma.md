# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Sine_of_a_x/Lemma



Theorem
$\ds \int x^m \sin a x \rd x = \frac {- x^m \cos a x} a + \frac m a \int x^{m - 1} \cos a x \rd x$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x^m\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds m x^{m - 1}\)





Power Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \sin a x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {-\cos a x} a\)





Primitive of $\sin a x$




Then:














\(\ds \int x^m \sin a x \rd x\)

\(=\)







\(\ds \paren {x^m} \paren {\frac {-\cos a x} a} - \int \paren {\frac {-\cos a x} a} \paren {m x^{m - 1} } \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {- x^m \cos a x} a + \frac m a \int x^{m - 1} \cos a x \rd x\)





Primitive of Constant Multiple of Function



$\blacksquare$


Also see
Primitive of $x^m \cos a x$


Sources
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Back endpapers: A Brief Table of Integrals: $80$.




