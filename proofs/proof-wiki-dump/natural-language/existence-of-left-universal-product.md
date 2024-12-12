# 

Source: https://proofwiki.org/wiki/Existence_of_Left_Universal_Product

Theorem
For each $m \in \N_{> 0}$, the following is a theorem of von Neumann-Bernays-Gödel set theory:

$\forall X: \exists Z: \forall x: \forall v_1, \dotsc, v_m: \sequence {v_1, \dotsc, v_m, x} \in Z \iff x \in X$
where the notation $\sequence {\cdot, \dotsc, \cdot}$ is defined inductively as:

$\sequence {y_1} := y_1$
$\sequence {y_1, \dotsc, y_k, y_{k + 1}} := \tuple {\sequence {y_1, \dotsc, y_k}, y_{k + 1}}$
and $\tuple {\cdot, \cdot}$ denotes the Kuratowski formalization of ordered pairs.


Proof
Let $X$ be arbitrary.
By Axiom $\text B 5$, there is a class $Z$ such that:

$\forall x, v: \tuple {x, v} \in Z \iff x \in X$
By Existence of Inverse of Class Relation, there is a class $Z'$ such that:

$\forall v, x: \tuple {v, x} \in Z' \iff \tuple {x, v} \in Z$
Thus, by Biconditional is Transitive:

$\paren 1 \quad \forall v, x: \tuple {v, x} \in Z' \iff x \in X$

Now, let $v_1, \dotsc, v_m$ be arbitrary.
Substitute $\sequence {v_1, \dotsc, v_m}$ for $v$ in $\paren 1$ to get:

$\forall x: \forall v_1, \dotsc, v_m: \tuple {\sequence {v_1, \dotsc, v_m}, x} \in Z \iff x \in X$
But, by definition of the notation $\sequence {\cdot, \dotsc, \cdot}$, that is equivalent to:

$\forall x: \forall v_1, \dotsc, v_m: \sequence {v_1, \dotsc, v_m, x} \in Z \iff x \in X$
$\blacksquare$





