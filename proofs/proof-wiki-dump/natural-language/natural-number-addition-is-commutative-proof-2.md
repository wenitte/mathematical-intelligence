# 

Source: https://proofwiki.org/wiki/Natural_Number_Addition_is_Commutative/Proof_2



Theorem
The operation of addition on the set of natural numbers $\N$ is commutative:

$\forall m, n \in \N: m + n = n + m$


Proof
Proof by induction.
Consider the natural numbers $\N$ defined as the elements of the minimally inductive st $\omega$.

From the definition of addition in $\omega$‎, we have that:










\(\ds \forall m, n \in \N: \, \)



\(\ds m + 0\)

\(=\)







\(\ds m\)




















\(\ds m + n^+\)

\(=\)







\(\ds \paren {m + n}^+\)










For all $n \in \N$, let $\map P n$ be the proposition:

$\forall m \in \N: m + n = n + m$


Basis for the Induction
From Natural Number Addition Commutes with Zero, we have:

$\forall m \in \N: m + 0 = m = 0 + m$
Thus $\map P 0$ is seen to be true.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k^+}$ is true.

So this is our induction hypothesis $\map P k$:

$\forall m \in \N: m + k = k + m$

Then we need to show that $\map P {k^+}$ follows directly from $\map P k$:

$\forall m \in \N: m + k^+ = k^+ + m$


Induction Step
This is our induction step:















\(\ds k^+ + m\)

\(=\)







\(\ds \paren {k + m}^+\)





Natural Number Addition Commutativity with Successor














\(\ds \)

\(=\)







\(\ds \paren {m + k}^+\)





from the induction hypothesis














\(\ds \)

\(=\)







\(\ds m + k^+\)





by definition



So $\map P k \implies \map P {k^+}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n \in \N: m + n = n + m$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic
1982: Alan G. Hamilton: Numbers, Sets and Axioms ... (previous) ... (next): $\S 1$: Numbers: $1.1$ Natural Numbers and Integers: Theorem $1.3$




