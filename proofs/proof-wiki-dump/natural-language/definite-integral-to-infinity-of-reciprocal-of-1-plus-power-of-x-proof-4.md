# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Reciprocal_of_1_plus_Power_of_x/Proof_4

Theorem
$\ds \int_0^\infty \frac 1 {1 + x^n} \rd x = \frac \pi n \map \csc {\frac \pi n}$


Proof
Let:














\(\ds x\)

\(=\)







\(\ds \paren {\frac t {1 - t} }^{\frac 1 n}\)





Integration by Substitution








\(\ds \leadsto \ \ \)





\(\ds \rd x\)

\(=\)







\(\ds \frac 1 n \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t}^2} \rd t\)





Derivative of Power, Chain Rule for Derivatives




We also have:














\(\ds \lim_{t \mathop \to 0} \paren {\frac t {1 - t} }^{\frac 1 n}\)

\(\to\)







\(\ds 0\)




















\(\ds \lim_{t \mathop \to 1} \paren {\frac t {1 - t} }^{\frac 1 n}\)

\(\to\)







\(\ds \infty\)









Then:














\(\ds \int_0^\infty \frac 1 {1 + x^n} \rd x\)

\(=\)







\(\ds \int_0^1 \frac 1 {1 + \paren {\paren {\frac t {1 - t} }^{\frac 1 n} }^n } \cdot \frac 1 n \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t}^2} \rd t\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 n \int_0^1 \frac 1 {1 + \frac t {1 - t} } \cdot \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t}^2} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \int_0^1 \frac 1 {\frac {1 - t} {1 - t} + \frac t {1 - t} } \cdot \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t}^2} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \int_0^1 \paren {1 - t} \cdot \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t}^2} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \int_0^1 \paren {\frac t {1 - t} }^{\frac 1 n - 1} \frac 1 {\paren {1 - t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \int_0^1 t^{\frac 1 n - 1} \paren {1 - t}^{\paren {1 - \frac 1 n} - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \map \Beta {\frac 1 n, 1 - \frac 1 n}\)





Definition 1 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \frac {\map \Gamma {\frac 1 n} \map \Gamma {1 - \frac 1 n} } {\map \Gamma {1 - \frac 1 n + \frac 1 n} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 n \cdot \dfrac \pi {\map \sin {\frac \pi n} }\)





Euler's Reflection Formula and $\map \Gamma 1 = 1$














\(\ds \)

\(=\)







\(\ds \frac \pi n \map \csc {\frac \pi n}\)





Definition of Cosecant



$\blacksquare$





