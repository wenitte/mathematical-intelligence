# 

Source: https://proofwiki.org/wiki/Measure_of_Empty_Set_is_Zero

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Then $\map \mu \O = 0$.

That is, $\O$ is a $\mu$-null set.


Proof
By definition of measure, there exists at least one $E \in \Sigma$ such that $\map \mu E$ is finite.
So, suppose that $E \in \Sigma$ such that $\map \mu E$ is finite.
Let $\map \mu E = x$.

Consider the sequence $\sequence {S_n}_{n \mathop \in \N} \subseteq \Sigma$ defined as:

$S_n = \begin {cases} E & : n = 1 \\ \O & : n > 1 \end {cases}$
Then:

$\ds \bigcup_{n \mathop = 1}^\infty S_n = E$
Hence:














\(\ds \map \mu E\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \mu \paren {\bigcup_{n \mathop = 1}^\infty S_n}\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \map \mu {S_n}\)

\(=\)







\(\ds x\)





Property $(2)$








\(\ds \leadsto \ \ \)





\(\ds \map \mu E + \sum_{n \mathop = 2}^\infty \map \mu \O\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 2}^\infty \map \mu \O\)

\(=\)







\(\ds 0\)









It follows directly that $\map \mu \O = 0$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 4$: Problem $10 \ \text{(i)}$




