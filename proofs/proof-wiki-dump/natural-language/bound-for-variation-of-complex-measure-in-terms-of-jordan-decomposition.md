# 

Source: https://proofwiki.org/wiki/Bound_for_Variation_of_Complex_Measure_in_terms_of_Jordan_Decomposition

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a complex measure on $\struct {X, \Sigma}$. 
Let $\cmod \mu$ be the variation of $\mu$. 
Let $\tuple {\mu_1, \mu_2, \mu_3, \mu_4}$ be the Jordan decomposition of $\mu$.

Then: 

$\map {\cmod \mu} A \le \map {\mu_1} A + \map {\mu_2} A + \map {\mu_3} A + \map {\mu_4} A$
for all $A \in \Sigma$.


Proof
Let $A \in \Sigma$.
Let $\map P A$ be the set of finite partitions of $A$ into $\Sigma$-measurable sets.
From the definition of variation, we have: 

$\ds \map {\cmod \mu} A = \sup \set {\sum_{j \mathop = 1}^n \cmod {\map \mu {A_j} } : \set {A_1, A_2, \ldots, A_n} \in \map P A}$
Let: 

$\set {A_1, A_2, \ldots, A_n} \in \map P A$
Consider: 

$\ds \sum_{i \mathop = 1}^n \cmod {\map \mu {A_i} }$
We have, from the definition of Jordan decomposition: 

$\mu = \mu_1 - \mu_2 + i \paren {\mu_3 - \mu_4}$
so that: 














\(\ds \sum_{i \mathop = 1}^n \cmod {\map \mu {A_i} }\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \cmod {\map {\mu_1} {A_i} - \map {\mu_2} {A_i} + i \paren {\map {\mu_3} {A_i} - \map {\mu_4} {A_i} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \cmod {\map {\mu_1} {A_i} } + \sum_{i \mathop = 1}^n \cmod {\map {\mu_2} {A_i} } + \sum_{i \mathop = 1}^n \cmod {\map {\mu_3} {A_i} } + \sum_{i \mathop = 1}^n \cmod {\map {\mu_4} {A_i} }\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map {\mu_1} {A_i} + \sum_{i \mathop = 1}^n \map {\mu_2} {A_i} + \sum_{i \mathop = 1}^n \map {\mu_3} {A_i} + \sum_{i \mathop = 1}^n \map {\mu_4} {A_i}\)





since $\mu_1$, $\mu_2$, $\mu_3$ and $\mu_4$ are measures



Since: $\set {A_1, A_2, \ldots, A_n}$ is a partition of $A$, we have: 

$\set {A_1, A_2, \ldots, A_n}$ are pairwise disjoint with:
$\ds A = \bigcup_{i \mathop = 1}^n A_i$
So:














\(\ds \sum_{i \mathop = 1}^n \map {\mu_1} {A_i} + \sum_{i \mathop = 1}^n \map {\mu_2} {A_i} + \sum_{i \mathop = 1}^n \map {\mu_3} {A_i} + \sum_{i \mathop = 1}^n \map {\mu_4} {A_i}\)

\(=\)







\(\ds \map {\mu_1} {\bigcup_{i \mathop = 1}^n A_i} + \map {\mu_2} {\bigcup_{i \mathop = 1}^n A_i} + \map {\mu_3} {\bigcup_{i \mathop = 1}^n A_i} + \map {\mu_4} {\bigcup_{i \mathop = 1}^n A_i}\)





Measure is Finitely Additive Function














\(\ds \)

\(=\)







\(\ds \map {\mu_1} A + \map {\mu_2} A + \map {\mu_3} A + \map {\mu_4} A\)









$\blacksquare$





