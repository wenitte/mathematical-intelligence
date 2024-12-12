# 

Source: https://proofwiki.org/wiki/Condition_for_Increasing_Binomial_Coefficients



Theorem
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.
Let $\dbinom n k$ denote a binomial coefficient for $k \in \N$.

Then:

$\dbinom n k < \dbinom n {k + 1} \iff 0 \le k < \dfrac {n - 1} 2$


Proof 1













\(\ds \dbinom n k\)

\(<\)







\(\ds \dbinom n {k + 1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {n!} {\paren {n - k}! k!}\)

\(<\)







\(\ds \frac {n!} {\paren {n - k - 1}! \paren {k + 1}!}\)





Definition of Binomial Coefficient








\(\ds \leadstoandfrom \ \ \)





\(\ds k + 1\)

\(<\)







\(\ds n - k\)





Multiplying both sides by $\dfrac {\paren {n - k}! \paren {k + 1}!} {n!}$








\(\ds \leadstoandfrom \ \ \)





\(\ds 2 k\)

\(<\)







\(\ds n - 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds k\)

\(<\)







\(\ds \frac {n - 1} 2\)









$\blacksquare$


Proof 2
The proof proceeds by induction on $n$.
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\dbinom n k < \dbinom n {k + 1} \iff 0 \le k < \dfrac {n - 1} 2$

First we investigate the edge case.
Let $n = 1$.
Then we have:














\(\ds \dbinom 1 0\)

\(=\)







\(\ds 1\)





Binomial Coefficient with Zero














\(\ds \dbinom 1 1\)

\(=\)







\(\ds 1\)





Binomial Coefficient with Self



Thus we see:

there are no $k$ such that $0 \le k < \dfrac {1 - 1} 2 = 0$
and:

there are no $k$ such that $\dbinom 1 k < \dbinom 1 {k + 1}$
Thus $\map P 1$ is seen to hold.


Basis for the Induction
Let $n = 2$.
Then we have:














\(\ds \dbinom 2 0\)

\(=\)







\(\ds 1\)





Binomial Coefficient with Zero














\(\ds \dbinom 2 1\)

\(=\)







\(\ds 2\)





Binomial Coefficient with One














\(\ds \dbinom 2 2\)

\(=\)







\(\ds 1\)





Binomial Coefficient with Self



Thus we see:

there is one $k$ such that $0 \le k < \dfrac {2 - 1} 2 = \dfrac 1 2$, and that is $k = 0$
and:

$\dbinom 2 k < \dbinom 2 {k + 1}$ holds for exactly $k = 0$.
Thus $\map P 2$ is seen to hold.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\dbinom r k < \dbinom r {k + 1} \iff 0 \le k < \dfrac {r - 1} 2$

from which it is to be shown that:

$\dbinom {r + 1} k < \dbinom {r + 1} {k + 1} \iff 0 \le k < \dfrac r 2$


Induction Step
This is the induction step:














\(\ds \dbinom {r + 1} k\)

\(=\)







\(\ds \dbinom r k + \dbinom r {k - 1}\)





Pascal's Rule














\(\ds \)

\(<\)







\(\ds \dbinom r k + \dbinom r k\)

\(\ds \iff 0 \le {k - 1} < \dfrac {r - 1} 2\)



Induction Hypothesis














\(\ds \)

\(<\)







\(\ds \dbinom r {k + 1} + \dbinom r k\)

\(\ds \iff 0 \le {k - 1} < \dfrac {r - 1} 2 \text { and } 0 \le k < \dfrac {r - 1} 2\)



Induction Hypothesis














\(\ds \)

\(<\)







\(\ds \dbinom r {k + 1} + \dbinom r k\)

\(\ds \iff 0 \le k < \dfrac {r - 1} 2\)


















\(\ds \)

\(=\)







\(\ds \dbinom {r + 1} {k + 1}\)

\(\ds \iff 0 \le k < \dfrac {r - 1} 2\)



Pascal's Rule




This needs considerable tedious hard slog to complete it.In particular: Can't get my head round the inequalities on $k$, needs more thoughtTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{> 0}: \dbinom n k < \dbinom n {k + 1} \iff 0 \le k < \dfrac {n - 1} 2$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.2$ The Binomial Theorem: Problems $1.2$: $1 \ \text{(a)}$




