# 

Source: https://proofwiki.org/wiki/Closed_Subset_of_Irreducible_Space_with_Same_Krull_Dimension_is_Itself

Definition
Let $X$ be an irreducible topological space.
Let $Y \subseteq X$ be a closed subset.
Suppose:

$\map \dim Y = \map \dim X < + \infty$
where $\dim$ denotes the Krull dimension.

Then:

$Y = X$


Proof
Let $n = \map \dim Y$.
Then there exists a chain of closed irreducible sets of $Y$:

$A_0 \subsetneq A_1 \subsetneq \cdots \subsetneq A_n$
If $Y \subsetneq X$, then:

$A_0 \subsetneq A_1 \subsetneq \cdots \subsetneq A_n \subsetneq X$
would be a chain of closed irreducible sets of $X$, which implies that:

$n + 1 \le \map \dim X$
which is a contradiction.
Thus $Y = X$.
$\blacksquare$


There is believed to be a mistake here, possibly a typo.In particular: categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




