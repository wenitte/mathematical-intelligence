# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-a_x%5E2_by_Cosine_of_b_x

Theorem
$\ds \int_0^\infty e^{-a x^2} \cos b x \rd x = \frac 1 2 \sqrt {\frac \pi a} \map \exp {-\frac {b^2} {4 a} }$
where $a$ is a strictly positive real number.


Proof
Fix $a$ and define: 

$\ds \map I b = \int_0^\infty e^{-a x^2} \cos b x \rd x$
for all $b \in \R$. 
Then, we have: 














\(\ds \map {I'} b\)

\(=\)







\(\ds \frac \d {\d b} \paren {\int_0^\infty e^{-a x^2} \cos b x \rd x}\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial b} \paren {e^{-a x^2} \cos b x} \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds -\int_0^\infty \paren {x e^{-a x^2} } \sin b x \rd x\)





Derivative of $\cos a x$














\(\ds \)

\(=\)







\(\ds -\paren {\intlimits {-\frac 1 {2 a} e^{-a x^2} \sin b x} 0 \infty - b \int_0^\infty \paren {-\frac 1 {2 a} e^{-a x^2} } \cos b x \rd x}\)





Integration by Parts



Note that: 














\(\ds \size {\frac 1 {2 a} e^{-a x^2} \sin b x}\)

\(\le\)







\(\ds \frac 1 {2 a} e^{-a x^2}\)





noting that $\size {\sin x} \le 1$














\(\ds \)

\(\to\)







\(\ds 0\)





Exponential Tends to Zero and Infinity



So:














\(\ds -\paren {\intlimits {-\frac 1 {2 a} e^{-a x^2} \sin b x} 0 \infty - b \int_0^\infty \paren {-\frac 1 {2 a} e^{-a x^2} } \cos b x \rd x}\)

\(=\)







\(\ds -\frac b {2 a} \int_0^\infty e^{-a x^2} \cos b x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac b {2 a} \map I b\)









We then have: 

$\dfrac {\map {I'} b} {\map I b} = -\dfrac b {2 a}$
Integrating, by Primitive of Function under its Derivative and Primitive of Constant:

$\ln \size {\map I b} = -\dfrac {b^2} {4 a} + C$
for some $C \in \R$.


This needs considerable tedious hard slog to complete it.In particular: This obviously only gives us an expression for $\ln \size {\map I b}$, we then need to determine that $\map I b > 0$ which seems nontrivialTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
So: 

$\map I b = A \map \exp {-\dfrac {b^2} {4 a} }$
for some $A \in \R$.
We have: 














\(\ds \map I 0\)

\(=\)







\(\ds \int_0^\infty e^{-a x^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \sqrt {\frac \pi a}\)





Definite Integral to Infinity of $e^{-a x^2}$



on the other hand we have: 














\(\ds \map I 0\)

\(=\)







\(\ds A \map \exp 0\)




















\(\ds \)

\(=\)







\(\ds A\)





Exponential of Zero



So we have: 

$\ds\map I b = \int_0^\infty e^{-a x^2} \cos b x \rd x = \frac 1 2 \sqrt {\frac \pi a} \map \exp {-\frac {b^2} {4 a} }$
for all $b \in \R$ as required.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.73$




