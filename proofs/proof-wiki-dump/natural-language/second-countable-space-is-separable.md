# 

Source: https://proofwiki.org/wiki/Second-Countable_Space_is_Separable



Theorem
Let $T = \struct {S, \tau}$ be a second-countable topological space.

Then $T$ is also a separable space.


Proof
By definition, there exists a countable basis $\BB$ for $\tau$.
Using the Axiom of Countable Choice, we can obtain a choice function $\phi$ for $\BB \setminus \set \O$.
Define:

$H = \set {\map \phi B: B \in \BB \setminus \set \O}$
By Image of Countable Set under Mapping is Countable, it follows that $H$ is countable.

It suffices to show that $H$ is everywhere dense in $T$.
Let $x \in U \in \tau$.
By Equivalence of Definitions of Analytic Basis, there exists a $B \in \BB$ such that $x \in B \subseteq U$.
Then $\map \phi B \in U$, and so $H \cap U$ is non-empty.
Hence, $x$ is an adherent point of $H$.
By Equivalence of Definitions of Adherent Point, it follows that $x \in H^-$, where $H^-$ denotes the closure of $H$.
Therefore, $H^- = S$, and so $H$ is everywhere dense in $T$ by definition.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Countability Properties
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Countability Axioms and Separability




