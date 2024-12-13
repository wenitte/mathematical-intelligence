# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Integrals/Definite/Proof_2

Theorem
$\ds \int_a^b \paren {\lambda \map f t + \mu \map g t} \rd t = \lambda \int_a^b \map f t \rd t + \mu \int_a^b \map g t \rd t$


Proof
It is clear that for step functions $s$ and $t$:


This article contains statements that are justified by handwavery.In particular: "It is clear that ..."You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
$\ds \int_a^b \lambda \map s x + \mu \map t x \rd x = \lambda \int_a^b \map s x \rd x + \mu \int_a^b \map t x \rd x$
Under any partition, the lower Darboux sums and upper Darboux sums of $f$ and $g$ are step functions, so the above formula relates the lower Darboux sums and upper Darboux sums of $f$ and $g$ to the lower Darboux sums and upper Darboux sums of the linear combinations of $f$ and $g$.
Because this identity is preserved for all possible partitions of $\closedint a b$, it is preserved for the supremum and infimum of all possible lower Darboux sums and upper Darboux sums, so the linear combinations of $f$ and $g$ are integrable.














\(\ds \int_a^b \paren {\lambda \map f t + \mu \map g t} \rd t\)

\(=\)







\(\ds \sup \set {\sum_{\nu \mathop = 1}^n \map {m_\nu^{\paren {\lambda f + \mu g} } } {x_\nu - x_{\nu - 1} }: \forall \nu \in \closedint 1 n x_\nu > x_{\nu - 1} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \sup \set {\sum_{\nu \mathop = 1}^n \map {m_\nu^{\paren f} } {x_\nu - x_{\nu - 1} }: \forall \nu \in \closedint 1 n x_\nu > x_{\nu - 1} } + \mu \sup \set {\sum_{\nu \mathop = 1}^n \map {m_\nu^{\paren g} } {x_\nu - x_{\nu - 1} }: \forall \nu \in \closedint 1 n x_\nu > x_{\nu - 1} }\)




















\(\ds \)

\(=\)







\(\ds \lambda \int_a^b \map f x \rd x + \mu \int_a^b \map g x \rd x\)









$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1967: Tom M. Apostol: Calculus Volume 1: $\S 1.4$




