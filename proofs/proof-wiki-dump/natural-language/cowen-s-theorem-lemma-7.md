# 

Source: https://proofwiki.org/wiki/Cowen%27s_Theorem/Lemma_7



Lemma for Cowen's Theorem
Let $g$ be a progressing mapping.
Let $x$ be a set.
Let $\powerset x$ denote the power set of $x$.
Let $M_x$ denote the intersection of the $x$-special subsets of $\powerset x$ with respect to $g$.

Let $M$ be the class of all $x$ such that $x \in M_x$.
We have that:

$M$ is closed under $g$ relative to $x$.


Proof
Let $x \in M$.
Then $x \in M_x$.
Because $x \subseteq x \cup \map g x$, we have from Lemma $3$:

$M_x \subseteq M_{x \cup \map g x}$
Hence:

$x \in M_{x \cup \map g x}$
Also:

$\map g x \subseteq x \cup \map g x$
and so:

$\map g x \in M_{x \cup \map g x}$
Also, from Lemma $6$:

$M_{x \cup \map g x} \subseteq M$
Hence:

$\map g x \in M$
and the result follows.
$\blacksquare$


Source of Name
This entry was named for Robert H. Cowen.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 7$ Cowen's theorem: Proposition $7.10$




