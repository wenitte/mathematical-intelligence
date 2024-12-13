# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Bessel_Function_of_the_First_Kind_of_Order_Zero/Proof_2

Theorem
Let $J_0$ denote the Bessel function of the first kind of order $0$.

Then the Laplace transform of $J_0$ is given as:

$\laptrans {\map {J_0} t} = \dfrac 1 {\sqrt {s^2 + 1} }$


Proof
From Bessel Function of the First Kind of Order Zero:














\(\ds \map {J_0} t\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {\paren {k!}^2} \paren {\dfrac t 2}^{2 k}\)




















\(\ds \)

\(=\)







\(\ds 1 - \dfrac {t^2} {2^2} + \dfrac {t^4} {2^2 \times 4^2} - \dfrac {t^6} {2^2 \times 4^2 \times 6^2} + \dotsb\)










Hence:














\(\ds \laptrans {\map {J_0} t}\)

\(=\)







\(\ds \dfrac 1 s - \dfrac 1 {2^2} \dfrac {2!} {s^3} + \dfrac 1 {2^2 4^2} \dfrac {4!} {s^5} - \dfrac 1 {2^2 4^2 6^2} \dfrac {6!} {s^7} + \dotsb\)





Laplace Transform of Positive Integer Power














\(\ds \)

\(=\)







\(\ds \dfrac 1 s \paren {1 - \dfrac 1 2 \paren {\dfrac 1 {s^2} } + \dfrac {1 \times 3} {2 \times 4} \paren {\dfrac 1 {s^4} } - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \paren {\dfrac 1 {s^6} } + \dotsb}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 s \paren {\paren {1 - \dfrac 1 {s^2} } ^{-1/2} }\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {s^2 + 1} }\)





simplifying



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Bessel Functions: $34 \ \text{(a)}$




