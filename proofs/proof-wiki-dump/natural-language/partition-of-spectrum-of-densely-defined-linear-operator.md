# 

Source: https://proofwiki.org/wiki/Partition_of_Spectrum_of_Densely-Defined_Linear_Operator

Theorem
Let $\HH$ be a Hilbert space over $\C$. 
Let $\struct {\map D T, T}$ be a densely-defined linear operator.
Let $\map \sigma T$ be the spectrum of $T$. 

Then: 

$\map \sigma T = \map {\sigma_p} T \cup \map {\sigma_s} T \cup \map {\sigma_r} T$
where:

$\map {\sigma_p} T$ is the point spectrum of $T$
$\map {\sigma_s} T$ is the continuous spectrum of $T$.
$\map {\sigma_r} T$ is the residual spectrum of $T$


Proof
Let $\lambda \in \map \sigma T$.
Then, from the definition of the resolvent set of $T$, at least one of the following is false: 

$(1) \quad$ $T - \lambda I$ is injective
$(2) \quad$ $\map {\paren {T - \lambda I} } {\map D T}$ is everywhere dense in $\HH$
$(3) \quad$ $\paren {T - \lambda I}^{-1}$ is bounded.
Note that either $(1)$ is true and one of $(2)$ or $(3)$ is false, or $(1)$ is false.
So we have three cases:

$(\text A) \quad$ $(1)$ is false
$(\text B) \quad$ $(1)$ is true, $(2)$ is true, $(3)$ is false
$(\text C) \quad$ $(1)$ is true, $(2)$ is false
Note that the last case includes both the case that $(3)$ is true and $(3)$ is false.
Clearly only one of $(\text A)$, $(\text B)$ or $(\text C)$ can be true.
$(\text A)$ is precisely the definition of the point spectrum, $(\text B)$ is precisely the definition of the continuous spectrum and $(\text C)$ is precisely the definition of the residual spectrum.
So we have the result.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $25.3$: The Spectrum of Closed Unbounded Self-Adjoint Operators




