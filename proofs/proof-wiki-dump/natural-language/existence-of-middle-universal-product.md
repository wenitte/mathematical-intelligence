# 

Source: https://proofwiki.org/wiki/Existence_of_Middle_Universal_Product



Theorem
For each $m \in \N$, the following is a theorem of von Neumann-Bernays-Gödel set theory:

$\forall X: \exists Z: \forall v_1, \dotsc, v_m: \forall x, y: \sequence {x, v_1, \dotsc, v_m, y} \in Z \iff \tuple {x, y} \in X$
where the notation $\sequence {\cdot, \dotsc, \cdot}$ is defined inductively as:

$\sequence {y_1} := y_1$
$\sequence {y_1, \dotsc, y_k, y_{k + 1}} := \tuple {\sequence {y_1, \dotsc, y_k}, y_{k + 1}}$
and $\tuple {\cdot, \cdot}$ denotes the Kuratowski formalization of ordered pairs.


Corollary
For each $n \in \N_{> 0}$ and $m \in \N$, the following is a theorem of von Neumann-Bernays-Gödel set theory:

$\forall X: \exists Z: \forall v_1, \dotsc, v_m: \forall x_1, \dotsc, x_n: \forall y: \sequence {x_1, \dotsc, x_n, v_1, \dotsc, v_m, y} \in Z \iff \sequence {x_1, \dotsc, x_n, y} \in X$


Proof
In the metatheory in which NBG is formalized, we proceed by induction on $m$.

Basis for the Induction
If $m = 0$, the theorem is:

$\forall X: \exists Z: \forall x, y: \sequence {x, y} \in Z \iff \tuple {x, y} \in X$
But, by unfolding the definition of $\sequence {x, y}$, we observe that it is precisely $\tuple {x, y}$.
Therefore, $Z := X$ satisfies the basis for the induction.
$\Box$

Induction Hypothesis
As the induction hypothesis, assume that:

$\forall X: \exists Z: \forall v_1, \dotsc, v_m: \forall x, y: \sequence {x, v_1, \dotsc, v_m, y} \in Z \iff \tuple {x, y} \in X$
for some arbitrary $m \in \N$
From this, we will prove:

$\forall X: \exists Z: \forall v_1, \dotsc, v_m, v_{m + 1}: \forall x, y: \sequence {x, v_1, \dotsc, v_m, v_{m + 1}, y} \in Z \iff \tuple {x, y} \in X$


Induction Step
Let $X$ be arbitrary.
Apply the induction hypothesis to find a class $Z$ such that:

$\forall v_1, \dotsc, v_m: \forall x, y: \sequence {x, v_1, \dotsc, v_m, y} \in Z \iff \tuple {x, y} \in X$
Next we will use the following:

Lemma
The following is a theorem of von Neumann-Bernays-Gödel set theory:

$\forall X: \exists Z: \forall u, v, w: \tuple {\tuple {u, v}, w} \in Z \iff \tuple {u, w} \in X$
$\Box$
Applying the lemma to $Z$, there is a class $Z'$ such that:

$\forall u, v, w: \tuple {\tuple {u, v}, w} \in Z' \iff \tuple {u, w} \in Z$
In particular, for $u = \sequence {x, v_1, \dotsc, v_m}$, $v = v_{m + 1}$, and $w = y$:

$\forall v_1, \dotsc, v_m: \forall x, y: \tuple {\tuple {\sequence {x, v_1, \dotsc, v_m}, v_{m + 1}}, y} \in Z' \iff \tuple {\sequence {x, v_1, \dotsc, v_m}, y} \in Z$
But by definition of the notation $\sequence {\cdot, \dotsc, \cdot}$, that is equivalent to:

$\forall v_1, \dotsc, v_m: \forall x, y: \sequence {x, v_1, \dotsc, v_m, v_{m + 1}, y} \in Z' \iff \sequence {x, v_1, \dotsc, v_m, y} \in Z$
Finally, by Biconditional is Transitive with the definition of $Z$:

$\forall v_1, \dotsc, v_m: \forall x, y: \sequence {x, v_1, \dotsc, v_m, v_{m + 1}, y} \in Z' \iff \tuple {x, y} \in X$
Therefore, $Z'$ satisfies the induction step.
$\Box$
By the Principle of Mathematical Induction, the theorem follows.
$\blacksquare$





