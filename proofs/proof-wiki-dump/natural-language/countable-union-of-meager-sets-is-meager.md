# 

Source: https://proofwiki.org/wiki/Countable_Union_of_Meager_Sets_is_Meager



Theorem
Let $\struct {X, \tau}$ be a topological space.
Let $\family {A_n}_{n \in \N}$ be a countable set of meager subsets of $X$.
Let:

$\ds A = \bigcup_{n \mathop = 1}^\infty A_n$

Then $A$ is meager in $X$. 


Proof
For each $n \in \N$, $A_n$ is meager and hence there exists a countable set $\family {A_{n, m} }_{m \in \N}$ of nowhere dense sets in $X$ such that:

$\ds A_n = \bigcup_{m \mathop = 1}^\infty A_{n, m}$
Hence:

$\ds A = \bigcup_{n \mathop = 1}^\infty \bigcup_{m \mathop = 1}^\infty A_{n, m} = \bigcup_{\tuple {n, m} \in \N^2} A_{n, m}$
From Cartesian Product of Countable Sets is Countable, $A$ is therefore the countable union of nowhere dense sets in $X$.


There is believed to be a mistake here, possibly a typo.In particular: Should this not invoke Countable Union of Countable Sets is Countable I see no cartesian products?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
So $A$ is meager in $X$.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice, by way of Countable Union of Countable Sets is Countable.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
1973: Thomas J. Jech: The Axiom of Choice ... (previous) ... (next): $1.$ Introduction: $1.4$ Problems: $7$




