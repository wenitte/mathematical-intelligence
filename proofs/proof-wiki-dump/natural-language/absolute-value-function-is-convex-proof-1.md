# 

Source: https://proofwiki.org/wiki/Absolute_Value_Function_is_Convex/Proof_1

Theorem
Let $f: \R \to \R$ be the absolute value function on the real numbers.

Then $f$ is convex.


Proof
Let $x_1, x_2, x_3 \in \R$ such that $x_1 < x_2 < x_3$.
Consider the expressions:

$\dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}$
$\dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}$

The following cases are investigated:


$(1): \quad x_1, x_2, x_3 < 0$:
Then:














\(\ds \frac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)

\(=\)







\(\ds \frac {-\paren {x_2 - x_1} } {x_2 - x_1}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds -1\)




















\(\ds \frac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)

\(=\)







\(\ds \frac {-\paren {x_3 - x_2} } {x_3 - x_2}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds -1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)

\(\le\)







\(\ds \frac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)





Definition of Convex Real Function





$(2): \quad x_1, x_2, x_3 > 0$:
Then:














\(\ds \frac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)

\(=\)







\(\ds \frac {x_2 - x_1} {x_2 - x_1}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \frac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)

\(=\)







\(\ds \frac {x_3 - x_2} {x_3 - x_2}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)

\(\le\)







\(\ds \frac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)





Definition of Convex Real Function





$(3): \quad x_1 < 0, x_2, x_3 > 0$:













\(\ds \frac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)

\(=\)







\(\ds \frac {x_2 - \paren {-x_1} } {x_2 - x_1}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \frac {\paren {x_2 + x_1} + \paren {x_1 - x_1} } {x_2 - x_1}\)




















\(\ds \)

\(=\)







\(\ds \frac {x_2 - x_1} {x_2 - x_1} + \frac {2 x_1} {x_2 - x_1}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac {2 x_1} {x_2 - x_1}\)




















\(\ds \)

\(<\)







\(\ds 1\)





as $2 x_1 < 0$














\(\ds \frac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)

\(=\)







\(\ds \frac {x_3 - x_2} {x_3 - x_2}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)

\(\le\)







\(\ds \frac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)





Definition of Convex Real Function





$(4): \quad x_1, x_2 < 0, x_3 > 0$:













\(\ds \frac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)

\(=\)







\(\ds \frac {-\paren {x_2 - x_1} } {x_2 - x_1}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds -1\)




















\(\ds \frac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)

\(=\)







\(\ds \frac {x_3 - \paren {-x_2} } {x_3 - x_3}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \frac {x_3 + x_2 + \paren {x_3 - x_3} } {x_3 - x_2}\)




















\(\ds \)

\(=\)







\(\ds \frac {-x_3 + x_2 + x_3 + x_3} {x_3 - x_2}\)




















\(\ds \)

\(=\)







\(\ds \frac {-\paren {x_3 - x_2} } {x_3 - x_2} + \frac {2 x_3} {x_3 - x_2}\)




















\(\ds \)

\(=\)







\(\ds -1 + \frac {2 x_3} {x_3 - x_2}\)




















\(\ds \)

\(>\)







\(\ds -1\)





as $2 x_3 > 0$








\(\ds \leadsto \ \ \)





\(\ds \frac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)

\(\le\)







\(\ds \frac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)





Definition of Convex Real Function



Thus for all cases, the condition for $f$ to be convex is fulfilled.
Hence the result.
$\blacksquare$





