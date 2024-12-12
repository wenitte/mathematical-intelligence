# 

Source: https://proofwiki.org/wiki/Cowen%27s_Theorem/Lemma_3



Lemma for Cowen's Theorem
Let $g$ be a progressing mapping.
Let $x$ be a set.
Let $\powerset x$ denote the power set of $x$.
Let $M_x$ denote the intersection of the $x$-special subsets of $\powerset x$ with respect to $g$.
We have that:

$x \subseteq y \implies M_x \subseteq M_y$


Proof
Let us recall the definition of $x$-special with respect to $g$.

$S$ is $x$-special (with respect to $g$)
if and only if:




\((1)\)  

$:$  













$\O \in S$   

  


\((2)\)  

$:$  













$S$ is closed under $g$ relative to $x$   

  


\((3)\)  

$:$  













$S$ is closed under chain unions   

  


Let $x \subseteq y$.
First we show that $M_y \cap \powerset x$ is $x$-special with respect to $g$.
We take the criteria one by one:


$(1)
\quad \O \in M_y \cap \powerset x$
From Lemma $1$ we have that $\powerset x$ is $x$-special with respect to $g$.
Thus $\O \in \powerset x$.

We have by definition that $\O \in S$ for all $y$-special $S$ with respect to $g$.
Hence $\O$ is an element of the intersection of all $y$-special sets with respect to $g$.
That is:

$\O \in M_y$
Hence:

$\O \in M_y \cap \powerset x$
$\Box$


$(2)
\quad M_y \cap \powerset x$ is closed under $g$ relative to $x$
Let $z \in M_y \cap \powerset x$ be arbitrary.
Suppose $\map g z \subseteq x$.
Because $x \subseteq y$ we have by Subset Relation is Transitive that $\map g z \subseteq y$.
Because $z \in M_y$ and $\map g z \subseteq y$, we have that $\map g z \in M_y$.

Thus:

$\map g z \in \powerset x$
and:

$\map g z \in M_y$
Hence:

$\map g z \in M_y \cap \powerset x$
and so $M_y \cap \powerset x$ is closed under $g$ relative to $x$.
$\Box$


$(3)
\quad M_y \cap \powerset x$ is closed under chain unions
We have by definition that $M_y$ and $\powerset x$ are both closed under chain unions.
From Closure under Chain Unions is Preserved by Intersection:

$M_y \cap \powerset x$ is closed under chain unions.
$\Box$

All the criteria $(1)$, $(2)$ and $(3)$ are fulfilled by $M_y \cap \powerset x$.
Hence $M_y \cap \powerset x$ is $x$-special with respect to $g$.
By Intersection is Subset:

$M_y \cap \powerset x \subseteq \powerset x$
and so:

$M_x \subseteq M_y \cap \powerset x$

This article, or a section of it, needs explaining.In particular: Not quite sure why the above $M_x \subseteq M_y \cap \powerset x$ follows, and what exactly fromYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
That is:

$M_x \subseteq M_y$
$\blacksquare$


Source of Name
This entry was named for Robert H. Cowen.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 7$ Cowen's theorem: Lemma $7.6$




