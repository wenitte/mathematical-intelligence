# 

Source: https://proofwiki.org/wiki/Derivative_of_Exponential_Function/Proof_5/Lemma

Theorem
For $x \in\ R$, let $\ceiling x$ denote the ceiling of $x$.

Then:

$\forall x \in \R : n \ge \ceiling {\size x} \implies \sequence {\dfrac n {n + x} \paren {1 + \dfrac x n}^n}$ is increasing.


Proof
First:














\(\ds n\)

\(>\)







\(\ds \ceiling {\size x}\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(>\)







\(\ds -x\)





Negative of Absolute Value and Real Number is between Ceiling Functions








\(\ds \leadsto \ \ \)





\(\ds \frac n {n + x}\)

\(>\)







\(\ds 0\)










Then:














\(\ds n\)

\(>\)

\(\, \ds \ceiling {\size x} \, \)





\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(>\)

\(\, \ds \size x \, \)





\(\ds \)





Real Number is between Ceiling Functions








\(\ds \leadsto \ \ \)





\(\ds \size {\frac x n}\)

\(<\)

\(\, \ds 1 \, \)





\(\ds \)





dividing both sides by $n$








\(\ds \leadsto \ \ \)





\(\ds -1\)

\(<\)

\(\, \ds \frac x n \, \)

\(\, \ds < \, \)



\(\ds 1\)





Negative of Absolute Value: Corollary 1








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)

\(\, \ds 1 + \frac x n \, \)





\(\ds \)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)

\(\, \ds \paren {1 + \frac x n}^n \, \)





\(\ds \)





Power of Positive Real Number is Positive: Natural Number




So, for $n \ge \ceiling {\size x}$:

$\sequence {\dfrac n {n + x} }$
and:

$\sequence {\paren {1 + \dfrac x n}^n}$
are positive.

Now let $n \ge \ceiling {\size x}$.

Suppose first that $x \in \R_{\ge 0}$.

Then:














\(\ds \frac n {n + x}\)

\(\le\)







\(\ds \frac {n + 1} {n + x + 1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds n \paren {n + x + 1}\)

\(\le\)







\(\ds \paren {n + 1} \paren {n + x}\)





Real Number Ordering is Compatible with Multiplication








\(\ds \leadstoandfrom \ \ \)





\(\ds n^2 + n x + n\)

\(\le\)







\(\ds n^2 + n x + n + x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 0\)

\(\le\)







\(\ds x\)










So $\sequence {\dfrac n {n + x} }$ is increasing.
Further, from Exponential Sequence is Eventually Increasing:

$\sequence {\paren {1 + \dfrac x n}^n}$ is increasing.

Hence, from Product of Positive Increasing Functions is Increasing:

$n \ge \ceiling {size x} \implies \sequence {\dfrac n {n + x} \paren {1 + \dfrac x n}^n}$ is increasing.

Suppose instead that $x \in \R_{<0}$.

Aiming for a contradiction, suppose:

$\sequence {\dfrac n {n + x} \sequence {1 + \dfrac x n}^n}$ is decreasing.
From above: $\sequence {1 + \dfrac x n} = \sequence {\dfrac {n + x} n}$ is decreasing.

Thus, from Product of Positive Increasing and Decreasing Functions is Decreasing:

$\sequence {\dfrac {n + x} n \dfrac n {n + x} \paren {1 + \dfrac x n}^n} = \sequence {\paren {1 + \dfrac x n}^n}$ is decreasing.
This contradicts Exponential Sequence is Eventually Increasing.

Hence the result, by Proof by Contradiction.
$\blacksquare$





