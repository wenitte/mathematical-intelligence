# 

Source: https://proofwiki.org/wiki/Identity_Mapping_to_Expansion_is_Closed

Theorem
Let $S$ be a set on which $\tau_1$ and $\tau_2$ are topologies such that:

$\tau_1 \subseteq \tau_2$
that is, such that $\tau_2$ is an expansion of $\tau_1$.
Let $I_X: \struct {S, \tau_1} \to \struct {S, \tau_2}$ be the identity mapping from $\struct {S, \tau_1}$ to $\struct {S, \tau_2}$.

Then $I_S$ is closed.


Proof
$\tau_1 \subseteq \tau_2$ means that every open set of $\struct {S, \tau_1}$ is also an open set of $\struct {S, \tau_2}$.
Let $A \subseteq S$ be closed in $\struct {S, \tau_1}$
Then by definition $S \setminus A$ is open in $\struct {S, \tau_1}$.
Then $\map {I_S} {S \setminus A} = S \setminus A$ is open in $\struct {S, \tau_2}$.
So, by definition, $\map {I_S} A = A$ is closed in $\struct {S, \tau_2}$.
So for all $A \subseteq S$ closed in $\struct {S, \tau_1}$, it holds that $\map {I_S} A$ is closed in $\struct {S, \tau_2}$.
So by definition of closed mapping, the result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Functions, Products, and Subspaces




