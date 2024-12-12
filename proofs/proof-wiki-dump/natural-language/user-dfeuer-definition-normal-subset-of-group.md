# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Definition:Normal_Subset_of_Group


This article is complete as far as it goes, but it could do with expansion.In particular: There are many equivalent formsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Definition 1
Let $(G,\circ)$ be a group.
Let $N \subseteq G$.
Then $N$ is a normal subset of $G$ iff:

$\forall g \in G: g \circ N \circ g^{-1} = N$
Definition 2
Let $(G,\circ)$ be a group.
Let $N \subseteq G$.
Then $N$ is a normal subset of $G$ iff:

$\forall g \in G: g \circ N \circ g^{-1} \subseteq N$
Definition 3
Let $(G,\circ)$ be a group.
Let $N \subseteq G$.
Then $N$ is a normal subset of $G$ iff:

$\forall g \in G: g \circ N \subseteq N \circ g$
Definition 1 implies Definition 2
Every set is a subset of itself, so the result follows.
$\blacksquare$

Definition 3 implies Definition 2
Suppose that

$\forall g \in G: g \circ N \subseteq N \circ g$
Let $g \in G$.
Let $n \in N$
Then $g \circ n \in N \circ g$
Thus for some $m \in N$:
$g \circ n = m \circ g$
Then $g \circ n \circ g^{-1} = m$
Since this holds for each $n \in N$:

$g \circ N \circ g^{-1} \subset N$.
Since this holds for each $g \in G$:

$\forall g \in G: g \circ N \circ g^{-1} \subseteq N$
$\blacksquare$

Definition 2 implies Definition 1
Let $(G,\circ)$ be a group
Let $N$ be a normal subset of $(G,\circ)$ by definition 2.
Then for each $g \in G$:

$g \circ N \circ g^{-1} \subseteq N$.
Let $x \in N$.
Then $g^{-1} \circ x \circ g \in N$.
So for some $n \in N$, $g^{-1} \circ x \circ g = n$
Thus $x \circ g = g \circ n$.
Then $x = g \circ n \circ g^{-1}$.
Thus so $x \in g \circ N \circ g^{-1}$.
Since this holds for all $x \in N$:

$N \subseteq g \circ N \circ g^{-1}$
Since we also have $g \circ N \circ g^{-1} \subseteq N$:

$N = g \circ N \circ g^{-1}$
Thus $N$ is a normal subset of $(G,\circ)$ by definition 1





