# 

Source: https://proofwiki.org/wiki/Natural_Number_Multiplication_is_Associative/Proof_2



Theorem
The operation of multiplication on the set of natural numbers $\N$ is associative:

$\forall x, y, z \in \N: \paren {x \times y} \times z = x \times \paren {y \times z}$


Proof
We are to show that:

$\paren {x \times y} \times n = x \times \paren {y \times n}$
for all $x, y, n \in \N$.

From the definition of natural number multiplication, we have that:










\(\ds \forall m, n \in \N: \, \)



\(\ds m \times 0\)

\(=\)







\(\ds 0\)




















\(\ds m \times \paren {n + 1}\)

\(=\)







\(\ds \paren {m \times n} + m\)










Let $x, y \in \N$ be arbitrary.
For all $n \in \N$, let $\map P n$ be the proposition:

$\paren {x \times y} \times n = x \times \paren {y \times n}$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \paren {x \times y} \times 0\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds x \times 0\)




















\(\ds \)

\(=\)







\(\ds x \times \paren {y \times 0}\)









and so $\map P 0$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\paren {x \times y} \times k = x \times \paren {y \times k}$

Then we need to show:

$\paren {x \times y} \times \paren {k + 1} = x \times \paren {y \times \paren {k + 1} }$


Induction Step
This is our induction step:















\(\ds \paren {x \times y} \times \paren {k + 1}\)

\(=\)







\(\ds \paren {\paren {x \times y} \times k} + \paren {x \times y}\)





Definition of Natural Number Multiplication














\(\ds \)

\(=\)







\(\ds \paren {x \times \paren {y \times k} } + \paren {x \times y}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times \paren {y \times k} }\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds x \times \paren {y + \paren {y \times k} }\)





Natural Number Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds x \times \paren {\paren {y \times k} + y}\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds x \times \paren {y \times \paren {k + 1} }\)





Definition of Natural Number Multiplication



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic




