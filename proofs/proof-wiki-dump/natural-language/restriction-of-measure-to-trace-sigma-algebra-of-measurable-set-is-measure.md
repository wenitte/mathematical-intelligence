# 

Source: https://proofwiki.org/wiki/Restriction_of_Measure_to_Trace_Sigma-Algebra_of_Measurable_Set_is_Measure



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a measure on $\struct {X, \Sigma}$. 
Let $A \in \Sigma$. 
Let $\Sigma_A$ be the trace $\sigma$-algebra of $A$ in $\Sigma$.
Let $\mu \restriction_{\Sigma_A}$ be the restriction of $\mu$ to $\Sigma_A$.

Then $\mu \restriction_{\Sigma_A}$ is a measure on $\struct {A, \Sigma_A}$. 


Proof
We verify the three conditions required of a measure for $\mu \restriction_{\Sigma_A}$.
Note that from Trace Sigma-Algebra of Measurable Set, we have $\Sigma_A \subseteq \Sigma$.

Condition $(1)$
Let $E \in \Sigma_A$. 
Then, we have $E \in \Sigma$ and: 














\(\ds \map {\paren {\mu \restriction_{\Sigma_A} } } E\)

\(=\)







\(\ds \map \mu E\)





Definition of Restriction of Measure to Trace Sigma-Algebra of Measurable Set














\(\ds \)

\(\ge\)







\(\ds 0\)









$\Box$

Condition $(2)$
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint $\Sigma_A$-measurable sets.
Then $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint $\Sigma$-measurable sets, and we have: 














\(\ds \map {\paren {\mu \restriction_{\Sigma_A} } } {\bigcup_{n \mathop = 1}^\infty E_n}\)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop = 1}^\infty E_n}\)





Definition of Restriction of Measure to Trace Sigma-Algebra of Measurable Set














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map \mu {E_n}\)





since $\mu$ is a measure














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\paren {\mu \restriction_{\Sigma_A} } } {E_n}\)





Definition of Restriction of Measure to Trace Sigma-Algebra of Measurable Set



Condition $(3)$
From Empty Set is Null Set, we have that $\O$ is $\mu$-null.
From Sigma-Algebra Contains Empty Set, we have $\O \in \Sigma_A$.
So, we have: 














\(\ds \map {\paren {\mu \restriction_{\Sigma_A} } } \O\)

\(=\)







\(\ds \map \mu \O\)





Definition of Restriction of Measure to Trace Sigma-Algebra of Measurable Set














\(\ds \)

\(=\)







\(\ds 0\)





Definition of Null Set



$\blacksquare$





