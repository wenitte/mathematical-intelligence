# 

Source: https://proofwiki.org/wiki/Contour_Integral_of_Gamma_Function


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs to be tidied.In particular: throughoutPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Theorem
Let $\Gamma$ denote the gamma function.
Let $y$ be a (strictly) positive real number.

Then for any (strictly) positive real number $c$:

$\ds \frac 1 {2 \pi i} \int_{c - i \infty}^{c + i \infty} \map \Gamma t y^{-t} \rd t = e^{-y}$


Proof
Let $L$ be the rectangular contour with the vertices $c \pm i R$, $- N - \dfrac 1 2 \pm i R$.
We will take the Contour Integral of $\map \Gamma t y^{-t}$ about the rectangular contour $L$.
Note from Poles of Gamma Function, that the poles of this function are located at the non-positive integers.
Thus, by Cauchy's Residue Theorem:

$\ds \oint_L \map \Gamma t y^{-t} \rd z = 2 \pi i \sum_{k \mathop = 0}^N \map {\operatorname{Res} } {-k}$
Thus, we obtain:

$\ds \lim_{N \mathop \to \infty} \lim_{R \mathop \to \infty} \oint_L \map \Gamma t y^{-t} \rd z = 2 \pi i \sum_{k \mathop = 0}^\infty \map {\operatorname{Res} } {-k}$
From Residues of Gamma Function, we see that:

$\map {\operatorname{Res} } {-k} = \dfrac {\paren {-1}^k y^k} {k!}$
Which gives us: 














\(\ds \lim_{N \mathop \to \infty} \lim_{R \mathop \to \infty} \oint_L \map \Gamma t y^{-t} \rd t\)

\(=\)







\(\ds 2 \pi i \sum_{k \mathop = 0}^\infty \map {\operatorname{Res} } {-k}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi i \sum_{k \mathop = 0}^\infty \frac {\paren {-1}^k y^k} {k!}\)




















\(\ds \)

\(=\)







\(\ds 2 \pi i e^{-y}\)





Power Series Expansion for Exponential Function



We aim to show that the all but the right hand side of the rectangular contour go to $0$ as we take these limits, as our result follows readily from this.


This article, or a section of it, needs explaining.In particular: This should be made clearerYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
The top and bottom portions of the contour can be parameterized by:

$\map \gamma t = c \pm i R - t$
where $0 < t < c + N + \dfrac 1 2$. 


This article, or a section of it, needs explaining.In particular: A labelled diagram here would helpYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
The modulus of the contour integral is therefore given by:














