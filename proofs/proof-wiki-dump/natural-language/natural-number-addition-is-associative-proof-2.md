# 

Source: https://proofwiki.org/wiki/Natural_Number_Addition_is_Associative/Proof_2



Theorem
The operation of addition on the set of natural numbers $\N$ is associative:

$\forall x, y, z \in \N: x + \paren {y + z} = \paren {x + y} + z$


Proof
Consider the von Neumann construction of natural numbers $\N$, as elements of the minimally inductive set $\omega$.
We are to show that:

$\paren {x + y} + n = x + \paren {y + n}$
for all $x, y, n \in \N$.

From the definition of addition, we have that:










\(\ds \forall m, n \in \N: \, \)



\(\ds m + 0\)

\(=\)







\(\ds m\)




















\(\ds m + n^+\)

\(=\)







\(\ds \paren {m + n}^+\)









Let $x, y \in \N$ be arbitrary.
For all $n \in \N$, let $\map P n$ be the proposition:

$\paren {x + y} + n = x + \paren {y + n}$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \paren {x + y} + 0\)

\(=\)







\(\ds x + y\)




















\(\ds \)

\(=\)







\(\ds x + \paren {y + 0}\)









and so $\map P 0$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, then it logically follows that $\map P {k^+}$ is true.

So this is our induction hypothesis:

$\paren {x + y} + k = x + \paren {y + k}$

Then we need to show:

$\paren {x + y} + \paren {k^+} = x + \paren {y + \paren {k^+} }$


Induction Step
This is our induction step:















\(\ds \paren {x + y} + k^+\)

\(=\)







\(\ds \paren {\paren {x + y} + k}^+\)





Definition of Addition in Minimally Inductive Set














\(\ds \)

\(=\)







\(\ds \paren {x + \paren {y + k} }^+\)





induction Hypothesis














\(\ds \)

\(=\)







\(\ds x + \paren {\paren {y + k}^+}\)





Definition of Addition in Minimally Inductive Set














\(\ds \)

\(=\)







\(\ds x + \paren {y + k^+}\)





Definition of Addition in Minimally Inductive Set



So $\map P k \implies \map P {k^+}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic




