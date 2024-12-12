# 

Source: https://proofwiki.org/wiki/Factorial_Greater_than_Square_for_n_Greater_than_3



Theorem
Let $n \in \Z$ be an integer such that $n > 3$.

Then $n! > n^2$.


Proof
We note that:














\(\ds 1!\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds 1^2\)




















\(\ds 2!\)

\(=\)







\(\ds 2\)




















\(\ds \)

\(<\)







\(\ds 4\)




















\(\ds \)

\(=\)







\(\ds 2^2\)




















\(\ds 3!\)

\(=\)







\(\ds 6\)




















\(\ds \)

\(<\)







\(\ds 9\)




















\(\ds \)

\(=\)







\(\ds 3^2\)










The proof then proceeds by induction.

For all $n \in \Z_{\ge 4}$, let $\map P n$ be the proposition:

$n! > n^2$


Basis for the Induction
$\map P 4$ is the case:














\(\ds 4!\)

\(=\)







\(\ds 24\)




















\(\ds \)

\(>\)







\(\ds 16\)




















\(\ds \)

\(=\)







\(\ds 4^2\)









Thus $\map P 4$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 4$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$k! > k^2$

from which it is to be shown that:

$\paren {k + 1}! > \paren {k + 1}^2$


Induction Step
This is the induction step:














\(\ds \paren {k + 1}!\)

\(=\)







\(\ds \paren {k + 1} \times k!\)




















\(\ds \)

\(>\)







\(\ds \paren {k + 1} \times k^2\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {k - 2} \times k^2 + 2 \times k^2 + k^2\)




















\(\ds \)

\(>\)







\(\ds 1 + 2 \times k + k^2\)




















\(\ds \)

\(=\)







\(\ds \paren {k + 1}^2\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>3}: n! > n^2$
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.1$ Mathematical Induction: Problems $1.1$: $6$




