# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_of_Real_Function



Theorem
The following definitions of the concept of Limit of Real Function are equivalent:

Definition 1
$\map f x$ tends to the limit $L$ as $x$ tends to $c$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \R: 0 < \size {x - c} < \delta \implies \size {\map f x - L} < \epsilon$
where $\R_{>0}$ denotes the set of strictly positive real numbers.

Definition 2
$\map f x$ tends to the limit $L$ as $x$ tends to $c$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: x \in \map {N_\delta} c \setminus \set c \implies \map f x \in \map {N_\epsilon} L$
where:

$\map {N_\epsilon} L$ denotes the $\epsilon$-neighborhood of $L$
$\map {N_\delta} c \setminus \set c$ denotes the deleted $\delta$-neighborhood of $c$
$\R_{>0}$ denotes the set of strictly positive real numbers.


Proof
By definition of deleted $\delta$-neighborhood of $c$:

$x \in \map {N_\delta} c \setminus \set c$
if and only if:

$0 < \size {x - c} < \delta$

By definition of $\epsilon$-neighborhood of $L$:

$\map f x \in \map {N_\epsilon} L$
if and only if:

$\size {\map f x - L} < \epsilon$

The result follows by comparison of the definitions.
$\blacksquare$





