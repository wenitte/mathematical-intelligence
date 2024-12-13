# 

Source: https://proofwiki.org/wiki/Path-Connected_Space_is_Connected



Theorem
Let $T$ be a topological space which is path-connected.

Then $T$ is connected.


Proof 1
Suppose $X \mid Y$ is a separation of $T$.
As $X$ and $Y$ are non-empty, we can find $x \in X$ and $y \in Y$.
As $T$ is path-connected, there exists a path $f : \closedint 0 1 \to T$ with initial point $x$ and final point $y$.
Subset of Real Numbers is Interval iff Connected shows that $\closedint 0 1$ is connected.
Continuous Image of Connected Space is Connected shows that $\Img f$ is connected.
Connected Subspace Lie in One Component of Separation shows that either $\Img f \cap X = \O$, or $\Img f \cap Y = \O$.
As we have $x, y \in \Img f$, this is a contradiction.
It follows that there can be no separation of $T$, so $T$ is connected.
$\blacksquare$


Proof 2
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


Also see
Closed Topologist's Sine Curve is not Path-Connected for a proof that the converse does not apply.


Sources
2000: James R. Munkres: Topology (2nd ed.): $3$: Connectedness and Compactness: $\S 24$: Connected Subspaces of the Real Line

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.4$: Comparison of Definitions: Proposition $6.4.1$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




