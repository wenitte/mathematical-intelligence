# 

Source: https://proofwiki.org/wiki/Order_of_Conjugate_Element_equals_Order_of_Element



Theorem
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Then

$\forall a, x \in \struct {G, \circ}: \order {x \circ a \circ x^{-1} } = \order a$
where $\order a$ denotes the order of $a$ in $G$.


Corollary
$\forall a, x \in \struct {G, \circ}: \order {x \circ a} = \order {a \circ x}$


Proof
Let $\order a = k$.
Then $a^k = e$, and:

$\forall n \in \N_{>0}: n < k \implies a^n \ne e$
by definition of the order of $a$ in $G$

We have:














\(\ds \paren {x \circ a \circ x^{-1} }^k\)

\(=\)







\(\ds x \circ a^k \circ x^{-1}\)





Power of Conjugate equals Conjugate of Power














\(\ds \)

\(=\)







\(\ds x \circ e \circ x^{-1}\)




















\(\ds \)

\(=\)







\(\ds x \circ x^{-1}\)




















\(\ds \)

\(=\)







\(\ds e\)










Thus $\order {x \circ a \circ x^{-1} } \le \order a$.

Now suppose $a^n = y, y \ne e$.
Then:

$x \circ a^n \circ x^{-1} = x \circ y \circ x^{-1}$
If $x \circ y = e$, then:

$x \circ a^n \circ x^{-1} = x^{-1}$
If $y \circ x^{-1} = e$, then:

$x \circ a^n \circ x^{-1} = x$
So:

$a^n \ne e \implies x \circ a^n \circ x^{-1} = \paren {x \circ a \circ x^{-1} }^n \ne e$
Thus:

$\order {x \circ a \circ x^{-1} } \ge \order a$
and the result follows.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 8$: The Order (Period) of an Element: $\text{(iii)}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 41 \gamma$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $12$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Exercise $7$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Proposition $10.18$




