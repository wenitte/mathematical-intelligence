# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Interior_(Topology)



Theorem
The following definitions of the concept of interior in the context of topology are equivalent:

Let $\struct {T, \tau}$ be a topological space.
Let $H \subseteq T$.

Definition 1
The interior of $H$ is the union of all subsets of $H$ which are open in $T$.

That is, the interior of $H$ is defined as:

$\ds H^\circ := \bigcup_{K \mathop \in \mathbb K} K$
where $\mathbb K = \set {K \in \tau: K \subseteq H}$.

Definition 2
The interior of $H$ is defined as the largest open set of $T$ which is contained in $H$.

Definition 3
The interior of $H$ is the set of all interior points of $H$.


Proof
Definition $1$ is equivalent to Definition $2$
Let $\mathbb K$ be defined as:

$\mathbb K := \set {K \in \tau: K \subseteq H}$
That is, let $\mathbb K$ be the set of all open sets of $T$ contained in $H$.

Then from definition 1 of the interior of $H$, we have:

$\ds H^\circ = \bigcup_{K \mathop \in \mathbb K} K$
That is, $H^\circ$ is the union of all the open sets of $T$ contained in $H$.

Let $K \subseteq T$ such that $K$ is open in $T$ and $K \subseteq H$.
That is, let $K \in \mathbb K$.
Then from Subset of Union it follows directly that $K \subseteq H^\circ$.
So any open set in $T$ contained in $H$ is a subset of $H^\circ$, and so $H^\circ$ is the largest open set of $T$ contained in $H$.
That is, $H^\circ$ is also the interior of $H$ by definition 2.
Hence both definitions are equivalent.
$\Box$


Definition $1$ is equivalent to Definition $3$













\(\ds x\)

\(\in\)







\(\ds \bigcup_{K \in \mathbb K} K\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists K \in \mathbb K: \, \)



\(\ds x\)

\(\in\)







\(\ds K\)





Definition of Union of Set of Sets








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists K \subseteq H: \, \)



\(\ds K\)

\(\in\)







\(\ds \tau \wedge x \in K\)





Definition of $\mathbb K$








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds x \text{ is an interior point of } H\)





Definition of Interior Point (Topology)



Therefore:

$\ds \bigcup_{K \mathop \in \mathbb K} K = \set {x \mid \text {$x$ is an interior point of $H$} }$
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: to include 2-3 equivalenceWhy? Once you've proved $1 \iff 2$ and $1 \iff 3$, $2 \iff 3$ follows triviallyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors




