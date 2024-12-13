# 

Source: https://proofwiki.org/wiki/Intersection_of_Open_Intervals_of_Positive_Reals_is_Empty

Theorem
Let $\R_{>0}$ be the set of strictly positive real numbers.
For all $x \in \R_{>0}$, let $A_x$ be the open real interval $\openint 0 x$.

Then:

$\ds \bigcap_{x \mathop \in \R_{>0} } A_x = \O$


Proof
Let $\ds A = \bigcap_{x \mathop \in \R_{>0} } A_x$.
Aiming for a contradiction, suppose $A \ne \O$.
Then:

$\exists y \in \R_{>0}: y \in A$
By definition of open interval:

$y \notin \openint 0 y = A_y$
and so by definition of intersection of family:

$y \notin A$
From this contradiction it follows that $A$ has no elements.
That is:

$\ds \bigcap_{x \mathop \in \R_{>0} } A_x = \O$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 4$: Indexed Families of Sets: Exercise $5$




