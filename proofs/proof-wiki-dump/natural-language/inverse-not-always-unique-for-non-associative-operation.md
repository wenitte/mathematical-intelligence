# 

Source: https://proofwiki.org/wiki/Inverse_not_always_Unique_for_Non-Associative_Operation



Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\circ$ be a non-associative operation.

Then for any $x \in S$, it is possible for $x$ to have more than one inverse element.


Proof
Proof by Counterexample:
Consider the algebraic structure $\struct {S, \circ}$ consisting of:

The set $S = \set {a, b, e}$
The binary operation $\circ$
whose Cayley table is given as follows:

$\begin {array} {c|cccc}
\circ & e & a & b \\
\hline
e & e & a & b \\
a & a & e & e \\
b & b & e & e \\
\end {array}$

By inspection, we see that $e$ is the identity element of $\struct {S, \circ}$.

We also note that:














\(\ds \paren {a \circ a} \circ b\)

\(=\)







\(\ds e \circ b\)




















\(\ds \)

\(=\)







\(\ds b\)
























\(\ds a \circ \paren {a \circ b}\)

\(=\)







\(\ds a \circ e\)




















\(\ds \)

\(=\)







\(\ds a\)









and so $\circ$ is not associative.

Note further that:














\(\ds a \circ b\)

\(=\)







\(\ds e\)




















\(\ds \)

\(=\)







\(\ds b \circ a\)









and also:














\(\ds a \circ a\)

\(=\)







\(\ds e\)









So both $a$ and $b$ are inverses of $a$.
Hence the result.
$\blacksquare$


Also see
Inverse in Monoid is Unique


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.1$: Monoids: Exercise $(12)$




