# 

Source: https://proofwiki.org/wiki/Convex_Set_Characterization_(Order_Theory)


It has been suggested that this page be renamed.In particular: to something standard for this siteTo discuss this page in more detail, feel free to use the talk page.

This article needs to be linked to other articles.In particular: upper closure, lower closureYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\struct {S, \preceq, \tau}$ be an ordered set.
Let $C \subseteq S$.

The following statements are equivalent:




\((1)\)  

$:$  













$C$ is convex.   

  


\((2)\)  

$:$  













$C$ is the intersection of an upper section with a lower section.   

  


\((3)\)  

$:$  













$C$ is the intersection of its upper closure with its lower closure.   

  



Proof
$(2)$ implies $(1)$
Follows from Upper Section is Convex, Lower Section is Convex, and Intersection of Convex Sets is Convex Set (Order Theory).
$\Box$


$(1)$ implies $(3)$

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $C$ be a convex set in $S$.
Let $U$ and $L$ be the upper and lower closures of $C$, respectively.
Since $C \subseteq U$ and $C \subseteq L$:

$C \subseteq U \cap L$.
Let $p \in U \cap L$.
Then $a \preceq p \preceq b$ for some $a, b \in C$.
Since $C$ is convex, $p \in C$.
Since this holds for all $p \in U \cap L$:

$U \cap L \subseteq C$.
Since we know that $C \subseteq U \cap L$, $C = U \cap L$.
$\Box$


$(3)$ implies $(2)$
Follows from Upper Closure is Upper Section and Lower Closure is Lower Section.
$\blacksquare$





