# 

Source: https://proofwiki.org/wiki/Letter_L_and_Letter_T_are_not_Homeomorphic

Theorem
Let $\R^2$ denote the real number plane under the Euclidean topology.
Let $\mathsf L \subseteq \R^2$ denote the letter $L$:

$\mathsf L := \closedint 0 1 \times \set 0 \cup \set 0 \times \closedint 0 1$
Let $\mathsf T \subseteq \R^2$ denote the letter $T$:

$\mathsf T := \closedint {-1} 1 \times \set 0 \cup \set 0 \times \closedint 0 1$

Then $\mathsf L$ and $\mathsf T$ are not homeomorphic.


Proof
Aiming for a contradiction, suppose $f: \mathsf T \to \mathsf L$ is a homeomorphism.
Let $g$ be the restriction of $f$ to $\mathsf T \setminus \set \bszero$, where $\bszero := \tuple {0, 0}$ denotes the origin of $\R^2$.
Then from Restriction of Homeomorphism is Homeomorphism, $g$ is also a homeomorphism.
But $\bszero$ is the junction point of $\mathsf T$, which means that $\mathsf T \setminus \set \bszero$ consists of $3$ disjoint half-open intervals.
However, no matter where $\map f x$ is located in $\mathsf L$, the set $\mathsf L \setminus \set {\map f x}$ consists either of $1$ or $2$ half-open intervals.


This needs considerable tedious hard slog to complete it.In particular: It remains to be shown that spaces consisting of different numbers of half-open intervals are not homeomorphic.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
This contradicts the supposition that such a homeomorphism $f$ exists.
Hence, by Proof by Contradiction, $\mathsf L$ and $\mathsf T$ are not homeomorphic.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.6$: Homeomorphisms: Examples $3.6.2 \ \text{(d)}$




