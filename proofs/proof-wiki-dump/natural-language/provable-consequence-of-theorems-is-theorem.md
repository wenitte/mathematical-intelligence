# 

Source: https://proofwiki.org/wiki/Provable_Consequence_of_Theorems_is_Theorem

Theorem
Let $\PP$ be a proof system for a formal language $\LL$.
Let $\FF$ be a collection of theorems of $\PP$.
Denote with $\map {\mathscr P} \FF$ the proof system obtained from $\mathscr P$ by adding all the WFFs from $\FF$ as axioms.
Let $\phi$ be a provable consequence of $\FF$:

$\vdash_{\mathscr P} \FF$
$\FF \vdash_{\mathscr P} \phi$

Then $\phi$ is also a theorem of $\mathscr P$:

$\vdash_{\mathscr P} \phi$


Proof
We have that $\phi$ is a provable consequence of $\FF$.
Hence it is a theorem of $\map {\mathscr P} \FF$, the proof system obtained from $\mathscr P$ by adding all of $\FF$ as axioms.
Now in the formal proof of $\phi$ in $\map {\mathscr P} \FF$, both axioms and rules of inference are used.
Each rule of inference of $\map {\mathscr P} \FF$ is also a rule of inference of $\mathscr P$.
Similarly, by construction, each axiom of $\map {\mathscr P} \FF$ is either an axiom of $\mathscr P$ or an element of $\FF$.
But the elements of $\FF$ are theorems of $\mathscr P$, each of which thus has a formal proof in $\mathscr P$.
By definition, the rules of inference of a proof system do not distinguish between theorems and axioms.
Therefore the formal proofs of the following can be combined:

$\vdash_{\mathscr P} \FF$
$\vdash_{\map {\mathscr P} \FF} \phi$
by letting the latter follow the former.
This yields a new formal proof, which is entirely formulated in $\mathscr P$.
This is the desired formal proof of $\phi$ from $\mathscr P$, and we conclude:

$\vdash_{\mathscr P} \phi$
$\blacksquare$


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text{II}.11$ Some Strategies for Constructing Proofs: Lemma $\text{II}.11.7$




