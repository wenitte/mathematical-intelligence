# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Cosine_of_a_x_over_Hyperbolic_Cosine_of_b_x

Theorem
$\ds \int_0^\infty \frac {\cos a x} {\cosh b x} \rd x = \frac \pi {2 b} \sech \frac {a \pi} {2 b}$
where:

$a$ and $b$ are positive real numbers
$\sech$ denotes the hyperbolic secant function.


Proof













\(\ds \int_0^\infty \frac {\cos a x} {\cosh b x} \rd x\)

\(=\)







\(\ds \int_0^\infty \frac {e^{-b x} \paren {e^{i a x} + e^{-i a x} } } {1 - \paren {-e^{-2 b x} } } \rd x\)





Euler's Cosine Identity, Definition of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {e^{\paren {i a - b} x} + e^{-\paren {i a + b} x} } \paren {\sum_{n \mathop = 0}^\infty \paren {-1}^n e^{-2 n b x} } \rd x\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \int_0^\infty \paren {-1}^n \paren {e^{\paren {i a - \paren {2 n + 1} b} x} + e^{-\paren {i a + \paren {2 n + 1} b} x} } \rd x\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {\intlimits {-\frac {e^{\paren {i a - \paren {2 n + 1} b} x} } {\paren {2 n + 1} b - i a} } 0 \infty + \intlimits {-\frac {e^{-\paren {i a + \paren {2 n + 1} b} x} } {\paren {2 n + 1} + i a} } 0 \infty}\)





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














\(\ds \)

\(\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {\intlimits {-\frac {e^{\paren {i a - \paren {2 n + 1} b} x} } {\paren {2 n + 1} b - i a} } 0 \infty + \intlimits {-\frac {e^{-\paren {i a + \paren {2 n + 1} b} x} } {\paren {2 n + 1} + i a} } 0 \infty}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {\frac 1 {\paren {2 n + 1} b - i a} + \frac 1 {\paren {2 n + 1} b + i a} }\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {\frac {2 \paren {2 n + 1} b} {\paren {2 n + 1}^2 b^2 + a^2} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac 2 b \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {2 n + 1} {\paren {2 n + 1} + 4 \paren {\frac a {2 b} }^2}\)










By Mittag-Leffler Expansion for Hyperbolic Secant Function:

$\ds \pi \map \sech {\pi z} = 4 \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {2 n + 1} {\paren {2 n + 1} + 4 z^2}$
Setting $z = \dfrac a {2 b}$ gives: 

$\ds \pi \map \sech {\frac {a \pi} {2 b} } = 4 \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {2 n + 1} {\paren {2 n + 1} + 4 \paren {\frac a {2 b} }^2}$

We therefore have: 














\(\ds \int_0^\infty \frac {\cos a x} {\cosh b x} \rd x\)

\(=\)







\(\ds \frac 2 b \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {2 n + 1} {\paren {2 n + 1} + 4 \paren {\frac a {2 b} }^2}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi {2 b} \sech \frac {a \pi} {2 b}\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.113$




