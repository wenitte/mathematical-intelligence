# 

Source: https://proofwiki.org/wiki/Abelian_Group_Induces_Commutative_B-Algebra

Theorem
Let $\struct {G, \circ}$ be an abelian group whose identity element is $e$.
Let $*$ be the product inverse operation on $G$:

$\forall a, b \in G: a * b = a \circ b^{-1}$
where $b^{-1}$ is the inverse element of $b$ under the operation $\circ$.

Then the algebraic structure $\struct {G, *}$ is a commutative $B$-algebra.
That is:

$\forall a, b \in G: a * \paren {0 * b} = b * \paren {0 * a}$


Proof
From Group Induces $B$-Algebra, $\struct {G, *}$ is a $B$-Algebra.
As in the proof Group Induces $B$-Algebra, we let:

$0 := e$

Now we demonstrate $0$-commutativity.
Let $x, y \in G$:














\(\ds x * \paren {0 * y}\)

\(=\)







\(\ds x \circ \paren {e \circ y^{-1} }^{-1}\)





Definition of $*$ and $0$














\(\ds \)

\(=\)







\(\ds x \circ \paren {y^{-1} }^{-1}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds x \circ y\)





Inverse of Group Inverse














\(\ds \)

\(=\)







\(\ds y \circ x\)





Definition of Abelian Group














\(\ds \)

\(=\)







\(\ds y \circ \paren {x^{-1} }^{-1}\)





Inverse of Group Inverse














\(\ds \)

\(=\)







\(\ds y \circ \paren {e \circ x^{-1} }^{-1}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds y * \paren {0 * x}\)





Definition of $*$ and $0$



Hence the result.
$\blacksquare$





