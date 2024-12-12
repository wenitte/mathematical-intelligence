# 

Source: https://proofwiki.org/wiki/Cowen%27s_Theorem/Lemma_6



Lemma for Cowen's Theorem
Let $g$ be a progressing mapping.
Let $x$ be a set.
Let $\powerset x$ denote the power set of $x$.
Let $M_x$ denote the intersection of the $x$-special subsets of $\powerset x$ with respect to $g$.

Let $M$ be the class of all $x$ such that $x \in M_x$.
We have that:

$\forall z: M_z \subseteq M$


Proof
Let $x \in M_z$.
Let $y = x \cup z$.
From Set is Subset of Union:

$z \subseteq y$
Hence by Lemma $3$:

$M_z \subseteq M_y$
Hence:

$x \in M_y$
Also, we have:

$x \subseteq y$
and so from Lemma $5$:

$M_y \subseteq M_x \cup \paren {\powerset y \setminus \powerset x}$
Hence:

$x \in M_x \cup \paren {\powerset y \setminus \powerset x}$
But we have that:

$x \notin \powerset y \setminus \powerset x$
Hence:

$x \in M_x$
Thus:

$x \in M$
and so:

$M_z \subseteq M$
and the result is shown to hold.
$\blacksquare$


Source of Name
This entry was named for Robert H. Cowen.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 7$ Cowen's theorem: Proposition $7.9$




