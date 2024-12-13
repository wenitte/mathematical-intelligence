# 

Source: https://proofwiki.org/wiki/Intersection_Measure_is_Measure



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $F \in \Sigma$ be a measurable set.

Then the intersection measure $\mu_F$ is a measure on the measurable space $\struct {X, \Sigma}$.


Proof
Verify the axioms for a measure in turn for $\mu_F$:


Axiom $(1)$
The statement of axiom $(1)$ for $\mu_F$ is:

$\forall E \in \Sigma: \map {\mu_F} E \ge 0$

For every $E \in \Sigma$ have:














\(\ds \map {\mu_F} E\)

\(=\)







\(\ds \map \mu {E \cap F}\)





Definition of $\mu_F$














\(\ds \)

\(\ge\)







\(\ds 0\)





$\mu$ is a measure



$\Box$


Axiom $(2)$
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint sets in $\Sigma$.
The statement of axiom $(2)$ for $\mu_F$ is:

$\ds \map {\mu_F} {\bigcup_{n \mathop \in \N} E_n} = \sum_{n \mathop \in \N} \map {\mu_F} {E_n}$

This is verified by the following computation:














\(\ds \map {\mu_F} {\bigcup_{n \mathop \in \N} E_n}\)

\(=\)







\(\ds \map \mu {\paren {\bigcup_{n \mathop \in \N} E_n} \cap F}\)





Definition of $\mu_F$














\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop \in \N} \paren {E_n \cap F} }\)





Intersection Distributes over Union: General Result














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map \mu {E_n \cap F}\)





$\mu$ is a measure














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map {\mu_F} {E_n}\)





Definition of $\mu_F$



$\Box$


Axiom $(3')$
The statement of axiom $(3')$ for $\mu_F$ is:

$\map {\mu_F} \O = 0$

By Intersection with Empty Set, $\O \cap F = \O$. Hence:

$\map {\mu_F} \O = \map \mu {\O \cap F} = 0$
because $\mu$ is a measure.
$\Box$

Having verified a suitable set of axioms, it follows that $\mu_F$ is a measure.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 4$: Problem $7$




