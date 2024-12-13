# 

Source: https://proofwiki.org/wiki/Limit_Points_of_Countable_Complement_Space

Theorem
Let $T = \struct {S, \tau}$ be a countable complement space.

Let $H \subseteq S$ be an uncountable subset of $S$.
Then every point of $S$ is a limit point of $H$.

Let $H \subseteq S$ be an countable or finite subset of $S$.
Then $H$ contains all its limit points.


Proof
Let $U \in \tau$ be any open set of $T$.
Let $H \subseteq S$ be an uncountable.
From Uncountable Subset of Countable Complement Space Intersects Open Sets, we have that $U \cap H$ is uncountable if and only if $H$ is uncountable.
Let $x \in S$.
Then every open set $U$ in $T$ such that $x \in U$ also contains an uncountable number of points of $H$ other than $x$.
Thus, by definition, $x$ is a limit point of $H$.

Now let $H$ be a countable subset of $S$.
By definition $\relcomp S H$ is open in $T$ and so $H$ is closed.
So by Closed Set Equals its Closure we have by definition that if $x$ is a limit point of $H$, then $x \in H$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $20$. Countable Complement Topology: $3$




