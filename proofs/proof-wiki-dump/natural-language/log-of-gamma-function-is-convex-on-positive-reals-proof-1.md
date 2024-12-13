# 

Source: https://proofwiki.org/wiki/Log_of_Gamma_Function_is_Convex_on_Positive_Reals/Proof_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\Gamma: \R_{>0} \to \R$ be the Gamma function, restricted to the strictly positive real numbers.
Let $\ln$ denote the natural logarithm function.

Then the composite mapping $\ln \circ \operatorname \Gamma$ is a convex function.


Proof
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





