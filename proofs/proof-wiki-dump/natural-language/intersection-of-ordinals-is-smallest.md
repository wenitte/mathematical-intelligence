# 

Source: https://proofwiki.org/wiki/Intersection_of_Ordinals_is_Smallest


This article needs to be linked to other articles.In particular: one or two results in there which should be linked toYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: There's probably a more efficient way to do this.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $A$ be a non-empty set or class of ordinals.
Let $m = \bigcap A$ be the intersection of all the elements of $A$.

Then $m$ is the smallest element of $A$.


Proof
By Intersection of Ordinals is Ordinal, $m$ is an ordinal.
By Intersection is Largest Subset, $m \subseteq a$ for each $a \in A$.
It remains to show that $m \in A$.
Let $m^+ = m \cup \set m$ be the successor of $m$.
By Relation between Two Ordinals:

for each $a \in A$, either $m^+ \subseteq a$ or $a \in m^+$.
Let $m^+ \subseteq a$ for all $a \in A$.
Then by Intersection is Largest Subset $m^+ \subseteq m$.
This contradicts the fact that Ordinal is not Element of Itself.
Thus there is an $a \in A$ such that $a \in m^+$.
Thus $a \in m$ or $a = m$.
Let $a \in m$.
Then $a \subsetneqq m$.
This contradicts the fact that $m \subseteq a$.
Thus $a = m$.
Thus it follows that $m \in A$.
$\blacksquare$





