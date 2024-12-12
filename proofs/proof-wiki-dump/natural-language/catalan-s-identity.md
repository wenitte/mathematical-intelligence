# 

Source: https://proofwiki.org/wiki/Catalan%27s_Identity



Theorem
Let $F_k$ be the $k$th Fibonacci number.

Then:

${F_n}^2 - F_{n - r} F_{n + r} = \left({-1}\right)^{n - r} {F_r}^2$


Proof 1
From the definition of Fibonacci numbers:

$F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3$
By Honsberger's Identity:

$F_n = F_{n - r} F_{r - 1} + F_{n - r + 1} F_r$
Also:














\(\ds F_{n + r}\)

\(=\)







\(\ds F_{n - r} F_{2 r - 1} + F_{n - r + 1} F_{2 r}\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds F_{n - r} \paren {F_{r - 1}^2 + {F_r}^2} + F_{n - r + 1} \paren {F_{r - 1} F_r + F_r F_{r + 1} }\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds F_{n - r} \paren { {F_{r - 1} }^2 + {F_r}^2} + F_{n - r + 1} \paren {F_{r - 1} F_r + F_r \paren {F_{r - 1} + F_r} }\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_{n - r} \paren { {F_{r - 1} }^2 + {F_r}^2} + F_{n - r + 1} \paren {F_r \paren {F_{r - 1} + F_{r - 1} + F_r} }\)




















\(\ds \)

\(=\)







\(\ds F_{n - r} \paren { {F_{r - 1} }^2 + {F_r}^2} + F_{n - r + 1} \paren {2 F_r F_{r - 1} + {F_r}^2}\)









Therefore:














\(\ds \)

\(\)







\(\ds F_n^2 - F_{n - r} F_{n + r}\)




















\(\ds \)

\(=\)







\(\ds \paren {F_{n - r} F_{r - 1} + F_{n - r + 1} F_r}^2 - F_{n - r} \paren {F_{n - r} \paren { {F_{r - 1} }^2 + {F_r}^2} + F_{n - r + 1} \paren {2 F_r F_{r - 1} + {F_r}^2} }\)





from above














\(\ds \)

\(=\)







\(\ds \paren { {F_{n - r + 1} }^2 {F_r}^2} - \paren { {F_{n - r} }^2 {F_r}^2 + F_{n - r} F_{n - r + 1} {F_r}^2}\)





Expansion and Simplification














\(\ds \)

\(=\)







\(\ds {F_r}^2 \paren { {F_{n - r + 1} }^2 - {F_{n - r} }^2 - F_{n - r} F_{n - r + 1} }\)




















\(\ds \)

\(=\)







\(\ds {F_r}^2 \paren {F_{n - r + 1} \paren {F_{n - r + 1} - F_{n - r} } - {F_{n - r} }^2}\)




















\(\ds \)

\(=\)







\(\ds {F_r}^2 \paren {F_{n - r  + 1} \paren {F_{n - r - 1} } - {F_{n-r} }^2}\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds {F_r}^2 \paren {-1}^{n - r}\)





Cassini's Identity














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r} {F_r}^2\)









$\blacksquare$


Proof 2
Proof by induction:
For all $n, r \in \N_{>0}$ where $n > r$, let $\map P {n, r}$ be the proposition:

${F_n}^2 - F_{n - r} F_{n + r} = \paren {-1}^{n - r} {F_r}^2$


Basis for the Induction
$n = 1$ yields no suitable $r$, so we look at $n = 2$ instead, which only gives us $r = 1$.
$\map P {2, 1}$ is true:

${F_2}^2 - F_3 F_1 = 1^2 - 2 \times 1 = -1 = -1 \times {F_1}^2$

$n = 3$ gives us only $r = 1$ and $r = 2$.
$\map P {3, 1}$ is true:

${F_3}^2 - F_2 F_4 = 2^2 - 1 \times 3 = 1 = 1 \times {F_1}^2$
$\map P {3, 2}$ is true:

${F_3}^2 - F_1 F_5 = 2^2 - 1 \times 5 = -1 = -1 \times {F_2}^2$
This is our basis for the induction.


First Induction Hypothesis
Now we need to show that, if $\map P {n, r}$ is true for all $r$, where $n > 3$, then it logically follows that $\map P {n + 1, r}$ is true for all $r$.

