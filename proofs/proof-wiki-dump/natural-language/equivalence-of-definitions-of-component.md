# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Component



Theorem
The following definitions of the concept of Component in the context of Topology are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in T$.

Definition 1: Equivalence Class
From Connectedness of Points is Equivalence Relation, $\sim$ is an equivalence relation.
From the Fundamental Theorem on Equivalence Relations, the points in $T$ can be partitioned into equivalence classes.
These equivalence classes are called the (connected) components of $T$.

If $x \in S$, then the component of $T$ containing $x$ (that is, the set of points $y \in S$ with $x \sim y$) is denoted by $\map {\operatorname {Comp}_x} T$.

Definition 2: Union of Connected Sets
The component of $T$ containing $x$ is defined as:

$\ds \map {\operatorname{Comp}_x} T = \bigcup \leftset{A \subseteq S: x \in A \land A}$ is connected $\rightset{}$
Definition 3: Maximal Connected Set
The component of $T$ containing $x$ is defined as:

the maximal connected set of $T$ that contains $x$.


Proof
Let $\CC_x = \set {A \subseteq S : x \in A \land A \text{ is connected in } T}$
Let $C = \bigcup \CC_x$


Lemma
$C$ is connected in $T$ and $C \in \CC_x$.
$\Box$

Let $C'$ be the equivalence class containing $x$ of the equivalence relation $\sim$ defined by:

$y \sim z$ if and only if $y$ and $z$ are connected in $T$.


Equivalence Class equals Union of Connected Sets
It needs to be shown that $C = C'$.














\(\ds y \in C'\)

\(\leadstoandfrom\)







\(\ds \exists B \text{ a connected set of } T, x \in B, y \in B\)





Definition of $\sim$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists B \in \CC_x : y \in B\)





equivalent definition














\(\ds \)

\(\leadstoandfrom\)







\(\ds y \in \bigcup \CC_x\)





Definition of Union of Set of Sets














\(\ds \)

\(\leadstoandfrom\)







\(\ds y \in C\)





Definition of $C$



The result follows.
$\Box$


Union of Connected Sets is Maximal Connected Set
Let $\tilde C$ be any connected set such that:

$C \subseteq \tilde C$
Then $x \in \tilde C$.
Hence $\tilde C \in \CC_x$.
From Set is Subset of Union, 

$\tilde C \subseteq C$.
Hence $\tilde C = C$.
It follows that $C$ is a maximal connected set of $T$ by definition.
$\Box$


Maximal Connected Set is Union of Connected Sets
Let $\tilde C$ be a maximal connected set of $T$ that contains $x$.
By definition:

$\tilde C \in \CC_x$
From Set is Subset of Union:

$\tilde C \subseteq C$
By maximality of $\tilde C$:

$\tilde C = C$
$\blacksquare$


Also see
Connectedness of Points is Equivalence Relation


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




