# 

Source: https://proofwiki.org/wiki/Local_Connectedness_is_not_Preserved_under_Continuous_Mapping

Theorem
Let $\struct {A, \tau_1}$ and $\struct {B, \tau_2}$ be topological spaces.
Let $f: A \to B$ be a continuous mapping.
Let $\struct {\Img f, \tau_3}$ be the image of $f$ with the subspace topology of $B$.
Let $\struct {A, \tau_1}$ be locally connected.

Then it is not necessarily the case that $\struct {\Img f, \tau_3}$ is also locally connected.


Proof
Proof by Counterexample:
Let $\struct {A, \tau_1}$ be any countable discrete space.
Let $B \subseteq \R$ be the set of all points on $\R$ defined as:

$B := \set 0 \cup \set {\dfrac 1 n: n \in \Z_{>0} }$
Let $\struct {B, \tau_2}$ be the integer reciprocal space with zero under the usual (Euclidean) topology.
From Discrete Space is Locally Connected, $\struct {A, \tau_1}$ is locally connected.
Let $f: A \to B$ be a bijection.
From Mapping from Discrete Space is Continuous, $f: A \to B$ is a continuous mapping.
From Integer Reciprocal Space with Zero is not Locally Connected, $\struct {B, \tau_2} = \struct {\Img f, \tau_3}$ is not locally connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness: Functions and Products
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $2 \ \text{(b)}$




