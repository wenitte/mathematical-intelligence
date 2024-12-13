# 

Source: https://proofwiki.org/wiki/Joining_Paths_makes_Another_Path

Theorem
Let $T$ be a topological space.
Let $I \subseteq \R$ be the closed real interval $\closedint 0 1$.
Let $f, g: I \to T$ be paths in $T$ from $a$ to $b$ and from $b$ to $c$ respectively.
Let $h: I \to T$ be the mapping given by:
$\map h x = \begin{cases}
\map f {2x} & : x \in \closedint 0 {\dfrac 1 2} \\
\map g {2x - 1} & : x \in \closedint {\dfrac 1 2} 1
\end{cases}$
Then $h$ is a path in $T$.


Proof
First we see that $h$ is well-defined, because on $\closedint 0 {\dfrac 1 2} \cap \closedint {\dfrac 1 2} 1 = \set {\dfrac 1 2}$ we have $\map f 1 = b = \map g 0$.
Now $\mathbin h {\restriction_{\closedint 0 {\frac 1 2} } } \mathop = f \circ k$ where $k: \closedint 0 {\dfrac 1 2} \to \closedint 0 1$ is given by $\map k x = 2 x$.
So by Composite of Continuous Mappings is Continuous, $\mathbin h {\restriction_{\closedint 0 {\frac 1 2} } }$ is continuous.
Similarly, $\mathbin h {\restriction_{\closedint {\frac 1 2} 1} }$ is continuous.
By Pasting Lemma for Finite Union of Closed Sets, it follows that $h$ is continuous.
Finally, $\map h 0 = \map f 0 = a$ and $\map h 1 = \map g 1 = c$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.3$: Path-connectedness: Lemma $6.3.3$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




