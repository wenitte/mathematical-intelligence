# 

Source: https://proofwiki.org/wiki/Approximation_to_Reciprocal_times_Derivative_of_Gamma_Function

Theorem
Let $\Gamma$ denote the gamma function.

For all $z \in \C$ such that $\cmod {\map \arg z} < \pi - \epsilon, \cmod z > 1$:

$\dfrac {\map {\Gamma'} z} {\map \Gamma z} = \ln z + \map {\OO_\epsilon} {z^{-1} }$
where:

$\map \OO {z^{-1} }$ denotes big-$\OO$ notation
the implied constant depends on $\epsilon$.



This article, or a section of it, needs explaining.In particular: The notation $\OO_\epsilon$ needs to be explicitly introduced.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
From Logarithmic Approximation of Error Term of Stirling's Formula for Gamma Function:

$\ln \map \Gamma z = \paren {z - \dfrac 1 2} \ln z - z + \dfrac {\ln 2 \pi} 2 + \map \OO {z^{-1} }$
Taking the derivative with respect to $z$:

$(1): \quad \dfrac {\map {\Gamma'} z} {\map \Gamma z} = \ln z - \dfrac 1 {2 z} + \dfrac \d {\d z} \map \OO {z^{-1} }$

Since there exists $\map c \epsilon > 0$ such that:

$\forall \size z > 1: -\dfrac c {\size {z^{-1} } } < \size {\map \OO {z^{-1} } } < \dfrac c {\size {z^{-1} } }$

This article, or a section of it, needs explaining.In particular: The above statement needs to be explained and justified.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
it follows directly that the third term in $(1)$ is $\map \OO {z^{-1} }$.


The validity of the material on this page is questionable.In particular: Why? $\dfrac \d {\d z} \map \OO {z^{-1} }$ is not estimated at allYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$





