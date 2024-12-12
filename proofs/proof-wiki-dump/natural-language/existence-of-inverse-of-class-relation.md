# 

Source: https://proofwiki.org/wiki/Existence_of_Inverse_of_Class_Relation

Theorem
Let $X$ be a class.
Then there is a class $Z$ such that, for all sets $u, v$:

$\tuple {u, v} \in Z \iff \tuple {v, u} \in X$
where $\tuple {\cdot, \cdot}$ denotes the Kuratowski formalization of ordered pairs.


Proof
Let $X$ be arbitrary.
By Axiom $\text B 5$, there is a class $Z_1$ such that:

$\paren 1 \quad \forall a, w: \tuple {a, w} \in Z_1 \iff a \in X$
Now, by Axiom $\text B 7$, there is a class $Z_2$ such that:

$\paren 2 \quad \forall u, v, w: \tuple {\tuple {v, w}, u} \in Z_2 \iff \tuple {\tuple {v, u}, w} \in Z_1$
Next, by Axiom $\text B 6$, there is a class $Z_3$ such that:

$\paren 3 \quad \forall u, v, w: \tuple {\tuple {u, v}, w} \in Z_3 \iff \tuple {\tuple {v, w}, u} \in Z_2$
Finally, by Axiom $\text B 4$, there is a class $Z$ such that:

$\paren 4 \quad \forall b: b \in Z \iff \exists w: \tuple {b, w} \in Z_3$
We will prove that the $Z$ as defined above satisfies the theorem.

First, choose $a := \tuple {v, u}$ in $\paren 1$, to get:

$\paren {1'} \quad \forall u, v, w: \tuple {\tuple {v, u}, w} \in Z_1 \iff \tuple {v, u} \in X$
Also, choose $b := \tuple {u, v}$ in $\paren 4$, to get:

$\paren {4'} \quad \forall u, v: \tuple {u, v} \in Z \iff \exists w: \tuple {\tuple {u, v}, w} \in Z_3$
By Biconditional is Transitive with $\paren 2$ and $\paren 3$, for any $u, v, w$:

$\paren {2,3} \quad \tuple {\tuple {u, v}, w} \in Z_3 \iff \tuple {\tuple {v, u}, w} \in Z_1$

Now, we can proceed with the equivalence proof.
Suppose $\tuple {v, u} \in X$ for some sets $u, v$.
By the Axiom of Infinity, there exists at least one set $c$.
Then, by $\paren {1'}$:

$\tuple {\tuple {v, u}, c} \in Z_1$
Thus, by $\paren {2,3}$:

$\tuple {\tuple {u, v}, c} \in Z_3$
Hence, by $\paren {4'}$, choosing $w := c$:

$\tuple {u, v} \in Z$
$\Box$
Lastly, suppose $\tuple {u, v} \in Z$ for some sets $u, v$.
By $\paren {4'}$, there is some set $w_0$ such that:

$\tuple {\tuple {u, v}, w_0} \in Z_3$
Then, by $\paren {2,3}$:

$\tuple {\tuple {v, u}, w_0} \in Z_1$
Thus, by $\paren {1'}$, choosing $w := w_0$:

$\tuple {v, u} \in X$
$\blacksquare$





