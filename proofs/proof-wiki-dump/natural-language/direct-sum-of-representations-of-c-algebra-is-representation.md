# 

Source: https://proofwiki.org/wiki/Direct_Sum_of_Representations_of_C*-Algebra_is_Representation

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra. 
Let $\family {\tuple {\pi_i, \HH_i} }_{i \mathop \in I}$ be an $I$-index family of representations of $\struct {A, \ast, \norm {\, \cdot \,} }$.
Let:

$\ds \HH = \bigoplus_{i \mathop \in I} \HH_i$
be the Hilbert space direct sum of $\sequence {\struct {\HH_i, \innerprod \cdot \cdot_i} }_{i \mathop \in I}$ with norm $\norm {\, \cdot \,}_\HH$.
Let:

$\ds \pi = \bigoplus_{i \mathop \in I} \pi_i$
be the direct sum of $\family {\pi_i}_{i \mathop \in I}$. 

Then $\tuple {\pi, \HH}$ be a representation of $A$.


Proof
Let $a, b \in A$ and $\lambda \in \C$.














\(\ds \map \pi {a + \lambda b}\)

\(=\)







\(\ds \bigoplus_{i \mathop \in I} \map {\pi_i} {a + \lambda b}\)




















\(\ds \)

\(=\)







\(\ds \bigoplus_{i \mathop \in I} \paren {\map {\pi_i} a + \lambda \map {\pi_i} b}\)





$\pi_i$ is a linear transformation for each $i \in I$














\(\ds \)

\(=\)







\(\ds \bigoplus_{i \mathop \in I} \map {\pi_i} a + \lambda \bigoplus_{i \mathop \in I} \map {\pi_i} a\)





Linear Combination of Direct Sums of Bounded Linear Operators on Hilbert Space














\(\ds \)

\(=\)







\(\ds \map \pi a + \lambda \map \pi b\)









so $\pi$ is a linear transformation.
We also have:














\(\ds \map \pi {a b}\)

\(=\)







\(\ds \bigoplus_{i \mathop \in I} \map {\pi_i} {a b}\)




















\(\ds \)

\(=\)







\(\ds \bigoplus_{i \mathop \in I} \map {\pi_i} a \map {\pi_i} b\)





$\pi_i$ is an algebra homomorphism for each $i \in I$














\(\ds \)

\(=\)







\(\ds \paren {\bigoplus_{i \mathop \in I} \map {\pi_i} a} \paren {\bigoplus_{i \mathop \in I} \map {\pi_i} b}\)





Composition of Direct Sums of Bounded Linear Operators on Hilbert Space














\(\ds \)

\(=\)







\(\ds \map \pi a \map \pi b\)









Hence $\pi$ is an algebra homomorphism.
We also have:














\(\ds \paren {\map \pi a}^\ast\)

\(=\)







\(\ds \paren {\bigoplus_{i \mathop \in I} \map {\pi_i} a}^\ast\)




















\(\ds \)

\(=\)







\(\ds \bigoplus_{i \mathop \in I} \paren {\map {\pi_i} a}^\ast\)





Adjoint of Direct Sum of Bounded Linear Operators on Hilbert Space














\(\ds \)

\(=\)







\(\ds \bigoplus_{i \mathop \in I} \map {\pi_i} {a^\ast}\)





$\pi_i$ is an algebra homomorphism for each $i \in I$














\(\ds \)

\(=\)







\(\ds \map \pi {a^\ast}\)









so $\pi$ is a $\ast$-algebra homomorphism.
Finally, if $A$ is unital, we have:














\(\ds \map \pi { {\mathbf 1}_A}\)

\(=\)







\(\ds \bigoplus_{i \mathop \in I} \map {\pi_i} { {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds \bigoplus_{i \mathop \in I} I_{\map B {\HH_i} }\)





Definition of Representation of C*-Algebra














\(\ds \)

\(=\)







\(\ds I_{\map B \HH}\)





Direct Sum of Identity Operators on Hilbert Spaces is Identity Operator



Hence $\tuple {\pi, \HH}$ is a representation of $A$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {VIII}.5.7$




