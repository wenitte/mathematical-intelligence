# 

Source: https://proofwiki.org/wiki/Ordinal_is_Transitive



Theorem
Every ordinal is a transitive set.


Proof 1
Let $\alpha$ be an ordinal by Definition 1:
$\alpha$ is an ordinal if and only if it fulfils the following conditions:




\((1)\)  

$:$  



$\alpha$ is a transitive set   











  


\((2)\)  

$:$  



$\Epsilon {\restriction_\alpha}$ strictly well-orders $\alpha$   











  

where $\Epsilon {\restriction_\alpha}$ is the restriction of the epsilon relation to $\alpha$.

Thus $\alpha$ is a priori transitive.
$\blacksquare$


Proof 2
Let $\alpha$ be an ordinal by Definition 2:
$\alpha$ is an ordinal if and only if it fulfils the following conditions:




\((1)\)  

$:$  



$\alpha$ is a transitive set   











  


\((2)\)  

$:$  



the epsilon relation is connected on $\alpha$:   



\(\ds \forall x, y \in \alpha: x \ne y \implies x \in y \lor y \in x \)   







  


\((3)\)  

$:$  



$\alpha$ is well-founded.   











  


Thus $\alpha$ is a priori transitive.
$\blacksquare$


Proof 3
Let $\alpha$ be an ordinal by Definition 3.
An ordinal is a strictly well-ordered set $\struct {\alpha, \prec}$ such that:

$\forall \beta \in \alpha: \alpha_\beta = \beta$
where $\alpha_\beta$ is the initial segment of $\alpha$ determined by $\beta$:

$\alpha_\beta = \set {x \in \alpha: x \prec \beta}$

That is, $\alpha$ is a transitive set.


This article, or a section of it, needs explaining.In particular: Determine exactly what is being proved hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Proof 4
Let $\alpha$ be an ordinal by Definition 4.
$\alpha$ is an ordinal if and only if:

$\alpha$ is an element of every superinductive class.

The proof proceeds by the Principle of Superinduction.

From Empty Class is Transitive we start with the fact that $0$ is transitive.
$\Box$

Let $x$ be transitive.
From Successor Set of Transitive Set is Transitive:

$x^+$ is transitive.
$\Box$

We have that Class is Transitive iff Union is Subclass.
Hence the union of a chain of transitive sets is transitive.
$\Box$

Hence the result by the Principle of Superinduction.
$\blacksquare$





