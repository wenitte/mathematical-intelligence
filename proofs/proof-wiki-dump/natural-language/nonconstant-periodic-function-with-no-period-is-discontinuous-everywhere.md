# 

Source: https://proofwiki.org/wiki/Nonconstant_Periodic_Function_with_no_Period_is_Discontinuous_Everywhere

Theorem
Let $f$ be a real periodic function that does not have a period.
Then $f$ is either constant or discontinuous everywhere.


Proof
Let $f$ be a real periodic function that does not have a period.
Let $x \in \R$.
If there is no $y \in \R$ such that $\map f x \ne \map f y$, then the result is verified by Constant Function has no Period.
If $f$ is non-constant, then let $y$ be such a value.

Let $\LL_{f > 0}$ be the set of all positive periodic elements of $f$.
This set is non-empty by Absolute Value of Periodic Element is Peroidic.

It is seen that $<$ forms a right-total relation on $\LL_{f > 0}$, for if not then $f$ would have a period.
By the Axiom of Dependent Choice there must exist a strictly-decreasing sequence $\sequence {L_n}$ in $\LL_{f > 0}$.
Since this sequence is bounded below by zero, it follows via Monotone Convergence Theorem that this sequence converges.
Also, by Convergent Sequence is Cauchy Sequence the sequence is Cauchy.

Since $\sequence {L_n}$ is Cauchy, the sequence $\sequence {d_n}_{n \mathop \ge 1}$ formed by taking $d_n = L_n - L_{n - 1}$ is null.
From Combination of Periodic Elements it follows that $\sequence {d_n}_{n \mathop \ge 1}$ is contained in $\LL_{f > 0}$, for every $d_n$ is a periodic element of $f$.

Consider the sequence $\sequence {\paren {x - y} \bmod d_n}_{n \mathop \ge 1}$.
It is seen by Limit of Modulo Operation that this sequence is also null.
Let $\epsilon \in \R_{> 0}$ such that $\epsilon < \size {\map f x - \map f y}$.
For any $\delta \in \R_{> 0}$, there is a $n \in \N_{> 0}$ such that:














\(\ds \paren {x - y} \bmod d_n\)

\(=\)







\(\ds \paren {x - y} - d_n \floor {\frac {x - y} {d_n} }\)





Definition of Modulo Operation














\(\ds \)

\(=\)







\(\ds x - \paren {y + d_n \floor {\frac {x - y} {d_n} } }\)




















\(\ds \)

\(<\)







\(\ds \delta\)









But:














\(\ds \size {\map f x - \map f {y + d_n \floor {\frac {x - y} {d_n} } } }\)

\(=\)







\(\ds \size {\map f x - \map f y}\)





General Periodicity Property














\(\ds \)

\(>\)







\(\ds \epsilon\)









And so $f$ is not continuous at $x$.
But our choice of $x$ was completely arbitrary.
Hence the result.
$\blacksquare$


Axiom of Dependent Choice
This theorem depends on the Axiom of Dependent Choice.
Although not as strong as the Axiom of Choice, the Axiom of Dependent Choice is similarly independent of the Zermelo-Fraenkel axioms.
The consensus in conventional mathematics is that it is true and that it should be accepted.





