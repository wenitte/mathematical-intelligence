# 

Source: https://proofwiki.org/wiki/Filter_Basis_Generates_Filter

Theorem
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.
Let $\BB \subset \powerset S$.

Then:

$\FF = \set {V \subseteq S: \exists U \in \BB: U \subseteq V}$ is a filter on $S$
if and only if:

$(1): \quad \forall V_1, V_2 \in \BB: \exists U \in \BB: U \subseteq V_1 \cap V_2$
$(2): \quad \O \notin \BB, \BB \ne \O$

That is, $\BB$ is a filter basis of the filter $\FF$, which is generated by $\BB$.


Proof
Assume first that $\FF$ is a filter on $S$.
Then $S \in \FF$ and thus $\BB \ne \O$.
Because $\O \notin \FF$ we have that $\O \notin \BB$, since $\BB \subseteq \FF$.

Let $V_1, V_2 \in \BB$.
Then:

$V_1, V_2 \in \FF$
Because $\FF$ is a filter:

$V := V_1 \cap V_2 \in \FF$
The definition of $\FF$ implies therefore that there is $U \in \BB$ such that $U \subseteq V = V_1 \cap V_2$.
$\Box$

Assume now that $\BB$ satisfies conditions $(1)$ and $(2)$.
To show that $\FF$ is a filter, note that because $\BB \ne \O$ there is a $B \in \BB$.
Because $\BB \subset \powerset S$:

$B \subseteq S$
and thus by the definition of filter:

$S \in \FF$
Because:

the only subset of $\O$ is $\O$
and:

since $\O \notin \BB$
it follows that:

$\O \notin \FF$
Let $V_1, V_2 \in \FF$.
Then there exist $U_1, U_2 \in \BB$ such that $U_1 \subseteq V_1$ and $U_2 \subseteq V_2$.
Because $\BB$ satisfies condition $(1)$ there exists a set $U \in \BB$ for which $U \subseteq U_1 \cap U_2$ holds.
Because $U_1 \cap U_2 \subseteq V_1 \cap V_2$ this implies that:

$U \subseteq V_1 \cap V_2$
and therefore:

$V_1 \cap V_2 \in \FF$
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Filters




