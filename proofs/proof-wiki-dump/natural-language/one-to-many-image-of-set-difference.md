# 

Source: https://proofwiki.org/wiki/One-to-Many_Image_of_Set_Difference



Theorem
Let $\RR \subseteq S \times T$ be a relation.
Let $A$ and $B$ be subsets of $S$.

Then:

$(1): \quad \RR \sqbrk A \setminus \RR \sqbrk B = \RR \sqbrk {A \setminus B}$
if and only if $\RR$ is one-to-many.


Corollary 1
Let $\RR \subseteq S \times T$ be a relation which is one-to-many.
Let $A \subseteq B \subseteq S$.

Then:

$\relcomp {\RR \sqbrk B} {\RR \sqbrk A} = \RR \sqbrk {\relcomp B A}$
where $\complement$ (in this context) denotes relative complement.


Corollary 2
Let $\RR \subseteq S \times T$ be a relation which is one-to-many.
Let $A$ be a subset of $S$.

Then:

$\relcomp {\Img \RR} {\RR \sqbrk A} = \RR \sqbrk {\relcomp S A}$
where $\complement$ (in this context) denotes relative complement.

In the language of direct image mappings this can be presented as:

$\forall A \in \powerset S: \map {\paren {\complement_{\Img \RR} \circ \RR^\to} } A = \map {\paren {\RR^\to \circ \complement_S} } A$


Proof
Sufficient Condition
First, to show that $(1)$ holds if $\RR$ is one-to-many.

From Image of Set Difference under Relation, we already have:

$\RR \sqbrk A \setminus \RR \sqbrk B \subseteq \RR \sqbrk {A \setminus B}$

So we just need to show:

$\RR \sqbrk {A \setminus B} \subseteq \RR \sqbrk A \setminus \RR \sqbrk B$

Let $t \notin \RR \sqbrk A \setminus \RR \sqbrk B$.
Then by De Morgan's Laws:

$t \notin \RR \sqbrk A \lor t \in \RR \sqbrk B$

This article, or a section of it, needs explaining.In particular: Go into more detailYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Suppose $t \notin \RR \sqbrk A$.
Then by definition of a relation:

$\neg \exists s \in A: \tuple {s, t} \in \RR$
By Image of Subset is Subset of Image:

$\RR \sqbrk {A \setminus B} \subseteq \RR \sqbrk A$
Thus, by definition of subset and Rule of Transposition:

$t \notin \RR \sqbrk A \implies t \notin \RR \sqbrk {A \setminus B}$

Now suppose $t \in \RR \sqbrk B$.
Then:

$\exists s \in B: \tuple {s, t} \in \RR$
Because $\RR$ is one-to-many:

$\forall x \in S: \tuple {x, t} \in \RR \implies x = s$
and thus:

$x \in B$
Thus:

$x \notin A \setminus B$
and hence:

$t \notin \RR \sqbrk {A \setminus B}$

So by Proof by Cases:

$t \notin \RR \sqbrk A \setminus \RR \sqbrk B \implies t \notin \RR \sqbrk {A \setminus B}$

The result follows from Set Complement inverts Subsets:

$S \subseteq T \iff \map \complement T \subseteq \map \complement S$
$\Box$


Necessary Condition
Now for the converse: If $(1)$ holds, it is to be shown that $\RR$ is one-to-many.

Let $s, t \in S$ be distinct.
That is, $s \ne t$.
Then in particular:

$\set s \setminus \set t = \set s$
Applying $(1)$ to these two sets, it follows that:

$\RR \sqbrk {\set s} \setminus \RR \sqbrk {\set t} = \RR \sqbrk {\set s}$
By Set Difference with Disjoint Set, this implies that:

$\RR \sqbrk {\set s} \cap \RR \sqbrk {\set t} = \O$

It follows that every element of $T$ can be related to at most one element of $S$.
That is, $\RR$ is one-to-many.
$\blacksquare$





