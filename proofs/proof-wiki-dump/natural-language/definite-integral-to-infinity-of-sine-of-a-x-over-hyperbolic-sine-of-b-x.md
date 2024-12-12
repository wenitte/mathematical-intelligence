# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Sine_of_a_x_over_Hyperbolic_Sine_of_b_x

Theorem
$\ds \int_0^\infty \frac {\sin a x} {\sinh b x} \rd x = \frac \pi {2 b} \tanh \frac {a \pi} {2 b}$
where:

$a$ and $b$ are positive real numbers
$\tanh$ denotes the hyperbolic cotangent function.


Proof













\(\ds \int_0^\infty \frac {\sin a x} {\sinh b x} \rd x\)

\(=\)







\(\ds \frac 1 i \int_0^\infty \frac {e^{-b x} \paren {e^{i a x} - e^{-i a x} } } {1 - e^{-2 b x} } \rd x\)





Euler's Sine Identity, Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac 1 i \int_0^\infty \paren {e^{\paren {i a - b} x} - e^{-\paren {i a + b} x} } \paren {\sum_{n \mathop = 0}^\infty e^{-2 n b x} } \rd x\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac 1 i \sum_{n \mathop = 0}^\infty \int_0^\infty \paren {e^{\paren {i a - \paren {2 n + 1} b} x} - e^{-\paren {i a + \paren {2 n + 1} b} x} } \rd x\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 i \sum_{n \mathop = 0}^\infty \paren {\intlimits {-\frac {e^{\paren {i a - \paren {2 n + 1} b} x} } {\paren {2 n + 1} b - i a} } 0 \infty - \intlimits {-\frac {e^{-\paren {i a + \paren {2 n + 1} b} x} } {\paren {2 n + 1} b + i a} } 0 \infty}\)





Primitive of $e^{a x}$



We have, as $b, n > 0$:














\(\ds \size {\lim_{x \mathop \to \infty} e^{\paren {i a - \paren {2 n + 1} b} x} }\)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \size {e^{\paren {i a - \paren {2 n + 1} b} x} }\)





Modulus of Limit














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \size {e^{i a x} } \size {e^{-\paren {2 n + 1} b x} }\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} e^{-\paren {2 n + 1} b x}\)




















\(\ds \)

\(=\)







\(\ds 0\)





Exponential Tends to Zero and Infinity



We similarly have:














\(\ds \size {\lim_{x \mathop \to \infty} e^{-\paren {i a + \paren {2 n + 1} b} x} }\)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \size {e^{-\paren {i a + \paren {2 n + 1} b} x} }\)





Modulus of Limit














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \size {e^{-i a x} } \size {e^{-\paren {2 n + 1} b x} }\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} e^{-\paren {2 n + 1} b x}\)




















\(\ds \)

\(=\)







\(\ds 0\)





Exponential Tends to Zero and Infinity



So:














\(\ds \frac 1 i \sum_{n \mathop = 0}^\infty \paren {\intlimits {-\frac {e^{\paren {i a - \paren {2 n + 1} b} x} } {\paren {2 n + 1} b - i a} } 0 \infty - \intlimits {-\frac {e^{-\paren {i a + \paren {2 n + 1} b} x} } {\paren {2 n + 1} b + i a} } 0 \infty}\)

\(=\)







\(\ds \frac 1 i \sum_{n \mathop = 0}^\infty \paren {\frac 1 {\paren {2 n + 1} b - i a} - \frac 1 {\paren {2 n + 1} b + i a} }\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds \frac 1 i \sum_{n \mathop = 0}^\infty \frac {2 i a} {a^2 + \paren {2 n + 1}^2 b^2}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac 2 b \sum_{n \mathop = 0}^\infty \frac {\paren {\frac a b} } {\paren {\frac a b}^2 + \paren {2 n + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 4 b \sum_{n \mathop = 0}^\infty \frac {\paren {\frac a {2 b} } } {4 \paren {\frac a {2 b} }^2 + \paren {2 n + 1}^2}\)









By Mittag-Leffler Expansion for Hyperbolic Tangent Function, we have: 

$\ds \pi \map \tanh {\pi z} = 8 \sum_{n \mathop = 0}^\infty \frac z {4 z^2 + \paren {2 n + 1}^2}$
where $z$ is not a half-integer multiple of $i$. 
Setting $z = \dfrac a {2 b}$ gives: 

$\ds \pi \map \tanh {\frac {a \pi} {2 b} } = 8 \sum_{n \mathop = 0}^\infty \frac {\paren {\frac a {2 b} } } {4 \paren {\frac a {2 b} }^2 + \paren {2 n + 1}^2}$
Therefore: 














\(\ds \int_0^\infty \frac {\sin a x} {\sinh b x} \rd x\)

\(=\)







\(\ds \frac 4 b \sum_{n \mathop = 0}^\infty \frac {\paren {\frac a {2 b} } } {4 \paren {\frac a {2 b} }^2 + \paren {2 n + 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi {2 b} \map {\tanh} {\frac {a \pi} {2 b} }\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.112$




