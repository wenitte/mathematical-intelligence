# 

Source: https://proofwiki.org/wiki/Alexander%27s_Compactness_Theorem



Theorem
The following definitions of the concept of Compact Space in the context of Topology are equivalent:

Definition by Open Covers
A topological space $T = \struct {S, \tau}$ is compact if and only if every open cover for $S$ has a finite subcover.

Definition Elements of Sub-Basis
A topological space $T = \struct {S, \tau}$ is compact if and only if $\tau$ has a sub-basis $\BB$ such that:

from every cover of $S$ by elements of $\BB$, a finite subcover of $S$ can be selected.


Proof

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


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Notes
Although this proof makes use of Zorn's Lemma, the proof does not need the full strength of the Axiom of Choice.
Instead, it relies on the intermediate Ultrafilter Lemma.


Also known as
Alexander's Compactness Theorem is also known as:

Alexander's Sub-Basis Theorem
Alexander's Sub-Base Theorem
which can also be seen in the form the Alexander Sub-Basis Theorem, and so on.
Sub-Base and Sub-Basis can also be seen here rendered as Subbase and Subbasis.


Source of Name
This entry was named for James Waddell Alexander II.


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Global Compactness Properties
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Alexander's sub-base theorem




