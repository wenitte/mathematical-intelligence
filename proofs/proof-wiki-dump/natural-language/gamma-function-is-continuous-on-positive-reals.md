# 

Source: https://proofwiki.org/wiki/Gamma_Function_is_Continuous_on_Positive_Reals

Theorem
Let $\Gamma: \R_{>0} \to \R$ be the Gamma function, restricted to the strictly positive real numbers.

Then $\Gamma$ is continuous.


Proof
Let $0 < \alpha < a \le x \le y \le b < \beta$.
Let $0 < \delta < \Delta$.
Then:

$(1): \quad \ds \size {\int_\delta^\Delta t^{x - 1} e^{-t} \rd t - \int_\delta^\Delta t^{y - 1} e^{-t} } \le \int_\delta^\Delta \paren {t^{x - 1} - t^{y - 1} }e^{-t} \rd t$

This article, or a section of it, needs explaining.In particular: why?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From the Mean Value Theorem:

$(2): \quad \dfrac {t^{x - 1} - t^{y - 1} }{x - y} = \paren {\ln t} t^{\xi - 1}$
for some $\xi \in \R$ such that $x \le \xi \le y$.
Let $r \in \R_{>0}$.
Then:

$t^{-r} \ln t \to 0$ as $t \to \infty$
$t^r \ln t \to 0$ as $t \to 0^+$
From $(2)$ it follows that:

$\exists H \in \R: \size {t^{x - 1} - t^{y - 1} } \le H \paren {t^{\alpha - 1} + t^{\beta - 1} } \size {x - y}$
From $(1)$ it follows that:

$\size {\map \Gamma x - \map \Gamma y} \le H \size {x - y} \paren {\map \Gamma \alpha - \map \Gamma \beta}$
The result follows from the Squeeze Theorem.
$\blacksquare$


This article, or a section of it, needs explaining.In particular: Quite a few steps in the above need to be filled in and/or justified with links to resultsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.4 \ (5)$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $11.14 \ \text{(i)}$




