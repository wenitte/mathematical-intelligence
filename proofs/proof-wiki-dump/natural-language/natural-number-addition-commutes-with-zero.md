# 

Source: https://proofwiki.org/wiki/Natural_Number_Addition_Commutes_with_Zero



Theorem
Let $\N$ be the natural numbers.
Then:

$\forall n \in \N: 0 + n = n = n + 0$


Proof
Proof by induction:

From definition of addition:










\(\ds \forall m, n \in \N: \, \)



\(\ds m + 0\)

\(=\)







\(\ds m\)




















\(\ds m + n^+\)

\(=\)







\(\ds \paren {m + n}^+\)










For all $n \in \N$, let $\map P n$ be the proposition:

$0 + n = n = n + 0$


Basis for the Induction
By definition, we have:

$0 + 0 = 0 = 0 + 0$
Thus $\map P 0$ is seen to be true.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k^+}$ is true.

So this is our induction hypothesis $\map P k$:

$0 + k = k = k + 0$

Then we need to show that $\map P {k^+}$ follows directly from $\map P k$:

$0 + k^+ = k^+ = k^+ + 0$


Induction Step
This is our induction step:















\(\ds 0 + k^+\)

\(=\)







\(\ds \paren {0 + k}^+\)





Definition of Addition














\(\ds \)

\(=\)







\(\ds \paren {k + 0}^+\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds k^+\)





Definition of Addition: $k + 0 = k$



By definition:

$k^+ + 0 = k^+$
So $\map P k \implies \map P {k^+}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: 0 + n = n = n + 0$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic




