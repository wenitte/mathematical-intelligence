# 

Source: https://proofwiki.org/wiki/Group_Induces_B-Algebra

Theorem
Let $\struct {G, \circ}$ be a group whose identity element is $e$.
Let $*$ be the product inverse operation on $G$:

$\forall a, b \in G: a * b = a \circ b^{-1}$
where $b^{-1}$ is the inverse element of $b$ under the operation $\circ$.

Then the algebraic structure $\struct {G, *}$ is a $B$-algebra.


Proof
First note that by Group Axiom $\text G 0$: Closure:

$\forall a, b \in G: a * b \in G$
and so $B$-Algebra Axiom $(\text {AC})$ holds.

We have that:

$\forall x \in G: x * x = x \circ x^{-1} = e$
by definition of inverse element.

Let $0 := e$.
Then:

$B$-Algebra Axiom $(\text A 0)$: $\quad \exists 0 \in G$
$B$-Algebra Axiom $(\text A 1)$: $\quad \forall x \in G: x * x = 0$

Note that:










\(\ds \exists 0 \in G: \, \)



\(\ds 0^{-1}\)

\(=\)







\(\ds e^{-1}\)





Definition of $0$














\(\ds \)

\(=\)







\(\ds e\)





Inverse of Identity Element is Itself














\(\ds \)

\(=\)







\(\ds 0\)





Definition of $0$



and so:










\(\ds \forall x \in G: \, \)



\(\ds x * 0\)

\(=\)







\(\ds x \circ 0^{-1}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds x \circ e\)





Definition of $0$














\(\ds \)

\(=\)







\(\ds x\)





Definition of Identity Element



demonstrating:

$B$-Algebra Axiom $(\text A 2)$: $\quad \forall x \in G: x * 0 = x$

Finally, let $x, y, z \in G$:














\(\ds \paren {x * y} * z\)

\(=\)







\(\ds \paren {x \circ y^{-1} } \circ z^{-1}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds x \circ \paren {y^{-1} \circ z^{-1} }\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds x \circ \paren {z \circ y}^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds x \circ \paren {z \circ \paren {y^{-1} }^{-1} }^{-1}\)





Inverse of Group Inverse














\(\ds \)

\(=\)







\(\ds x * \paren {z * y^{-1} }\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds x * \paren {z * \paren {0 \circ y^{-1} } }\)





as $0 = e$














\(\ds \)

\(=\)







\(\ds x * \paren {z * \paren {0 * y} }\)





Definition of $*$



This demonstrates:

$B$-Algebra Axiom $(\text A 3)$: $\quad \forall x, y, z \in G: \paren {x * y} * z = x * \paren {z * \paren {0 * y} }$

All axioms of the $B$-algebra have been demonstrated to hold.
Hence the result.
$\blacksquare$





