# 

Source: https://proofwiki.org/wiki/Separated_Subsets_of_Linearly_Ordered_Space_under_Order_Topology

Theorem
Let $T = \struct {S, \preceq, \tau}$ be a linearly ordered space.
Let $A$ and $B$ be separated sets of $T$.
Let $A^*$ and $B^*$ be defined as:

$A^* := \ds \bigcup \set {\closedint a b: a, b \in A, \closedint a b \cap B^- = \O}$
$B^* := \ds \bigcup \set {\closedint a b: a, b \in B, \closedint a b \cap A^- = \O}$
where $A^-$ and $B^-$ denote the closure of $A$ and $B$ in $T$.

Then $A^*$ and $B^*$ are themselves separated sets of $T$.


Proof
From the lemma:

$A \subseteq A^*$
$B \subseteq B^*$
$A^* \cap B^* = \O$

Let $p \notin A^* \cup A^-$.
Thus $p \notin A^*$ and $p \notin A^-$.
Then there exists an open interval $\openint s t$ which is disjoint from $A$ such that $p \in \openint s t$.
Now $\openint s t$ can only intersect $A^*$ only if it intersects some $\closedint a b \subseteq A^*$ where $a, b \in A$.
But we have:

$\openint s t \cap A = \O$
and as $a, b \in A$ it follows that:

$\openint s t \subseteq \openint a b$
That means $p \in A^*$.
But we have $p \notin A^*$.
Therefore:

$\openint s t \cap A^* = \O$
Thus:

$p \notin \paren {A^*}^-$
Hence:














\(\ds \paren {A^*}^-\)

\(\subseteq\)







\(\ds \paren {A^* \cup A^-} \cap B^*\)




















\(\ds \)

\(=\)







\(\ds \paren {A^* \cap B^*} \cup \paren {A^- \cap B^*}\)




















\(\ds \)

\(=\)







\(\ds \O\)









Hence the result.


This article, or a section of it, needs explaining.In particular: Fill in the justification for the above chain of reasoningYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $39$. Order Topology: $4$




