# 

Source: https://proofwiki.org/wiki/Lebesgue_Decomposition_Theorem/Sigma-Finite_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a measure on $\struct {X, \Sigma}$. 
Let $\nu$ be a $\sigma$-finite measure on $\struct {X, \Sigma}$. 

Then there exists $\sigma$-finite measures $\nu_a$ and $\nu_s$ on $\struct {X, \Sigma}$ such that: 

$(1): \quad \nu_a$ is absolutely continuous with respect to $\mu$
$(2): \quad \nu_s$ and $\mu$ are mutually singular
$(3): \quad \nu = \nu_a + \nu_s$


Proof
Since $\nu$ is $\sigma$-finite, there exists a sequence $\sequence {D_k}_{k \mathop \in \N}$ of disjoint sets $\Sigma$-measurable sets such that:

$\map \nu {D_k} < \infty$
and:

$\ds \bigcup_{k \mathop = 1}^\infty D_k = X$
For each $k \in \N$, introduce the intersection measures $\mu^{\paren k}$ and $\nu^{\paren k}$ defined by:

$\map {\mu^{\paren k} } A = \map \mu {A \cap D_k}$
and:

$\map {\nu^{\paren k} } A = \map \nu {A \cap D_k}$
for $A \in \Sigma$.
Let $\Sigma_k$ be the trace $\sigma$-algebra on $D_k$ induced by $\Sigma$. 
From Measure is Monotone, we have:

$\map {\mu^{\paren k} } A \le \map \mu {D_k} < \infty$
and:

$\map {\nu^{\paren k} } A \le \map \nu {D_k} < \infty$
for each $k \in \N$ and $A \in \Sigma$.
So $\mu^{\paren k}$ and $\nu^{\paren k}$ are finite measures on the measurable space $\struct {D_k, \Sigma_k}$ for each $k \in \N$.
Fix $k \in \N$. 
From the Lebesgue decomposition theorem for finite measures, there exists a $\mu^{\paren k}$-null set $N_k \subseteq D_k$ such that defining:

$\map { {\nu_a}^{\paren k} } A = \map {\nu^{\paren k} } {A \cap \paren {D_k \setminus N_k} }$
and:

$\map { {\nu_s}^{\paren k} } A = \map {\nu^{\paren k} } {A \cap N_k}$
for each $A \in \Sigma$, we have:

$(1) \quad$ ${\nu_a}^{\paren k}$ is absolutely continuous with respect to $\mu^{\paren k}$
$(2) \quad$ ${\nu_s}^{\paren k}$ and $\mu^{\paren k}$ are mutually singular
$(3) \quad$ $\nu^{\paren k} = {\nu_a}^{\paren k} + {\nu_s}^{\paren k}$.
Now, for each $A \in \Sigma$, define:

$\ds \map {\nu_a} A =  \sum_{k \mathop = 1}^\infty \map { {\nu_a}^{\paren k} } A$
and:

$\ds \map {\nu_s} A =  \sum_{k \mathop = 1}^\infty \map { {\nu_s}^{\paren k} } A$
We then have:














\(\ds \sum_{k \mathop = 1}^\infty \map { {\nu_a}^{\paren k} } A\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map \nu {A \cap \paren {D_k \setminus N_k} \cap D_k}\)




















\(\ds \)

\(=\)







\(\ds \map \nu {A \cap \bigcup_{k \mathop = 1}^\infty \paren {D_k \setminus N_k} }\)





Definition of Measure (Measure Theory)



and:














\(\ds \sum_{k \mathop = 1}^\infty \map { {\nu_s}^{\paren k} } A\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map \nu {A \cap N_k \cap D_k}\)




















\(\ds \)

\(=\)







\(\ds \map \nu {A \cap \bigcup_{k \mathop = 1}^\infty N_k}\)





Definition of Measure (Measure Theory)



From Intersection Measure is Measure, both $\nu_a$ and $\nu_s$ are measures. 
Further, from Measure is Monotone, we have:

$\ds \map {\mu_a} {D_k} = \map \nu {D_k \cap \bigcup_{k \mathop = 1}^\infty \paren {D_k \setminus N_k} } \le \map \nu {D_k} < \infty$
and:

$\ds \map {\mu_s} {D_k} = \map \nu {D_k \cap \bigcup_{k \mathop = 1}^\infty N_k} \le \map \nu {D_k} < \infty$
while:

$\ds X = \bigcup_{k \mathop = 1}^\infty D_k$
Hence $\nu_a$ and $\nu_s$ are $\sigma$-finite measures. 

It remains to be verified that:

$(1): \quad \nu_a$ is absolutely continuous with respect to $\mu$
$(2): \quad \nu_s$ and $\mu$ are mutually singular
$(3): \quad \nu = \nu_a + \nu_s$

First let $B \in \Sigma$ be such that $\map \mu B = 0$.
Then from Null Sets Closed under Subset, we have $\map \mu B = \map {\mu^{\paren k} } B = 0$ for each $k \in \N$. 
Then $\map { {\nu_a}^{\paren k} } B = 0$ for each $k \in \N$.
Hence by the definition of $\nu_a$ we have $\map {\nu_a} B = 0$. 
Hence we have shown $(1)$.
We now show $(2)$.  
Let:

$\ds N = \bigcup_{k \mathop = 1}^\infty N_k$
From the construction of $\mu^{\paren k}$ we have $\map {\mu^{\paren k} } {N_k} = 0$ and hence $\map \mu {N_k \cap D_k} = \map \mu {N_k} = 0$. 
From Null Sets Closed under Countable Union, $N$ is $\mu$-null, while:
We also have:

$\ds \map {\nu_s} {N^c} = \map \nu {N^c \cap N} = 0$
Hence $\nu_s$ and $\mu$ are mutually singular.
Hence we have shown $(2)$. 
We now show $(3)$. 
For each $A \in \Sigma$ we have:














\(\ds \map {\nu_a} A + \map {\nu_s} A\)

\(=\)







\(\ds \map \nu {A \cap \bigcup_{k \mathop = 1}^\infty \paren {D_k \setminus N_k} } + \map \nu {A \cap \bigcup_{k \mathop = 1}^\infty N_k}\)




















\(\ds \)

\(=\)







\(\ds \map \nu {A \cap \paren {\bigcup_{k \mathop = 1}^\infty \paren {D_k \setminus N_k} \cup \bigcup_{k \mathop = 1}^\infty N_k} }\)





Union Distributes over Intersection














\(\ds \)

\(=\)







\(\ds \map \nu {A \cap \paren {\bigcup_{k \mathop = 1}^\infty \paren {\paren {D_k \setminus N_k} \cup N_k} } }\)




















\(\ds \)

\(=\)







\(\ds \map \nu {A \cap \paren {\bigcup_{k \mathop = 1}^\infty D_k} }\)




















\(\ds \)

\(=\)







\(\ds \map \nu A\)





we have $\ds \bigcup_{k \mathop = 1}^\infty D_k = X$



Hence $\nu = \nu_a + \nu_s$.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.3$: Singularity




