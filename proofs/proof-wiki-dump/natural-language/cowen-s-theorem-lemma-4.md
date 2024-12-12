# 

Source: https://proofwiki.org/wiki/Cowen%27s_Theorem/Lemma_4



Lemma for Cowen's Theorem
Let $g$ be a progressing mapping.
Let $x$ be a set.
Let $\powerset x$ denote the power set of $x$.
Let $M_x$ denote the intersection of the $x$-special subsets of $\powerset x$ with respect to $g$.

Let $M$ be the class of all $x$ such that $x \in M_x$.
We have that:

$M$ is closed under chain unions.


Proof
Let $C$ be a chain of elements of $M$.
For each $x \in C$, we have $x \subseteq \ds \bigcup C$.
Hence by Lemma $3$:

$M_x \subseteq M_{\mathop \cup C}$
Also, because $x \in M_x$, we have:

$x \in M_x$
Hence:

$x \in M_{\mathop \cup C}$
Thus:

$C \subseteq M_{\mathop \cup C}$
Because $M_{\mathop \cup C}$ is closed under chain unions:

$\ds \bigcup C \in M_{\mathop \cup C}$
Hence:

$\ds \bigcup C \in M$
$\blacksquare$


Source of Name
This entry was named for Robert H. Cowen.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 7$ Cowen's theorem: Proposition $7.7$




