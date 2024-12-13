# 

Source: https://proofwiki.org/wiki/Intersection_of_Closed_Sets_is_Closed/Topology

Theorem
Let $T = \struct {S, \tau}$ be a topological space.

Then the intersection of an arbitrary number of closed sets of $T$ (either finitely or infinitely many) is itself closed.


Proof
Let $I$ be an indexing set (either finite or infinite).
Let $\ds \bigcap_{i \mathop \in I} V_i$ be the intersection of a indexed family of closed sets of $T$ indexed by $I$.
Then from De Morgan's laws: Difference with Intersection:

$\ds S \setminus \bigcap_{i \mathop \in I} V_i = \bigcup_{i \mathop \in I} \paren {S \setminus V_i}$
By definition of closed set, each of $S \setminus V_i$ are by definition open in $T$.
We have that $\ds \bigcup_{i \mathop \in I} \paren {S \setminus V_i}$ is the union of a indexed family of open sets of $T$ indexed by $I$.
Therefore, by definition of a topology, $\ds \bigcup_{i \mathop \in I} \paren {S \setminus V_i} = S \setminus \bigcap_{i \mathop \in I} V_i$ is likewise open in $T$.
Then by definition of closed set, $\ds \bigcap_{i \mathop \in I} V_i$ is closed in $T$.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $2.24 b$
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets: Theorem $1$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 2$: Topological Spaces: Exercise $4$




