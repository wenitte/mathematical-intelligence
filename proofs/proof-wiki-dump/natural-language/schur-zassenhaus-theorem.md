# 

Source: https://proofwiki.org/wiki/Schur-Zassenhaus_Theorem



Theorem
Let $G$ be a finite group and $N$ be a normal subgroup in $G$.
Let $N$ be a Hall subgroup of $G$.

Then there exists $H$, a complement of $N$, such that $G$ is the semidirect product of $N$ and $H$.


Proof
The proof proceeds by induction.
By definition, $N$ is a Hall subgroup if and only if the index and order of $N$ in $G$ are relatively prime numbers.

Let $G$ be a group whose identity is $e$.
We induct on $\order G$, where $\order G$ is the order of $G$.
We may assume that $N \ne \set e$.
Let $p$ be a prime number dividing $\order N$.
Let $\Syl p N$ be the set of Sylow $p$-subgroups of $N$.
By the First Sylow Theorem:

$\Syl p N \ne \O$
Let:

$P \in \Syl p N$
$G_0$ be the normalizer in $G$ of $P$
$N_0 = N \cap G_0$.
By Frattini's Argument:

$G = G_0 N$
By the Second Isomorphism Theorem for Groups and thence Lagrange's Theorem (Group Theory), it follows that:

$N_0$ is a Hall subgroup of $G_0$
$\index {G_0} {N_0} = \index G H$
Suppose $G_0 < G$.
Then by induction applied to $N_0$ in $G_0$, we find that $G_0$ contains a complement $H \in N_0$.
We have that:

$\order H = \index {G_0} {N_0}$
and so $H$ is also a complement to $N$ in $G$.
So we may assume that $P$ is normal in $G$ (that is: $G_0 < G$).


This article, or a section of it, needs explaining.In particular: What is the significance of $G_0 < G$ here? It has already been stated above. What is its purpose at this point in the argument?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Let $Z \paren P$ be the center of $P$.
By:

Center is Characteristic Subgroup
$P$ is normal in $G$
Characteristic Subgroup of Normal Subgroup is Normal
$Z \paren P$ is also normal in $G$.
Let $Z \paren P = N$.
Then there exists a long exact sequence of cohomology groups:

$0 \to H^1 \paren {G / N, P^N} \to H^1 \paren {G, P} \to H^1 \paren {N, P} \to H^2 \paren {G / N, P} \to H^2 \paren {G, P}$
which splits as desired.


This article, or a section of it, needs explaining.In particular: The link leads to "exact sequence". An explanation is needed as to what a "long exact sequence" is.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article, or a section of it, needs explaining.In particular: The definition of $P^N$ in this contextYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article, or a section of it, needs explaining.In particular: The definition of "splits" in this contextYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Otherwise:

$Z \paren P \ne N$
In this case $N / Z \paren P$ is a normal (Hall) subgroup of $G / Z \paren P$.
By induction:

$N / Z \paren P$ has a complement $H / Z \paren P$ in $E // Z \paren P$.

This article, or a section of it, needs explaining.In particular: The meaning of $E // Z \paren P$ and definition of $E$ in this context.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article, or a section of it, needs explaining.In particular: Although it is stated that this proof is by induction, it is unclear what the base case, induction hypothesis and induction step actually are.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Let $G_1$ be the preimage of $H // Z \paren P$ in $G$ (under the equivalence relation).


This article, or a section of it, needs explaining.In particular: Under what equivalence relation?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\order {G_1} = \order {K / Z \paren P} \times \order {Z \paren P} = \order {G / N} \times \order {Z \paren P}$

This article, or a section of it, needs explaining.In particular: The definition of $K$ in $\order {G_1} = \order {K / Z \paren P} \times \order {Z \paren P} = \order {G / N}\ \times \order {Z \paren P}$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore, $Z \paren P$ is normal Hall subgroup of $G_1$.

By induction, $Z \paren P$ has a complement in $G_1$ and is also a complement of $N$ in $G$.


This article, or a section of it, needs explaining.In particular: Again, although it is stated that this proof is by induction, it is unclear what the base case, induction hypothesis and induction step actually are.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Also known as
Some sources refer to this theorem as Schur's theorem, but that name is also used for an unrelated result in Ramsey theory.


Source of Name
This entry was named for Issai Schur and Hans Julius Zassenhaus.





