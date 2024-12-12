# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Connected_Topological_Space/No_Continuous_Surjection_to_Discrete_Two-Point_Space_implies_No_Separation

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T$ be such that there exists no continuous surjection from $T$ onto a discrete two-point space.

Then there exist no open sets $A, B \in \tau$ such that $A, B \ne \O$, $A \cup B = S$ and $A \cap B = \O$.


Proof
Let $T = \struct {S, \tau}$ be a topological space such that there exists no continuous surjection from $T$ onto a discrete two-point space.

Let $D = \struct {\set {0, 1}, \tau}$ be the discrete two-point space on $\left\{{0, 1}\right\}$.
Let $A$ and $B$ be disjoint open sets of $T$ such that $A \cup B = S$.
The aim is to show that one of them is empty.

Let us define the mapping $f: S \to \set {0, 1}$ by:

$\map f x = \begin{cases}
0 & : x \in A \\
1 & : x \in B
\end{cases}$
There are only four open sets in $\set {0, 1}$, namely:

$\O$
$\set 0$
$\set 1$
$\set {0, 1}$

We have that:

$f^{-1} \sqbrk \O = \O$
$f^{-1} \sqbrk {\set 0} = A$
$f^{-1} \sqbrk {\set 1} = B$
$f^{-1} \sqbrk {\set {0, 1} } = S$
where $f^{-1} \sqbrk X$ denotes the preimage of the set $X$.

But by hypothesis all of $\O, A, B, S$ are open sets of $T$.
So by definition $f$ is continuous.
Also by hypothesis, $f$ cannot be surjective.
It follows that $f$ must be constant.
So either $A$ or $B$ must be empty, and the other one must be $S$.
Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.2$: Connectedness: Proposition $6.2.3$




