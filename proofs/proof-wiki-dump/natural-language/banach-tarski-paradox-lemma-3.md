# 

Source: https://proofwiki.org/wiki/Banach-Tarski_Paradox/Lemma_3



Lemma for Banach-Tarski Paradox
Relation Definition
Let $\approx$ denote the relation between sets in Euclidean space of $3$ dimensions defined as follows:

$X \approx Y$
if and only if:

there exists a partition of $X$ into disjoint sets:
$X = X_1 \cup X_2 \cup \cdots \cup X_m$
and a partition of $Y$ into the same number of disjoint sets:
$Y = Y_1 \cup Y_2 \cup \cdots \cup Y_m$
such that $X_i$ is congruent to $Y_i$ for each $i \in \set {1, 2, \ldots, m}$.

Let $X_1 \subseteq Y \subseteq X$.
Let$X \approx X_1$.
Then:

$X \approx Y$


Proof
Recall:

Lemma 2
Let $X$ and $Y$ be disjoint unions of $X_1, X_2$ and $Y_1, Y_2$ respectively.
Let $X_i \approx Y_i$ for each $i \in \set {1, 2}$.
Then:

$X \approx Y$
$\Box$

Let:














\(\ds X\)

\(=\)







\(\ds X^1 \cup X^2 \cup \cdots \cup X^n\)





where superscripts are used for indexing














\(\ds X_1\)

\(=\)







\(\ds X_1^1 \cup X_1^2 \cup \cdots \cup X_1^n\)









such that $X^i$ is congruent to $X_1^i$ for each $i \in \set {a, 2, \ldots, n}$.

Let us choose a congruence:

$f^i: X^i \to X_1^i$
for each $i \in \set {a, 2, \ldots, n}$.
Let $f$ be the bijection of $X$ to $X_i$ which agrees with $f^i$ on each $X^i$.

Now let:














\(\ds X_0\)

\(=\)







\(\ds X\)




















\(\ds X_1\)

\(=\)







\(\ds f \sqbrk X\)





where $f \sqbrk X$ denotes the image of $X$ under $f$














\(\ds X_2\)

\(=\)







\(\ds f \sqbrk {X_1}\)




















\(\ds \)

\(\cdots\)







\(\ds \)









and:














\(\ds Y_0\)

\(=\)







\(\ds Y\)




















\(\ds Y_1\)

\(=\)







\(\ds f \sqbrk Y\)




















\(\ds Y_2\)

\(=\)







\(\ds f \sqbrk {Y_1}\)




















\(\ds \)

\(\cdots\)







\(\ds \)









Let:

$Z = \ds \bigcup_{n \mathop = 0}^\infty \paren {X_n \setminus Y_n}$
Then:

$f \sqbrk Z$ and $X \setminus Z$ are disjoint, and:













\(\ds Z\)

\(\approx\)







\(\ds f \sqbrk Z\)




















\(\ds X\)

\(=\)







\(\ds Z \cup \paren {X \setminus Z}\)




















\(\ds Y\)

\(=\)







\(\ds f \sqbrk Z \cup \paren {X \setminus Z}\)









and by Lemma $2$:

$X \approx Y$
$\blacksquare$


Sources
1973: Thomas J. Jech: The Axiom of Choice ... (previous) ... (next): $1.$ Introduction: $1.3$ A paradoxical decomposition of the sphere: Lemma $1.5$




