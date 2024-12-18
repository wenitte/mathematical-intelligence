# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Sigma-Algebra_Generated_by_Collection_of_Subsets



Theorem
Let $X$ be a set.
Let $\GG \subseteq \powerset X$ be a collection of subsets of $X$.

Then $\map \sigma \GG$, the $\sigma$-algebra generated by $\GG$, exists and is unique.


Proof
Existence
By Power Set is Sigma-Algebra, there is at least one $\sigma$-algebra containing $\GG$.
Next, let $\Bbb E$ be the collection of $\sigma$-algebras containing $\GG$:

$\Bbb E := \set {\Sigma': \GG \subseteq \Sigma', \text{$\Sigma'$ is a $\sigma$-algebra} }$
By Intersection of Sigma-Algebras, $\Sigma := \bigcap \Bbb E$ is a $\sigma$-algebra.
Also, by Set Intersection Preserves Subsets:

$\GG \subseteq \Sigma$

Now let $\Sigma'$ be a $\sigma$-algebra containing $\GG$.
By construction of $\Sigma$, and Intersection is Subset: General Result:

$\Sigma \subseteq \Sigma'$
$\Box$


Uniqueness
Suppose both $\Sigma_1$ and $\Sigma_2$ are $\sigma$-algebras generated by $\GG$.
Then property $(2)$ for these $\sigma$-algebras implies both $\Sigma_1 \subseteq \Sigma_2$ and $\Sigma_2 \subseteq \Sigma_1$. 
By definition of set equality:

$\Sigma_1 = \Sigma_2$
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: Add proof considering $\Sigma$ as a magma of setsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $3.4 \ \text{(ii)}$
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $1.1$: Algebras and Sigma-Algebras




