# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Measurable_Function_is_Monotone/Corollary

Corollary to Integral of Positive Measurable Function is Monotone
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g: X \to \overline \R$ be positive $\Sigma$-measurable functions.
Let $A \in \Sigma$.

Suppose that $f \le g$, where $\le$ denotes pointwise inequality.
Then:

$\ds \int_A f \rd \mu \le \int_A g \rd \mu$
where the integral sign denotes $\mu$-integration over $A$.

This can be summarized by saying that $\ds \int_A \cdot \rd \mu$ is monotone.


Proof
From the definition of $\mu$-integration over $A$, we have: 

$\ds \int_A f \rd \mu = \int \paren {\chi_A \times f} \rd \mu$
and:

$\ds \int_A g \rd \mu = \int \paren {\chi_A \times g} \rd \mu$

We show that: 

$f \times \chi_A \le g \times \chi_A$
If $x \in A$, we have: 














\(\ds \map {\paren {f \times \chi_A} } x\)

\(=\)







\(\ds \map f x \map {\chi_A} x\)





Definition of Pointwise Multiplication of Mappings














\(\ds \)

\(=\)







\(\ds \map f x\)





Definition of Characteristic Function of Set



and:














\(\ds \map {\paren {g \times \chi_A} } x\)

\(=\)







\(\ds \map g x \map {\chi_A} x\)





Definition of Pointwise Multiplication of Mappings














\(\ds \)

\(=\)







\(\ds \map g x\)





Definition of Characteristic Function of Set



So:

$\map {\paren {f \times \chi_A} } x \le \map {\paren {g \times \chi_A} } x$ for all $x \in A$.
Now take $x \in X \setminus A$. 
We have: 














\(\ds \map {\paren {f \times \chi_A} } x\)

\(=\)







\(\ds \map f x \map {\chi_A} x\)





Definition of Pointwise Multiplication of Mappings














\(\ds \)

\(=\)







\(\ds 0\)





Definition of Characteristic Function of Set



and:














\(\ds \map {\paren {g \times \chi_A} } x\)

\(=\)







\(\ds \map g x \map {\chi_A} x\)





Definition of Pointwise Multiplication of Mappings














\(\ds \)

\(=\)







\(\ds 0\)





Definition of Characteristic Function of Set



So:

$\map {\paren {f \times \chi_A} } x \le \map {\paren {g \times \chi_A} } x$ for all $x \in X \setminus A$
giving:

$f \times \chi_A \le g \times \chi_A$

From Integral of Positive Measurable Function is Monotone, we therefore have: 

$\ds \int \paren {f \times \chi_A} \rd \mu \le \int \paren {g \times \chi_A} \rd \mu$
From the definition of $\mu$-integration over $A$, we have: 

$\ds \int_A f \rd \mu \le \int_A g \rd \mu$
$\blacksquare$





