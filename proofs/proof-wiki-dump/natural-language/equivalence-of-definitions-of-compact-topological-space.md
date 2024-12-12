# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Compact_Topological_Space


This page has been identified as a candidate for refactoring of advanced complexity.In particular: This is in the process of being split this up into separate transcluded results. Once that has been done we will be better able to indicate which results depend on BPI and which don't.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
The following definitions of the concept of Compact Space in the context of Topology are equivalent:

Definition 1
A topological space $T = \struct {S, \tau}$ is compact if and only if every open cover for $S$ has a finite subcover.

Definition 2
A topological space $T = \struct {S, \tau}$ is compact if and only if it satisfies the Finite Intersection Axiom.

Definition 3
A topological space $T = \struct {S, \tau}$ is compact if and only if $\tau$ has a sub-basis $\BB$ such that:

from every cover of $S$ by elements of $\BB$, a finite subcover of $S$ can be selected.
Definition 4
A topological space $T = \struct {S, \tau}$ is compact if and only if every filter on $S$ has a limit point in $S$.

Definition 5
A topological space $T = \struct {S, \tau}$ is compact if and only if every ultrafilter on $S$ converges.


Proof
$(1) \iff (2)$: Compact Space satisfies Finite Intersection Axiom
Let every open cover of $S$ have a finite subcover.
Let $\AA$ be any set of closed subsets of $S$ satisfying $\ds \bigcap \AA = \O$.
We define the set:

$\VV := \set {S \setminus A : A \in \AA}$
which is trivially an open cover of $S$.

From De Morgan's Laws: Difference with Union:

$\ds S \setminus \bigcup \VV = \bigcap \set {S \setminus V : V \in \VV} = \bigcap \set {A : A \in \AA} = \O$
and therefore:

$S = \ds \bigcup \VV$

By definition, there exists a finite subcover $\tilde \VV \subseteq \VV$.
We define:

$\tilde \AA := \set {S \setminus V : V \in \tilde \VV}$
then $\tilde \AA \subseteq \AA$ by definition of $\VV$.

Because $\tilde \VV$ covers $S$, it follows directly that:

$\ds \bigcap \tilde \AA = \bigcap \set {S \setminus V : V \in \tilde \VV} = S \setminus \bigcup \tilde \VV = \O$

Thus, in every set $\AA$ of closed subsets of $S$ satisfying $\ds \bigcap \AA = \O$, there exists a finite subset $\tilde \AA$ such that $\ds \bigcap \tilde \AA = \O$.
That is, $S$ satisfies the Finite Intersection Axiom.
$\Box$

The converse works exactly as the previous, but with the roles of the open cover and $\AA$ reversed.
$\blacksquare$


$(1) \iff (3)$: Alexander's Compactness Theorem

This article is complete as far as it goes, but it could do with expansion.In particular: It would be insightful to have a proof using the Boolean Prime Ideal Theorem/Ultrafilter Lemma instead of Axiom of Choice/Zorn's LemmaYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let every open cover of $S$ have a finite subcover.
Let $\BB$ be a sub-basis of $\tau$. 
By definition of a compact space, from every cover of $S$ by elements of $\BB$, a finite subcover can be selected.
$\Box$

Let the space $T$ have a sub-basis $\BB$ such that every cover of $S$ by elements of $\BB$ has a finite subcover.
Aiming for a contradiction, suppose $T$ is not such that every open cover of $S$ has a finite subcover.
Use Zorn's Lemma to find an open cover $\CC$ which has no finite subcover that is maximal among such open covers.
So if:

$V$ is an open set
and:

$V \notin \CC$
then $\CC \cup \set V$ has a finite subcover, necessarily of the form:

$\CC_0 \cup \set V$
for some finite subset $\CC_0$ of $\CC$.

Consider $\CC \cap \BB$, that is, the sub-basic subset of $\CC$.
Suppose $\CC \cap \BB$ covers $S$.
Then, by hypothesis, $\CC \cap \BB$ would have a finite subcover.
But $\CC$ does not have a finite subcover.
So $\CC \cap \BB$ does not cover $S$.
Let $x \in S$ that is not covered by $\CC \cap \BB$.
We have that $\CC$ covers $S$, so:

