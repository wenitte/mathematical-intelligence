# 

Source: https://proofwiki.org/wiki/Derived_Set_in_T1_Space_is_Closed

Theorem
Let $\struct {X, \tau}$ be a $T_1$ space.
Let $S \subseteq X$.
Let $S'$ be the derived set of $S$.

Then $S'$ is closed.


Proof
Let $x \in S$.
Let $U$ be an open neighborhood of $x$.
Then by the definition of derived set, $U$ contains an element $y$ of $S'$ such that $x \ne y$.
Then $U \setminus \set x$ is an open neighborhood of $y$ by the definition of a $T_1$ space.
The definition of derived set is applied once more to see that $U \setminus \set x$ contains an element $z$ of $S$.
Thus $z \in U \cap S$ and $z \ne x$.
As this holds for all open neighborhoods $U$ of $x$, it follows that $x \in S'$.
This holds for all $x \in S$.
It follows by definition of subset that $S \subseteq S'$.
Thus $S'$ is closed.
$\blacksquare$





