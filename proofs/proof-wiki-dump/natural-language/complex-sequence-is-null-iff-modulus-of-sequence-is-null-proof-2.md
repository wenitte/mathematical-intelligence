# 

Source: https://proofwiki.org/wiki/Complex_Sequence_is_Null_iff_Modulus_of_Sequence_is_Null/Proof_2

Theorem
Let $\sequence {z_n}_{n \mathop \in \N}$ be a complex sequence.

Then: 

$z_n \to 0$
if and only if:

$\cmod {z_n} \to 0$
That is: 

$\sequence {z_n}_{n \mathop \in \N}$ is a null sequence if and only if $\sequence {\cmod {z_n} }_{n \mathop \in \N}$ is a null sequence.


Proof
Observe:




\(\text {(1)}: \quad\)









\(\ds \cmod {z_n - 0}\)

\(=\)







\(\ds \cmod {z_n}\)




















\(\ds \)

\(=\)







\(\ds \cmod {z_n} - 0\)




















\(\ds \)

\(=\)







\(\ds \cmod {\cmod {z_n} - 0}\)









Therefore:














\(\ds \lim_{n \to \infty} z_n\)

\(=\)







\(\ds 0\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \exists N \in \R: \, \)



\(\ds n > N\)

\(\implies\)







\(\ds \cmod {z_n - 0} < \epsilon\)





Definition of Convergent Complex Sequence








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \exists N \in \R: \, \)



\(\ds n > N\)

\(\implies\)







\(\ds \cmod {\cmod {z_n} - 0} < \epsilon\)





from $\paren 1$








\(\ds \leadstoandfrom \ \ \)





\(\ds \lim _{n \to \infty} \cmod {z_n}\)

\(=\)







\(\ds 0\)





Definition of Convergent Complex Sequence



$\blacksquare$





