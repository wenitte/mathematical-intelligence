# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Closed_Sets_is_Closed/Normed_Vector_Space

Theorem
Let $M = \struct {X, \norm {\, \cdot \,} }$ be a normed vector space.

Then the union of finitely many closed sets of $M$ is itself closed.


Proof
Let $\ds \bigcup_{i \mathop = 1}^n F_i$ be the union of a finite number of closed sets of $M$.
By definition of closed set, each of the $X \setminus F_i$ is by definition open in $M$.
Then from De Morgan's laws:

$\ds X \setminus \bigcup_{i \mathop = 1}^n F_i = \bigcap_{i \mathop = 1}^n \paren {X \setminus F_i}$
We have that $\ds \bigcap_{i \mathop = 1}^n \paren {X \setminus F_i}$ is the intersection of a finite number of open sets of $M$.
By Finite Intersection of Open Sets of Normed Vector Space is Open, $\ds \bigcap_{i \mathop = 1}^n \paren {X \setminus F_i} = X \setminus \bigcup_{i \mathop = 1}^n F_i$ is likewise open in $M$.
Then by definition of closed set, $\ds \bigcup_{i \mathop = 1}^n F_i$ is closed in $M$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.3$: Normed and Banach spaces. Topology of normed spaces




