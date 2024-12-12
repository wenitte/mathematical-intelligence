# 

Source: https://proofwiki.org/wiki/Filter_is_Finer_iff_Sets_of_Basis_are_Subsets



Theorem
Let $S$ be a set.
Let $\powerset S$ denote the power set of $S$.
Let $\FF, \FF' \subset \powerset S$ be two filters on $S$.
Let $\FF$ have a basis $\BB$.
Let $\FF'$ have a basis $\BB'$.

$\FF$ is finer than $\FF'$ if and only if for every set of $\BB'$, there is a set of $\BB$ subset to it.


Proof
Necessary Condition
Suppose for every set of $\BB'$, there is a set of $\BB$ subset to it.
Pick any $U \in \FF'$.
Then from definition of a basis:

$\exists V' \in \BB': V' \subseteq U$
By our assumption:

$\exists V \in \BB: V \subseteq V' \subseteq U \subseteq S$
By definition of a filter:

$U \in \FF$.
Hence we have $\FF' \subseteq \FF$.
$\Box$


Sufficient Condition
We prove the contrapositive.
Suppose there is some set of $\BB'$ with no set of $\BB$ subset to it.
Let $U$ be such a set.
Then $U \in \BB' \subseteq \FF'$.
From our assumption:

$\nexists V \in \BB: V \subseteq U$
From the definition of a basis:

$U \notin \FF$
This gives $\FF' \nsubseteq \FF$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Filters




