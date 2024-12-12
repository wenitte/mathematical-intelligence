# 

Source: https://proofwiki.org/wiki/Field_Norm_of_Complex_Number_is_not_Norm

Theorem
Let $\C$ denote the set of complex numbers.
Let $N: \C \to \R_{\ge 0}$ denote the field norm on complex numbers:

$\forall z \in \C: \map N z = \cmod z^2$
where $\cmod z$ denotes the complex modulus of $z$.

Then $N$ is not a norm on $\C$.


Proof
Proof by Counterexample:
Let $z_1 = z_2 = 1$.
Then:














\(\ds \map N {z_1 + z_2}\)

\(=\)







\(\ds \cmod {z_1 + z_2}^2\)





Definition of $N$














\(\ds \)

\(=\)







\(\ds 2^2\)




















\(\ds \)

\(=\)







\(\ds 4\)










But:














\(\ds \map N {z_1} + \map N {z_2}\)

\(=\)







\(\ds \cmod {z_1}^2 + \cmod {z_2}^2\)





Definition of $N$














\(\ds \)

\(=\)







\(\ds 1^2 + 1^2\)




















\(\ds \)

\(=\)







\(\ds 2\)










So we have that for these instances of $z_1$ and $z_2$:

$\map N {z_1 + z_2} > \map N {z_1} + \map N {z_2}$
and so the triangle inequality is not satisfied.
Hence by definition $N$ is not a norm on $\C$.
$\blacksquare$





