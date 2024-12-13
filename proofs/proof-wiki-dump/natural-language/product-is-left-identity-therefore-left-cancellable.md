# 

Source: https://proofwiki.org/wiki/Product_is_Left_Identity_Therefore_Left_Cancellable



Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $e_L \in S$  be a left identity of $S$.

Let $a \in S$ such that:

$\exists b \in S: b \circ a = e_L$
Then $a$ is left cancellable in $\struct {S, \circ}$.


Proof
Let $x, y \in S$ be arbitrary.

Then:














\(\ds a \circ x\)

\(=\)







\(\ds a \circ y\)





Semigroup Axiom $\text S 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds b \circ \paren {a \circ x}\)

\(=\)







\(\ds b \circ \paren {a \circ y}\)





Semigroup Axiom $\text S 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds \paren {b \circ a} \circ x\)

\(=\)







\(\ds \paren {b \circ a} \circ y\)





Semigroup Axiom $\text S 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds e_L \circ x\)

\(=\)







\(\ds e_L \circ y\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Definition of Left Identity



The result follows by definition of left cancellable.
$\blacksquare$


Also see
Product is Right Identity Therefore Right Cancellable


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.11$




