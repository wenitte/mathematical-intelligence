# 

Source: https://proofwiki.org/wiki/Intersection_of_Ordinals_is_Ordinal



Theorem
Let $A$ be a non-empty class of ordinals.

Then its intersection $\bigcap A$ is an ordinal.


Proof
Let $\alpha = \bigcap A$.

It will be demonstrated that $\alpha$ is an ordinal according to Definition $2$:
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











  



Set
By Intersection of Non-Empty Class is Set, $\alpha$ is a set.
$\Box$


Transitive
Let $n \in \alpha$.
Let $m \in n$.
Let $\beta \in A$ be arbitrary.
By the definition of intersection:

$n \in \beta$
Since $\beta$ is an ordinal, it is transitive.
Thus:

$m \in \beta$
As $\beta$ is arbitrary, this holds for all $\beta \in A$.
Thus:

$m \in \alpha$
Thus $\alpha$ is transitive.
$\Box$


This article, or a section of it, needs explaining.In particular: The above needs to be populated with links to results in order for it to make sense.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


$\in$-connected
Let $x, y \in \alpha$ be arbitrary such that $x \ne y$.
Since $A$ is non-empty, it has an element $\beta$.
By the definition of intersection:

$x, y \in \beta$
Since $\beta$ is an ordinal, it is $\in$-connected.
Thus $x \in y$ or $y \in x$.
As $x$ and $y$ are arbitrary, this holds for all $x, y \in \alpha$.
That is, $\alpha$ is $\in$-connected.
$\Box$


Well-founded
Let $\beta$ be a non-empty subset of $\alpha$.
Let $\gamma \in A$ (such exists because $A$ is non-empty).
By Intersection is Largest Subset:

$\beta \subseteq \gamma$
Since $\gamma$ is an ordinal it is well-founded.
Thus $\beta$ has an element $x$ such that $x \cap \beta = \O$.
As this holds for all such $\beta$, $\alpha$ is well-founded.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $5$: Ordinal Numbers: $\S 2$ Ordinals and transitivity: Exercise $2.2$




