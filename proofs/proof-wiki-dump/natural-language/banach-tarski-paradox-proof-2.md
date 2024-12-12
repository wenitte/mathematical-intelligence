# 

Source: https://proofwiki.org/wiki/Banach-Tarski_Paradox/Proof_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbb D^3 \subset \R^3$ be a unit ball in real Euclidean space of $3$ dimensions.
Then $\mathbb D^3$ is equidecomposable to the union of two such unit balls.


Proof
Lemmata
Relation Definition
Let $\approx$ denote the relation between sets in Euclidean space of $3$ dimensions defined as follows:

$X \approx Y$
if and only if:

there exists a partition of $X$ into disjoint sets:
$X = X_1 \cup X_2 \cup \cdots \cup X_m$
and a partition of $Y$ into the same number of disjoint sets:
$Y = Y_1 \cup Y_2 \cup \cdots \cup Y_m$
such that $X_i$ is congruent to $Y_i$ for each $i \in \set {1, 2, \ldots, m}$.

Then the following lemmata hold:

Lemma 1
$\approx$ is an equivalence relation.
$\Box$


Lemma 2
Let $X$ and $Y$ be disjoint unions of $X_1, X_2$ and $Y_1, Y_2$ respectively.
Let $X_i \approx Y_i$ for each $i \in \set {1, 2}$.
Then:

$X \approx Y$
$\Box$


Lemma 3
Let $X_1 \subseteq Y \subseteq X$.
Let$X \approx X_1$.
Then:

$X \approx Y$
$\Box$

Let $U$ denote the closed ball in real Euclidean space of $3$ dimensions defined as:

$U = \set {\mathbf x \in \R^3 : \size {\mathbf x - \mathbf c} \le r}$
where:

$r$ is the radius of $U$
$\mathbf x$ is the position vector of a point $\tuple {x_1, x_2, x_3} \in \R^3$
$\mathbf c$ is the position vector of the center $\tuple {c_1, c_2, c_3}$ of $U$
$\size {\mathbf x - \mathbf c}$ denotes the Euclidean distance:
$\size {\mathbf x - \mathbf c} = \sqrt { {x_1 - c_1}^2 + {x_2 - c_2}^2 + {x_3 - c_3}^2}$

Let $\Bbb S^2$ denote the sphere which is the boundary of $U$:

$\Bbb S^2 = \set {\mathbf x \in \R^3 : \size {\mathbf x - \mathbf c} = r}$

Let:

$(1): \quad \Bbb S^2 = A \cup B \cup C \cup Q$
be the partition of $\Bbb S^2$ from Hausdorff Paradox.
Recall:

$A$, $B$ and $C$ are disjoint
$A$, $B$ and $C$ are congruent to each other
$B \cup C$ is congruent to each of $A$, $B$ and $C$
Hence by hypothesis:

$A \approx B \approx C \approx B \cup C$

For a given subset $T \subseteq \Bbb S^2$, let $\overline T \subseteq U$ be defined as the set of all $\mathbb x \in U$ apart from $\mathbf c$ whose projection onto $\Bbb S^2$ from $\mathbf c$ is $T$.
Hence using Vector Equation of Straight Line in Space:

$\overline T = \set {\mathbf y \in U: \mathbf y = \paren {1 - s} \mathbf c + s \mathbf x: \mathbf x \in T, s \in \hointl 0 1}$
That is, for all points $\mathbf x$ in $T$, all the points in $U$ along the radius of $U$ to $\mathbf x$ but not including the center of $U$.

We have that:

$U = \overline A \cup \overline B \cup \overline C \cup \overline Q \cup \set {\mathbb c}$

Because we have:

$A \approx B \approx C \approx B \cup C$
it follows that:

$(2): \quad \overline A \approx \overline B \approx \overline C \approx \overline B \cup \overline C$
Let:














\(\ds X\)

\(=\)







\(\ds \overline A \cup \overline Q \cup \set {\mathbb c}\)




















\(\ds Y\)

\(=\)







\(\ds U \setminus X\)





where $\setminus$ denotes set difference




From $(2)$ and Lemma $3$:

$\overline A \approx \overline A \cup \overline B \cup \overline C$
and so:

$(3): \quad X \approx U$
Let $\alpha$ be a rotation of $U$ such that $\alpha$ is not in the original $G$ that was used to construct $(1)$ with the property that:

$Q \cap \alpha Q = \O$
Hence using:

$\overline C \approx \overline A \cup \overline B \cup \overline C$
there exists $S \subseteq C$ such that:

$\overline S \approx \overline Q$
Let $p$ be an arbitrary point in $\overline C \setminus \overline S$.
We have that:

$(4): \quad \overline A \cup \overline Q \cup \set {\mathbb c} \approx \overline B \cup \overline S \cup \set p$
Because:

$\overline B \cup \overline S \cup \set p \subseteq Y \subseteq U$
we can use $(3)$ and $(4)$ along with Lemma $3$ to get:

$Y \approx U$
Hence the result.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Hausdorff Paradox.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Also known as
The Banach-Tarski Paradox is also known as the Banach-Tarski Theorem.


Source of Name
This entry was named for Stefan Banach and Alfred Tarski.


Historical Note
Ever since Stefan Banach and Alfred Tarski raised this question in a collaborative paper in $1924$, whether the Banach-Tarski Paradox is a veridical paradox or an antinomy is being hotly discussed to the present day.
At one point there were even Facebook groups on the subject both pro and anti, but Facebook has since dumbed down and these groups no longer seem to exist.

If you feel really adventurous, check out Rudy Rucker's novel White Light.


Sources
1973: Thomas J. Jech: The Axiom of Choice ... (previous) ... (next): $1.$ Introduction: $1.3$ A paradoxical decomposition of the sphere: Proof of Theorem $1.2$




