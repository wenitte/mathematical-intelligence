# 

Source: https://proofwiki.org/wiki/Open_Set_Less_One_Point_is_Open/Corollary

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $U \subseteq M$ be an open set of $M$.

Let $S = \set {\alpha_1, \alpha_2, \ldots, \alpha_n} \subseteq U$ be a finite set of points in $U$.
Then $U \setminus S$ is open in $M$.


Proof
Follows directly from Open Set Less One Point is Open and Finite Intersection of Open Sets of Metric Space is Open.
Let:

$U_1 = U \setminus \set {\alpha_1}, U_2 = U \setminus \set {\alpha_2}, \ldots, U_n = U \setminus \set {\alpha_n}$
From the above, $U_1, U_2, \ldots, U_n$ are all open in $M$.
From Finite Intersection of Open Sets of Metric Space is Open $\ds \bigcap_{i \mathop = 1}^n U_i$ is open.
$\blacksquare$