So this is our induction hypothesis:

$\forall r < n : {F_n}^2 - F_{n - r} F_{n + r} = \paren {-1}^{n - r} {F_r}^2$

Then we need to show:

$\forall r < n : {F_{n + 1} }^2 - F_{n - r + 1} F_{n + r + 1} = \paren {-1}^{n - r + 1} {F_r}^2$


Induction Step
This is our induction step:
It will again be a proof by induction.


Basis for the Induction
When $r = 1$:














\(\ds {F_{n + 1} }^2 - F_n F_{n + 2}\)

\(=\)







\(\ds {F_{n + 1} }^2 - F_n \paren {F_{n + 1} + F_n}\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds {F_{n + 1} }^2 - F_n F_{n + 1} - {F_n}^2\)




















\(\ds \)

\(=\)







\(\ds F_{n + 1} \paren {F_{n + 1} - F_n} - {F_n}^2\)




















\(\ds \)

\(=\)







\(\ds F_{n + 1} F_{n - 1} - {F_n}^2\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds \paren {-1} \paren {F_n^2 - F_{n - 1} F_{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1} \paren {-1}^{n - 1} {F_1}^2\)





First induction hypothesis














\(\ds \)

\(=\)







\(\ds \paren {-1}^n {F_1}^2\)









So $\map P {n + 1, 1}$ holds.
This is our basis for the induction.


Second Induction Hypothesis
Now we need to show that, if $\map P {n + 1, r}$ is true, where $2 < r < n$, then it logically follows that $\map P {n + 1, r + 1}$ is true.

So this is our second induction hypothesis:

${F_{n + 1} }^2 - F_{n - r + 1} F_{n + r + 1} = \paren {-1}^{n - r + 1} {F_r}^2$

Then we need to show:

${F_{n + 1} }^2 - F_{n - r} F_{n + r + 2} = \paren {-1}^{n - r} {F_{r + 1} }^2$


Induction Step
This is our induction step:














\(\ds {F_{n + 1} }^2 - F_{n - r} F_{n + r + 2}\)

\(=\)







\(\ds {F_{n + 1} }^2 - F_{n - r + 1} F_{n + r + 1} + F_{n - r + 1} F_{n + r + 1} - F_{n - r} F_{n + r + 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r + 1} {F_r}^2 + F_{n - r + 1} F_{n + r + 1} - F_{n - r} F_{n + r + 2}\)





Second induction hypothesis














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r + 1} {F_r}^2 + F_{n - r + 1} F_{n + r + 1} - F_{n - r} \paren {F_{n + r} + F_{n + r + 1} }\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r + 1} {F_r}^2 + \paren {F_{n - r + 1} - F_{n - r} } F_{n + r + 1} - F_{n - r} F_{n + r}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r + 1} {F_r}^2 + F_{n - r - 1} F_{n + r + 1} - F_{n - r} F_{n + r}\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r + 1} {F_r}^2 - F_{n - r} F_{n + r} + F_{n - r - 1} F_{n + r + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r + 1} {F_r}^2 + {F_n}^2 - F_{n - r} F_{n + r} - {F_n}^2 + F_{n - r - 1} F_{n + r + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r + 1} {F_r}^2 + \paren {-1}^{n - r} {F_r}^2 - \paren {-1}^{n - r + 1} {F_{r + 1} }^2\)





First induction hypothesis














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r + 1} {F_r}^2 + \paren {-1}^{n - r} {F_r}^2 + \paren {-1}^{n - r} {F_{r + 1} }^2\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r} \paren {- {F_r}^2 + {F_r}^2} + \paren {-1}^{n - r} {F_{r + 1} }^2\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r} {F_{r + 1} }^2\)









So $\map P {n + 1, r} \implies \map P {n + 1, r + 1}$ and the result follows by the Principle of Mathematical Induction.
So $\map P {n, r} \implies \map P {n + 1, r}$ and the result follows by the Principle of Mathematical Induction.
Therefore:

$F_n^2 - F_{n - r} F_{n + r} = \paren {-1}^{n - r} {F_r}^2$
$\blacksquare$


Also see
Cassini's Identity, the special case of this where $r = 1$


Source of Name
This entry was named for Eugène Charles Catalan.





