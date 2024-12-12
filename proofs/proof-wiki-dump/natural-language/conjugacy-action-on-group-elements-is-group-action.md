# 

Source: https://proofwiki.org/wiki/Conjugacy_Action_on_Group_Elements_is_Group_Action



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.

The conjugacy action on $G$:

$\forall g, h \in G: g * h = g \circ h \circ g^{-1}$
is a  group action on itself.


Proof
We have that:

$e * x = e \circ x \circ e^{-1} = x$
and so Group Action Axiom $\text {GA} 2$ is fulfilled.

Group Action Axiom $\text {GA} 1$ is shown to be fulfilled thus:














\(\ds \paren {g_1 \circ g_2} * x\)

\(=\)







\(\ds \paren {g_1 \circ g_2} \circ x \circ \paren {g_1 \circ g_2}^{-1}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g_1 \circ g_2 \circ x \circ g_2^{-1} \circ g_1^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds g_1 * \paren {g_2 \circ x \circ g_2^{-1} }\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds g_1 * \paren {g_2 * x}\)





Definition of $*$



$\blacksquare$


Proof 2
Let $X$ be the set of all subgroups of $G$.
By definition, the (left) conjugacy action on subgroups is the group action $*_X : G \times X \to X$ defined as:

$g *_X X = g \circ X \circ g^{-1}$
By Conjugacy Action on Subgroups is Group Action, the (left) conjugacy action on subgroups $*_X$ is a group action.

By Subset Product Action is Group Action, it follows that the conjugacy action $*: G \times G \to G$ such that:


This article, or a section of it, needs explaining.In particular: How this conclusion follows by Subset Product Action is Group Action?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\forall g, h \in G: g * h = g \circ h \circ g^{-1}$
is a group action, as required.

$\blacksquare$


Also see
Stabilizer of Element under Conjugacy Action is Centralizer
Orbit of Element under Conjugacy Action is Conjugacy Class


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.5$. Groups acting on sets: Example $103$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Examples of group actions: $\text{(v)}$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Example $10.5$




