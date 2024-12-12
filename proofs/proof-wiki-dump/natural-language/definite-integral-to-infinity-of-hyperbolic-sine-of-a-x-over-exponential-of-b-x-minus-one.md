# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Hyperbolic_Sine_of_a_x_over_Exponential_of_b_x_minus_One

Theorem
$\ds \int_0^\infty \frac {\sinh a x} {e^{b x} - 1} \rd x = \frac 1 {2 a} - \frac \pi {2 b} \cot \frac {a \pi} b$
where:

$a$ and $b$ are positive real numbers with $b > a$
$\cot$ denotes the cotangent function.


Proof













\(\ds \int_0^\infty \frac {\sinh a x} {e^{b x} - 1} \rd x\)

\(=\)







\(\ds \frac 1 2 \int_0^\infty \frac {e^{-b x} \paren {e^{a x} - e^{-a x} } } {1 - e^{-b x} }\)





Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_0^\infty \paren {e^{\paren {a - b} x} - e^{-\paren {a + b} x} } \sum_{n \mathop = 0}^\infty e^{-n b x}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \int_0^\infty \paren {e^{\paren {a - \paren {n + 1} b} x} - e^{-\paren {a + \paren {n + 1} b} x} } \rd x\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \paren {\intlimits {\frac {e^{\paren {a - \paren {n + 1} b} x} } {a - \paren {n + 1} b} } 0 \infty - \intlimits {-\frac {e^{-\paren {a + \paren {n + 1} b} x} } {a + \paren {n + 1} b} } 0 \infty}\)





Derivative of Exponential of a x



Note that as $b > a$, we have that $a - b < 0$.
As $b > 0$, we therefore have $a - \paren {n + 1} b < 0$ for all positive integer $n$.
We also have that as $a + \paren {n + 1} b > 0$, that $-\paren {a + \paren {n + 1} b} < 0$.
So, by Exponential Tends to Zero and Infinity: 

$\ds \lim_{x \mathop \to \infty} \frac {e^{\paren {a - \paren {n + 1} b} x} } {a - \paren {n + 1} b} = 0$
and: 

$\ds \lim_{x \mathop \to \infty} \frac {e^{-\paren {a + \paren {n + 1} b} x} } {a + \paren {n + 1} b} = 0$
We therefore have: 














\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \paren {\intlimits {\frac {e^{\paren {a - \paren {n + 1} b} x} } {a - \paren {n + 1} b} } 0 \infty - \intlimits {-\frac {e^{-\paren {a + \paren {n + 1} b} x} } {a + \paren {n + 1} b} } 0 \infty}\)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 0}^\infty \paren {\frac 1 {\paren {n + 1} b - a} - \frac 1 {\paren {n + 1} b + a} }\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac a {\paren {n + 1}^2 b^2 - a^2}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds -\frac 1 b \sum_{n \mathop = 1}^\infty \frac {\paren {\frac a b} } {\paren {\frac a b}^2 - n^2}\)





shifting the index, extracting factors



By Mittag-Leffler Expansion for Cotangent Function, we have: 

$\ds \pi \cot \pi z = \frac 1 z + 2 \sum_{n \mathop = 1}^\infty \frac z {z^2 - n^2}$
where $z$ is not an integer. 
Setting $z = \dfrac a b$, we have: 

$\ds \pi \cot \frac {\pi a} b = \frac b a + 2 \sum_{n \mathop = 1}^\infty \frac {\paren {\frac a b} } {\paren {\frac a b}^2 - n^2}$
Rearrangement gives:

$\ds \frac \pi 2 \cot \frac {\pi a} b - \frac b {2 a} = \sum_{n \mathop = 1}^\infty \frac {\paren {\frac a b} } {\paren {\frac a b}^2 - n^2}$
So: 














\(\ds \int_0^\infty \frac {\sinh a x} {e^{b x} - 1} \rd x\)

\(=\)







\(\ds -\frac 1 b \sum_{n \mathop = 1}^\infty \frac {\paren {\frac a b} } {\paren {\frac a b}^2 - n^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} - \frac \pi {2 b} \cot \frac {a \pi} b\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.117$




