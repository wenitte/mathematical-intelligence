# 

Source: https://proofwiki.org/wiki/Correspondence_between_Linear_Group_Actions_and_Linear_Representations


This article needs to be linked to other articles.In particular: one-to-one correspondenceYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\struct {k, +, \cdot}$ be a field.
Let $V$ be a vector space over $k$ of finite dimension.
Let $\struct {G, *}$ be a finite group.

There is a one-to-one correspondence between linear group actions of $G$ on $V$ and linear representations of $G$ in $V$, as follows:

Let $\phi: G \times V \to V$ be a group action.
Let $\rho: G \to \map {\operatorname {Sym} } V$ be a permutation representation of $G$ on $V$.

The following are equivalent:

$(1): \quad$ $\rho$ is the permutation representation associated to $\phi$
$(2): \quad$ $\phi$ is the group action associated to $\rho$

If this is the case, the following are equivalent:

$(1): \quad$ $\rho$ is a linear representation
$(2): \quad$ $\phi$ is a linear group action


Proof
The first equivalence follows from Correspondence Between Group Actions and Permutation Representations.


1 implies 2
Let $\rho : G \to \GL V$ be a linear representation of $G$ on $V$.
Then for all $g \in G$, $v_1, v_2 \in V$:














\(\ds \map \phi {g, v_1 + v_2}\)

\(=\)







\(\ds \map {\map \rho g} {v_1 + v_2}\)





Definition of Group Action Associated to Permutation Representation














\(\ds \)

\(=\)







\(\ds \map {\map \rho g} {v_1} + \map {\map \rho g} {v_2}\)





$\map \rho g$ is linear














\(\ds \)

\(=\)







\(\ds \map \phi {g, v_1} + \map \phi {g, v_2}\)





Definition of Group Action Associated to Permutation Representation



and for all $g \in G$, $v \in V$, $\lambda \in k$:














\(\ds \map \phi {g, \lambda \cdot v}\)

\(=\)







\(\ds \map {\map \rho g} {\lambda \cdot v}\)





Definition of Group Action Associated to Permutation Representation














\(\ds \)

\(=\)







\(\ds \map {\map {\lambda \cdot \rho} g} v\)





$\map \rho g$ is linear














\(\ds \)

\(=\)







\(\ds \map {\lambda \cdot \phi} {g, v}\)





Definition of Group Action Associated to Permutation Representation



Therefore $\phi$ is a linear group action of $G$ on $V$.
$\Box$


2 implies 1
Let $\phi: G \times V \to V$ be a linear action of $G$ on $V$.
Then for all $g \in G$, $v_1, v_2 \in V$:














\(\ds \map {\map \rho g} {v_1 + v_2}\)

\(=\)







\(\ds \map \phi {g, v_1 + v_2}\)





Definition of Permutation Representation Associated to Group Action














\(\ds \)

\(=\)







\(\ds \map \phi {g, v_1} + \map \phi {g, v_2}\)





Definition of Linear Group Action














\(\ds \)

\(=\)







\(\ds \map {\map \rho g} {v_1} + \map {\map \rho g} {v_2}\)





Definition of Permutation Representation Associated to Group Action



and for all $g \in G$, $v \in V$, $\lambda \in k$:














\(\ds \map {\map \rho g} {\lambda \cdot v}\)

\(=\)







\(\ds \map \phi {g, \lambda \cdot v}\)





Definition of Permutation Representation Associated to Group Action














\(\ds \)

\(=\)







\(\ds \lambda \cdot \map \phi {g, v}\)





Definition of Linear Group Action














\(\ds \)

\(=\)







\(\ds \map {\map {\lambda \cdot \rho} g} v\)





Definition of Permutation Representation Associated to Group Action



Therefore $\rho$ is a linear representation of $G$ on $V$.
$\Box$
$\blacksquare$


This page has been identified as a candidate for refactoring of medium complexity.In particular: the below can safely be merged into Group Action defines Permutation RepresentationUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Now let $g_1, g_2 \in G$.
We have for all $v \in V$:














\(\ds \map {\map \rho {g_1 * g_2} } v\)

\(=\)







\(\ds \map \phi {g_1 * g_2, v}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {g_1, \map \phi {g_2, v} }\)





$\phi$ is an action














\(\ds \)

\(=\)







\(\ds \map {\map \rho {g_2} } {\map {\map \rho {g_1} } v}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\map \rho {g_2} \circ \map \rho {g_1} } } v\)





where $\circ$ is the composition of mappings



Thus $\rho$ satisfies the homomorphism property.


This page has been identified as a candidate for refactoring of medium complexity.In particular: the below is better merged into the theorem statement, addressing the handwaving natureUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Therefore:

$\hat{}$ : (linear representations) $\to$ (linear actions)
$\tilde{}$ : (linear actions) $\to$ (linear representations)
give a bijection.
$\blacksquare$


Also see
Correspondence Between Group Actions and Permutation Representations




