# 

Source: https://proofwiki.org/wiki/Series_of_Measures_is_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\sequence {\mu_n}_{n \mathop \in \N}$ be a sequence of measures on $\left({X, \Sigma}\right)$.
Let $\sequence {a_n}_{n \mathop \in \N} \subseteq \R_{\ge 0}$ be a sequence of positive real numbers.

Then the series of measures $\mu: \Sigma \to \overline \R$, defined by:

$\ds \map \mu E := \sum_{n \mathop \in \N} a_n \map {\mu_n} E$
is also a measure on $\struct {X, \Sigma}$.


Proof
Let us verify the conditions for a measure in turn.

Let $E \in \Sigma$.
Then:

$\forall n \in \N: \map {\mu_n} E \ge 0$
and so:

$a_n \map {\mu_n} E \ge 0$
Therefore, by Series of Positive Real Numbers has Positive Limit:

$\ds \map \mu E = \sum_{n \mathop \in \N} a_n \map {\mu_n} E \ge 0$

For every $n \in \N$, also $\map {\mu_n} \O = 0$.
Therefore, it immediately follows that:

$\ds \map \mu \O = \sum_{n \mathop \in \N} a_n \map {\mu_n} \O = \sum_{n \mathop \in \N} 0 = 0$

Finally, let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint sets in $\Sigma$.
Then:














\(\ds \map \mu {\bigcup_{m \mathop \in \N} E_m}\)

\(=\)







\(\ds \sum_{n \mathop \in \N} a_n \map {\mu_n} {\bigcup_{m \mathop \in \N} E_m}\)





Definition of $\mu$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} a_n \paren {\sum_{m \mathop \in \N} \map {\mu_n} {E_m} }\)





The $\mu_n$ are measures














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \sum_{m \mathop \in \N} a_n \map {\mu_n} {E_m}\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop \in \N} \sum_{n \mathop \in \N} a_n \map {\mu_n} {E_m}\)





Tonelli's Theorem: Corollary














\(\ds \)

\(=\)







\(\ds \sum_{m \mathop \in \N} \map \mu {E_m}\)





Definition of $\mu$




Therefore, having verified all three axioms, $\mu$ is a measure.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 4$: Problem $6 \ \text{(ii)}$




