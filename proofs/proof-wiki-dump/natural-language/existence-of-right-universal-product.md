# 

Source: https://proofwiki.org/wiki/Existence_of_Right_Universal_Product



Theorem
For each $m \in \N$, the following is a theorem of von Neumann-Bernays-Gödel set theory:

$\forall X: \exists Z: \forall v_1, \dotsc, v_m: \forall x: \tuple {\tuple {\dots \tuple {x, v_1}, \dots}, v_m} \in Z \iff x \in X$

Informally, for any class $X$, there is some class $Z$ such that:

$Z = \paren {\dotsm \paren {X \times V} \times \dotsm} \times V$
where there are $m$ copies of $V$, the universal class, combined with $X$ via the cartesian product.
Note, however, that the formal statement above allows for additional elements of $Z$ which are not of the form as written.


Corollary
For all $n \in \N_{> 0}$ and $m \in \N$, the following is a theorem of von Neumann-Bernays-Gödel set theory:

$\forall X: \exists Z: \forall v_1, \dotsc, v_m: \forall x_1, \dotsc, x_n: \sequence {x_1, \dotsc, x_n, v_1, \dotsc, v_m} \in Z \iff \sequence{x_1, \dotsc, x_n} \in X$
where the notation $\sequence {\cdot, \dotsc, \cdot}$ is defined inductively as:

$\sequence {y_1} := y_1$
$\sequence {y_1, \dotsc, y_k, y_{k + 1}} := \tuple {\sequence {y_1, \dotsc, y_k}, y_{k + 1}}$
and $\tuple {\cdot, \cdot}$ denotes the Kuratowski formalization of ordered pairs.


Proof
We will proceed by induction on $m$.
Importantly, this induction is not done in the context of NBG.
Rather, it is performed in the metamathematical system in which NBG is formalized.


Basis for the Induction
If $m = 0$, then the statement reduces to:

$\forall X: \exists Z: \forall x: x \in Z \iff x \in X$
But that trivially holds by taking $Z := X$.
Thus, the basis for the induction holds.
$\Box$

Induction Hypothesis
As the induction hypothesis, suppose that:

$\forall X: \exists Z: \forall v_1, \dotsc, v_m: \forall x: \tuple {\tuple {\dots \tuple {x, v_1}, \dots}, v_m} \in Z \iff x \in X$
for some arbitrary $m \in \N$.
We want to prove that:

$\forall X: \exists Z: \forall v_1, \dotsc, v_m, v_{m + 1}: \forall x: \tuple {\tuple {\tuple {\dots \tuple {x, v_1}, \dots}, v_m}, v_{m + 1}} \in Z \iff x \in X$


Induction Step
Let $X$ be arbitrary.
By the induction hypothesis, there is some $Z$ such that:

$\paren 1 \quad \forall v_1, \dotsc, v_m: \forall x: \tuple {\tuple {\dots \tuple {x, v_1}, \dots}, v_m} \in Z \iff x \in X$
By Axiom $\text B 5$, there is some $Z'$ such that:

$\paren 2 \quad \forall u, v: \tuple {u, v} \in Z' \iff u \in Z$
Substituting $\tuple {\tuple {\dots \tuple {x, v_1}, \dots}, v_m}$ for $u$ in $\paren 2$:

$\paren 3 \quad \forall v_1, \dotsc, v_m, v: \forall x: \tuple {\tuple {\tuple {\dots \tuple {x, v_1}, \dots}, v_m}, v} \in Z' \iff \tuple {\tuple {\dots \tuple {x, v_1}, \dots}, v_m} \in Z$
By $\paren 1, \paren 3$ and Biconditional is Transitive:

$\forall v_1, \dotsc, v_m, v: \forall x: \tuple {\tuple {\tuple {\dots \tuple {x, v_1}, \dots}, v_m}, v} \in Z' \iff x \in X$
Clearly, $Z'$ satisfies the induction step.
$\Box$
Therefore, by the Principle of Mathematical Induction, the theorem holds.
$\blacksquare$





