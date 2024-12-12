# 

Source: https://proofwiki.org/wiki/Closed_Set/Complex_Analysis/Examples/Closed_Unit_Circle

Example of Closed Set in the context of Complex Analysis
Let $S$ be the subset of the complex plane defined as:

$\cmod z \le 1$
where $\cmod z$ denotes the complex modulus of $z$.

Then $S$ is closed.


Proof
By definition, $S$ is closed if and only if $S$ contains all its limit points.
Aiming for a contradiction, suppose $S$ is not closed.
Then $\exists z_1 \in \C: z_1 \notin S$ such that $z_1$ is a limit point of $S$.
We have that $z_1 \notin S$, so $\cmod {z_1} > 1$.
Let $\epsilon \in \R: \epsilon < \cmod {z_1} - 1$.
Then:

$\map {\N_\epsilon} {z_1} \cap S = \O$
and so $z_1$ is not a limit point of $S$ after all.
Thus there is no such $z_1$.
So by Proof by Contradiction, $S$ is closed.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Point Sets: $3.$




