# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_Function/General_Result/Proof_2

Theorem
Let $a \in \R_{>0}$ be a constant such that $a \ne 1$.
Then:

$\ds \int a^x \rd x = \frac {a^x} {\ln a} + C$
where $C$ is an arbitrary constant.


Proof
Let $u = x \ln a$.














\(\ds \int a^x \rd x\)

\(=\)







\(\ds \int \map \exp {x \ln a} \rd x\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds \frac 1 {\ln a} \int \map \exp u \rd u\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac {\map \exp u} {\ln a} + C\)





Primitive of Exponential Function














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {x \ln a} } {\ln a} + C\)





Definition of $u$














\(\ds \)

\(=\)







\(\ds \frac {a^x} {\ln a} + C\)





Definition of Power to Real Number



$\blacksquare$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: Notes




