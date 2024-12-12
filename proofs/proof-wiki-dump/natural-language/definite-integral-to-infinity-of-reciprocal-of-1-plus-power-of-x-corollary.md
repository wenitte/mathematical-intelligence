# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Reciprocal_of_1_plus_Power_of_x/Corollary

Theorem
$\ds \int_0^\infty \frac 1 {a^n + x^n} \rd x = \frac \pi {n a^{n - 1} } \map \csc {\frac \pi n}$
where:

$n$ is a real number greater than 1
$\csc$ is the cosecant function
$a \ne 0$.


Proof













\(\ds \int_0^\infty \frac 1 {a^n + x^n} \rd x\)

\(=\)







\(\ds \frac 1 {a^n} \int_0^\infty \frac 1 {1 + \paren {\frac x a}^n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a^n} \cdot \frac 1 {\frac 1 a} \int_0^\infty \frac 1 {1 + \paren {\frac x a}^n} \map \rd {\frac x a}\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac a {a^n} \cdot \frac \pi n \map \csc {\frac \pi n}\)





Definite Integral to Infinity of $\dfrac 1 {1 + x^n}$














\(\ds \)

\(=\)







\(\ds \frac \pi {n a^{n - 1} } \map \csc {\frac \pi n}\)









$\blacksquare$





