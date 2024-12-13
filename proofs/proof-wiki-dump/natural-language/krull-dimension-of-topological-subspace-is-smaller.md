# 

Source: https://proofwiki.org/wiki/Krull_Dimension_of_Topological_Subspace_is_Smaller

Definition
Let $X$ be a topological space.
Let $Y \subseteq X$ be a subspace.

Then:

$\map \dim Y \le \map \dim X$
where $\dim$ denotes the Krull dimension.


Proof
Let:

$A_0 \subsetneq A_1 \subsetneq \cdots \subsetneq A_n$
be a chain of closed irreducible sets of $Y$.
Let $\map \cl {A_i}$ be the closure of $A_i$ in $X$ for each $i = 0, \ldots, n$.
By Closure of Irreducible Subspace is Irreducible, each $\map \cl {A_i}$ is irreducible.
Furthermore:

$\map \cl {A_0} \subsetneq \map \cl {A_1} \subsetneq \cdots \subsetneq \map \cl {A_n}$
since, by Closure of Subset in Subspace:

$A_i = Y \cap \map \cl {A_i}$
Thus:

$n \le \map \dim X$
As $\map \dim Y$ is the spremum of such $n$, we have:

$\map \dim Y \le \map \dim X$
$\blacksquare$


There is believed to be a mistake here, possibly a typo.In particular: categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




