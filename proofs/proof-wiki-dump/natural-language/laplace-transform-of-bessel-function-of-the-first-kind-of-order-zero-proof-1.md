# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Bessel_Function_of_the_First_Kind_of_Order_Zero/Proof_1

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







\(\ds \laptrans {\sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {\paren {k!}^2} \paren {\dfrac t 2}^{2 k} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {2^{2 k} \paren {k!}^2} \laptrans {t^{2 k} }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {2^{2 k} \paren {k!}^2} \dfrac {\paren {2 k}!} {s^{2 k + 1} }\)





Laplace Transform of Positive Integer Power














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {\dfrac 1 2}^{2 k} \dbinom {2 k} k \dfrac 1 {s^{2 k + 1} }\)





Definition of Binomial Coefficient: $\dbinom {2 k} k = \dfrac {\paren {2 k}!} {\paren {k!}^2}$




Then:














\(\ds \dfrac 1 {\sqrt {s^2 + 1} }\)

\(=\)







\(\ds \dfrac 1 {\sqrt {s^2} \sqrt {1 + \paren {1 / s}^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 s \paren {1 + \paren {\dfrac 1 s}^2}^{-1/2}\)





Definition of Rational Power














\(\ds \)

\(=\)







\(\ds \dfrac 1 s \sum_{k \mathop = 0}^\infty \dbinom {-1/2} k \paren {\dfrac 1 s}^{2 k}\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \dfrac 1 s \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {4^k} \dbinom {2 k} k \paren {\dfrac 1 s}^{2 k}\)





Binomial Coefficient of Minus Half














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \dfrac 1 {2^{2 k} } \dbinom {2 k} k \paren {\dfrac 1 {s^{2 k + 1} } }\)





rearranging, and bringing $\dfrac 1 s$ inside the summation














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {\dfrac 1 2}^{2 k} \dbinom {2 k} k \dfrac 1 {s^{2 k + 1} }\)





further rearrangement



The two expressions match, and the result follows.
$\blacksquare$





