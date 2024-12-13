# 

Source: https://proofwiki.org/wiki/Noetherian_Topological_Space_is_Compact/Proof_2

Theorem
Let $T = \struct {X, \tau}$ be a Noetherian topological space.

Then $T$ is compact.


Proof
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





