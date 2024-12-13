# 

Source: https://proofwiki.org/wiki/Intersection_of_Closed_Intervals_of_Positive_Reals_is_Zero

Theorem
Let $\R_{> 0}$ be the set of strictly positive real numbers.
For all $x \in \R_{> 0}$, let $B_x$ be the closed real interval $\closedint 0 x$.

Then:

$\ds \bigcap_{x \mathop \in \R_{> 0} } B_x = \set 0$


Proof
Let $\ds B = \bigcap_{x \mathop \in \R_{> 0} } B_x$.
We have that:

$\forall x \in \R_{> 0}: 0 \in \closedint 0 x$
So by definition of intersection:

$0 \in B$
and so by Singleton of Element is Subset:

$\ds \set 0 \subseteq \bigcap_{x \mathop \in \R_{> 0} } B_x$

Aiming for a contradiction, suppose $\exists y \in \R_{> 0}: y \in B$.
By definition of $B_x$:

$y \notin \closedint 0 {\dfrac y 2} = B_{y/2}$
and so by definition of intersection of family:

$y \notin B$
From this contradiction it follows that there can be no elements in $B$ apart from $0$.
That is:

$\ds \bigcap_{x \mathop \in \R_{> 0} } A_x \subseteq \set 0$

By definition of set equality:

$\ds \bigcap_{x \mathop \in \R_{> 0} } B_x = \set 0$
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 4$: Indexed Families of Sets: Exercise $5$




