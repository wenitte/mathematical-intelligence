# 

Source: https://proofwiki.org/wiki/Compact_Subspace_of_Hausdorff_Space_is_Closed/Proof_1



Theorem
Let $H = \struct {A, \tau}$ be a Hausdorff space.
Let $C$ be a compact subspace of $H$.

Then $C$ is closed in $H$.


Proof
From Subspace of Hausdorff Space is Hausdorff, a subspace of a Hausdorff space is itself Hausdorff.
Let $a \in A \setminus C$.
We are going to prove that there exists an open set $U_a$ such that $a \in U_a \subseteq A \setminus C$.

For any single point $x \in C$, the Hausdorff condition ensures the existence of disjoint open set $\map U x$ and $\map V x$ containing $a$ and $x$ respectively.
Suppose there were only a finite number of points $x_1, x_2, \ldots, x_r$ in $C$.
Then we could take $\ds U_a = \bigcap_{i \mathop = 1}^r \map U {x_i}$ and get $a \in U_a \subseteq A \setminus C$.

Now suppose $C$ is not finite.
The set $\set {\map V x: x \in C}$ is an open cover for $C$.
As $C$ is compact, it has a finite subcover, say $\set {\map V {x_1}, \map V {x_2}, \dotsc, \map V {x_r} }$.
Let $\ds U_a = \bigcap_{i \mathop = 1}^r \map U {x_i}$.
Then $U_a$ is open because it is a finite intersection of open sets.
Also, $a \in U_a$ because $a \in \map U {x_i}$ for each $i = 1, 2, \ldots, r$.

Finally, if $b \in U_a$ then for any $i = 1, 2, \ldots, r$ we have $b \in \map U {x_i}$.
Because $\ds C \subseteq \bigcup_{i \mathop = 1}^r \map V {x_i}$:

$b \notin \map V {x_i}$, so $b \notin C$
Thus:

$U_a \subseteq A \setminus C$.

Then:

$\ds A \setminus C = \bigcup_{a \mathop \in A \mathop \setminus C} U_a$
So $A \setminus C$ is open.
It follows that $C$ is closed.
$\blacksquare$


Axiom of Choice
This proof depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.4$: Properties of compact spaces: Proposition $5.4.2$




