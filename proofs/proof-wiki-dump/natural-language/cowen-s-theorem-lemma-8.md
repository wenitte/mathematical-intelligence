# 

Source: https://proofwiki.org/wiki/Cowen%27s_Theorem/Lemma_8



Lemma for Cowen's Theorem
Let $g$ be a progressing mapping.
Let $x$ be a set.
Let $\powerset x$ denote the power set of $x$.
Let $M_x$ denote the intersection of the $x$-special subsets of $\powerset x$ with respect to $g$.

Let $A$ be a class which is superinductive under $g$.
Then:

$M_x \subseteq A$


Proof
Let $A$ be a class which is superinductive under $g$.
We show that $A \cap \powerset x$ is $x$-special with respect to $g$.

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

  


We take the criteria one by one:

$(1)
\quad \O \in A \cap \powerset x$
We have by definition that $\O \in A$ and $\O \in \powerset x$.
Hence:

$\O \in A \cap \powerset x$
$\Box$


$(2)
\quad A \cap \powerset x$ is closed under $g$ relative to $x$
Let $y \in A \cap \powerset x$ and $\map g y \in \powerset x$.
Because $y \in A$ we have:

$\map g y \in A$
Hence:

$\map g y \in A \cap \powerset x$
That is, $A \cap \powerset x$ is closed under $g$ relative to $x$.
$\Box$


$(3)
\quad A \cap \powerset x$ is closed under chain unions
Because $A$ and $\powerset x$ are both closed under chain unions, then so is $A \cap \powerset x$.


This article, or a section of it, needs explaining.In particular: Find whatever appropriate results there are to prove thisYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\Box$

We have demonstrated that $A \cap \powerset x$ is $x$-special with respect to $g$.
We have that:

$A \cap \powerset x \subseteq \powerset x$
Hence:

$M_a \subseteq A \cap \powerset x$
Hence it follows that:

$M_y \subseteq A$
$\blacksquare$


Source of Name
This entry was named for Robert H. Cowen.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 7$ Cowen's theorem: Lemma $7.11$




