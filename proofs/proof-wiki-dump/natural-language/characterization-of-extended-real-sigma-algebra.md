# 

Source: https://proofwiki.org/wiki/Characterization_of_Extended_Real_Sigma-Algebra

Theorem
Let $\map \BB \R$ be the Borel $\sigma$-algebra on $\R$.
Let $\overline \BB$ be the extended real $\sigma$-algebra.
Define $\SS := \powerset {\set {-\infty, +\infty} }$, where $\PP$ denotes power set.

Then:

$\overline \BB = \set {B \cup S: B \in \map \BB \R, S \in \SS}$


Proof
Let $\overline B \in \overline \BB$.
Then by Extended Real Sigma-Algebra Induces Borel Sigma-Algebra on Reals, we have:

$\overline B \cap \R \in \map \BB \R$

We also have, by definition of the extended real numbers $\overline \R$, that:

$\overline \R \setminus \R = \set {-\infty, +\infty}$
and therefore, $\overline B \setminus \R \subseteq \set {-\infty, +\infty}$.
Here, $\setminus$ signifies set difference.

By Set Difference Union Intersection:

$\overline B = \paren {\overline B \setminus \R} \cup \paren {\overline B \cap \R}$
Therefore, any $\overline B \in \overline \BB$ is of the purported form $B \cup S$ with $B \in \map \BB \R$ and $S \in \SS$.

It remains to show that any such set is in fact an element of $\overline \BB$.
Since any $B \in \map \BB \R$ is naturally also in $\overline \BB$, it suffices to show that:

$\SS \subseteq \overline \BB$
by applying Sigma-Algebra Closed under Union.

From Closed Set Measurable in Borel Sigma-Algebra, it will now suffice to show that:

$\O, \set {-\infty}, \set {+\infty}, \set {-\infty, +\infty}$
are all closed sets in $\overline \R$.
That they are follows from Extended Real Number Space is Hausdorff and Finite Subspace of Hausdorff Space is Closed.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 8$, $\S 8$: Problem $2$




