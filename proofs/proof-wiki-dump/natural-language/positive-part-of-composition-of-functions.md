# 

Source: https://proofwiki.org/wiki/Positive_Part_of_Composition_of_Functions

Theorem
Let $\struct {X, \Sigma}$ and $\struct {X', \Sigma'}$ be measurable spaces.
Let $T : X \to X'$ be a $\Sigma/\Sigma'$-measurable mapping.
Let $f : X' \to \overline \R$ be a function.

Then: 

$\paren {f \circ T}^+ = f^+ \circ T$
where $\paren {f \circ T}^+$ denotes the positive part of $f \circ T$.


Proof
Let $x \in X$ be such that $\map {\paren {f \circ T} } x = \map f {\map T x} \ge 0$.
Then $\map f {\map T x} = \map {f^+} {\map T x}$ by the definition of the positive part. 
So:














\(\ds \map {\paren {f \circ T}^+} x\)

\(=\)







\(\ds \map {\paren {f \circ T} } x\)





Definition of Positive Part














\(\ds \)

\(=\)







\(\ds \map f {\map T x}\)




















\(\ds \)

\(=\)







\(\ds \map {f^+} {\map T x}\)









Now let $x \in X$ be such that $\map {\paren {f \circ T} } x = \map f {\map T x} < 0$.
Then $\map {f^+} {\map T x} = 0$ and $\map {\paren {f \circ T}^+} x = 0$ by the definition of the positive part.
So: 

$\map {\paren {f \circ T}^+} x = \map {\paren {f^+ \circ T} } x$
for all $x \in X$.
$\blacksquare$





