# 

Source: https://proofwiki.org/wiki/Identity_Property_in_Semigroup

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $s \in S$ be such that:

$\forall a \in S: \exists x, y \in S: s \circ x = a = y \circ s$

Then $\struct {S, \circ}$ has an identity.


Proof
Suppose that:

$\forall a \in S: \exists x, y \in S: s \circ x = a = y \circ s$.

Since $s \in S$, it follows that:

$\exists v, w \in S: s \circ v = s = w \circ s$.

Let $a \in S$.
Then:

$\exists x, y \in S: s \circ x = a = y \circ s$.

Thus:














\(\ds a\)

\(=\)







\(\ds s \circ x\)














\(\ds \leadsto \ \ \)





\(\ds w \circ a\)

\(=\)







\(\ds w \circ s \circ x\)




















\(\ds \)

\(=\)







\(\ds s \circ x\)




















\(\ds \)

\(=\)







\(\ds a\)
























\(\ds a\)

\(=\)







\(\ds y \circ s\)














\(\ds \leadsto \ \ \)





\(\ds a \circ v\)

\(=\)







\(\ds y \circ s \circ v\)




















\(\ds \)

\(=\)







\(\ds y \circ s\)




















\(\ds \)

\(=\)







\(\ds a\)










Hence:

$w \circ a = a$ and $a \circ v = a$
for any $a \in S$.

In particular:

Letting $a = v$ in the first of these gives $w \circ v = v$
Letting $a = w$ in the second gives $w \circ v = w$.

Thus $v = w \circ v = w$ is the identity element in $S$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Exercise $4.10$




