# 

Source: https://proofwiki.org/wiki/Primitive_of_Minus_One_plus_x_Squared_over_One_plus_Fourth_Power_of_x

Theorem
$\ds \int \frac {x^2 - 1} {x^4 + 1} \rd x = \frac 1 {2 \sqrt 2} \ln \size {\frac {x^2 - \sqrt 2 x + 1} {x^2 + \sqrt 2 x + 1} } + C$


Proof 1
We have:














\(\ds \int \frac {x^2 - 1} {x^4 + 1} \rd x\)

\(=\)







\(\ds \int \frac {1 - \frac 1 {x^2} } {x^2 + \frac 1 {x^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {1 - \frac 1 {x^2} } {\paren {x + \frac 1 x}^2 - 2} \rd x\)





Completing the Square



Note that, by Derivative of Power: 

$\dfrac \d {\d x} \paren {x + \dfrac 1 x} = 1 - \dfrac 1 {x^2}$
So, we have:














\(\ds \int \frac {1 - \frac 1 {x^2} } {\paren {x + \frac 1 x}^2 - 2} \rd x\)

\(=\)







\(\ds \int \frac 1 {u^2 - 2} \rd u\)





substituting $u = x + \dfrac 1 x$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \ln \size {\frac {u - \sqrt 2} {u + \sqrt 2} } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$: Logarithm Form














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \ln \size {\frac {x + \frac 1 x - \sqrt 2} {x + \frac 1 x + \sqrt 2} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \sqrt 2} \ln \size {\frac {x^2 - \sqrt 2 x + 1} {x^2 + \sqrt 2 x + 1} } + C\)









$\blacksquare$


Proof 2













\(\ds \int \frac {x^2 - 1} {x^4 + 1} \rd x\)

\(=\)







\(\ds \int \frac {x^2} {x^4 + 1} \rd x - \int \frac 1 {x^4 + 1} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac 1 {4 \sqrt 2} \map \ln {\frac {x^2 - x \sqrt 2 + 1} {x^2 + x \sqrt 2 + 1} } - \frac 1 {2 \sqrt 2} \paren {\map \arctan {1 - x \sqrt 2} - \map \arctan {1 + x \sqrt 2} }\)





Primitive of $\dfrac {x^2} {x^4 + a^4}$, setting $a = 1$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 {2 \sqrt 2} \paren {\map \arctan {\frac 1 {\sqrt 2} \paren {x - \frac 1 x} } + \frac 1 2 \ln \size {\frac {x^2 + \sqrt 2 x + 1} {x^2 - \sqrt 2 x + 1} } }\)





Primitive of $\dfrac 1 {1 + x^4}$




This needs considerable tedious hard slog to complete it.In particular: Resolve the arctangent equalityTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




