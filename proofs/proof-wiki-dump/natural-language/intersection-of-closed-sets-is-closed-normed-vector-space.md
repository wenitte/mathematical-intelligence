# 

Source: https://proofwiki.org/wiki/Intersection_of_Closed_Sets_is_Closed/Normed_Vector_Space

Theorem
Let $M = \struct {X, \norm {\, \cdot \,} }$ be a normed vector space.

Then the intersection of an arbitrary number of closed sets of $M$ (either finitely or infinitely many) is itself closed.


Proof
Let $I$ be an indexing set (either finite or infinite).
Let $\ds \bigcap_{i \mathop \in I} V_i$ be the intersection of a indexed family of closed sets of $M$ indexed by $I$.
By definition of closed set, each of $X \setminus V_i$ are by definition open in $M$.
From De Morgan's laws: Difference with Intersection:

$\ds X \setminus \bigcap_{i \mathop \in I} V_i = \bigcup_{i \mathop \in I} \paren {X \setminus V_i}$
We have that $\ds \bigcup_{i \mathop \in I} \paren {X \setminus V_i}$ is the union of a indexed family of open sets of $M$ indexed by $I$.
By Union of Open Sets of Normed Vector Space is Open, $\ds \bigcup_{i \mathop \in I} \paren {X \setminus V_i} = X \setminus \bigcap_{i \mathop \in I} V_i$ is likewise open in $M$.
Then by definition of closed set, $\ds \bigcap_{i \mathop \in I} V_i$ is closed in $M$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.3$: Normed and Banach spaces. Topology of normed spaces




