# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-a_x_by_One_minus_Cosine_x_over_x_Squared

Theorem
$\ds \int_0^\infty \frac {e^{-a x} \paren {1 - \cos x} } {x^2} \rd x = \arccot a - \frac a 2 \map \ln {a^2 + 1} + a \ln a$
where $a$ is a positive real number.


Proof
Set: 

$\ds \map I a = \int_0^\infty \frac {e^{-a x} \paren {1 - \cos x} } {x^2} \rd x$
for $a > 0$.
We have: 














\(\ds \map {I} a\)

\(=\)







\(\ds \frac {\d^2} {\d a^2} \int_0^\infty \frac {e^{-a x} \paren {1 - \cos x} } {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac \d {\d a} \int_0^\infty \frac \partial {\partial a} \paren {\frac {e^{-a x} \paren {1 - \cos x} } {x^2} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds -\frac \d {\d a} \int_0^\infty \frac {e^{-a x} \paren {1 - \cos x} } x \rd x\)





Derivative of $e^{a x}$














\(\ds \)

\(=\)







\(\ds -\int_0^\infty \frac \partial {\partial a} \paren {\frac {e^{-a x} \paren {1 - \cos x} } x} \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-a x} \paren {1 - \cos x} \rd x\)





Derivative of $e^{a x}$














\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-a x} \rd x - \int_0^\infty e^{-a x} \cos x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {-\frac {e^{-a x} } a} 0 \infty - \frac a {a^2 + 1}\)





Primitive of $e^{a x}$, Definite Integral to Infinity of $e^{-a x} \cos b x$














\(\ds \)

\(=\)







\(\ds \frac 1 a - \frac a {a^2 + 1}\)





Exponential of Zero, Exponential Tends to Zero and Infinity




We then have, from Primitive of $\dfrac 1 x$ and Primitive of $\dfrac x {x^2 + a^2}$:

$\ds \map {I'} a = \ln a - \frac 1 2 \map \ln {a^2 + 1} + C$
for some constant $C \in \R$. 

Note that: 














\(\ds \lim_{a \mathop \to \infty} \map {I'} a\)

\(=\)







\(\ds \lim_{a \mathop \to \infty} \int_0^\infty \frac {e^{-a x} \cos x} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac 0 x \rd x\)




















\(\ds \)

\(=\)







\(\ds 0\)










On the other hand: 














\(\ds \lim_{a \mathop \to \infty} \map {I'} a\)

\(=\)







\(\ds \lim_{a \mathop \to \infty} \paren {\ln a - \frac 1 2 \map \ln {a^2 + 1} + C}\)




















\(\ds \)

\(=\)







\(\ds C + \lim_{a \mathop \to \infty} \paren {\map \ln {\frac a {\sqrt {a^2 + 1} } } }\)





Logarithm of Power, Difference of Logarithms














\(\ds \)

\(=\)







\(\ds C + \lim_{a \mathop \to \infty} \paren {\map \ln {\frac 1 {\sqrt {1 + \frac 1 {a^2} } } } }\)




















\(\ds \)

\(=\)







\(\ds C + \ln 1\)




















\(\ds \)

\(=\)







\(\ds C\)





Logarithm of 1 is 0



so:

$\ds \map {I'} a = \ln a - \frac 1 2 \map \ln {a^2 + 1}$

We have: 














\(\ds \map I a\)

\(=\)







\(\ds \int \map {I'} a \rd a\)




















\(\ds \)

\(=\)







\(\ds \int \ln a \rd a - \frac 1 2 \int \map \ln {a^2 + 1} \rd a\)




















\(\ds \)

\(=\)







\(\ds a \ln a - a - \frac 1 2 \paren {a \map \ln {a^ 2 + 1} - 2 a + 2 \arctan a} + C_2\)





Primitive of $\ln x$, Primitive of $\map \ln {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds a \ln a - a - \frac 1 2 a \map \ln {a^2 + 1} + a - \arctan a + C_2\)




















\(\ds \)

\(=\)







\(\ds a \ln a - \frac 1 2 a \map \ln {a^2 + 1} - \arctan a + C_2\)









for some constant $C_2 \in \R$.

Similarly we have: 














\(\ds \lim_{a \mathop \to \infty} \int_0^\infty \frac {e^{-a x} \paren {1 - \cos x} } {x^2} \rd x\)

\(=\)







\(\ds \int_0^\infty \frac 0 {x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds 0\)










On the other hand:














\(\ds \lim_{a \mathop \to \infty} \map I a\)

\(=\)







\(\ds \lim_{a \mathop \to \infty} \map \ln {\frac {a^a} {\paren {\sqrt {a^2 + 1} }^a} } - \lim_{a \mathop \to \infty} \paren {\arctan a} + C_2\)




















\(\ds \)

\(=\)







\(\ds \lim_{a \mathop \to \infty} \map \ln {\frac 1 {\paren {\sqrt {1 + \frac 1 {a^2} } }^a} } - \frac \pi 2 + C_2\)





Limit of Arctangent Function














\(\ds \)

\(=\)







\(\ds C_2 - \frac \pi 2\)










We hence have: 














\(\ds \map I a\)

\(=\)







\(\ds a \ln a - \frac 1 2 a \map \ln {a^2 + 1} + \paren {\frac \pi 2 - \arctan a}\)




















\(\ds \)

\(=\)







\(\ds a \ln a - \frac 1 2 a \map \ln {a^2 + 1} + \arccot a\)





Arccotangent Function in terms of Arctangent



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.89$




