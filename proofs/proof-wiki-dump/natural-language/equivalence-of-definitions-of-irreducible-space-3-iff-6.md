# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Irreducible_Space/3_iff_6



Theorem
The following definitions of the concept of Irreducible Space are equivalent:

Definition 3
A topological space $T = \struct {S, \tau}$ is irreducible if and only if every two non-empty open sets of $T$ have non-empty intersection:

$\forall U, V \in \tau: U, V \ne \O \implies U \cap V \ne \O$
Definition 6
A topological space $T = \struct {S, \tau}$ is irreducible if and only if the closure of every non-empty open set is the whole space:

$\forall U \in \tau: U \ne \O \implies U^- = S$


Proof
Let $T = \struct {S, \tau}$ be an irreducible space by Definition 3.
That is, let every non-empty open set in $T$ have a non-empty intersection with every other non-empty  open set.
Let $U \in \tau$ be open in $T$ such that $U \ne \O$.
If $U = S$ then $U^- = S$ trivially.

So, let $U \ne S$.
Let $x \in S$ such that $x \ne U$.
Let $V$ be any non-empty open set of $T$ such that $x \in V$.
By hypothesis, $U \cap V \ne \O$.
Therefore $V$ contains some point of $U$ distinct from $x$.
$V$ is arbitrary, so it follows that every open set $V$ of $T$ such that $x \in V$ contains some point of $U$ distinct from $x$.
That is, $x$ is a limit point of $U$.
So every point of $T$ is a limit point of $U$.
Thus, by definition, every point of $T$ is in the closure of $U$.

The argument reverses directly.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




