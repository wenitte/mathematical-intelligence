# 

Source: https://proofwiki.org/wiki/Measure_Invariant_on_Generator_is_Invariant

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\theta: X \to X$ be an $\Sigma / \Sigma$-measurable mapping.

Suppose that $\Sigma$ is generated by $\GG \subseteq \powerset X$.
Also, let $\GG$ satisfy the following:

$(1): \quad \forall G, H \in \GG: G \cap H \in \GG$
$(2): \quad$ There exists an exhausting sequence $\sequence {G_n}_{n \mathop \in \N} \uparrow X$ in $\GG$ such that:
$\quad \forall n \in \N: \map \mu {G_n} < +\infty$

Suppose furthermore that, for all $G \in \GG$, $\mu$ satisfies:

$(3): \quad \map \mu {\theta^{-1} \sqbrk G} = \map \mu G$

Then $\mu$ is a $\theta$-invariant measure.


Proof
Consider the pushforward measure $\theta_* \mu$ on $\struct {X, \Sigma}$.
By definition, this makes equation $(3)$ come down to:

$\theta_* \mu \restriction_\GG = \mu \restriction_\GG$
where $\restriction$ denotes restriction.

The suppositions $(1)$, $(2)$ and $(3)$ together constitute precisely the prerequisites to Uniqueness of Measures.
Hence $\theta_* \mu = \mu$, that is, $\mu$ is $\theta$-invariant.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 5$: Problem $9$




