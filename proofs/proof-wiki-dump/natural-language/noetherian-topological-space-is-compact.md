# 

Source: https://proofwiki.org/wiki/Noetherian_Topological_Space_is_Compact

Theorem
Let $T = \struct {X, \tau}$ be a Noetherian topological space.

Then $T$ is compact.


Proof 1
Let $\family {U_i}_{i \mathop \in I}$ be a cover of $X$.
That is:

$\ds \bigcup_{i \mathop \in I} U_i = X$
Let $V$ be the collection of finite cover of $\family {U_i}_{i \mathop \in I}$.


This article, or a section of it, needs explaining.In particular: Exactly what is meant by the above? Does it mean "the set / collection of all finite covers of $X$"? If not, can it be explained? If so, is there a reason why we cannot use the word "Set" here? If not, we need to change that word "collection" to a specific link to set, and make "finite cover" plural.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $W = \set {\bigcup Y: Y \in V}$.
Then $W$ is a collection of open sets of $T$.


This article, or a section of it, needs explaining.In particular: Again, is there any reason to use "collection" and not "set"? Is there a possibility that $W$ is itself not a set?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Definition 4 of Noetherian Topological Space, $W$ has a maximal element with respect to the subset relation.
Let $\ds U' = \bigcup_{j \mathop = 1}^n U_{i_j}$ be the maximal element.
Aiming for a contradiction, suppose $U' \subsetneq X$.
Let $x \in X \setminus U'$.
Let $U_{i_{n + 1} }$ be a neighborhood of $x$, where $i_{n + 1} \in I$.
Then $U' \cup U_{i_{n + 1} }$ is larger than $U'$.
This contradicts our hypothesis that $U'$ is maximal.
Hence $U'$ is a finite subcover.
This shows that $\struct {X, \tau}$ is compact.
$\blacksquare$


Proof 2
Recall the definition for compact space:
A topological space $T = \struct {S, \tau}$ is compact if and only if every open cover for $S$ has a finite subcover.

We may assume $X \ne \O$, since the claim is otherwise trivial.

Let $\CC \subseteq \tau$ be an arbitrary cover for $X$.
We shall show that $\CC$ has a finite subcover.
Consider:

$A := \leftset {\bigcup \eta: \eta}$ is a finite subset of $\rightset \CC$
$A$ has the following properties:

$(1): \quad A \ne \O$
$(2): \quad A \subseteq \tau$

Let $\alpha = \bigcup \eta$.
We have:














\(\ds \alpha\)

\(\in\)







\(\ds A\)














\(\ds \leadsto \ \ \)

\(\ds \forall U \in \CC: \, \)



\(\ds \bigcup \paren {\eta \cup \set U}\)

\(=\)







\(\ds \alpha \cup U\)




















\(\ds \)

\(\in\)







\(\ds A\)










From $(1)$ and $(2)$, by Definition 4 of Noetherian Topological Space, $A$ has a maximal element $\alpha$.
We now show that:

$\alpha = X$
Aiming for a contradiction, suppose:

$\exists x \in X \setminus \alpha$
Since $\CC$ is a cover for $X$:

$\exists U \in \CC : x \in U$
so that:

$\alpha \subsetneqq \alpha \cup U$
This contradicts $(3)$.
Hence by Proof by Contradiction:

$\not \exists x \in X \setminus \alpha$
and so:

$\alpha = X$
as required.
$\Box$

Because $\alpha \in A$, we can write it as:

$\alpha = U_1 \cup \cdots \cup U_n$
using $U_1, \ldots, U_n \in \CC$ for some $n \in \N_{>0}$.
This means:

$X = U_1 \cup \cdots \cup U_n$
Therefore:

$\set {U_1, \ldots, U_n}$ is a finite subcover of $\CC$ for $X$.
$\blacksquare$




