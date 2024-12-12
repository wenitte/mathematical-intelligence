# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Pi_of_Logarithm_of_a_plus_b_Cosine_x

Theorem
$\ds \int_0^\pi \map \ln {a + b \cos x} \rd x = \pi \map \ln {\frac {a + \sqrt {a^2 - b^2} } 2}$
where:

$b$ is a real number
$a$ is a positive real number with $a \ge \size b$.


Proof
Fix $b \in \R$ and define: 

$\ds \map I a = \int_0^\pi \map \ln {a + b \cos x} \rd x$
for $a \ge \size b$.
We have: 














\(\ds \map {I'} a\)

\(=\)







\(\ds \frac \d {\d a} \int_0^\pi \map \ln {a + b \cos x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\pi \frac \partial {\partial a} \paren {\map \ln {a + b \cos x} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \int_0^\pi \frac 1 {a + b \cos x} \rd x\)





Derivative of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_0^{2 \pi} \frac 1 {a + b \cos x} \rd x\)





Definite Integral of Even Function














\(\ds \)

\(=\)







\(\ds \frac \pi {\sqrt {a^2 - b^2} }\)





Definite Integral from $0$ to $2 \pi$ of $\dfrac 1 {a + b \cos x}$



So, by Primitive of $\sqrt {x^2 - a^2}$: Logarithm Form: 

$\map I a = \pi \map \ln {a + \sqrt {a^2 - b^2} } + C$
for all $a \ge \size b$, for some $C \in \R$.

We now investigate cases according to the sign of $b$. 

Let $b = 0$.
We have: 














\(\ds \map I a\)

\(=\)







\(\ds \pi \map \ln {a + \sqrt {a^2} } + C\)




















\(\ds \)

\(=\)







\(\ds \pi \map \ln {a + \size a} + C\)





Definition 2 of Absolute Value














\(\ds \)

\(=\)







\(\ds \pi \map \ln {2 a} + C\)





since $a \ge 0$



On the other hand: 














\(\ds \map I a\)

\(=\)







\(\ds \int_0^\pi \ln a \rd x\)




















\(\ds \)

\(=\)







\(\ds \pi \ln a\)





Primitive of Constant



So, by Sum of Logarithms:

$\pi \ln 2 + \pi \ln a + C = \pi \ln a$
so:

$C = -\pi \ln 2$
giving: 














\(\ds \int_0^\pi \map \ln {a + b \cos x} \rd x\)

\(=\)







\(\ds \pi \map \ln {a + \sqrt {a^2 - b^2} } - \pi \ln 2\)




















\(\ds \)

\(=\)







\(\ds \pi \map \ln {\frac {a + \sqrt {a^2 - b^2} } 2}\)





Difference of Logarithms



in the case $b = 0$.
$\Box$

Let $b > 0$.
Then: 














\(\ds \map I b\)

\(=\)







\(\ds \pi \map \ln {b + \sqrt {b^2 - b^2} } + C\)




















\(\ds \)

\(=\)







\(\ds \pi \ln b + C\)









On the other hand:














\(\ds \map I b\)

\(=\)







\(\ds \int_0^\pi \map \ln {b + b \cos x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\pi \ln b \rd x + \int_0^\pi \map \ln {1 + \cos x} \rd x\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \pi \ln b + \int_0^\pi \map \ln {2 \cos^2 \frac x 2} \rd x\)





Primitive of Constant, Double Angle Formula for Cosine: Corollary $1$














\(\ds \)

\(=\)







\(\ds \pi \ln b + \int_0^\pi \ln 2 \rd x + 2 \int_0^\pi \map \ln {\cos \frac x 2} \rd x\)





Sum of Logarithms, Logarithm of Power














\(\ds \)

\(=\)







\(\ds \pi \ln b + \pi \ln 2 + 4 \int_0^{\frac \pi 2} \map \ln {\cos u} \rd u\)





substituting $u = \dfrac x 2$














\(\ds \)

\(=\)







\(\ds \pi \ln b + \pi \ln 2 - 2 \pi \ln 2\)





Definite Integral from $0$ to $\dfrac \pi 2$ of $\map \ln {\cos x}$














\(\ds \)

\(=\)







\(\ds \pi \ln b - \pi \ln 2\)









giving: 

$C = -\pi \ln 2$
So we have: 

$\ds \int_0^\pi \map \ln {a + b \cos x} \rd x = \pi \map \ln {\frac {a + \sqrt {a^2 - b^2} } 2}$
in the case $b > 0$ too.
$\Box$

Let $b < 0$.
We have: 














\(\ds \map I {\size b}\)

\(=\)







\(\ds \pi \map \ln {\size b + \sqrt {\size b^2 - b^2} } + C\)




















\(\ds \)

\(=\)







\(\ds \pi \map \ln {\size b} + C\)









On the other hand:














\(\ds \map I {\size b}\)

\(=\)







\(\ds \int_0^\pi \map \ln {\size b + b \cos x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\pi \map \ln {\size b} \rd x + \int_0^\pi \map \ln {1 + \frac b {\size b} \cos x} \rd x\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \pi \ln {\size b} + \int_0^\pi \map \ln {1 - \cos x} \rd x\)





since $\dfrac b {\size b} = -1$ for $b < 0$ and using Primitive of Constant














\(\ds \)

\(=\)







\(\ds \pi \ln {\size b} + \int_0^\pi \map \ln {2 \sin^2 \frac x 2} \rd x\)





Double Angle Formula for Cosine: Corollary $2$














\(\ds \)

\(=\)







\(\ds \pi \ln \size b + \int_0^\pi \ln 2 \rd x + \int_0^\pi \map \ln {\sin^2 \frac x 2} \rd x\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \pi \ln \size b + \pi \ln 2 + 2 \int_0^\pi \map \ln {\sin \frac x 2} \rd x\)





Primitive of Constant, Logarithm of Power














\(\ds \)

\(=\)







\(\ds \pi \ln \size b + \pi \ln 2 + 4 \int_0^{\pi/2} \map \ln {\sin u} \rd u\)





substituting $u = \dfrac x 2$














\(\ds \)

\(=\)







\(\ds \pi \ln \size b + \pi \ln 2 - 2 \pi \ln 2\)





Definite Integral from $0$ to $\dfrac \pi 2$ of $\map \ln {\sin x}$














\(\ds \)

\(=\)







\(\ds \pi \ln \size b - \pi \ln 2\)









We have in this case: 

$C = -\pi \ln 2$
So we have: 

$\ds \int_0^\pi \map \ln {a + b \cos x} \rd x = \pi \map \ln {\frac {a + \sqrt {a^2 - b^2} } 2}$
in the case $b < 0$ too.
$\Box$

The result follows.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.107$




