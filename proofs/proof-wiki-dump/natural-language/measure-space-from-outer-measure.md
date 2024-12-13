# 

Source: https://proofwiki.org/wiki/Measure_Space_from_Outer_Measure


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Suppose $\mu^*$ is an outer measure on a set $X$.
Let $\map {\mathfrak M} {\mu^*}$ be the collection of $\mu^*$-measurable sets.
Let $\mu$ be the restriction of $\mu^*$ to $\map {\mathfrak M} {\mu^*}$.

Then $\struct {X, \map {\mathfrak M} {\mu^*}, \mu}$ is a measure space.


Proof
First, note that $\map {\mathfrak M} {\mu^*}$ is a $\sigma$-algebra over $X$.
Next, choose $E_1, E_2 \in \map {\mathfrak M} {\mu^*}$ such that $E_1 \cap E_2 = \O$.
Thus:














\(\ds \map \mu {E_1 \cup E_2}\)

\(=\)







\(\ds \map {\mu^*} {E_1 \cup E_2}\)





as $E_1 \cup E_2 \in \map {\mathfrak M} {\mu^*}$














\(\ds \)

\(=\)







\(\ds \map {\mu^*} {\paren {E_1 \cup E_2} \cap E_1} + \map {\mu^*} {\paren {E_1 \cup E_2} - E_1}\)





Definition of Measurable Set














\(\ds \)

\(=\)







\(\ds \map {\mu^*} {E_1} + \map {\mu^*} {E_2}\)





since $E_1$ and $E_2$ are disjoint














\(\ds \)

\(=\)







\(\ds \map \mu {E_1} + \map \mu {E_2}\)





since $E_1, E_2 \in \map {\mathfrak M} {\mu^*}$



Therefore $\mu$ is additive. But because it is constructed from an outer measure, it is also countably subadditive.
Since Additive and Countably Subadditive Function is Countably Additive, it follows that $\mu$ is countably additive.
Finally, also because it is constructed from an outer measure, $\mu$ is nonnegative.
Hence $\struct {X, \map {\mathfrak M} {\mu^*} \mu}$ meets all the criteria of a measure space.
$\blacksquare$


Consequences

This page has been identified as a candidate for refactoring of medium complexity.In particular: separate page, refer to it in an "also see". Might be a new proof to an existing resultUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
It immediately follows from the theorem that the Lebesgue measure forms a measure over the collection of Lebesgue measurable sets of reals.


This article is incomplete.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




