# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Direct_Limit_of_Sequence_of_Groups/Lemma_2


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Lemma
The following defines a group structure on $G_\infty$: 
Let $\struct {G_\infty, \cdot}$ be the algebraic structure defined as follows.
Let $\eqclass {\tuple {x_n, n} } {}, \eqclass {\tuple {y_m, m} } {} \in G_\infty$ be arbitrary elements of $G_\infty$.
Let $l := \max \set {m, n}$.
Let the operation $\cdot$ on $G_\infty$ be defined as:

$\tuple {\eqclass {\tuple {x_n, n} } {} \cdot \eqclass {\tuple {y_m, m} } {} } := \eqclass {\tuple {\map {g_{n l} } {x_n} \map {g_{m l} } {y_m}, l} } {}$
Then $\struct {G_\infty, \cdot}$ is a group.


Proof
Well-Definedness
The definition depends on the choice $\tuple {x_n, n}$ and $\tuple {y_m, m}$ of representatives of $\eqclass {\tuple {x_n, n} } {}$ and $\eqclass {\tuple {y_m, m} } {}$. 
We have to show that the product element is independent of this choice.
Let $\tuple {x_{n'}, n'}$ and $\tuple {y_{m'}, m'}$ be different representatives of the chosen equivalence classes. 
Let $l' := \max \set {n', m'}$.
Without loss of generality, suppose that $l' \ge l$.
We have that:

$\tuple {x_n, n} \sim \tuple {x_{n'}, n'}$
and:

$\tuple {y_m, m} \sim \tuple {y_{m'}, m'}$
and so:

$\map {g_{n, l'} } {x_n} = \map {g_{n', l'} } {x_{n'} }$
and:

$\map {g_{m, l'} } {y_m} = \map {g_{m', l'} } {y_{m'} }$
		
Then we have, since all our maps are group homomorphisms:














\(\ds \map {g_{ l, l'} } {\map {g_{n, l} } {x_n} \map {g_{m, l} } {y_m} }\)

\(=\)







\(\ds \map {g_{ l, l'} } {\map {g_{n, l} } {x_n} } \map {g_{l, l'} } {\map {g_{m, l} } {y_m} }\)




















\(\ds \)

\(=\)







\(\ds \map {g_{n, l'} } {x_n} \map {g_{m, l'} } {y_m}\)




















\(\ds \)

\(=\)







\(\ds \map {g_{n', l'} } {x_{n'} } \map {g_{m', l'} } {y_{m'} }\)









that is:

$\map {g_{n, l} } {x_n} \map {g_{m,l} } {y_m} \sim \map {g_{n', l'} } {x_{n'} } \map {g_{m', l'} } {y_{m'} }$
This proves that our definition is independent of the choice of representative.
$\Box$


Group Axioms
Without loss of generality, by the definition of the group operation, we may assume that the representatives are always in the same group $G_l \in \sequence {G_n}_{n \mathop \in \N}$.
To see this we note that we always consider a finite collection of group elements 

$\set {\eqclass {\tuple {x_{n_1}, {n_1} } } {}, \ldots, \eqclass {\tuple {x_{n_k}, {n_k} } } {} } \subset G_\infty$
Define $l:= \max \set {n_1, \ldots, n_k}$.
Then:

$\forall i \in \set {1, \ldots, k}: \map {g_{n_i, l} } {x_{n_i} } \in G_n \land \tuple {x_{n_1}, {n_1} } \sim \tuple {\map{ g_{n_i, l} } {x_{n_i} }, l}$


Group Axiom $\text G 1$: Associativity
Let $\eqclass {\tuple{x_n, n} } {}, \eqclass {\tuple {y_m, m} } {}, \eqclass {\tuple {y_n, n} } {}, \eqclass {\tuple {z_n, n} } {} \in G_\infty$. 
Then: 














\(\ds \paren {\eqclass {\tuple{x_n, n} } {} \cdot \eqclass {\tuple {y_n, n} } {} } \cdot \eqclass {\tuple {z_n, n} } {}\)

\(=\)







\(\ds \eqclass {\tuple {x_n y_n, n} } {} \cdot \eqclass {\tuple {z_n, n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {\paren {x_n y_n} z_n, n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {x_n \paren {y_n z_n}, n} } {}\)





$G_n$ is a group














\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {x_n, n} } {} \cdot \eqclass {\tuple {y_n z_n, n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {x_n, n} } {} \cdot \paren {\eqclass {\tuple {y_n, n} } {} \cdot \eqclass {\tuple {z_n, n} } {} }\)











Group Axiom $\text G 2$: Existence of Identity Element
Let $\eqclass {\tuple {x_n, n} } {} \in G_\infty$ and let $1_n$ be the identity of $G_n$. 
Note that

$\forall k, n \in \N : \paren {k \ge n \implies \map {g_{n k} } {1_n} = 1_k}$
because the maps $g_{n k}$ are group homomorphisms.
Then: 














\(\ds \eqclass {\tuple {x_n, n} } {} \cdot \eqclass {\tuple {1_n, n} } {}\)

\(=\)







\(\ds \eqclass {\tuple {x_n 1_n, n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {x_n, n} } {}\)









Similarly we also find that $\eqclass {\tuple {1_n, n} } {} \cdot \eqclass {\tuple {x_n, n} } {} = \eqclass {\tuple {x_n, n} } {}$.
Thus $\eqclass {\tuple {1_n, n} } {}$ is the identity of $G_\infty$.


Group Axiom $\text G 3$: Existence of Inverse Element
Let $\eqclass {\tuple {x_n, n} } {} \in G_\infty$.
Then:














\(\ds \eqclass {\tuple {x_n, n} } {} \cdot \eqclass {\tuple {x_n^{-1}, n} } {}\)

\(=\)







\(\ds \eqclass {\tuple {x_n x^{-1}_n, n} } {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {1_n, n} } {}\)









Similarly we also find that $\eqclass {\tuple {x^{-1}_n, n} } {} \cdot \eqclass {\tuple {x_n, n} } {} = \eqclass {\tuple {1_n, n} } {}$.
Thus $\eqclass {\tuple {x_n, n} } {}$ has an inverse, that is:

$\eqclass {\tuple {x_n^{-1}, n} } {}$
in $G_\infty$.
$\blacksquare$





