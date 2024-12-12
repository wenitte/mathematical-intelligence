# 

Source: https://proofwiki.org/wiki/Complement_of_Lower_Section_is_Upper_Section



Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $L$ be a lower section.

Then $S \setminus L$ is an upper section.


Proof
Let $u \in S \setminus L$.
Let $s \in S$ such that $u \preceq s$.
Aiming for a contradiction, suppose $s \notin S \setminus L$.
Then $s \in L$.
By definition of lower section, $u \in L$, a contradiction.
Hence $s \in S \setminus L$.
Since this holds for all such $u$ and $s$, $S \setminus L$ is an upper section.
$\blacksquare$


Also see
Complement of Upper Section is Lower Section


Sources
Mizar article YELLOW_6:funcreg 6




