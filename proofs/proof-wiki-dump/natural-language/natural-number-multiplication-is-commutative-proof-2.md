# 

Source: https://proofwiki.org/wiki/Natural_Number_Multiplication_is_Commutative/Proof_2



Theorem
The operation of multiplication on the set of natural numbers $\N$ is commutative:

$\forall x, y \in \N: x \times y = y \times x$


Proof
Proof by induction:

From the definition of natural number multiplication, we have that:










\(\ds \forall m, n \in \N: \, \)



\(\ds m \times 0\)

\(=\)







\(\ds 0\)




















\(\ds m \times n^+\)

\(=\)







\(\ds \paren {m \times n} + m\)










For all $n \in \N$, let $\map P n$ be the proposition:

$\forall m \in \N: m \times n = n \times m$


Basis for the Induction
From Zero is Zero Element for Natural Number Multiplication:

$\forall m \in \N: m \times 0 = 0 = 0 \times m$
Thus $\map P 0$ is seen to be true.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k^+}$ is true.

So this is our induction hypothesis $\map P k$:

$\forall m \in \N: m \times k = k \times m$

Then we need to show that $\map P {k^+}$ follows from $\map P k$:

$\forall m \in \N: m \times k^+ = k^+ \times m$


Induction Step
This is our induction step:















\(\ds m \times k^+\)

\(=\)







\(\ds \paren {m \times k} + m\)





Definition of Natural Number Multiplication














\(\ds \)

\(=\)







\(\ds m + \paren {m \times k}\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds m + \paren {k \times m}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds k^+ \times m\)





Natural Number Multiplication Distributes over Addition



So $\map P k \implies \map P {k^+}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n \in \N: m \times n = n \times m$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic




