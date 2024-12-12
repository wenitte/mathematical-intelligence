# 

Source: https://proofwiki.org/wiki/Clopen_Set_contains_Components_of_All_its_Points

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$ be both closed and open in $T$.

Then $H$ contains the components of all of its points.


Proof
Let $H$ be a clopen set in $T$.
By definition, $H$ is open and so $H \in \tau$.
But as $H$ is also closed, by definition $\relcomp S H \in \tau$ where $\complement_S$ denotes complement relative to $S$.
Thus $H$ and $\relcomp S H$ are both open such that:

$H \cap \relcomp S H = \O$ from Intersection with Relative Complement is Empty
$H \cup \relcomp S H = S$ from Union with Relative Complement
and so forming a partition of $T$.
As $H$ and $\relcomp S H$ are both closed, it follows from Closed Set Equals its Closure that:

$H \cap \paren {\relcomp S H}^- = \O = H^- \cap \relcomp S H$
and so by definition $H$ and $\relcomp S H$ are separated.

Aiming for a contradiction, suppose that $H$ does not contain the components of all of its points.
That is:

$\exists x \in H: \map {\operatorname {Comp}_x} T \nsubseteq H$
where $\map {\operatorname {Comp}_x} T$ is the component of $x$ in $T$.
Then:

$\exists z \in \map {\operatorname {Comp}_x} T: z \in H \cup \relcomp S H$
This means that $H \cup \relcomp S H$ is connected.
This contradicts the fact that $H$ and $\relcomp S H$ are separated.
The result follows by Proof by Contradiction.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




