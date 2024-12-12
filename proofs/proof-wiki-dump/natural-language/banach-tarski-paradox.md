# 

Source: https://proofwiki.org/wiki/Banach-Tarski_Paradox

  This article was Featured Proof between 23 May 2009 and 29 May 2009.



This article needs to be linked to other articles.In particular: Plenty of unexplained and unlinked concepts here to be resolved: $\mathbb D^3$, $\mathbb S^2$, $\map {\operatorname {SO} } 3$, ...You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\mathbb D^3 \subset \R^3$ be a unit ball in real Euclidean space of $3$ dimensions.
Then $\mathbb D^3$ is equidecomposable to the union of two such unit balls.


Proof 1
Let $\mathbb D^3$ be centered at the origin, and $D^3$ be some other unit ball in $\R^3$ such that $\mathbb D^3 \cap D^3 = \O$.
Let $\mathbb S^2 = \partial \mathbb D^3$.
By the Hausdorff Paradox, there exists a decomposition of $ \mathbb S^2$ into four sets $A, B, C, Q$ such that $A, B, C$ and $B \cup C$ are congruent, and $Q$ is countable.
For $r \in \R_{>0}$, define a function $r^*: \R^3 \to \R^3$ as $\map {r^*} {\mathbf x} = r \mathbf x$, and define the sets:














\(\ds W\)

\(=\)







\(\ds \bigcup_{0 \mathop < r \mathop \le 1} \map {r^*} A\)




















\(\ds X\)

\(=\)







\(\ds \bigcup_{0 \mathop < r \mathop \le 1} \map {r^*} B\)




















\(\ds Y\)

\(=\)







\(\ds \bigcup_{0 \mathop < r \mathop \le 1} \map {r^*} C\)




















\(\ds Z\)

\(=\)







\(\ds \bigcup_{0 \mathop < r \mathop \le 1} \map {r^*} Q\)










Let $T = W \cup Z \cup \set {\mathbf 0}$.
$W$ and $X \cup Y$ are clearly congruent by the congruency of $A$ with $B \cup C$, hence $W$ and $X \cup Y$ are equidecomposable.
Since $X$ and $Y$ are congruent, and $W$ and $X$ are congruent, $X \cup Y$ and $W \cup X$ are equidecomposable.  
$W$ and $X \cup Y$ as well as $X$ and $W$ are congruent, so $W \cup X$ and $W \cup X \cup Y$ are equidecomposable.  
Hence $W$ and $W \cup X \cup Y$ are equidecomposable, by Equidecomposability is Equivalence Relation.
So $T$ and $\mathbb D^3$ are equidecomposable, from Equidecomposability Unaffected by Union.

Similarly we find $X$, $Y$, and $W \cup X \cup Y$ are equidecomposable.

Since $Q$ is only countable, but $\map {\operatorname {SO} } 3$ is not, we have:

$\exists \phi \in \map {\operatorname {SO} } 3: \map \phi Q \subset A \cup B \cup C$
so that $I = \map \phi Q \subset W \cup X \cup Y$.
Since $X$ and $W \cup X \cup Y$ are equidecomposable, by Subsets of Equidecomposable Subsets are Equidecomposable, $\exists H \subseteq X$ such that $H$ and $I$ are equidecomposable.

Finally, let $p \in X - H$ be a point and define $S = Y \cup H \cup \set p$.
Since:

$Y$ and $W \cup X \cup Y$
$H$ and $Z$
$\set 0$ and $\set p$
are all equidecomposable in pairs, $S$ and $\mathbb B^3$ are equidecomposable by Equidecomposability Unaffected by Union.
Since $D^3$ and $\mathbb D^3$ are congruent, $D^3$ and $S$ are equidecomposable, from Equidecomposability is Equivalence Relation.  

By Equidecomposability Unaffected by Union, $T \cup S$ and $\mathbb D^3 \cup D^3$ are equidecomposable.
Hence $T \cup S \subseteq \mathbb D^3 \subset \mathbb D^3 \cup D^3$ are equidecomposable and so, by the chain property of equidecomposability, $\mathbb D^3$ and $\mathbb D^3 \cup D^3$ are equidecomposable.
$\blacksquare$


Proof 2
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
1924: Stefan Banach and Alfred Tarski: Sur la décomposition des ensembles de points en parties respectivement congruentes (Fund. Math. Vol. 6: pp. 244 – 277)
1973: Thomas J. Jech: The Axiom of Choice ... (previous) ... (next): $1.$ Introduction: $1.3$ A paradoxical decomposition of the sphere: Theorem $1.2$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Banach-Tarski theorem
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Banach-Tarski paradox
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Banach-Tarski paradox