\(\ds \cmod {\int_0^{c + N + \frac 1 2} \map \Gamma {\map \gamma t} y^{- \map \gamma t} \map {\gamma'} t \rd t}\)

\(=\)







\(\ds \cmod {\int_0^{c + N + \frac 1 2} \map \Gamma {c \pm i R - t} y^{-\paren {c \pm i R - t} } \rd t}\)




















\(\ds \)

\(=\)







\(\ds \cmod {y^{-\paren {c \pm i R} } } \cmod {\int_0^{c + N + \frac 1 2} \map \Gamma {c \pm i R - t} y^t \rd t}\)




















\(\ds \)

\(=\)







\(\ds y^{-c} \cmod {\int_0^{c + N + \frac 1 2} \map \Gamma {c \pm i R - t} y^t \rd t}\)









From Bound on Complex Values of Gamma Function, we have that: 














\(\ds \cmod {\map \Gamma {c \pm i R - t} y^t}\)

\(\le\)







\(\ds \frac {\cmod {c - t + i} } {\cmod {c - t + i R} } \cmod {\map \Gamma {c - t + i} y^t}\)





(1)



for all $\cmod R \ge 1$. Because $\cmod R \ge 1$, we have that














\(\ds \frac {\cmod {c - t + i} } {\cmod {c - t + i R} }\)

\(\le\)







\(\ds 1\)









Combining the two inequalities we obtain:













\(\ds \cmod {\map \Gamma {c \pm i R - t} y^t}\)

\(\le\)







\(\ds \cmod {\map \Gamma {c - t + i} y^t}\)





(2)



We see that:

$\ds \int_0^{c + N + \frac 1 2} \cmod {\map \Gamma {c- t + i} y^t} \rd t < \infty$
as the poles of Gamma are at the non-positive integers, which means that the integral is a definite integral of a continuous function. 


This article, or a section of it, needs explaining.In particular: I know you're referring to convergence here, but you should make it clearer.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code. 
The above is enough to allow for the interchange of limits by the Dominated Convergence Theorem, thus we have:














\(\ds \lim_{N \mathop \to \infty} \lim_{R \mathop \to \infty} y^{-c} \cmod {\int_0^{c + N + \frac 1 2} \map \Gamma {c \pm i R - t} y^t \rd t}\)

\(=\)







\(\ds \lim_{N \mathop \to \infty} y^{-c} \cmod {\int_0^{c + N + \frac 1 2} \lim_{R \mathop \to \infty} \map \Gamma {c \pm i R - t} y^t \rd t}\)









But using Equation $(1)$ from above we see:














\(\ds 0\)

\(\le\)







\(\ds \lim_{R \mathop \to \infty} \cmod {\map \Gamma {c \pm i R - t} y^t}\)




















\(\ds \)

\(\le\)







\(\ds \lim_{R \mathop \to \infty} \frac {\cmod {c - t + i} } {\cmod {c - t + i R} } \cmod {\map \Gamma {c - t + i} y^t}\)




















\(\ds \)

\(=\)







\(\ds 0\)









Thus by the Squeeze Theorem for Functions we have:

$\ds \lim_{R \mathop \to \infty} \cmod {\map \Gamma {c \pm i R - t} } = 0$
Which means we have:














\(\ds \lim_{N \mathop \to \infty} \lim_{R \mathop \to \infty} y^{-c} \cmod {\int_0^{c + N + \frac 1 2} \map \Gamma {c \pm i R - t} y^t \rd t}\)

\(=\)







\(\ds \lim_{N \mathop \to \infty} y^{-c} \cmod {\int_0^{c + N + \frac 1 2}  \lim_{R \mathop \to \infty} \map \Gamma {c \pm i R - t} y^t \rd t}\)




















\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} y^{-c} \cmod {\int_0^{c + N + \frac 1 2} 0 y^t \rd t}\)




















\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









Thus we have that the top and bottom of the contour go to $0$ in the limit. 

The left hand side of the contour may be parameterized by:

$\map \gamma t = N - \dfrac 1 2 - it$
where $t$ runs from $-R$ to $R$. 
Thus the absolute value of integral of the left hand side is given as:














\(\ds \cmod {\int_{-R}^R \map \Gamma {\map \gamma t} y^{- \map \gamma t} \map {\gamma'} t \rd t}\)

\(=\)







\(\ds \cmod {\int_{-R}^R \map \Gamma {- N - \frac 1 2 - i t} y^{- \paren {- N - \frac 1 2 - i t} } \paren {-i} \rd t}\)




















\(\ds \)

\(=\)







\(\ds \cmod {\int_{-R}^R \frac {\map \Gamma {- N + \frac 3 2 - i t} } {\paren {- N - \frac 1 2 - i t} \paren {- N + \frac 1 2 - i t} } y^{- \paren {- N - \frac 1 2 - i t} } \paren {-i} \rd t}\)





Gamma Difference Equation














\(\ds \)

\(\le\)







\(\ds \int_{-R}^R \cmod {\frac {\map \Gamma {- N + \frac 3 2 - i t} } {\paren {- N - \frac 1 2 - i t} \paren {- N + \frac 1 2 - i t} } y^{- \paren {- N - \frac 1 2 - i t} } \paren {-i} } \rd t\)





Modulus of Complex Integral














\(\ds \)

\(=\)







\(\ds \int_{-R}^R \cmod {\frac {\map \Gamma {- N + \frac 3 2 - i t} } {\paren {- N - \frac 1 2 - i t} \paren {- N + \frac 1 2 - i t} } y^{N + \frac 1 2} } \rd t\)




















\(\ds \)

\(\le\)







\(\ds \int_{-R}^R \frac {\cmod {\map \Gamma {- N + \frac 3 2} } } {\cmod {\paren {- N - \frac 1 2 -i t} \paren {- N + \frac 1 2 - i t} } } y^{N + \frac 1 2} \rd t\)





See equation (2) above














\(\ds \)

\(=\)







\(\ds \cmod {\map \Gamma {- N + \frac 3 2} } y^{N + \frac 1 2} \int_{-R}^R \frac 1 {\cmod {\paren {- N - \frac 1 2 -i t} \paren {- N + \frac 1 2 - i t} } } \rd t\)




















\(\ds \)

\(\le\)







\(\ds \cmod {\map \Gamma {- N + \frac 3 2} } y^{N + \frac 1 2} \int_{-R}^R \frac 1 {\cmod {\paren {- N + \frac 1 2 - i t} }^2} \rd t\)




















\(\ds \)

\(=\)







\(\ds \cmod {\map \Gamma {- N + \frac 3 2} } y^{N + \frac 1 2} \int_{-R}^R \frac 1 {\paren {- N + \frac 1 2}^2 + t^2} \rd t\)





Definition of Complex Modulus














\(\ds \)

\(=\)







\(\ds \cmod {\map \Gamma {- N + \frac 3 2} } y^{N + \frac 1 2} \frac {\map \arctan {\frac R {- N + \frac 1 2} } - \map \arctan {\frac {-R} {- N + \frac 1 2} } }{- N + \frac 1 2}\)





Derivative of Arctangent Function/Corollary



Thus we have:














\(\ds 0\)

\(\le\)







\(\ds \lim_{N \mathop \to \infty} \lim_{R \mathop \to \infty} \cmod {\int_{-R}^R \map \Gamma {- N - \frac 1 2 - i t} y^{- \paren {- N - \frac 1 2 - i t} } \paren {-i} \rd t}\)




















\(\ds \)

\(\le\)







\(\ds \lim_{N \mathop \to \infty} \lim_{R \to \infty} \cmod {\map \Gamma {- N + \frac 3 2} } y^{N + \frac 1 2} \frac {\map \arctan {\frac R {-N+ \frac 1 2} } - \map \arctan {\frac {-R} {- N + \frac 1 2} } } {- N + \frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \cmod {\map \Gamma {- N + \frac 3 2} } y^{N + \frac 1 2} \frac \pi {- N + \frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \frac {2^{2 N - 2} \paren {N - 1}!} {\paren {2 N - 2}!} \sqrt \pi y^{N + \frac 1 2} \frac \pi {- N + \frac 1 2}\)





Gamma Function of Negative Half-Integer














\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \frac{2^{2 N - 2} \sqrt {2 \pi \paren {N - 1} } \paren {\frac {N - 1} e}^{N - 1} } {\sqrt{2 \pi \paren {2 N - 2} } \paren {\frac {2 \paren {N - 1} } e}^{2 N - 2} } \sqrt \pi y^{N + \frac 1 2} \frac \pi {- N + \frac 1 2}\)





Stirling's Formula














\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \frac{2^{2 N - 2} \paren {\frac {N - 1} e}^{N - 1} } {2^{2 N -2} \sqrt{2} \paren {\frac {N - 1} e}^{2 N - 2} } \sqrt \pi y^{N + \frac 1 2} \frac \pi {-N + \frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \frac 1 {\sqrt 2 \paren {\frac {N - 1} e}^{N - 1} } \sqrt \pi y^{N + \frac 1 2} \frac \pi {- N + \frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds 0\)









which gives us:














\(\ds \lim_{N \mathop \to \infty} \lim_{R \mathop \to \infty} \cmod {\int_{-R}^R \map \Gamma {- N - \frac 1 2 - i t} y^{- \paren {- N - \frac 1 2 - i t} } \paren {-i} \rd t}\)

\(=\)







\(\ds 0\)





Squeeze Theorem for Functions



Thus we have the left, top, and bottom of the rectangular contour go to 0 in the limit, which gives us:














\(\ds \frac 1 {2 \pi i} \int_{c - i \infty}^{c + i \infty} \map \Gamma t y^{-t} \rd t\)

\(=\)







\(\ds \frac 1 {2 \pi i} \lim_{N \mathop \to \infty} \lim_{R \mathop \to \infty} \oint_L \map \Gamma t y^{-t} \rd t\)




















\(\ds \)

\(=\)







\(\ds e^{-y}\)









$\blacksquare$





