# 

Source: https://proofwiki.org/wiki/B-Algebra_Power_Law_with_Zero

Theorem
Let $\struct {X, \circ}$ be a $B$-algebra.
Let $n, m \in \N_{>0}$ such that $n > m$.

Then:

$\forall x \in X: n, m \in \N_{>0} \implies x^m \circ x^n = 0 \circ x^{n - m}$
where $x^k$ for $k \in \N_{>0}$ denotes the $k$th power of the element $x$.


Proof
First we show that:

$\forall x \in X: x \circ x^2 = 0 \circ x$













\(\ds x \circ x^2\)

\(=\)







\(\ds x \circ \paren {x^1 \circ \paren {0 \circ x} }\)





Definition of Power ($B$-Algebra)














\(\ds \)

\(=\)







\(\ds x \circ \paren {x \circ \paren {0 \circ x} }\)





First Power of Element in $B$-Algebra














\(\ds \)

\(=\)







\(\ds \paren {x \circ x} \circ x\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds 0 \circ x\)





$B$-Algebra Axiom $(\text A 1)$



$\Box$

Now we show that:

$\forall x \in X: m \in \N_{>0}: x \circ x^m = 0 \circ x^{m - 1}$













\(\ds x \circ x^m\)

\(=\)







\(\ds x \circ \paren {x^{m - 1} \circ \paren {0 \circ x} }\)





Definition of Power ($B$-Algebra)














\(\ds \)

\(=\)







\(\ds \paren {x \circ x} \circ x^{m - 1}\)





$B$-Algebra Axiom $(\text A 3)$














\(\ds \)

\(=\)







\(\ds 0 \circ x^{m - 1}\)





$B$-Algebra Axiom $(\text A 1)$



$\Box$

Now we prove the original proposition using a proof by induction.
The base case for $n = 1, m = 2$ was established in the first lemma. 

Let us assume $x^m \circ x^n = 0 \circ x^{n - m}$ for some $n, m \in \N_{>0}$.
Then: 














\(\ds x^{m + 1} \circ x^n\)

\(=\)







\(\ds \paren {x^m \circ \paren {0 \circ x} } \circ x^n\)





Definition of Power ($B$-Algebra)














\(\ds \)

\(=\)







\(\ds x^m \circ \paren {x^n \circ x}\)





Identity: $x \circ \paren {y \circ z} = \paren {x \circ \paren {0 \circ z} } \circ y$














\(\ds \)

\(=\)







\(\ds x^m \circ x^{n - 1}\)





$B$-Algebra Power Law














\(\ds \)

\(=\)







\(\ds x^0 \circ x^{n - m - 1}\)





Induction using the previous lemma














\(\ds \)

\(=\)







\(\ds 0 \circ x^{n - m - 1}\)





Definition of Zeroth Power of Element



Hence the result.
$\blacksquare$





