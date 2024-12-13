# 

Source: https://proofwiki.org/wiki/Pseudocompact_Normal_Space_is_Countably_Compact

Theorem
Let $T = \struct {S, \tau}$ be a normal space.
Then $T$ is pseudocompact if and only if $T$ is countably compact.


Proof
Let $T = \struct {S, \tau}$ be a normal space.
By Countably Compact Space is Pseudocompact we already have that if $T$ is countably compact then $T$ is pseudocompact.
It remains to prove that if $T$ is pseudocompact then $T$ is countably compact.

Aiming for a contradiction, suppose $T$ is not countably compact.
By definition of countably compact space, $S$ contains an infinite subset $H = \set {x_n}$ with no $\omega$-accumulation point in $T$.
Since, by definition of normal, $S$ is a $T_1$ space, $H$ is closed and discrete in the subspace topology.


This article, or a section of it, needs explaining.In particular: $H$ is closed and discrete in the subspace topology.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

By definition, $T$ is pseudocompact if and only if every continuous real-valued function on $S$ is bounded.
By definition of normal, we have that $S$ is a $T_4$ space.
Hence the Tietze Extension Theorem guarantees a continuous extension to $S$ of the unbounded continuous mapping $f: H \to \R$ defined by $\map f {x_n} = n$.
This contradicts our hypothesis that $S$ is pseudocompact.
It follows by Proof by Contradiction that $T$ is countably compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Global Compactness Properties




