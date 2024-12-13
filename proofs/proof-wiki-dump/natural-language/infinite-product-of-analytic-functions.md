# 

Source: https://proofwiki.org/wiki/Infinite_Product_of_Analytic_Functions

Theorem
Let $D \subset \C$ be an open connected set.
Let $\sequence {f_n}$ be a sequence of analytic functions $f_n: D \to \C$ that are not identically zero.
Let $\ds \sum_{n \mathop = 1}^\infty \paren {f_n - 1}$ converge locally uniformly absolutely on $D$.

Then:

$(1): \quad f = \ds \prod_{n \mathop = 1}^\infty f_n$ converges locally uniformly absolutely on $D$
$(2): \quad f$ is analytic
$(3): \quad$ For each $z \in D$, $\map {f_n} z = 0$ for finitely many $n \in \N$
$(4): \quad$ For each $z \in D$, $\map {\operatorname {mult}_z} f = \ds \sum_{n \mathop = 1}^\infty \map {\operatorname {mult}_z} {f_n}$
where $\operatorname {mult}$ denotes multiplicity.


This article, or a section of it, needs explaining.In particular: The definition of multiplicity is inadequate on that page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
Because $\ds \sum_{n \mathop = 1}^\infty \paren {f_n - 1}$ converges locally uniformly absolutely on $D$, the series converges locally uniformly absolutely.
Thus $f = \ds \prod_{n \mathop = 1}^\infty f_n$ converges locally uniformly absolutely.
By Uniform Limit of Analytic Functions is Analytic, $f$ is analytic
The last claim follows from Zeroes of Infinite Product of Analytic Functions
$\blacksquare$


Also see
Derivative of Infinite Product of Analytic Functions




