# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Locally_Connected_Space



Theorem
The following definitions of the concept of Locally Connected Space are equivalent:


Definition 1: using Local Bases
A topological space $T = \struct{S, \tau}$ is locally connected if and only if each point of $T$ has a local basis consisting entirely of connected sets in $T$.

Definition 2: using Neighborhood Bases
A topological space $T = \struct {S, \tau}$ is locally connected if and only if $T$ is weakly locally connected at each point of $T$.

Definition 3: using (Global) Basis
A topological space $T = \struct {S, \tau}$ is locally connected if and only if it has a basis consisting of connected sets in $T$.

Definition 4: using Open Components
A topological space $T = \struct {S, \tau}$ is locally connected if and only if the components of the open sets of $T$ are also open in $T$.


Proof
Definition 1 implies Definition 2
Let each point of $T$ have a local basis consisting entirely of connected sets in $T$.
From Local Basis for Open Sets Implies Neighborhood Basis of Open Sets, it follows directly that:

each point of $T$ has a neighborhood basis  consisting entirely of connected sets in $T$.
$\Box$


Definition 2 implies Definition 1
Let $T$ be weakly locally connected at each point of $T$.
That is, each point of $T$ has a neighborhood basis consisting of connected sets of $T$.
Let $x \in S$ and $x \in U \in \tau$.
Let $\BB_x = \set {W \in \tau : x \in W, W \text{ is connected in } T}$.
By definition of local basis, we have to show that there exists a connected open set $V \in \BB_x$ with $x \in V \subset U$.
Let $V = \map {\operatorname{Comp}_x} U$ denote the component of $x$ in $U$.
From Open Set in Open Subspace, it suffices to show that $V$ is open in $U$.
By Set is Open iff Neighborhood of all its Points, we may do this by showing that $V$ is a neighborhood in $U$ of all of its points.

Let $y \in V$.
By assumption, there exists a connected neighborhood $W$ of $y$ in $T$ with $W \subset U$.
By Neighborhood in Topological Subspace, $W$ is a neighborhood of $y$ in $U$.
By definition of component:

$W \subseteq \map {\operatorname{Comp}_y} U = \map {\operatorname{Comp}_x} U = V$
By Neighborhood iff Contains Neighborhood, $V$ is a neighborhood of $y$ in $U$.
Because $y$ was arbitrary, $V$ is open in $U$.
From Open Set in Open Subspace, $V$ is open in $T$.
Hence $V \in \BB_x$.
Because $U$ was arbitrary, $\BB_x$ is a local basis of $x$ consisting of (open) connected sets.
Since $x$ was arbitrary, then each point of $T$ has a local basis consisting entirely of connected sets in $T$.
$\Box$


Definition 1 implies Definition 3
Let each point $x$ of $T$ have a local basis $\DD_x$ consisting entirely of connected sets in $T$.
By definition of local basis, each of these connected sets in $\DD_x$ is open in $T$.
Consider the set $\ds \DD = \bigcup_{x \mathop \in S} \DD_x$.
From Union of Local Bases is Basis, $\DD$ is a basis for the topology $\tau$.
Since each $\DD_x$ consists entirely of connected sets, $\DD$ also consists entirely of connected sets.
$\Box$


Definition 3 implies Definition 1
Let $T$ have a basis $\BB$ consisting of connected sets in $T$.
For each $x \in S$ we define:

$\BB_x = \set {B \in \BB: x \in B}$
From Basis induces Local Basis, $\BB_x$ is a local basis.
As each element of $\BB_x$ is also an element of $\BB$, it follows that $\BB_x$ is also formed of connected sets.
Thus, for each point $x \in S$, there is a local basis which consists entirely of connected sets.
$\Box$


Definition 3 implies Definition 4
Let $T$ have a basis consisting of connected sets in $T$.
Let $U$ be an open subset of $T$.
From Open Set is Union of Elements of Basis, $U$ is a union of open connected sets in $T$.
From Open Set in Open Subspace and Connected Set in Subspace, $U$ is a union of open connected sets in $U$.
From Components are Open iff Union of Open Connected Sets, the components of $U$ are open in $U$.
From Open Set in Open Subspace then the components of $U$ are open in $T$.
$\Box$


Definition 4 implies Definition 3
Let the components of the open sets of $T$ are also open in $T$.
Let $\BB = \set {U \in \tau : U \text{ is connected in } T}$.
Let $U$ be open in $T$.
By assumption, the components of $U$ are open in $T$.
From Connected Set in Subspace, the components of $U$ are connected in $T$.
By the definition of the components of a topological space, $U$ is the union of its components.
Hence $U$ is the union of open connected sets in $T$.
By definition, $\BB$ is an basis for $T$.
$\blacksquare$


Also see
Equivalence of Definitions of Locally Path-Connected Space, whose proof is almost the same


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




