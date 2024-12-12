# 

Source: https://proofwiki.org/wiki/Attractor/Examples/Origin_under_Complex_Square_Function

Example of Attractor
Consider the complex function $f: \C \to \C$ defined as:

$\forall z \in \C: \map f z = z^2$
Then the origin $\tuple {0, 0}$ of the Argand plane is an attractor.


Proof
Consider the set of points in the open (complex) disk with the center at the origin $\tuple {0, 0}$ and radius $1$ which is the set:

$\map B {0, 1} = \set {z \in \C: \cmod z < 1}$

All of these points can be described in exponential form:














\(\ds z\)

\(=\)







\(\ds r e^{i \theta}\)





Definition of Polar Form of Complex Number 














\(\ds \)

\(=\)







\(\ds e^{\ln r} e^{i \theta}\)





Exponential of Natural Logarithm














\(\ds \)

\(=\)







\(\ds e^{\ln r + i \theta}\)





Exponential of Sum



Since $\cmod z < 1$ and from Modulus of Exponential is Exponential of Real Part, then $\cmod r < 1$.

Applying our squaring complex function to any of the points in this set, we obtain:














\(\ds \map f z\)

\(=\)







\(\ds \paren {e^{\ln r + i \theta} }^2\)




















\(\ds \)

\(=\)







\(\ds \paren {e^{2 \ln r + 2 i \theta} }\)





Exponential of Product



Applying our squaring complex function to any of the points in this set $n$ times, we obtain:














\(\ds \map f {\map f {\cdots \map f z} }\)

\(=\)







\(\ds \paren {e^{\ln r + i \theta} }^{2^n}\)




















\(\ds \)

\(=\)







\(\ds \paren {e^{2^n \ln r + 2^n i \theta} }\)





Exponential of Product




Since $\cmod r < 1$ and from Natural Logarithm of 1 is 0 and Logarithm is Strictly Increasing, we know $\ln r < 0$.
Therefore, we have:

$\ds \lim_{n \mathop \to \infty} 2^n \ln r = -\infty$
From Exponential Tends to Zero and Infinity, we have:

$\ds \lim_{n \mathop \to \infty} \paren {e^{2^n \ln r + 2^n i \theta} } = 0$
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): chaos
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): chaos