$\exists U \in \CC: x \in U$
We have that $\BB$ is a sub-basis.
So for some $B_1, \ldots, B_n \in \BB$, we have that:

$x \in B_1 \cap \cdots \cap B_n \subseteq U$

This article, or a section of it, needs explaining.In particular: Could that be rewritten as: "for some $B_i \in \BB$, we have that $x \in B_i \subseteq U$"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since $x$ is not covered, $B_i \notin \CC$.


This article, or a section of it, needs explaining.In particular: "Since $x$ is not covered" -- by exactly which set? $\CC \cap \BB_i$? It is not completely clear what is going on here.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
As noted above, this means that for each $i$, $B_i$ along with a finite subset $\CC_i$ of $\CC$, covers $S$.
But then $U$ and all the $\CC_i$ cover $S$.
Hence $\CC$ has a finite subcover.
This contradicts our supposition that we can construct $\CC$ so as to have no finite subcover.
It follows that we cannot construct an open cover $\CC$ of $S$ which has no finite subcover.
$\blacksquare$


$(4) \implies (5)$: Every Filter has Limit Point implies Every Ultrafilter Converges
Let $T = \struct {S, \tau}$ be such that each filter on $S$ has a limit point in $S$.
Let $\FF$ be an ultrafilter on $S$.
By hypothesis, $\FF$ has a limit point $x \in S$.
By Limit Point iff Superfilter Converges, there exists a filter $\FF'$ on $S$ which converges to $x$ satisfying $\FF \subseteq \FF'$.
By Definition of Ultrafilter on Set:

$\FF$ is an ultrafilter if and only if whenever $\GG$ is a filter on $S$ and $\FF \subseteq \GG$ holds, then $\FF = \GG$
Therefore:

$\FF = \FF'$.
Thus $\FF$ converges to $x$.


$(5) \implies (4)$: Every Ultrafilter Converges implies Every Filter has Limit Point
Let $\FF$ be a  filter on $S$.
By the Ultrafilter Lemma, there exists an ultrafilter $\FF'$ such that $\FF \subseteq \FF'$.
By hypothesis, $\FF'$ converges to some $x \in S$.
This, by Limit Point iff Superfilter Converges, implies that $x$ is a limit point of $\FF$.
$\blacksquare$


$(2) \implies (4)$
Let $T = \struct {S, \tau}$ satisfy the Finite Intersection Axiom.
Let $\FF$ be a filter on $X$.
Aiming for a contradiction, suppose that $\FF$ has no limit point.
Thus:

$\ds \bigcap_{F \mathop \in \FF} \overline F = \O$
By hypothesis there are therefore sets $F_1, \ldots, F_n \in \FF$ such that:

$\overline F_1 \cap \ldots \cap \overline F_n = \O$
Because for any set $M$ we have $M \subseteq \overline M$:

$\overline F_1, \ldots, \overline F_n \in \FF$
But by definition of a filter, $\FF$ must not contain the empty set.
Thus $\FF$ has a limit point.
$\Box$


$(4) \implies (2)$
Let $\AA \subset \powerset S$ be a set of closed subsets of $S$.
Let:

$\bigcap \tilde \AA \ne \O$
for all finite subsets $\tilde \AA$ of $\AA$.
We show that this implies $\bigcap \AA \ne \O$.
From our assumption, $\BB := \set {\bigcap \tilde \AA : \tilde \AA \subseteq \AA \text{ finite} }$ is a filter basis.
Let $\FF$ be the corresponding generated filter.
By hypothesis $\FF$ has a limit point.
Thus:

$\ds \O \ne \bigcap_{F \mathop \in \FF} \overline F \subseteq \bigcap \BB \subseteq \bigcap \AA$.
Thus $\bigcap \AA \ne \O$.
Hence $T = \struct {S, \tau}$ satisfies the Finite Intersection Axiom.
$\blacksquare$





