# 

Source: https://proofwiki.org/wiki/Existence_of_Right_Universal_Product/Corollary

Corollary to Existence of Right Universal Product
For all $n \in \N_{> 0}$ and $m \in \N$, the following is a theorem of von Neumann-Bernays-Gödel set theory:

$\forall X: \exists Z: \forall v_1, \dotsc, v_m: \forall x_1, \dotsc, x_n: \sequence {x_1, \dotsc, x_n, v_1, \dotsc, v_m} \in Z \iff \sequence{x_1, \dotsc, x_n} \in X$
where the notation $\sequence {\cdot, \dotsc, \cdot}$ is defined inductively as:

$\sequence {y_1} := y_1$
$\sequence {y_1, \dotsc, y_k, y_{k + 1}} := \tuple {\sequence {y_1, \dotsc, y_k}, y_{k + 1}}$
and $\tuple {\cdot, \cdot}$ denotes the Kuratowski formalization of ordered pairs.


Proof
Let $X$ be arbitrary.
By Existence of Right Universal Product, let $Z$ be a class such that:

$\paren 1 \quad \forall v_1, \dotsc, v_m: \forall x: \tuple {\tuple {\dots \tuple {x, v_1}, \dots}, v_m} \in Z \iff x \in X$
Let $v_1, \dotsc, v_m, x_1, \dotsc, x_n$ be arbitrary sets.
Substitute $\sequence {x_1, \dotsc, x_n}$ for $x$ in $\paren 1$ producing:

$\paren 2 \quad \tuple {\tuple {\dots \tuple {\sequence {x_1, \dotsc, x_n}, v_1}, \dots}, v_m} \in Z \iff \sequence {x_1, \dotsc, x_n} \in X$
By definition of the notation $\sequence {\cdot, \dotsc, \cdot}$, this is equivalent to:

$\paren 3 \quad \sequence {x_1, \dotsc, x_n, v_1, \dotsc, v_m} \in Z \iff \sequence {x_1, \dotsc, x_n} \in X$
As $v_1, \dotsc, v_m, x_1, \dotsc, x_n$ were arbitrary, the theorem holds.
$\blacksquare$





