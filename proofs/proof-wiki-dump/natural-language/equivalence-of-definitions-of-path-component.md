# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Path_Component



Theorem
The following definitions of the concept of Path Component in the context of Topology are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.
Let $x \in T$.


Equivalence Class
Let $\sim$ be the equivalence relation on $T$ defined as:

$x \sim y \iff x$ and $y$ are path-connected.
The equivalence classes of $\sim$ are called the path components of $T$.
If $x \in T$, then the path component of $T$ containing $x$ (that is, the set of points $y \in T$ with $x \sim y$) can be denoted by $\map {\operatorname{PC}_x} T$.

Union of Path-Connected Sets
The path component of $T$ containing $x$ is defined as:

$\ds \map {\operatorname{PC}_x} T = \bigcup \leftset {A \subseteq S: x \in A \land A}$ is path-connected $\rightset {}$
Maximal Path-Connected Set
The path component of $T$ containing $x$ is defined as:

the maximal path-connected set of $T$ that contains $x$.


Proof
Let $\CC_x = \set {A \subseteq S : x \in A \land A \text { is path-connected in } T}$
Let $C = \bigcup \CC_x$.


Lemma
$C$ is path-connected in $T$ and  $C \in \CC_x$.
$\Box$

Let $C'$ be the equivalence class containing $x$ of the equivalence relation $\sim$ defined by:

$y \sim z$ if and only if $y$ and $z$ are connected in $T$.


Equivalence Class equals Union of Path-Connected Sets
It needs to be shown that $C = C'$.














\(\ds y \in C'\)

\(\leadstoandfrom\)







\(\ds x \text{ is path-connected to } y \text{ in } T\)





Definition of $\sim$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists B \text{ a connected set of } T, x \in B, y \in B\)





Points are Path-Connected iff Contained in Path-Connected Set














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists B \in \CC_x : y \in B\)





Equivalent definition














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


Union of Path-Connected Sets is Maximal Path-Connected Set
Let $\tilde C$ be any path-connected set such that:

$C \subseteq \tilde C$
Then $x \in \tilde C$.
Hence $\tilde C \in \CC_x$.
From Set is Subset of Union, 

$\tilde C \subseteq C$.
Hence $\tilde C = C$.
It follows that $C$ is a maximal path-connected set of $T$ by definition.
$\Box$


Maximal Path-Connected Set is Union of Path-Connected Sets
Let $\tilde C$ be a maximal path-connected set of $T$ that contains $x$.
By definition:

$\tilde C \in \CC_x$
From Set is Subset of Union:

$\tilde C \subseteq C$
By maximality of $\tilde C$:

$\tilde C = C$
$\blacksquare$


Also see
Path-Connectedness is Equivalence Relation


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




