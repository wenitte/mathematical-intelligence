# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Variation_of_Signed_Measure



Theorem
The following definitions of the concept of Variation of Signed Measure are equivalent:

Definition 1
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$.
Let $\struct {\mu^+, \mu^-}$ be the Jordan decomposition of $\mu$. 

We define the variation $\size \mu$ of $\mu$ by: 

$\size \mu = \mu^+ + \mu^-$


Definition 2
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$. 
Let $\map P A$ be the set of finite partitions of $A$ into $\Sigma$-measurable sets.

We define the variation $\cmod \mu : \Sigma \to \overline \R$ of $\mu$ by: 

$\ds \map {\cmod \mu} A = \sup \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A}$
for each $A \in \Sigma$, where the supremum is taken in the set of extended real numbers $\overline \R$. 


Proof
We aim to prove that for each $A \in \Sigma$, we have: 

$\ds \map {\mu^+} A + \map {\mu^-} A = \sup \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A}$
Let $\tuple {P, N}$ be a Hahn decomposition for $\mu$.
Then $\set {P \cap A, N \cap A}$ is a finite partition of $A$ into $\Sigma$-measurable sets.
Then, we have from the definition of Jordan decomposition:

$\map \mu {P \cap A} = \map {\mu^+} A \ge 0$
and:

$\map \mu {N \cap A} = -\map {\mu^-} A \le 0$
Then: 

$\cmod {\map \mu {P \cap A} } = \map {\mu^+} A$
and:

$\cmod {\map \mu {N \cap A} } = \map {\mu^-} A$
so:














\(\ds \map {\mu^+} A + \map {\mu^-} A\)

\(=\)







\(\ds \size {\map \mu {P \cap A} } + \size {\map \mu {N \cap A} }\)




















\(\ds \)

\(\le\)







\(\ds \sup \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A}\)





Definition of Supremum of Subset of Extended Real Numbers



Conversely, for each $\set {A_1, A_2, \ldots, A_n} \in \map P A$, we have:














\(\ds \sum_{j \mathop = 1}^n \size {\map \mu {A_j} }\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \size {\map {\mu^+} {A_j} - \map {\mu^-} {A_j} }\)





Definition of Jordan Decomposition














\(\ds \)

\(\le\)







\(\ds \sum_{j \mathop = 1}^n \paren {\size {\map {\mu^+} {A_j} } + \size {\map {\mu^-} {A_j} } }\)





Triangle Inequality














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \paren {\map {\mu^+} {A_j} + \map {\mu^-} {A_j} }\)





since $\mu^+ \ge 0$ and $\mu^- \ge 0$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \map {\mu^+} {A_j} + \sum_{j \mathop = 1}^n \map {\mu^-} {A_j}\)




















\(\ds \)

\(=\)







\(\ds \map {\mu^+} A + \map {\mu^-} A\)





using finite additivity of $\mu^+$ and $\mu^-$



so:

$\ds \sup \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A} \le \map {\mu^+} A + \map {\mu^-} A$
so:

$\ds \map {\mu^+} A + \map {\mu^-} A = \sup \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A}$
$\blacksquare$





