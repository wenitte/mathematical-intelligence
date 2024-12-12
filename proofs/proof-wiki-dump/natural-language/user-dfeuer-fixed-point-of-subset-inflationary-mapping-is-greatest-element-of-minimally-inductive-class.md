# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Fixed_Point_of_Subset-Inflationary_Mapping_is_Greatest_Element_of_Minimally_Inductive_Class

Theorem
Let $g$ be a $\subseteq$-inflationary mapping.
Let $A$ be minimally $g$-inductive.
Let $p$ be an element of $A$ which is a fixed point of $g$.

Then $p$ is the largest element of $A$.


Proof
Let $B$ be the set of all elements of $A$ that are subsets of $p$.
$\varnothing \subseteq B$.
Let $x \in B$.
Then by User:Dfeuer/Class Minimally Inductive under Inflationary Mapping forms Nest, $g(x) \subseteq p$ or $p \subseteq x$.
If $p \subseteq x$ then since $x \in B$, $x \subseteq p$, so $x = p$.
Thus since $p$ is a fixed point of $g$, $g(x) = g(p) = p \subseteq p$.
Thus is either case, $g(x) \subseteq p$ so $g(x) \in B$.
Therefore $B$ is inductive under $g$.
Since $A$ is minimally inductive under $g$, $B \subseteq A$.
That is, every element of $A$ is a subset of $p$, so $p$ is the greatest element of $A$.
$\blacksquare$





