# 

Source: https://proofwiki.org/wiki/Hilbert%27s_Nullstellensatz


This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Steps may be extractable.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $k$ be an algebraically closed field.
Let $n \geq 0$ be an natural number.
Let $k \sqbrk {x_1, \ldots, x_n}$ be the polynomial ring in $n$ variables over $k$.

Then for every ideal $J \subseteq k \sqbrk {x_1, \ldots, x_n}$, the associated ideal of its zero-locus equals its radical:

$\map I {\map Z J} = \map \Rad J$


Proof
Note first that the operations $\map I {\, \cdot \,}$ and $\map Z {\, \cdot \,}$ are inclusion reversing.
That is:

$X \subseteq Y \subseteq k^n \implies \map I X \supseteq \map I Y$
$I \subseteq J \implies \map Z I \supseteq \map Z J$

This article, or a section of it, needs explaining.In particular: Link to a page where the above is demonstrated.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Let $m_a$ be the ideal $\ideal {x_1 - a_1, \ldots, x_n - a_n}$ with $a \in k^n$.


Step 1: Maximal Ideals
It is demonstrated that $m_a$ are the only maximal ideals.

Let $a \in k^n$.
Define now:

$\pi_a: k \sqbrk {x_1, \ldots, x_n} \to k: f \mapsto \map f {a_1, \ldots, a_n}$
and note that is an epimorphism of $k$-algebras with kernel:

$\map I {\set a} = m_a$

This article, or a section of it, needs explaining.In particular: Link to a page where the above is demonstrated.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let now $m$ be a maximal ideal of $k \sqbrk {x_1, \ldots, x_n}$.
Now $\dfrac {k \sqbrk {x_1, \ldots, x_n} } m$ is a field extension of $k$, which is finitely generated.
Hence by a corollary of the Noether Normalization Lemma, we find that $\dfrac {k \sqbrk {x_1, \ldots, x_n} } m$ is a finite field extension of $k$.
Since $k$ is algebraically closed, there is an isomorphism of $k$-algebras:

$\dfrac {k \sqbrk {x_1, \ldots, x_n} } m \to k$
Let $a_i$ denote the image $x_i$. Hence we find that $m_a \subseteq m$, which implies an equality since the first one is a maximal ideal.
$\Box$


Step 2: Radical is Intersection of Maximum Ideals
It is to be demonstrated that the radical of an ideal $J$ in a finitely generated $k$-algebra $A$ is equal to the intersection of the maximal ideals that contain $J$.

Note that the projection morphism:

$\pi: A \to \dfrac A J$
induces a bijection $I \mapsto \map {\pi^{-1} } I$ from the sets of radical, prime and maximal ideals of $\dfrac A J$ to the sets radical, prime and maximal ideals of $A$ that contain $J$.


This article, or a section of it, needs explaining.In particular: Link to a page explaining the above.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence we need to prove this only if $J = \ideal 0$.

It is clear that $\map \Rad {\ideal 0}$ is contained in every maximal ideal.


This article contains statements that are justified by handwavery.In particular: "it is clear that" -- needs a link to a page demonstrating itYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence we need to prove that every element that is not in $\map \Rad {\ideal 0}$ is not contained in some maximal ideal.
Let $f \in A$ such that it is not nilpotent, that is:

$f \notin \map \Rad {\ideal 0}$
Hence:

$A_f \cong \dfrac {A \sqbrk x} {\paren {f x - 1} }$
is a non-trivial $k$-algebra, which thus has a maximal ideal $\MM$.
Consider now the morphism

$\phi : A \to A_f$
which is a morphism of finitely generated $k$-algebras.
Hence by a corollary of the Noether Normalization Lemma, $\map {\phi^{-1} } \MM$ must also be maximal.
This is a maximal ideal $A$ that does not contain $f$.
$\Box$


Step 3
Note now that a point $a \in k^n$ belongs to $\map Z J$ if and only if $J \subseteq m_a$.
This implies that the maximal ideals containing $J$ are just the maximal ideals $m_a$ with $a \in \map Z J$.
From Step 2:

$\ds \bigcap_{a \mathop \in \map Z J} m_a = \map \Rad J$

Note now also that:














\(\ds \map I {\map Z J}\)

\(=\)







\(\ds \bigcap_{a \mathop \in \map Z J} \map I {\set a}\)




















\(\ds \)

\(=\)







\(\ds \bigcap_{a \mathop \in \map Z J} m_a\)










This article, or a section of it, needs explaining.In particular: justification for the above equation blockYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
which implies the required result.
$\blacksquare$


Source of Name
This entry was named for David Hilbert.


Linguistic Note
The word nullstellensatz is German for zero locus theorem.





