# 

Source: https://proofwiki.org/wiki/Measure_Space_has_Exhausting_Sequence_of_Finite_Measure_iff_Cover_by_Sets_of_Finite_Measure



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.

Then there exists an exhausting sequence $\sequence {E_n}_{n \mathop \in \N}$ in $\Sigma$ such that:

$\forall n \in \N: \map \mu {E_n} < \infty$
if and only if there exists a sequence $\sequence {E_n}_{n \mathop \in \N}$ in $\Sigma$ such that:

$(1): \quad \ds \bigcup_{n \mathop \in \N} E_n = X$
$(2): \quad \forall n \in \N: \map \mu {E_n} < +\infty$


Proof
Necessary Condition
Suppose that there exists an exhausting sequence $\sequence {E_n}_{n \mathop \in \N}$ in $\Sigma$ such that:

$\forall n \in \N: \map \mu {E_n} < \infty$
Let $\sequence {F_n}_{n \mathop \in \N}$ be an exhausting sequence in $\Sigma$ such that:

$\forall n \in \N: \map \mu {F_n} < +\infty$

Then as $\sequence {F_n}_{n \mathop \in \N}$ is exhausting, have:

$\ds \bigcup_{n \mathop \in \N} F_n = X$
It follows that the sequence $\sequence {F_n}_{n \mathop \in \N}$ satisfies $(1)$ and $(2)$.
$\Box$


Sufficient Condition
Let $\mu$ be any measure.
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence satisfying $(1)$ and $(2)$.

Define $F_n := \ds \bigcup_{k \mathop = 1}^n E_k$.
Then by Sigma-Algebra Closed under Union:

$F_n \in \Sigma$ for all $n \in \N$
Also, by Set is Subset of Union:

$F_{n+1} = F_n \cup E_{n+1}$, hence $F_n \subseteq F_{n + 1}$
The definition of the $F_n$ assures that:

$X = \ds \bigcup_{n \mathop \in \N} E_n = \bigcup_{n \mathop \in \N} F_n$
Hence $\sequence {F_n}_{n \mathop \in \N}$ is an exhausting sequence in $\Sigma$.

Furthermore, compute, for any $n \in \N$:














\(\ds \map \mu {F_n}\)

\(=\)







\(\ds \map \mu {\bigcup_{k \mathop = 1}^n E_k}\)





Definition of $F_n$














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^n \map \mu {E_k}\)





Measure is Subadditive














\(\ds \)

\(<\)







\(\ds +\infty\)





By $(2)$



Hence there exists an exhausting sequence $\sequence {E_n}_{n \mathop \in \N}$ in $\Sigma$ such that:

$\forall n \in \N: \map \mu {E_n} < \infty$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 4$: Problem $15$




