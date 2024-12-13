# 

Source: https://proofwiki.org/wiki/Restricted_Measure_is_Measure



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\Sigma'$ be a sub-$\sigma$-algebra of $\Sigma$.

Then the restricted measure $\mu \restriction_{\Sigma'}$ is a measure on the measurable space $\struct {X, \Sigma'}$.


Proof
Verify the axioms for a measure in turn for $\mu \restriction_{\Sigma'}$:


Axiom $(1)$
The statement of axiom $(1)$ for $\mu \restriction_{\Sigma'}$ is:

$\forall E' \in \Sigma': \map {\mu \restriction_{\Sigma'} } {E'} \ge 0$

Now, for every $E' \in \Sigma'$, compute:














\(\ds \map {\mu \restriction_{\Sigma'} } {E'}\)

\(=\)







\(\ds \map \mu {E'}\)





Definition of $\mu \restriction_{\Sigma'}$














\(\ds \)

\(\ge\)







\(\ds 0\)





$\mu$ is a measure



$\Box$


Axiom $(2)$
Let $\sequence {E'_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint sets in $\Sigma'$.
Then the statement of axiom $(2)$ for $\mu \restriction_{\Sigma'}$ is:

$\ds \map {\mu \restriction_{\Sigma'} } {\bigcup_{n \mathop \in \N} E'_n} = \sum_{n \mathop \in \N} \map {\mu \restriction_{\Sigma'} } {E'_n}$

One can show this by means of the following computation:














\(\ds \map {\mu \restriction_{\Sigma'} } {\bigcup_{n \mathop \in \N} E'_n}\)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop \in \N} E'_n}\)





Definition of $\mu \restriction_{\Sigma'}$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map \mu {E'_n}\)





$\mu$ is a measure














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map {\mu \restriction_{\Sigma'} } {E'_n}\)





Definition of $\mu \restriction_{\Sigma'}$



$\Box$


Axiom $(3')$
The statement of axiom $(3')$ for $\mu \restriction_{\Sigma'}$ is:

$\map {\mu \restriction_{\Sigma'} } \O = 0$

By Sigma-Algebra Contains Empty Set:

$\O \in \Sigma'$
Hence:

$\map {\mu \restriction_{\Sigma'} } \O = \map \mu \O = 0$
because $\mu$ is a measure.
$\Box$

Having verified the measure axioms, it follows that $\mu \restriction_{\Sigma'}$ is a measure.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 4$: Problem $14 \ \text{(i)}$




