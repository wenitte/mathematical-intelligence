# 

Source: https://proofwiki.org/wiki/For_Complete_Ritz_Sequence_Continuous_Functional_approaches_its_Minimal_Value


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $J$ be a continuous functional.
Let $\sequence {\phi_n}$ be a complete Ritz sequence.


This article, or a section of it, needs explaining.In particular: The concept of $\sequence {\phi_n}$ does not appear to be related in any way to the statement of the theorem.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\ds \lim_{n \mathop \to \infty} \mu_n = \mu$
where $\ds \mu = \inf_y J \sqbrk y$.


Proof
Let $y^*: \R \to \R$ be such that:

$\forall \epsilon > 0: J \sqbrk {y^*} < \mu + \epsilon$
By assumption of continuity of $J$:

$\forall \epsilon > 0: \exists \map \delta \epsilon > 0: \paren {\size {y - y^*} < \delta} \implies \paren {\size {J \sqbrk y - J \sqbrk {y^*} } < \epsilon}$
Let $\eta_n = \bsalpha \bsphi$, such that:

$\exists n \in\ N: \exists N \in \N: \paren {n > N} \implies \paren {\size {\eta_n - y^*} < \epsilon}$
where $\bsalpha$ is an $n$-dimensional real vector.
Let $y_n = \bsalpha \bsphi$, where $\bsalpha$ is such that it minimises $J \sqbrk {y_n}$.
Hence:

$J \sqbrk {y_n} < J \sqbrk {\eta_n} + \epsilon < \mu + 2 \epsilon$
On the other hand, by the definition of $y_n$:

$\mu \le J \sqbrk {y_n} \le J \sqbrk {\eta_n}$
Thus:

$\mu \le J \sqbrk {y_n} < \mu + 2 \epsilon$
If $J \sqbrk {y_n} = \mu$, then the inequality is satisfied, and $n$ is finite.


This article, or a section of it, needs explaining.In particular: "finite" does not appear in the original formulation of GF; either restrict the theorem, or refine definitions usedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
If $ \mu < J \sqbrk {y_n}$, then subtract $\mu$ from all the terms:

$0 < J \sqbrk {y_n} - \mu < 2 \epsilon$
We have that:

$\paren {\epsilon > 0} \implies \paren {-2 \epsilon < 0}$
Hence:

$-2 \epsilon < J \sqbrk {y_n} - \mu < 2 \epsilon$
or:

$\size {J \sqbrk {y_n} - \mu} < 2 \epsilon$
Since $\epsilon$ and $n$ inherits their constraints from the definitions of $\eta_n$ and the continuity of $J$, these together with the last inequality imply:

$\ds \lim_{n \mathop \to \infty} J \sqbrk {y_n} = \mu$
where $J \sqbrk {y_n} = \mu_n$.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 8.40 $: The Ritz Method and the Method of Finite Differences




