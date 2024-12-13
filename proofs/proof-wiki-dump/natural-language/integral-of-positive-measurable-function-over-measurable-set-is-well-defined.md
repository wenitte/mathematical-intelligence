# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Measurable_Function_over_Measurable_Set_is_Well-Defined

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $A \in \Sigma$. 
Let $f : X \to \overline \R$ be a positive $\Sigma$-measurable function.

Then the $\mu$-integral of $f$ over $A$ defined by: 

$\ds \int_A f \rd \mu = \int \paren {\chi_A \cdot f} \rd \mu$
is well-defined. 


Proof
We simply need to show that: 

$\chi_A \cdot f$ is a positive $\Sigma$-measurable function.
For $x \in A$, we have: 














\(\ds \map {\paren {\chi_A \cdot f} } x\)

\(=\)







\(\ds \map {\chi_A} x \map f x\)





Definition of Pointwise Multiplication














\(\ds \)

\(=\)







\(\ds \map f x\)





Definition of Characteristic Function of Set














\(\ds \)

\(\ge\)







\(\ds 0\)









For $x \in X \setminus A$, we have:














\(\ds \map {\paren {\chi_A \cdot f} } x\)

\(=\)







\(\ds \map {\chi_A} x \map f x\)





Definition of Pointwise Multiplication














\(\ds \)

\(=\)







\(\ds 0\)





Definition of Characteristic Function of Set



so:

$\chi_A \cdot f$ is non-negative.
We now show that $\chi_A \cdot f$ is $\Sigma$-measurable.
From Characteristic Function Measurable iff Set Measurable, we have: 

$\chi_A$ is $\Sigma$-measurable.
From Pointwise Product of Measurable Functions is Measurable, we then have: 

$\chi_A \cdot f$ is $\Sigma$-measurable.
So:

$\chi_A \cdot f$ is a positive $\Sigma$-measurable function.
So its $\mu$-integral is well-defined.
$\blacksquare$





