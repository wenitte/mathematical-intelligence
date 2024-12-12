# 

Source: https://proofwiki.org/wiki/Cowen%27s_Theorem/Lemma_1



Lemma for Cowen's Theorem
Let $g$ be a progressing mapping.
Let $x$ be a set.
Let $\powerset x$ denote the power set of $x$.

We have that:

$\powerset x$ is $x$-special with respect to $g$.


Proof
By definition of $x$-special:

$S$ is special for $x$ (with respect to $g$)
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

  

In this context:

$S = \powerset x$

We have from Empty Set is Element of Power Set:

$\O \in \powerset x$

Then by definition of closed under $g$ relative to $x$:

$y$ is closed under $g$ relative to $x$
if and only if:

$\forall z \in y \cap \powerset x: \map g z \in y$
In this context we have:

$\forall z \in \powerset x: \map g z \in \powerset x$
This is trivially true, as $\Img g \subseteq \powerset x$ by definition.

Then by definition of closed under chain unions:

$A$ is closed under chain unions
if and only if:

for every chain $C$ of elements of $A$, $\ds \bigcup C$ is also in $A$
where $\ds \bigcup C$ denotes the union of $C$
Replacing $A$ with $\powerset x$, this is also trivially true.

Hence the result.
$\blacksquare$


Source of Name
This entry was named for Robert H. Cowen.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 7$ Cowen's theorem: Lemma $7.4$




