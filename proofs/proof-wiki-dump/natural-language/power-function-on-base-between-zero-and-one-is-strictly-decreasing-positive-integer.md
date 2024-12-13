# 

Source: https://proofwiki.org/wiki/Power_Function_on_Base_between_Zero_and_One_is_Strictly_Decreasing/Positive_Integer



Theorem
Let $a \in \R$ be a real number such that $0 < a < 1$.
Let $f: \Z_{\ge 0} \to \R$ be the real-valued function defined as:

$\map f n = a^n$
where $a^n$ denotes $a$ to the power of $n$.

Then $f$ is strictly decreasing.


Proof
Proof by induction on $n$:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$a^{n + 1} < a^n$

$\map P 0$ is the case:














\(\ds a^1\)

\(=\)







\(\ds a\)





Definition of Integer Power














\(\ds \)

\(<\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds a^0\)





Definition of Integer Power





Basis for the Induction
$\map P 1$ is true, since:














\(\ds a\)

\(<\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds a \times a\)

\(<\)







\(\ds 1 \times a\)





Real Number Ordering is Compatible with Multiplication








\(\ds \leadsto \ \ \)





\(\ds a^2\)

\(<\)







\(\ds a^1\)





Definition of Integer Power




This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$a^{k + 1} < a^k$

Then we need to show:

$a^{k + 2} < a^{k + 1}$


Induction Step
This is our induction step:















\(\ds a^{k + 1}\)

\(<\)







\(\ds a^k\)





Induction Hypothesis








\(\ds \leadsto \ \ \)





\(\ds a \times a^{k + 1}\)

\(<\)







\(\ds a \times a^k\)





Real Number Ordering is Compatible with Multiplication








\(\ds \leadsto \ \ \)





\(\ds a^{k + 2}\)

\(<\)







\(\ds a^{k + 1}\)





Definition of Integer Power



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: a^{n + 1} < a^n$

Hence the result, by definition of strictly decreasing.
$\blacksquare$





