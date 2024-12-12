# 

Source: https://proofwiki.org/wiki/Existence_of_Middle_Universal_Product/Corollary

Corollary to Existence of Middle Universal Product
For each $n \in \N_{> 0}$ and $m \in \N$, the following is a theorem of von Neumann-Bernays-Gödel set theory:

$\forall X: \exists Z: \forall v_1, \dotsc, v_m: \forall x_1, \dotsc, x_n: \forall y: \sequence {x_1, \dotsc, x_n, v_1, \dotsc, v_m, y} \in Z \iff \sequence {x_1, \dotsc, x_n, y} \in X$
where the notation $\sequence {\cdot, \dotsc, \cdot}$ is defined inductively as:

$\sequence {y_1} := y_1$
$\sequence {y_1, \dotsc, y_k, y_{k + 1}} := \tuple {\sequence {y_1, \dotsc, y_k}, y_{k + 1}}$
and $\tuple {\cdot, \cdot}$ denotes the Kuratowski formalization of ordered pairs.


Proof
Let $X$ be arbitrary.
By Existence of Middle Universal Product, there is a class $Z$ such that:

$\forall v_1, \dotsc, v_m: \forall x, y: \sequence {x, v_1, \dotsc, v_m, y} \in Z \iff \tuple {x, y} \in X$
In particular, for $x = \sequence {x_1, \dotsc, x_n}$:

$\forall v_1, \dotsc, v_m: \forall x_1, \dotsc, x_n: \forall y: \sequence {\sequence {x_1, \dotsc, x_n}, v_1, \dotsc, v_m, y} \in Z \iff \tuple {\sequence {x_1, \dotsc, x_n}, y} \in X$
But, by the definition of the notation $\sequence {\cdot, \dotsc, \cdot}$, this is equivalent to:

$\forall v_1, \dotsc, v_m: \forall x_1, \dotsc, x_n: \forall y: \sequence {x_1, \dotsc, x_n, v_1, \dotsc, v_m, y} \in Z \iff \sequence {x_1, \dotsc, x_n, y} \in X$
Thus, the theorem holds.
$\blacksquare$





