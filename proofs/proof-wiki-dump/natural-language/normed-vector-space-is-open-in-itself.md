# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Open_in_Itself



Theorem
Let $M = \struct {X, \norm {\, \cdot \,}}$ be a normed vector space.

Then the set $X$ is an open set of $M$.


Proof 1
By definition, an open set $S \subseteq A$ is one where every point inside it is an element of an open ball contained entirely within that set.
Let $x \in X$.
An open ball of $x$ in $M$ is by definition a subset of $X$.
Hence the result.
$\blacksquare$


Proof 2
By definition, a subset $S \subseteq X$ is open if:

$\forall x \in X : \exists \epsilon \in \R_{>0} : \map {B_\epsilon} x \subseteq S$
Let $S = X$.
Aiming for a contradiction, suppose $X$ is not open.
By De Morgan's laws:

$\exists x \in X : \forall \epsilon \in \R_{>0} : \map {B_\epsilon} x \cap \paren {X \setminus S} \ne \O$
Note that:

$X \setminus S = X \setminus X = \O$.
By Intersection with Empty Set:

$\map {B_\epsilon} x \cap \O = \O$
Hence:

$\exists x \in X : \forall \epsilon \in \R_{>0} : \O \ne \O$.
Since Empty Set is Unique, we have a contradiction.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.3$: Normed and Banach spaces. Topology of normed spaces




