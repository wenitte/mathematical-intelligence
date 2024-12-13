# 

Source: https://proofwiki.org/wiki/Midpoint-Convex_Function_is_Rational_Convex



Theorem
Let $I$ be a non-empty real interval.
Let $f: I \to \R$ be a real function.

If $f$ is midpoint-convex, then $f$ is rational-convex. 


Proof
It suffices to show that for each $n \in \N$ and for any choice of $n$ elements $x_1, \dots, x_n \in I$:














\(\ds \map f {\frac {x_1 + \dots + x_n} n}\)

\(\leq\)







\(\ds \frac {\map f {x_1} + \dots + \map f {x_n} } n\)









via Forward-Backward Induction.


Basis for the Induction
The statement holds:

for $n = 0$ vacuously
for $n = 1$ as $\map f {\dfrac x 1} = \dfrac {\map f x} 1$ for each $x \in I$.

Let $x_1, x_2$ be two points in $I$.
Then as $f$ is midpoint-convex:














\(\ds \map f {\frac {x_1 + x_2} {2^1} }\)

\(\le\)







\(\ds \frac {\map f {x_1} + \map f {x_2} } {2^1}\)









This is the basis for the induction.


Induction Hypothesis
Suppose that if $n = 2^k$, then for any choice $x_1, \dots, x_n$ of $n$ elements in $I$, we have:














\(\ds \map f {\frac {x_1 + \dots + x_n} {2^k} }\)

\(\le\)







\(\ds \frac {\map f {x_1} + \dots + \map f {x_n} } {2^k}\)









This is the induction hypothesis.


Induction Step
This is the induction step:
Let $n = 2^{k + 1}$.
Let $x_1, \dots, x_n \in I$. 
Then:














\(\ds \map f {\frac {x_1 + \dots + x_{2^{k + 1} } } {2^{k + 1} } }\)

\(=\)







\(\ds \map f {\frac {\frac {x_1 + \dots + x_{2^k} } {2^k} + \frac {x_{2^k + 1} + \dots + x_{2^{k + 1} } } {2^k} } 2}\)




















\(\ds \)

\(\le\)







\(\ds \frac {\map f {\frac {x_1 + \dots + x_{2^k} } {2^k} } + \map f {\frac {x_{2^k + 1} + \dots + x_{2^{k + 1} } } {2^k} } } 2\)





as $f$ is midpoint-convex














\(\ds \)

\(\le\)







\(\ds \frac {\frac {\map f {x_1} + \dots + \map f {x_{2^k} } } {2^k} + \frac {\map f {x_{2^k + 1} } + \dots + \map f {x_{2^{k + 1} } } } {2^k} } 2\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \frac {\map f {x_1} + \dots + \map f {x_{2^{k + 1} } } } {2^{k + 1} }\)









which completes the Proof by Mathematical Induction for integers of the form $2^k$. 


Backward Step
Let $2^k \le n \le 2^{k + 1}$ for some integer $k$.
Let $x_1, \dots, x_n \in I$.
Defined $\overline x := \dfrac {x_1 + \dots + x_n} n$.
Then:














\(\ds \map f {\overline x}\)

\(=\)







\(\ds \map f {\frac {x_1 + \dots + x_n} n}\)




















\(\ds \)

\(=\)







\(\ds \map f {\frac {n \overline x + \paren {2^k - n} \overline x} {2^k} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\frac {x_1 + \dots + x_n + \paren {2^k - n} \overline x} {2^k} }\)




















\(\ds \)

\(\le\)







\(\ds \frac {\map f {x_1} + \dots + \map f {x_n} + \paren {2^k - n} \map f {\overline x} } {2^k}\)





from above



from which we obtain:














\(\ds \map f {\overline x}\)

\(=\)







\(\ds \map f {\frac {x_1 + \dots + x_n} n}\)




















\(\ds \)

\(\le\)







\(\ds \frac {\map f {x_1} + \dots + \map f {x_n} } n\)









completing the proof.
$\blacksquare$





