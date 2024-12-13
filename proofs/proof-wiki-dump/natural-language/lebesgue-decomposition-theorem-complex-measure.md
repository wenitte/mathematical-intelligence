# 

Source: https://proofwiki.org/wiki/Lebesgue_Decomposition_Theorem/Complex_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a measure on $\struct {X, \Sigma}$. 
Let $\nu$ be a complex measure on $\struct {X, \Sigma}$. 

Then there exists complex measures $\nu_a$ and $\nu_s$ on $\struct {X, \Sigma}$ such that: 

$(1): \quad \nu_a$ is absolutely continuous with respect to $\mu$
$(2): \quad \nu_s$ and $\mu$ are mutually singular
$(3): \quad \nu = \nu_a + \nu_s$


Proof
Let $\cmod \nu$ be the variation of $\nu$.
From Variation of Complex Measure is Finite Measure, $\cmod \nu$ is a finite measure.
Then from Lebesgue Decomposition Theorem for Finite Measures, there exists finite measures $\cmod \nu_a$ and $\cmod \nu_s$ on $\struct {X, \Sigma}$ such that: 

$(1): \quad \cmod \nu_a$ is absolutely continuous with respect to $\mu$
$(2): \quad \cmod \nu_s$ and $\mu$ are mutually singular
$(3): \quad \cmod \nu = \cmod \nu_a + \cmod \nu_s$
More precisely, the proof of this theorem grants that there exists a $\mu$-null set $N \subseteq X$ such that: 

$\map {\cmod \nu_a} A = \map {\cmod \nu} {N^c \cap A}$
and:

$\map {\cmod \nu_s} A = \map {\cmod \nu} {N \cap A}$
for each $A \in \Sigma$, with $\cmod \nu_a$ and $\cmod \nu_s$ having the desired properties. 
Let $\nu_a$ be the intersection measure of $\nu$ by $N^c$.
Let $\nu_s$ be the intersection measure of $\nu$ by $N$.

We verify that $\nu_a$ and $\nu_s$ are our desired complex measures. 
From Variation of Intersection Measure, we have:

$\cmod {\nu_a} = \cmod \nu_a$
and:

$\cmod {\nu_s} = \cmod \nu_s$
Note that $(1)$ is precisely the definition of the complex measure $\nu_s$ being absolutely continuous with respect to $\mu$.
Hence we have $(1)$. 
Note that $(2)$ is precisely the definition of the complex measure $\nu_s$ being mutually singular to $\mu$.
Hence we have $(2)$.
We finally prove $(3)$. 
For each $A \in \Sigma$, $A \cap N$ and $A \cap N^c$ are disjoint with $\paren {A \cap N} \cup \paren {A \cap N^c} = A$, so we have:

$\map \nu A = \map \nu {A \cap N} + \map \nu {A \cap N^c} = \map {\nu_a} A + \map {\nu_s} A$
Hence we have $(3)$. 
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.3$: Singularity




