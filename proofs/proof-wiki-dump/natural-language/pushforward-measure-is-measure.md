# 

Source: https://proofwiki.org/wiki/Pushforward_Measure_is_Measure



Theorem
Let $\struct {X, \Sigma}$ and $\struct {X', \Sigma'}$ be measurable spaces.
Let $\mu$ be a measure on $\struct {X, \Sigma}$.
Let $f: X \to X'$ be a $\Sigma \, / \, \Sigma'$-measurable mapping.

Then the pushforward measure $f_* \mu: \Sigma' \to \overline \R$ is a measure.


Proof
To show that $f_* \mu$ is a measure, it will suffice to check the axioms $(1)$, $(2)$ and $(3')$ for a measure.


Axiom $(1)$
The statement of axiom $(1)$ for $f_* \mu$ is:

$\forall E' \in \Sigma': \map {f_* \mu} {E'} \ge 0$

Now observe:














\(\ds \map {f_* \mu} {E'}\)

\(=\)







\(\ds \map \mu {f^{-1} \sqbrk {E'} }\)





Definition of Pushforward Measure














\(\ds \)

\(\ge\)







\(\ds 0\)





$\mu$ is a Measure



$\Box$


Axiom $(2)$
Let $\sequence {E'_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint sets in $\Sigma$.

The statement of axiom $(2)$ for $f_* \mu$ is:

$\ds \map {f_* \mu} {\bigcup_{n \mathop \in \N} E'_n} = \sum_{n \mathop \in \N} \map {f_* \mu} {E'_n}$

Now compute:














\(\ds \map {f_* \mu} {\bigcup_{n \mathop \in \N} E'_n}\)

\(=\)







\(\ds \map \mu {f^{-1} \sqbrk {\bigcup_{n \mathop \in \N} E'_n} }\)





Definition of Pushforward Measure














\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop \in \N} f^{-1} \sqbrk {E'_n} }\)





Preimage of Union under Mapping: General Result














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map \mu {f^{-1} \sqbrk {E'_n} }\)





$\mu$ is a Measure














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map {f_* \mu} {E'_n}\)





Definition of Pushforward Measure



Note that the second equality uses Preimage of Intersection under Mapping and Preimage of Empty Set is Empty to confirm that $\sequence { f^{-1} \sqbrk {E'_n} }_{n \mathop \in \N}$ is pairwise disjoint:

$f^{-1} \sqbrk {E'_n} \cap f^{-1} \sqbrk {E'_m} = f^{-1} \sqbrk {E'_n \cap E'_m} =  f^{-1} \sqbrk \O = \O$
$\Box$


Axiom $(3')$
The statement of axiom $(3')$ for $f_* \mu$ is:

$\map {f_* \mu} \O = 0$

Now compute:














\(\ds \map {f_* \mu} \O\)

\(=\)







\(\ds \map \mu {f^{-1} \sqbrk \O}\)





Definition of Pushforward Measure














\(\ds \)

\(=\)







\(\ds \map \mu \O\)





Preimage of Empty Set is Empty














\(\ds \)

\(=\)







\(\ds 0\)





$\mu$ is a measure



$\Box$

Thus $f_* \mu$, satisfying the axioms, is seen to be a measure.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $7.6$




