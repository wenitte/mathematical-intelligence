# 

Source: https://proofwiki.org/wiki/Cancellable_Semiring_with_Unity_is_Additive_Semiring

Theorem
Let $\struct {S, *, \circ}$ be a cancellable semiring with unity $1_S$.

Then the distributand $*$ is commutative.
That is to say, $\struct {S, *, \circ}$ is also an additive semiring.


Proof
Let $\struct {S, *, \circ}$ be a semiring, all of whose elements of $S$ are cancellable for $*$.
We expand the expression $\paren {a * b} \circ \paren {c * d}$ using the distributive law in two ways:














\(\ds \paren {a * b} \circ \paren {c * d}\)

\(=\)







\(\ds \paren {\paren {a * b} \circ c} * \paren {\paren {a * b} \circ d}\)




















\(\ds \)

\(=\)







\(\ds \paren {a \circ c} * \paren {b \circ c} * \paren {a \circ d} * \paren {b \circ d}\)
























\(\ds \paren {a * b} \circ \paren {c * d}\)

\(=\)







\(\ds \paren {a \circ \paren {c * d} } * \paren {b \circ \paren {c * d} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a \circ c} * \paren {a \circ d} * \paren {b \circ c} * \paren {b \circ d}\)










So, by the fact that all elements of $\struct {S, *}$ are cancellable (and thus, a fortiori, are $a \circ c$ and $b \circ d$), we have:














\(\ds \paren {a \circ c} * \paren {b \circ c} * \paren {a \circ d} * \paren {b \circ d}\)

\(=\)







\(\ds \paren {a \circ c} * \paren {a \circ d} * \paren {b \circ c} * \paren {b \circ d}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {b \circ c} * \paren {a \circ d}\)

\(=\)







\(\ds \paren {a \circ d} * \paren {b \circ c}\)










As this is true for all $a, b, c, d \in S$, it is true in particular if $c = d = 1_S$.
Thus it is clear that $b * a = a * b$, which is exactly to say that $*$ is commutative.

Hence the result, by definition of additive semiring.
$\blacksquare$





