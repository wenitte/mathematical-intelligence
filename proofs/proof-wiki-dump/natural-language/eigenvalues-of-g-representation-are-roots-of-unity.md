# 

Source: https://proofwiki.org/wiki/Eigenvalues_of_G-Representation_are_Roots_of_Unity


This article needs to be linked to other articles.In particular: especially categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $G$ be a finite group.
Let $\left({K, +, \cdot}\right)$ be a field.
Let $V$ be a $G$-module over $K$ (i.e. $V$ is a $K \left[{G}\right]$-module).

Then $\forall g \in G$, the eigenvalues of the action by the vector $g \in K \left[{G}\right]$ on $V$ are roots of unity.


Proof
Fix an arbitrary $g \in G$ and consider the corresponding vector $g \in K \left[{G}\right]$.
Let $\lambda$ be an eigenvalue of $g$, that is $\lambda$ is an eigenvalue of the map in $\operatorname{Aut} \left({V}\right): \vec v \mapsto g \vec v$.
Then by definition of an eigenvalue we have:

$\exists \vec v_\lambda \in V : g \vec v_\lambda = \lambda \vec v_\lambda$
Let $n$ be the order of $g$ in $G$.
Then:














\(\ds \vec v_\lambda\)

\(=\)







\(\ds g^n \vec v_\lambda\)





as $g^n = e$ and $e$ acts trivially on $V$














\(\ds \)

\(=\)







\(\ds \lambda g^{n-1} \vec v_\lambda\)





as $G$ acts linearly on $V$














\(\ds \)

\(=\)







\(\ds \vdots\)





Continue exchanging $g^k \vec v_\lambda$ with $\lambda g^{k-1} \vec v_\lambda$














\(\ds \)

\(=\)







\(\ds \lambda^n \vec v_\lambda\)





as $g^0 = e$ which acts trivially on $V$




This article, or a section of it, needs explaining.In particular: "as $g^n = e$ and $e$ acts trivially on $V$" - this needs to be linked to and / or provedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article, or a section of it, needs explaining.In particular: "as $G$ acts linearly on $V$" - this needs to be linked to and / or provedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus:

$\vec v_\lambda = \lambda^n \vec v_\lambda$
which means:

$\lambda^n = 1$
and thus by definition, $\lambda$ is an $n$th root of unity.
$\blacksquare$





