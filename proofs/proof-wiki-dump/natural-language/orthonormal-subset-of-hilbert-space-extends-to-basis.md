# 

Source: https://proofwiki.org/wiki/Orthonormal_Subset_of_Hilbert_Space_Extends_to_Basis


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: I guess this generalises to inner product spacesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $H$ be a Hilbert space, and let $S$ be an orthonormal subset of $H$.

Then there exists a basis for $H$ that contains $S$ as a subset.


Proof
Consider the set $\OO$ of orthonormal subsets $S'$ of $H$ that contain $S$:

$\OO := \set{ S' \subseteq H: S \subseteq S', \text{$S'$ is orthonormal} }$
In particular, $S \in \OO$ so that $\OO$ is non-empty.
Give $\OO$ the subset ordering.
For a chain $\CC \subseteq \OO$, we assert that $\bigcup \CC \in \OO$.
For each $c \in \bigcup \CC$, there is a $C \in \CC$ such that $c \in C$.
Hence $\norm c = 1$.
Moreover, for $c, c' \in \bigcup \CC$, there is a $C \in \CC$ such that $c, c' \in C$ because $\CC$ is a chain.
Then since $C \in \OO$, it follows that $c \perp c'$.
Hence $\bigcup \CC \in \OO$.

Therefore, the conditions of Zorn's Lemma apply to $\OO$.
Let $O$ be a maximal element of $\OO$.
Then $O$ is a maximal orthonormal subset of $H$.
That is, $O$ is a basis containing $S$.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 4.$ Orthonormal Sets of Vectors and Bases: Proposition $4.2$




