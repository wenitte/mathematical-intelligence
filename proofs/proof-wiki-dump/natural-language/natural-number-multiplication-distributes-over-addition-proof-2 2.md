# 

Source: https://proofwiki.org/wiki/Natural_Number_Multiplication_Distributes_over_Addition/Proof_2



Theorem
The operation of multiplication is distributive over addition on the set of natural numbers $\N$:

$\forall x, y, z \in \N:$
$\paren {x + y} \times z = \paren {x \times z} + \paren {y \times z}$
$z \times \paren {x + y} = \paren {z \times x} + \paren {z \times y}$


Proof
We are to show that:

$\forall x, y, z \in \N: \paren {x + y} \times z = \paren {x \times z} + \paren {y \times z}$

From the definition of natural number multiplication, we have by definition that:










\(\ds \forall m, n \in \N: \, \)



\(\ds m \times 0\)

\(=\)







\(\ds 0\)




















\(\ds m \times n^+\)

\(=\)







\(\ds \paren {m \times n} + m\)










Let $x, y \in \N$ be arbitrary.
For all $z \in \N$, let $\map P z$ be the proposition:

$\forall x, y \in \N: \paren {x + y} \times z = \paren {x \times z} + \paren {y \times z}$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \paren {x + y} \times 0\)

\(=\)







\(\ds 0\)





Definition of Natural Number Multiplication‎














\(\ds \)

\(=\)







\(\ds 0 + 0\)





Definition of Natural Number Addition














\(\ds \)

\(=\)







\(\ds x \times 0 + y \times 0\)





Definition of Natural Number Multiplication‎



and so $\map P 0$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k^+}$ is true.

So this is our induction hypothesis:

$\forall x, y \in \N: \paren {x + y} \times k = \paren {x \times k} + \paren {y \times k}$

Then we need to show:

$\forall x, y \in \N: \paren {x + y} \times k^+ = \paren {x \times k^+} + \paren {y \times k^+}$


Induction Step
This is our induction step:















\(\ds \paren {x + y} \times k^+\)

\(=\)







\(\ds \paren {x + y} \times k + \paren {x + y}\)





Definition of Natural Number Multiplication‎














\(\ds \)

\(=\)







\(\ds \paren {x \times k} + \paren {y \times k} + \paren {x + y}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\paren {x \times k} + x} + \paren {\paren {y \times k} + y}\)





Natural Number Addition is Commutative and Associative














\(\ds \)

\(=\)







\(\ds \paren {x \times k^+} + \paren {y \times k^+}\)





Definition of Natural Number Multiplication



So $\map P k \implies \map P {k^+}$ and the result follows by the Principle of Mathematical Induction:

$\forall x, y, z \in \N: \paren {x + y} \times n = \paren {x \times z} + \paren {y \times z}$
$\Box$

Next we need to show that:

$\forall x, y, z \in \N: z \times \paren {x + y} = \paren {z \times x} + \paren {z \times y}$
So:














\(\ds z \times \paren {x + y}\)

\(=\)







\(\ds \paren {x + y} \times z\)





Natural Number Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds \paren {x \times z} + \paren {y \times z}\)





from above














\(\ds \)

\(=\)







\(\ds \paren {z \times x} + \paren {z \times y}\)





Natural Number Multiplication is Commutative



Thus we have proved:

$\forall x, y, z \in \N: z \times \paren {x + y} = \paren {z \times x} + \paren {z \times y}$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic




