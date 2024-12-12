# 

Source: https://proofwiki.org/wiki/Existence_of_Middle_Universal_Product/Lemma

Lemma for Existence of Middle Universal Product
The following is a theorem of von Neumann-Bernays-Gödel set theory:

$\forall X: \exists Z: \forall u, v, w: \tuple {\tuple {u, v}, w} \in Z \iff \tuple {u, w} \in X$


Proof
Let $X$ be arbitrary.
By Axiom $\text B 5$, there exists some class $Z$ such that:

$\forall x, v: \tuple {x, v} \in Z \iff x \in X$
In particular, for $x = \tuple {u, w}$:

$\forall u, v, w: \tuple {\tuple {u, w}, v} \in Z \iff \tuple {u, w} \in X$
Now, by Axiom $\text B 7$, there is a class $Z'$ such that:

$\forall u, v, w: \tuple {\tuple {u, v}, w} \in Z' \iff \tuple {\tuple {u, w}, v} \in Z$
Thus, by Biconditional is Transitive:

$\forall u, v, w: \tuple {\tuple {u, v}, w} \in Z' \iff \tuple {u, w} \in X$
which satisfies the theorem.
$\blacksquare$





