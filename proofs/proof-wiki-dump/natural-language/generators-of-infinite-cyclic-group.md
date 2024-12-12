# 

Source: https://proofwiki.org/wiki/Generators_of_Infinite_Cyclic_Group



Theorem
Let $\gen g = G$ be an infinite cyclic group.
Then the only other generator of $G$ is $g^{-1}$.

Thus an infinite cyclic group has exactly $2$ generators.


Proof
By definition, the infinite cyclic group with generator $g$ is:

$\gen g = \set {\ldots, g^{-2}, g^{-1}, e, g, g^2, \ldots}$
where $e$ denotes the identity $e = g^0$.
The fact that $g^{-1}$ generates $G$ is shown by Inverse of Generator of Cyclic Group is Generator.
Futhermore:

$\gen e = \set e \ne G$
By definition of infinite cyclic group:

$g^i \ne g^j$ for all $i \ne j$

Let $n \in Z \setminus \set {-1, 0, 1}$.
Then:

$\gen {g^n} = \set {\ldots, g^{-2 n}, g^{-n}, e, g^n, g^{2 n}, \ldots}$
But since $\order n > 1$, none of these elements is equal to $g$, because $1 \notin n \Z$.
So:

$g \notin \gen {g^n} \implies \gen {g^n} \ne \gen g$
$\blacksquare$


Note

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Link to theorem and include this in an Also SeeYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
While for $n \in Z \setminus \set {-1, 0, 1}$ we have shown that $\gen {g^n}$ and $\gen g$ are different as sets, the two are isomorphic as abstract groups via:

$\gen g \owns h \mapsto h^n \in \gen {g^n}$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 44 \alpha$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $19$




