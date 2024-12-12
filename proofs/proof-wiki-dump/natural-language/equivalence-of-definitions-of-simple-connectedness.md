# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Simple_Connectedness



Theorem
Let $T = \struct{S, \tau}$ be a path-connected topological space.
The following definitions of the concept of Simply Connected are equivalent:

Definition by fundamental group
$T$ is said to be simply connected if the fundamental group $\map {\pi_1} T$ of $T$ is trivial.


Definition by path-homotopy of loops
$T$ is said to be simply connected if all loops in $T$ with identical base points are path-homotopic.


Definition by path-homotopy of paths
$T$ is said to be simply connected if all paths in $T$ with identical initial points and final points are path-homotopic.


Definition by null-homotopy
$T$ is said to be simply connected if all loops in $T$ are path-homotopic with a constant loop.


Proof
Definition by fundamental group implies Definition by path-homotopy of loops
Let $x \in S$.
From Fundamental Group is Independent of Base Point for Path-Connected Space, it follows that all fundamental groups $\map {\pi_1}{T, x}$ are isomorphic to one group denoted $\map {\pi_1}{ T }$.
By assumption, it follows that $\map {\pi_1}{ T }$ is trivial.
As the single element of $\map {\pi_1}{T, x}$ is a homotopy class of paths, it follows that all loops in $T$ with base point $x$ belong to the same homotopy class.
It follows that these loops are path-homotopic.
$\Box$

Definition by path-homotopy of loops implies Definition by fundamental group
As all loops in $T$ with base point $x \in S$ are path-homotopic, it follows that there exists only one homotopy class of loops with base point $x$.
It follows that the fundamental group $\map {\pi_1}{T, x}$ only has one element, so it is trivial.
From Fundamental Group is Independent of Base Point for Path-Connected Space, it follows that all fundamental groups $\map {\pi_1}{T, x}$ are isomorphic to $\map {\pi_1}{ T }$.
$\Box$


Definition by path-homotopy of loops implies Definition by null-homotopy
Let $x \in S$, and let $c : \closedint 0 1 \to S$ be the constant loop defined by $\map c t = x$.
By hypothesis, all loops with base point $x$ are path-homotopic with $c$.
Note that this means that all loops in $T$ are null-homotopic.
$\Box$

Definition by null-homotopy implies Definition by path-homotopy of loops
Let $\gamma_1 , \gamma_2$ be loops in $T$ with base point $x$.
By assumption, there exists a path-homotopy between $\gamma_1$ and a constant loop $c_1 : \closedint 0 1 \to S$.
By definition of path-homotopy, it follows that $\map {c_1} 0 = \map {\gamma_1} 0 = x$.
It follows that the constant loop $c_2 : \closedint 0 1 \to S$ path-homotopic to $\gamma_2$ also have $\map {c_2} 0 = x$, so $c_1$ and $c_2$ are identical.
As Relative Homotopy is Equivalence Relation, and $\gamma_1$ and $\gamma_2$ are both path-homotopic to $c_1$, it follows that $\gamma_1$ and $\gamma_2$ are path-homotopic.
$\Box$


Definition by null-homotopy implies Definition by path-homotopy of paths
Let $\gamma_1, \gamma_2: \closedint 0 1 \to S$ be two paths with $\map {\gamma_1} 0 = \map {\gamma_2} 0$ and $\map {\gamma_1} 1 = \map {\gamma_2} 1$.
Define the mapping $-\gamma_2: \closedint 0 1 \to X$ by:

$-\map {\gamma_2} t = \map {\gamma_2} {1 - t}$.

From Composite of Continuous Mappings is Continuous, it follows that $-\gamma_2$ is a path.
Let $c: \closedint 0 1 \to X$ be the constant loop defined by $\map c t = \map {\gamma_1} 0$.
When $\equiv$ denotes equivalence of homotopy classes, we have:














\(\ds \gamma_1\)

\(\equiv\)







\(\ds \gamma_1 * c\)





here, $\gamma_1 * c$ denotes the concatenation of $\gamma_1$ and $c$














\(\ds \)

\(\equiv\)







\(\ds \gamma_1 * \paren {-\gamma_2 * \gamma_2 }\)





by assumption, as $\paren {-\gamma_2 * \gamma_2 }$ and $c$ are both loops with base point $\map {\gamma_1} 0$














\(\ds \)

\(\equiv\)







\(\ds \paren {\gamma_1 * \paren {-\gamma_2} } * \gamma_2\)




















\(\ds \)

\(\equiv\)







\(\ds c * \gamma_2\)





by assumption, as $\gamma_1 * \paren {-\gamma_2}$ is a loop with base point $\map {\gamma_1} 0$














\(\ds \)

\(\equiv\)







\(\ds \gamma_2\)









$\Box$


Definition by path-homotopy of paths implies Definition by path-homotopy of loops
Let $\gamma_1 , \gamma_2$ be loops in $T$ with base point $x$.
By assumption, $\gamma_1$ and $\gamma_2$ are path-homotopic.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $9$: The Fundamental Group: $\S 52$: The Fundamental Group




