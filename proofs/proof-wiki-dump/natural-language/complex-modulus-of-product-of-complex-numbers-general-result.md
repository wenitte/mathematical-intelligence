# 

Source: https://proofwiki.org/wiki/Complex_Modulus_of_Product_of_Complex_Numbers/General_Result



Theorem
Let $z_1, z_2, \ldots, z_n \in \C$ be complex numbers.
Let $\cmod z$ be the modulus of $z$.

Then:

$\cmod {z_1 z_2 \cdots z_n} = \cmod {z_1} \cdot \cmod {z_2} \cdots \cmod {z_n}$


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $P \left({n}\right)$ be the proposition:

$\cmod {z_1 z_2 \cdots z_n} = \cmod {z_1} \cdot \cmod {z_2} \cdots \cmod {z_n}$

$P \left({1}\right)$ is trivially true:

$\cmod {z_1} = \cmod {z_1}$


Basis for the Induction
$P \left({2}\right)$ is the case:

$\cmod {z_1 z_2} = \cmod {z_1} \cdot \cmod {z_2}$
which has been proved in Complex Modulus of Product of Complex Numbers.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $P \left({k}\right)$ is true, where $k \ge 2$, then it logically follows that $P \left({k+1}\right)$ is true.

So this is our induction hypothesis:

$\cmod {z_1 z_2 \cdots z_k} = \cmod {z_1} \cdot \cmod {z_2} \cdots \cmod {z_k}$

Then we need to show:

$\cmod {z_1 z_2 \cdots z_{k + 1} } = \cmod {z_1} \cdot \cmod {z_2} \cdots \cmod {z_{k + 1} }$


Induction Step
This is our induction step:















\(\ds \cmod {z_1 z_2 \cdots z_{k + 1} }\)

\(=\)







\(\ds \cmod {\left({z_1 z_2 \cdots z_k}\right) z_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {z_1 z_2 \cdots z_k} \cdot \cmod {z_{k + 1} }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \cmod {z_1} \cdot \cmod {z_2} \cdots \cmod {z_k} \cdot \cmod {z_{k + 1} }\)





Induction Hypothesis




So $P \left({k}\right) \implies P \left({k + 1}\right)$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{>0}: \cmod {z_1 z_2 \cdots z_n} = \cmod {z_1} \cdot \cmod {z_2} \cdots \cmod {z_n}$
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Absolute Value: $1$




