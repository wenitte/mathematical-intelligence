# 

Source: https://proofwiki.org/wiki/Natural_Number_Ordering_is_Transitive


This article is complete as far as it goes, but it could do with expansion.In particular: This is for the ordering of von Neumann natural numbers/finite ordinals. Similar things need to be shown for the orderings of other notions of natural number.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $m, n, k \in \N$ where $\N$ is the set of natural numbers.
Let $<$ be the relation defined on $\N$ such that:

$m < n \iff m \in n$
where $\N$ is defined as the minimally inductive set $\omega$.

Then:

$k < m, m < n \implies k < n$
That is: $<$ is a transitive relation.


Proof
Let $k < m, m < n$.
By definition it follows that $k \in m, m \in n$.
We have from Element of Finite Ordinal iff Subset that:

$k \in m \iff k \subseteq m$
$m \in n \iff m \subseteq n$
It follows from Subset Relation is Transitive that $k \subseteq n$.
Hence the result.
$\blacksquare$





