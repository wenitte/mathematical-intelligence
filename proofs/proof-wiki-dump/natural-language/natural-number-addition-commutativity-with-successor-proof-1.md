# 

Source: https://proofwiki.org/wiki/Natural_Number_Addition_Commutativity_with_Successor/Proof_1



Theorem
Let $\N$ be the natural numbers.
Then:

$\forall m, n \in \N: m^+ + n = \paren {m + n}^+$


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

$\forall m \in \N: m^+ + n = \paren {m + n}^+$


Basis for the Induction
From definition of addition:










\(\ds \forall m \in \N: \, \)



\(\ds m^+ + 0\)

\(=\)







\(\ds m^+\)




















\(\ds \)

\(=\)







\(\ds \paren {m + 0}^+\)









Thus $\map P 0$ is seen to be true.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k^+}$ is true.

So this is our induction hypothesis $\map P k$:

$\forall m \in \N: m^+ + k = \paren {m + k}^+$

Then we need to show that $\map P {k^+}$ follows directly from $\map P k$:

$\forall m \in \N: m^+ + k^+ = \paren {m + k^+}^+$


Induction Step
This is our induction step:















\(\ds m^+ + k^+\)

\(=\)







\(\ds \paren {m^+ + k}^+\)





Definition of Addition














\(\ds \)

\(=\)







\(\ds \paren {\paren {m + k}^+}^+\)





induction hypothesis














\(\ds \)

\(=\)







\(\ds \paren {m + k^+}^+\)





Definition of Addition



So $\map P k \implies \map P {k^+}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n \in \N: m^+ + n = \paren {m + n}^+$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic




