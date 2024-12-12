# 

Source: https://proofwiki.org/wiki/B-Algebra_Induces_Group



Theorem
Let $\struct {X, \circ}$ be a $B$-algebra.
Let $*$ be the binary operation on $X$ defined as:

$\forall a, b \in X: a * b := a \circ \paren {0 \circ b}$

Then the algebraic structure $\struct {X, *}$ is a group such that:

$\forall x \in X: 0 \circ x$ is the inverse element of $x$ under $*$.

That is:

$\forall a, b \in X: a * b^{-1} := a \circ b$


Proof
Let $x, y, z \in X$:
We will show that $\struct {X, *}$ satisfies each of the group axioms in turn:


Group Axiom $\text G 0$: Closure
By definition of $*$, we have:

$x * y = x \circ \paren {0 \circ y}$
By Axiom $(AC)$ for $B$-algebras:

$x \circ \paren {0 \circ y} \in X$

Whence $x * y \in X$, and so $\paren {X, *}$ is a closed structure.
$\Box$


Group Axiom $\text G 1$: Associativity













\(\ds \paren {x * y} * z\)

\(=\)







\(\ds \paren {x \circ \paren {0 \circ y} } \circ \paren {0 \circ z}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds x \circ \paren {\paren {0 \circ z} \circ \paren {0 \circ \paren {0 \circ y} } }\)





Axiom $(A3)$ for $B$-algebras














\(\ds \)

\(=\)







\(\ds x \circ \paren {\paren {0 \circ z} \circ y}\)





Identity: $0 \circ \paren {0 \circ x} = x$














\(\ds \)

\(=\)







\(\ds x \circ \paren {0 \circ \paren {y \circ \paren {0 \circ z} } }\)





Axiom $(A3)$ for $B$-algebras














\(\ds \)

\(=\)







\(\ds x * \paren {y * z}\)





Definition of $*$



Thus it is seen that $*$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
Let $e := 0$; we will show that it is an identity element of $\struct {X, *}$.














\(\ds x * e\)

\(=\)







\(\ds x \circ \paren {0 \circ 0}\)





Definition of $*$ and $e$














\(\ds \)

\(=\)







\(\ds x \circ 0\)





Axiom $(A1)$ for $B$-algebras














\(\ds \)

\(=\)







\(\ds x\)





Axiom $(A2)$ for $B$-algebras


















\(\ds e * x\)

\(=\)







\(\ds 0 \circ \paren {0 \circ x}\)





Definition of $*$ and $e$














\(\ds \)

\(=\)







\(\ds x\)





Identity: $0 \circ \paren {0 \circ x} = x$



Hence $0$ is an identity for $*$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
Let us prove that for all $x \in X$, $0 \circ x$ is an inverse element to $x$.














\(\ds x * \paren {0 \circ x}\)

\(=\)







\(\ds x \circ \paren {0 \circ \paren {0 \circ x} }\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds x \circ x\)





Identity: $ 0 \circ \paren {0 \circ x} = x$














\(\ds \)

\(=\)







\(\ds 0\)





Axiom $(A1)$ for $B$-algebras


















\(\ds \paren {0 \circ x} * x\)

\(=\)







\(\ds \paren {0 \circ x} \circ \paren {0 \circ x}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds 0\)





Axiom $(A1)$ for $B$-algebras




That is, each $x \in X$ has a unique inverse element $x^{-1}$ under $*$.
This inverse element is $0 \circ x$.
$\Box$

It follows that:














\(\ds a * b^{-1}\)

\(=\)







\(\ds a \circ \paren {0 \circ b^{-1} }\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds a \circ \paren {0 \circ \paren {0 \circ b} }\)





Definition of $b^{-1}$














\(\ds \)

\(=\)







\(\ds a \circ b\)





Identity: $0 \circ \paren {0 \circ x} = x$



$\Box$

All the axioms have been shown to hold and the result follows.
$\blacksquare$


Also see
Group Induces $B$-Algebra




