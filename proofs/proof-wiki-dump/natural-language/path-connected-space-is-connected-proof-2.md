# 

Source: https://proofwiki.org/wiki/Path-Connected_Space_is_Connected/Proof_2

Theorem
Let $T$ be a topological space which is path-connected.

Then $T$ is connected.


Proof
Let $D$ be the discrete space $\set {0, 1}$.
Let $T$ be path-connected.
Let $f: T \to D$ be a continuous surjection.
Let $x, y \in T: \map f x = 0, \map f y = 1$.
Let $I \subset \R$ be the closed real interval $\closedint 0 1$.
Let $g: I \to T$ be a path from $x$ to $y$.
Then by Composite of Continuous Mappings is Continuous it follows that $f \circ g: I \to D$ is a continuous surjection.
This contradicts the connectedness of $I$ as proved in Subset of Real Numbers is Interval iff Connected.


This article, or a section of it, needs explaining.In particular: Why does that follow? Explain what the chain of steps isYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence the result.
$\blacksquare$





