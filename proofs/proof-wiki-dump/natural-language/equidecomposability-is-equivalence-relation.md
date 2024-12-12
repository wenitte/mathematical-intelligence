# 

Source: https://proofwiki.org/wiki/Equidecomposability_is_Equivalence_Relation



Theorem
The property of being equidecomposable is an equivalence relation on the power set $\powerset {\R^n}$.


Proof
Relexivity
A set is necessarily equidecomposable with itself; the same decomposition and set of isometries suffice for $A$ as for $A$.


Symmetry
There is no order to the relation of being equidecomposable; symmetry follows.


Transitivity
Suppose $A, B, C \subset \R^n$ are sets such that $A, B$ are equidecomposable and $B, C$ are equidecomposable.
Let $X_1, \dots, X_m$ be a decomposition of $A, B$ together with isometries $\mu_1, \dots, \mu_m, \nu_1, \dots, \nu_m: \R^n \to \R^n$ such that:

$\ds A = \bigcup_{i \mathop = 1}^m \map {\mu_i} {X_i}$
and 

$\ds B = \bigcup_{i \mathop = 1}^m \map {\nu_i} {X_i}$

Further let $Y_1, \dots, Y_p$ together with $\xi_1, \dots, \xi_p, \tau_1, \dots, \tau_p$ be sets and isometries such that:

$\ds B = \bigcup_{i \mathop = 1}^p \map {\xi_i} {Y_i}$
and:

$\ds C = \bigcup_{i \mathop = 1}^p \map {\tau_i} {Y_i}$

Consider the sets

$Z_{i, j} = \map {\nu_i} {X_i} \cap \map {\xi_j} {Y_j}$
where $1 \le i \le m$ and $1 \le j \le p$.

We have:

$\ds \bigcup_{i \mathop = 1}^m \bigcup_{j \mathop = 1}^p \map {\paren {\mu_i \circ \nu_i^{-1} } } {Z_{i, j} } = \bigcup_{i \mathop = 1}^m \bigcup_{j \mathop = 1}^p \map {\paren {\mu_i \circ \nu_i^{-1} } } {\map {\nu_i} {X_i} \cap \map {\xi_j} {Y_j} } = \bigcup_{i \mathop = 1}^m \map {\paren {\mu_i \circ \nu_i^{-1} \circ \nu_i} } {X_i} = \bigcup_{i \mathop = 1}^m \map {\mu_i} {X_i} = A$


$\ds \bigcup_{j \mathop = 1}^p \bigcup_{i \mathop = 1}^m \map {\paren {\tau_j \circ \xi_j^{-1} } } {Z_{i, j} } = \bigcup_{j \mathop = 1}^p \bigcup_{i \mathop = 1}^m \map {\paren {\tau_j \circ \xi_j^{-1} } } {\map {\nu_i} {X_i} \cap \map {\xi_j} {Y_j} } = \bigcup_{j \mathop = 1}^p \map {\paren {\tau_j \circ \xi_j^{-1} \circ \xi_j} } {Y_j} = \bigcup_{j \mathop = 1}^p \map {\tau_j} {Y_j} = C$
so $Z_{i, j}$ together with the isometries $\mu_i \circ \nu_i^{-1}, \tau_j \circ \xi_j^{-1}$ is a decomposition of $A$ and $C$.
Hence these two are equidecomposable.
$\blacksquare$





