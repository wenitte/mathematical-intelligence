# 

Source: https://proofwiki.org/wiki/Log_of_Gamma_Function_is_Convex_on_Positive_Reals



Theorem
Let $\Gamma: \R_{>0} \to \R$ be the Gamma function, restricted to the strictly positive real numbers.
Let $\ln$ denote the natural logarithm function.

Then the composite mapping $\ln \circ \operatorname \Gamma$ is a convex function.


Proof 1
By definition, the Gamma function $\Gamma: \R_{> 0} \to \R$ is defined as:

$\ds \map \Gamma z = \int_0^{\infty} t^{z - 1} e^{-t} \rd t$
$\forall z > 0: \map \Gamma z > 0$, as an integral of a strictly positive function in $t$.

This article, or a section of it, needs explaining.In particular: A separate page is needed for the above statementYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
The function is smooth according to Gamma Function is Smooth on Positive Reals, and

$\ds \forall k \in \N: \map {\Gamma^{\paren k} } z = \int_0^{\infty} \map \ln t^k t^{z - 1} e^{-t} \rd t$

This article, or a section of it, needs explaining.In particular: Prove the aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Let $\map f z := \map \ln {\map \Gamma z}$.

$f$ is smooth because $\Gamma$ is smooth and positive.

This article, or a section of it, needs explaining.In particular: A link to why this followsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Then:

$\map {f'} z = \dfrac {\map {\Gamma'} z} {\map \Gamma z}$
$\map {f^{\paren 2} } z = \dfrac {\map {\Gamma^{\paren 2} } z \map \Gamma z - \map {\Gamma'} z^2} {\map \Gamma z^2} > 0$

This article, or a section of it, needs explaining.In particular: Invoke the result that this comes from: Derivative of Quotient or whatever it isYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
The numerator is positive due to the Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces applied to the scalar products:

$\ds \innerprod g h = \int_0^\infty \map g t \map h t t^{z - 1} e^{-t} \rd t \quad \forall z \gt 0$
applied to $g = \ln$ and $h = 1$.

$\forall z \in \R_{>0}: \map {f^{\paren 2} } z > 0 \implies f$ is convex.
$\blacksquare$


Proof 2
The strategy is to show that:

$\map \ln {\map \Gamma {\dfrac x 2 + \dfrac y 2} } \le \dfrac 1 2 \map \ln {\map \Gamma x} + \dfrac 1 2 \map \ln {\map \Gamma y}$

Let $0 < \delta < \Delta$.
Then:














\(\ds \paren {\int_\delta^\Delta t^{\paren {x + y - 2} / 2} e^{-t} \rd t}^2\)

\(=\)







\(\ds \paren {\int_\delta^\Delta \paren {t^{\paren {x - 1} / 2} e^{-t/2} } \paren {t^{\paren {y - 1} / 2} e^{-t/2} } \rd t}^2\)










\(\text {(1)}: \quad\)









\(\ds \)

\(\le\)







\(\ds \paren {\int_\delta^\Delta t^{x - 1} e^{-t} \rd t} \paren {\int_\delta^\Delta t^{y - 1} e^{-t} \rd t}\)





Cauchy-Bunyakovsky-Schwarz Inequality for Definite Integrals



Letting $\delta \to 0$ and $\Delta \to \infty$, $(1)$ becomes equivalent to:

$\paren {\map \Gamma {\dfrac {x + y} 2} }^2 \le \paren {\map \Gamma x} \paren {\map \Gamma y}$













\(\ds \paren {\map \Gamma {\dfrac {x + y} 2} }^2\)

\(\le\)







\(\ds \paren {\map \Gamma x} \paren {\map \Gamma y}\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\paren {\map \Gamma {\dfrac {x + y} 2} }^2}\)

\(\le\)







\(\ds \map \ln {\paren {\map \Gamma x} \paren {\map \Gamma y} }\)














\(\ds \leadsto \ \ \)





\(\ds 2 \map \ln {\map \Gamma {\dfrac {x + y} 2} }\)

\(\le\)







\(\ds \map \ln {\map \Gamma x} + \map \ln {\map \Gamma y}\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\map \Gamma {\dfrac x 2 + \dfrac y 2} }\)

\(\le\)







\(\ds \frac 1 2 \map \ln {\map \Gamma x} + \frac 1 2 \map \ln {\map \Gamma y}\)









The result follows by definition of convex function.
$\blacksquare$


Proof 3
The strategy is to use the Euler Form of the Gamma function and directly calculate the second derivative of $\ln \map \Gamma z$.















\(\ds \map \Gamma z\)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {m^z m!} {z \paren {z + 1} \paren {z + 2} \dotsm \paren {z + m} }\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^2 \ln \map \Gamma z} {\d z^2}\)

\(=\)







\(\ds \dfrac {\d^2} {\d z^2} \map \ln {\lim_{m \mathop \to \infty} \frac {m^z m!} {z \paren {z + 1} \paren {z + 2} \dotsm \paren {z + m} } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \dfrac {\d^2} {\d z^2} \map \ln {\frac {m^z m!} {z \paren {z + 1} \paren {z + 2} \dotsm \paren {z + m} } }\)










The limit interchange is justified because Gamma Function is Smooth on Positive Reals.















\(\ds \lim_{m \mathop \to \infty} \dfrac {\d^2} {\d z^2} \paren {z \map \ln m + \map \ln {m!} - \sum_{n \mathop = 0}^m \map \ln {z + n} }\)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \sum_{n \mathop = 0}^m \dfrac 1 {\paren {z + n}^2}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^2 \ln \map \Gamma z} {\d z^2}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac 1 {\paren {z + n}^2} > 0\)










Logarithmic convexity then follows from Real Function with Strictly Positive Second Derivative is Strictly Convex.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $11.14 \ \text{(iv)}$




