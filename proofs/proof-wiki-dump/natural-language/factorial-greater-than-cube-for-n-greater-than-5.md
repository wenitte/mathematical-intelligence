# 

Source: https://proofwiki.org/wiki/Factorial_Greater_than_Cube_for_n_Greater_than_5



Theorem
Let $n \in \Z$ be an integer such that $n > 5$.

Then $n! > n^3$.


Proof 1
We note that:














\(\ds 1!\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds 1^3\)




















\(\ds 2!\)

\(=\)







\(\ds 2\)




















\(\ds \)

\(<\)







\(\ds 8\)




















\(\ds \)

\(=\)







\(\ds 2^3\)




















\(\ds 3!\)

\(=\)







\(\ds 6\)




















\(\ds \)

\(<\)







\(\ds 27\)




















\(\ds \)

\(=\)







\(\ds 3^3\)




















\(\ds 4!\)

\(=\)







\(\ds 24\)




















\(\ds \)

\(<\)







\(\ds 64\)




















\(\ds \)

\(=\)







\(\ds 4^3\)




















\(\ds 5!\)

\(=\)







\(\ds 120\)




















\(\ds \)

\(<\)







\(\ds 125\)




















\(\ds \)

\(=\)







\(\ds 5^3\)










The proof then proceeds by induction.

For all $n \in \Z_{\ge 6}$, let $\map P n$ be the proposition:

$n! > n^3$


Basis for the Induction
$\map P 6$ is the case:














\(\ds 6!\)

\(=\)







\(\ds 720\)




















\(\ds \)

\(>\)







\(\ds 216\)




















\(\ds \)

\(=\)







\(\ds 6^3\)









Thus $\map P 6$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 6$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$k! > k^3$

from which it is to be shown that:

$\paren {k + 1}! > \paren {k + 1}^3$


Induction Step
This is the induction step:














\(\ds \paren {k + 1}!\)

\(=\)







\(\ds \paren {k + 1} \times k!\)




















\(\ds \)

\(>\)







\(\ds \paren {k + 1} \times k^3\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {k - 3} \times k^3 + 3 \times k^3 + k^3\)




















\(\ds \)

\(>\)







\(\ds 1 + 3 \times k + 3 \times k^2 + k^3\)




















\(\ds \)

\(=\)







\(\ds \paren {k + 1}^3\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>5}: n! > n^3$
$\blacksquare$


Proof 2
For $n > 5$, notice that the following inequalities hold:

$2 \paren {n - 1} = 2 n - 2 > n + 5 - 2 > n$
$3 \paren {n - 2} = 3 n - 6 > n + 10 - 6 > n$
And thus:














\(\ds n!\)

\(\ge\)







\(\ds n \paren {n - 1} \paren {n - 2} \paren {3!}\)




















\(\ds \)

\(=\)







\(\ds n \paren {2 \paren {n - 1} } \paren {3 \paren {n - 2} }\)




















\(\ds \)

\(>\)







\(\ds n \paren n \paren n\)




















\(\ds \)

\(=\)







\(\ds n^3\)









$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.1$ Mathematical Induction: Problems $1.1$: $6$




