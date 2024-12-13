# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Bessel_Function_of_the_First_Kind_of_Order_Zero/Proof_3

Theorem
Let $J_0$ denote the Bessel function of the first kind of order $0$.

Then the Laplace transform of $J_0$ is given as:

$\laptrans {\map {J_0} t} = \dfrac 1 {\sqrt {s^2 + 1} }$


Proof
By definition of Bessel function of the first kind, $\map {J_0} t$ satisfies Bessel's equation:














\(\ds t^2 \, \map {\dfrac {\d^2} {\d t^2} } {\map {J_0} t} + t \, \map {\dfrac \d {\d t} } {\map {J_0} t} + \paren {t^2 - 0^2} {\map {J_0} t}\)

\(=\)







\(\ds 0\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds t \, {\map {J_0} t} + \map {J_0'} t + t \, \map {J_0} t\)

\(=\)







\(\ds 0\)










From Laplace Transform of Derivative:

$\laptrans {\map {J_0'} t} = s \laptrans {\map {J_0} t} - \map {J_0} 0$
and from Laplace Transform of Second Derivative:

$\laptrans {\map {J_0} t} = s^2 \laptrans {\map {J_0} t} - s \, \map {J_0} 0 - \map {J_0'} 0$

From Bessel Function of the First Kind of Order $0$:

$\map {J_0} t = 1 - \dfrac {t^2} {2^2} + \dfrac {t^4} {2^2 \times 4^2} - \dfrac {t^6} {2^2 \times 4^2 \times 6^2} + \dotsb$
from which it follows immediately that:

$\map {J_0} 0 = 1$

From Derivative of Bessel Function of the First Kind of Order $0$ we have:


This theorem requires a proof.In particular: Derivative of Bessel Function of the First Kind of Order 0You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
from which it follows that:

$\map {J'_0} 0 = 0$

Then from Derivative of Laplace Transform:














\(\ds \laptrans {t \, \map {J_0} t}\)

\(=\)







\(\ds -\map {\dfrac \d {\d s} } {\map {J_0} t}\)




















\(\ds \)

\(=\)







\(\ds -\map {\dfrac \d {\d s} } {s^2 \, \map {J_0} t - s \, \map {J_0} 0 - \map {J_0'} 0}\)




















\(\ds \)

\(=\)







\(\ds -\map {\dfrac \d {\d s} } {s^2 \, \map {J_0} t - s}\)





$\map {J_0} 0 = 1$ and $\map {J'_0} 0 = 0$




and:

$\laptrans {t \map {J_0} t} = -\map {\dfrac \d {\d s} } {\map {J_0} t}$

Thus by taking the Laplace transform of $(1)$ we have:

Let $y = \laptrans {\map {J_0} t}$.















\(\ds \laptrans {t \, {\map {J_0} t} + \map {J_0'} t + t \, \map {J_0} t}\)

\(=\)







\(\ds \laptrans 0\)














\(\ds \leadsto \ \ \)





\(\ds -\map {\dfrac \d {\d s} } {s^2 \, \laptrans {\map {J_0} t} - s} + \paren {s \laptrans {\map {J_0} t} - \map {J_0} 0} - \map {\dfrac \d {\d s} } {\map {J_0} t}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -\map {\dfrac \d {\d s} } {s^2 y - s} + \paren {s y - 1} - \dfrac {\d y} {\d s}\)

\(=\)







\(\ds 0\)





setting $y = \laptrans {\map {J_0} t}$ and noting that $\map {J_0} 0 = 1$ from above








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d s}\)

\(=\)







\(\ds -\dfrac {s y} {s^2 + 1}\)





rearranging and simplifying








\(\ds \leadsto \ \ \)





\(\ds \int \dfrac {\d y} y\)

\(=\)







\(\ds -\int \dfrac {s \rd s} {s^2 + 1}\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac c {\sqrt {s^2 + 1} }\)





for some constant $c$




Now we have that:














\(\ds \lim_{s \mathop \to \infty} s \, \map y s\)

\(=\)







\(\ds \lim_{s \mathop \to \infty} \dfrac {c s} {\sqrt {s^2 + 1} }\)




















\(\ds \)

\(=\)







\(\ds c\)









and:

$\ds \lim_{t \mathop \to 0} \map {J_0} t = 1$

Thus by the Initial Value Theorem of Laplace Transform:

$c = 1$
and so:

$\laptrans {t \, \map {J_0} t} = \dfrac 1 {\sqrt {s^2 + 1} }$
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Bessel Functions: $34 \ \text{(a)}$




