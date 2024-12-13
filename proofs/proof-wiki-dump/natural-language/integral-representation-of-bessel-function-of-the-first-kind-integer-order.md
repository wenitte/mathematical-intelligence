# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Bessel_Function_of_the_First_Kind/Integer_Order

Theorem
Let $\map {J_n} x$ denote the Bessel function of the first kind of order $n$.
Let $n \in \Z$ be an integer.
Then:

$\ds \map {J_n} x = \dfrac 1 \pi \int_0^\pi \map \cos {n \theta - x \sin \theta} \rd \theta$


Proof













\(\ds \map \exp {\dfrac x 2 \paren {t - \dfrac 1 t} }\)

\(=\)







\(\ds \sum_{m \mathop = -\infty}^\infty \map {J_m} x t^m\)





Generating Function for Bessel Function of the First Kind of Order n of x














\(\ds \dfrac 1 {2 \pi i} \int_C t^{-n - 1} \map \exp {\dfrac x 2 \paren {t - \dfrac 1 t} } \rd t\)

\(=\)







\(\ds \dfrac 1 {2 \pi i} \int_C t^{-n - 1} \sum_{n \mathop = - \infty}^\infty \map {J_m} x t^m \rd t\)





where $C$ denotes a contour encircling the origin once














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = - \infty}^\infty \dfrac {\map {J_m} x} {2 \pi i} \int_C t^{m - n - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map {J_n} x} {2 \pi i} 2 \pi i\)





Cauchy's Residue Theorem














\(\ds \)

\(=\)







\(\ds \map {J_n} x\)










Take $C$ to be the unit circle.
Write $t = e^{-i \theta}$ and let $\theta$ be decreasing from $\pi$ to $-\pi$, so that we integrate along $C$ anticlockwise.
Then:








\(\ds \leadsto \ \ \)





\(\ds \map {J_n} x\)

\(=\)







\(\ds \dfrac 1 {2 \pi i} \int_\pi^{-\pi} e^{-i \theta \paren {-n - 1} } \map \exp {\dfrac x 2 \paren {e^{-i \theta} - e^{i \theta} } } \rd e^{-i \theta}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi} \int_{-\pi}^\pi \map \exp {- x i \sin \theta + i n \theta} \rd \theta\)





Sine in terms of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi} \paren {\int_0^\pi \map \exp {i n \theta - i x \sin \theta} \rd \theta + \int_{-\pi}^0 \map \exp {i n \theta - i x \sin \theta} \rd \theta}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi} \paren {\int_0^\pi \map \exp {i n \theta - i x \sin \theta} \rd \theta - \int_\pi^0 \map \exp {i n \paren {-\theta} - i x \map \sin {-\theta} } \rd \theta}\)





substitution of $-\theta$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi} \paren {\int_0^\pi \map \exp {i n \theta - i x \sin \theta} \rd \theta + \int_0^\pi \map \exp {-\paren {i n \theta - i x \sin \theta} } \rd \theta}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 \pi \int_0^\pi \map \cos {n \theta - x \sin \theta} \rd \theta\)





Cosine in terms of Hyperbolic Cosine



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 24$: Bessel Functions: Integral Representations for Bessel Functions: $24.99$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Bessel functions
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Bessel functions




