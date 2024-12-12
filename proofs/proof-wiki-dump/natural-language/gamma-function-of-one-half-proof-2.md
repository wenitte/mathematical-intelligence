# 

Source: https://proofwiki.org/wiki/Gamma_Function_of_One_Half/Proof_2

Theorem
$\map \Gamma {\dfrac 1 2} = \sqrt \pi$


Proof
From Euler's Reflection Formula:

$\forall z \notin \Z: \map \Gamma z \map \Gamma {1 - z} = \dfrac \pi {\map \sin {\pi z} }$
Setting $z = \dfrac 1 2$:














\(\ds \map \Gamma {\frac 1 2} \map \Gamma {\frac 1 2}\)

\(=\)







\(\ds \frac \pi {\map \sin {\frac \pi 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 1\)





Sine of Right Angle








\(\ds \leadsto \ \ \)





\(\ds \map \Gamma {\frac 1 2}\)

\(=\)







\(\ds \pm \sqrt \pi\)









By definition of the gamma function:

$\forall z \in \R_{\ge 0}: \map \Gamma z > 0$
and so the negative square root can be discarded.
Hence:

$\map \Gamma {\dfrac 1 2} = \sqrt \pi$
as required.
$\blacksquare$





