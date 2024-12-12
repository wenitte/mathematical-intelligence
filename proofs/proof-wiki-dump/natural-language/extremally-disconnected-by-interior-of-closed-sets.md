# 

Source: https://proofwiki.org/wiki/Extremally_Disconnected_by_Interior_of_Closed_Sets



Theorem
The following definitions of the concept of Extremally Disconnected Space are equivalent:

Definition using Closures of Open Sets
A $T_2$ (Hausdorff) topological space $T = \struct {S, \tau}$ is extremally disconnected if and only if the closure of every open set of $T$ is open.

Definition using Interiors of Closed Sets
A $T_2$ (Hausdorff) topological space $T = \struct {S, \tau}$ is extremally disconnected if and only if the interior of every closed set of $T$ is closed.


Proof
Let $T = \struct {S, \tau}$ be a $T_2$ (Hausdorff) topological space such that the closure of every open set of $T$ is open.
Let $V \subseteq S$ be closed in $T$.
Then $S \setminus V$ is open by definition.
Then its closure $\paren {S \setminus V}^-$ is open by hypothesis.
By Complement of Interior equals Closure of Complement we have that:

$\paren {S \setminus V}^- = S \setminus V^\circ$
where $V^\circ$ is the interior of $V$.
As $S \setminus V^\circ$ is open in $T$, it follows that $V^-$ is closed.
So the interior of every closed set of $T$ is closed.
$\Box$

By a similar argument we see that if the interior of every closed set of $T$ is closed in $T$, then the closure of every open set of $T$ is open.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Disconnectedness




