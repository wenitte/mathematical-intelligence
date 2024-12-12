# 

Source: https://proofwiki.org/wiki/Conditions_for_Commutative_Diagram_on_Quotient_Mappings_between_Mappings

Theorem
Let $A$ and $B$ be sets.
Let $\RR_S$ and $\RR_T$ be equivalence relations on $S$ and $T$ respectively.
Let $f: S \to T$ be a mapping from $S$ to $T$.

Let $S / \RR_S$ and $T / \RR_T$ be the quotient sets of $S$ and $T$ induced by $\RR_S$ and $\RR_T$ respectively.
Let $q_S: S \to S / \RR_S$ and $q_T: T \to T / \RR_T$ be the quotient mappings induced by $\RR_S$ and $\RR_T$ respectively.

Then a mapping $g: S / \RR_S \to T / \RR_T$ exists such that:

$q_T \circ f = g \circ q_S$
if and only if:

$\forall x, y \in S: x \mathrel {\RR_S} y \implies \map f x \mathrel {\RR_T} \map f y$


$\begin {xy} \xymatrix@L + 2mu@ + 1em {
 S \ar[r]^*{f}
   \ar[d]_*{q_S}
& T \ar[d]^*{q_T} \\
S / \RR_S \ar@{-->}[r]_*{g} & T / \RR_T } \end {xy}$


Proof
Consider the commutative diagram:


$\begin {xy} \xymatrix@L + 2mu@ + 1em {
 S \ar[rr]^*{f}
   \ar[dd]_*{q_S}
   \ar[ddrr]^*{q_T \circ f}
& & T \ar[dd]^*{q_T} \\
& & \\
S / \RR_S \ar@{-->}[rr]_*{g} & & T / \RR_T } \end {xy}$
We consider the mapping $q_T \circ f: S \to T / \RR_T$.

From Condition for Mapping from Quotient Set to be Well-Defined:

there exists a mapping $g: S / \RR_S \to T / \RR_T$ such that $g \circ q_S = q_T \circ f$
if and only if:

$\forall x, y \in S: \tuple {x, y} \in \RR_S \implies \map {\paren {q_T \circ f} } x = \map {\paren {q_T \circ f} } y$

Hence:














\(\ds \map {\paren {q_T \circ f} } x\)

\(=\)







\(\ds \map {\paren {q_T \circ f} } y\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map {q_t} {\map f x}\)

\(=\)







\(\ds \map {q_t} {\map f y}\)





Definition of Composition of Mappings








\(\ds \leadstoandfrom \ \ \)





\(\ds \map f x\)

\(\RR_T\)







\(\ds \map f y\)





Definition of Quotient Mapping



$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Problem $\text{CC}$: Factoring through Quotients




