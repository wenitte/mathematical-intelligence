# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_t_by_Sine_a_t/Proof_2

Theorem
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {t \sin a t} = \dfrac {2 a s} {\paren {s^2 + a^2}^2}$


Proof
We have:














\(\ds \laptrans {\cos a t}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \cos a t \rd t\)





Definition of Laplace Transform




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac s {s^2 + a^2}\)





Laplace Transform of Cosine




Hence:














\(\ds \dfrac \d {\d a} \int_0^\infty e^{-s t} \cos a t \rd t\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \paren {\map {\dfrac \partial {\partial a} } {\cos a t} } \rd t\)





Derivative of Integral














\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-s t} \paren {-t \sin a t} \rd t\)





Derivative of Cosine Function














\(\ds \)

\(=\)







\(\ds -\laptrans {t \sin a t}\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d a} } {\dfrac s {s^2 + a^2} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds -\dfrac {2 a s} {\paren {s^2 + a^2}^2}\)





Quotient Rule for Derivatives



and the result follows.
$\blacksquare$



This article, or a section of it, needs explaining.In particular: I know we have that result Derivative of Integral somewhere, I just can't find it. Spiegel calls it Leibnitz's Rule (not mis-spelling) but I know we have it as something else.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Multiplication by Powers of $t$: $20 \ \text{(a)}$




