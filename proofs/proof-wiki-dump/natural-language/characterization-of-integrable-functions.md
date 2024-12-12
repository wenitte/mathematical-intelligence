# 

Source: https://proofwiki.org/wiki/Characterization_of_Integrable_Functions

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \overline \R, f \in \MM_{\overline \R}$ be a $\Sigma$-measurable function.

Then the following are equivalent:

$(1): \quad f \in \map {\LL_{\overline \R} } \mu$, that is, $f$ is $\mu$-integrable.
$(2): \quad$ The positive and negative parts $f^+$ and $f^-$ are $\mu$-integrable.
$(3): \quad$ The absolute value $\size f$ of $f$ is $\mu$-integrable.
$(4): \quad$ There exists an $\mu$-integrable function $g: X \to \overline \R$ such that $\size f \le g$ pointwise.

This page has been identified as a candidate for refactoring of advanced complexity.In particular: Several results here, making specific referencing impreciseUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Proof
We prove the whole cycle of implications:

$(1) \implies (2) \quad$ by definition of $(1)$
$(2) \implies (3)\quad$ because $\size f =  f^+ + f^-$ and Integral of Positive Measurable Function is Additive
$(3) \implies (4)\quad$ because $g:= \size f$ exists

It remains to demonstrate $(4) \implies (1)$.
Let $f \in \MM_{\overline \R}$ and $g$ according to $(4)$.
Then:

$f = f^+ - f^-$
where $f^+$ is the positive and $f^-$ is the negative part of $f$.
We have that $f^+$ and $f^-$ are positive and measurable.
Let $f^0$ stand for either $f^+$ or $f^-$.
We have that:

$\size f = f^+ + f^-$
Therefore:

$f^0 \le \size f \le g$
It is to be shown that the Integral of Positive Measurable Function of $f^0$ exists and is finite.
Let $\EE^+$ and $\map {I_\mu} h$ be defined as in Integral of Positive Measurable Function.
Then:

$\forall h \in \EE^+$: $h \le f^0 \implies h \le g$
Hence:

$\set {h: h \le f^0, h \in \EE^+} \subseteq \set {h: h \le g, h \in \EE^+}$
$\ds \int f^0 \rd \mu := \sup \set {\map {I_\mu} h: h \le f^0, h \in \EE^+} \le \sup \set {\map {I_\mu} h: h \le g, h \in \EE^+} < \infty$
We have that the integrals for $f^+$ and $f^-$ both are finite.
Therefore $f$ is $\mu$-integrable according to definition.
$\blacksquare$


This article needs to be linked to other articles.In particular: The steps in the above need to be demonstrated and explained by linking to appropriate results on $\mathsf{Pr} \infty \mathsf{fWiki}$ As it stands, none of the above can be followed without knowing all about this subject.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code..
Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.3$




