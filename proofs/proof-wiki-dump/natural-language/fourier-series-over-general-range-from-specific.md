# 

Source: https://proofwiki.org/wiki/Fourier_Series_over_General_Range_from_Specific

Theorem
Let $a, b \in \R$ be real numbers.
Let $f: \R \to \R$ be a function such that $\ds \int_a^b \map f x \rd x$ converges absolutely.

Then $f$ can be expressed by a Fourier series of the form:

$\ds \frac {A_0} 2 + \sum_{m \mathop = 1}^\infty \paren {A_m \cos \frac {2 m \pi \paren {x - a} } {b - a} + B_m \sin \frac {2 m \pi \paren {x - a} } {b - a} }$

where:














\(\ds A_m\)

\(=\)







\(\ds \dfrac 2 {b - a} \int_a^b \map f x \cos \frac {2 m \pi \paren {x - a} } {b - a} \rd x\)




















\(\ds B_m\)

\(=\)







\(\ds \dfrac 2 {b - a} \int_a^b \map f x \sin \frac {2 m \pi \paren {x - a} } {b - a} \rd x\)











Proof
Consider the Fourier series:

$(1): \quad \ds \map S x = \frac {A_0} 2 + \sum_{m \mathop = 1}^\infty \paren {A_m \cos \frac {2 m \pi \paren {x - a} } {b - a} + B_m \sin \frac {2 m \pi \paren {x - a} } {b - a} }$
Let $\xi = \dfrac {2 \pi \paren {x - a} } {b - a}$.
Then:

$\dfrac {\d \xi} {\d x} = \dfrac {2 \pi} {b - a}$
Then:














\(\ds x\)

\(=\)







\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds \xi\)

\(=\)







\(\ds \dfrac {2 \pi \paren {a - a} } {b - a}\)




















\(\ds \)

\(=\)







\(\ds 0\)










and:














\(\ds x\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds \xi\)

\(=\)







\(\ds \dfrac {2 \pi \paren {b - a} } {b - a}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi\)










Substituting $\xi$ for $x$ in $(1)$:

$(2): \quad \map S \xi = \dfrac {A_0} 2 + \ds \sum_{m \mathop = 1}^\infty \paren {A_m \cos m \xi + B_m \sin m \xi}$
which is a Fourier series for a real function $\map g \xi$ such that $\ds \int_0^{2 \pi} \map g \xi \rd x$ converges absolutely.

The Fourier coefficients of $\map g \xi$ are given by:














\(\ds A_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_0^{2 \pi} \map g \xi \cos n \xi \rd \xi\)




















\(\ds B_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_0^{2 \pi} \map g \xi \sin n \xi \rd \xi\)










Substituting $x$ for $\xi$:














\(\ds A_n\)

\(=\)







\(\ds \dfrac 1 \pi \dfrac {2 \pi} {b - a} \int_a^b \map g x \cos n \dfrac {2 \pi \paren {x - a} } {b - a} \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {b - a} \int_a^b \map g x \cos \dfrac {2 n \pi \paren {x - a} } {b - a} \rd x\)









and:














\(\ds B_n\)

\(=\)







\(\ds \dfrac 1 \pi \dfrac {2 \pi} {b - a} \int_a^b \map g x \sin n \dfrac {2 \pi \paren {x - a} } {b - a} \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {b - a} \int_a^b \map g x \sin \dfrac {2 n \pi \paren {x - a} } {b - a} \rd x\)










Thus while $A_n$ and $B_n$ are exactly the Fourier coefficients of $\map g \xi$, they are also exactly the Fourier coefficients of $\map S x$.
Thus $\map S x$ is the Fourier series for $\map f x$.
$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 7$. Fourier Series over a General Range $\tuple {a, b}$




