# 

Source: https://proofwiki.org/wiki/Banach-Tarski_Paradox/Proof_1


This article needs to be linked to other articles.In particular: Plenty of unexplained and unlinked concepts here to be resolved: $\mathbb D^3$, $\mathbb S^2$, $\map {\operatorname {SO} } 3$, ...You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\mathbb D^3 \subset \R^3$ be a unit ball in real Euclidean space of $3$ dimensions.
Then $\mathbb D^3$ is equidecomposable to the union of two such unit balls.


Proof
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





