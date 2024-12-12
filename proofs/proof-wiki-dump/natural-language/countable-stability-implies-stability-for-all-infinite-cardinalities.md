# 

Source: https://proofwiki.org/wiki/Countable_Stability_implies_Stability_for_All_Infinite_Cardinalities


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $T$ be a complete $\LL$-theory whose language $\LL$ is countable.
If $T$ is $\omega$-stable, then $T$ is $\kappa$-stable for all infinite $\kappa$.


Proof
We prove the contrapositive.

Let $\kappa$ be an infinite cardinal.
Suppose that $T$ is not $\kappa$-stable.
Then there exists some $\MM \models T$ and $A \subseteq \MM$ with $\card A = \kappa$ such that:

$\card {\map { {S_n}^\MM} A} > \kappa$

Let $\LL_A$ denote $\LL \cup \set {a: a \in A}$, the language obtained from $\LL$ by adding new constant symbols for each $a \in A$.

For each $\LL_A$-formula $\phi$, let $\sqbrk \phi = \set {p \in \map { {S_n}^\MM} A: \phi \in p}$, the set of complete $n$-types over $A$ which contain $\phi$.

Our goal will be to find a countable set $B$ in $\MM$ such that:

$\card {\map { {S_n}^\MM} B} = 2^{\aleph_0} \ne \aleph_0$
which will demonstrate non-$\omega$-stability of $T$.
We will do this by constructing a countable binary tree of formulas such that each of the $2^{\aleph_0}$ distinct simple paths from the root of the tree out to infinity correspond to distinct types.

Before we can build the tree, we need the following lemma.


Lemma
Suppose $\card {\sqbrk \phi} > \kappa$.
We argue that we can select some $\LL_A$-formula $\psi$ such that both:

$\card {\sqbrk {\phi \land \psi} } > \kappa$
and:

$\card {\sqbrk {\phi \land \neg \psi} } > \kappa$
$\Box$

Now the tree is to be built.
This amounts to recursively defining formulas $\phi_\sigma$ for each finite sequence $\sigma$ over $\set {0, 1}$.

First, the root of the tree $\phi_{\paren {} }$ is defined where the subscript is the empty sequence.
The assumption is:

$\ds \card {\bigcup \sqbrk \phi} = \card {\map { {S_n}^\MM} A} > \kappa$
where the union is taken over all $\LL_A$-formulas $\phi$
But there are only $\kappa$ many such formulas.
Thus by Cardinality of Infinite Union of Infinite Sets there must be some $\LL_A$-formula $\phi_{\paren {} }$ such  that the cardinality of $\sqbrk {\phi_{\paren {} } }$ is strictly larger than $\kappa$.

Suppose $\phi_\sigma$ has been defined and that:

$\card {\sqbrk {\phi_\sigma} } > \kappa$
Let $\sigma = \paren {\sigma_0, \dots, \sigma_k}$.
By the lemma above, we can choose an $\LL_A$ formula $\psi$ such that both:

$\card {\sqbrk {\phi \land \psi} } > \kappa$
and:

$\card {\sqbrk {\phi \land \neg \psi} } > \kappa$

Define $\phi_{\paren {\sigma_0, \dots, \sigma_k, 0} }$ to be $\phi_\sigma \land \psi$.
Define $\phi_{\paren {\sigma_0, \dots, \sigma_k, 1} }$ to be $\phi_\sigma \land \neg \psi$.

Now, let $B$ be the set of elements of $A$ which occur as constant symbols in any of the $\phi_\sigma$.
Since only countably many $\phi_\sigma$ have been defined, $B$ is countable.
We will define an injection from the set of infinite sequences over $\set {0, 1}$ to $\map { {S_n}^\MM} B$ using our tree.
This will demonstrate that our theory $T$ is not $\omega$-stable.

From Type Space is Compact, $\map { {S_n}^\MM} A$ is compact (when viewed as a type space).
Thus it satisfies the finite intersection axiom by Equivalence of Definitions of Compact Topological Space.

We have that each $\sqbrk {\phi_\sigma}$ is closed, essentially by definition of the type space topology.
Also, any finite intersection $\sqbrk {\phi_{\paren {} } } \cap \sqbrk {\phi_{\paren {\sigma_0} } } \cap \cdots \cap \sqbrk {\phi_{\paren {\sigma_0, \dots, \sigma_k} } }$ is equal to $\sqbrk {\phi_{\paren {\sigma_0, \dots, \sigma_k} } }$ by construction.
Hence it is nonempty (by its cardinality)
Thus, by the finite intersection axiom, for each infinite sequence $\Sigma = \paren {\Sigma_0, \Sigma_1, \Sigma_2, \ldots}$ over $\set {0, 1}$, the intersection $\ds \bigcap_{k \mathop \in \N} \sqbrk {\phi_{\paren {\Sigma_0, \Sigma_1, \ldots, \Sigma_k} } }$ is nonempty.

Moreover, let $\Sigma = \paren {\Sigma_0, \Sigma_1, \Sigma_2, \ldots}$ and $\Sigma' = \paren {\Sigma'_0, \Sigma'_1, \Sigma'_2, \ldots}$ be two distinct infinite sequences over $\set {0, 1}$.
Then there is some $k$ for which $\Sigma_i = \Sigma'_i$ for $i \le k$ and $\Sigma_{k + 1} \ne \Sigma_{k + 1}$.
But $\phi_{\paren {\Sigma_1, \ldots, \Sigma_k, 0} }$ and $\phi_{\paren {\Sigma_1, \ldots, \Sigma_k, 1} }$ were defined to imply $\psi$ and $\neg \psi$ respectively for some $\psi$.
So no type can satisfy both of them simultaneously.
Thus $\ds \bigcap_{k \mathop \in \N} \sqbrk {\phi_{\paren {\Sigma_0, \Sigma_1, \ldots, \Sigma_k} } }$ and $\ds \bigcap_{k \mathop \in \N} \sqbrk {\phi_{\paren {\Sigma'_0, \Sigma'_1, \ldots, \Sigma'_k} } }$ cannot both contain the same type.

Thus, we can define our injection by sending each infinite sequence $\Sigma$ over $\set {0, 1}$ to a type chosen from $\ds \bigcap_{k \mathop \in \N} \sqbrk {\phi_{\paren {\Sigma_0, \Sigma_1, \ldots, \Sigma_k} } }$.

The existence of this injection implies that the cardinality of $\map { {S_n}^\MM} B$ is at least $2^{\aleph_0}$, as this is the cardinality of the set of infinite sequences over $\set {0, 1}$.

Hence, $T$ is not $\omega$-stable.

The theorem now follows by the Rule of Transposition.
$\blacksquare$





