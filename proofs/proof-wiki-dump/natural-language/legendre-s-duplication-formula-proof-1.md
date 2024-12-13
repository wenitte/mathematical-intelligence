# 

Source: https://proofwiki.org/wiki/Legendre%27s_Duplication_Formula/Proof_1

Theorem
$\forall z \notin \set {-\dfrac n 2: n \in \N}: \map \Gamma z \map \Gamma {z + \dfrac 1 2} = 2^{1 - 2 z} \sqrt \pi \, \map \Gamma {2 z}$
where $\N$ denotes the natural numbers.


Proof
From the definition of the Beta function:














\(\ds \map \Beta {z_1, z_2}\)

\(=\)







\(\ds \frac {\map \Gamma {z_1} \map \Gamma {z_2} } {\map \Gamma {z_1 + z_2} }\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 u^{z_1 - 1} \paren {1 - u}^{z_2 - 1} \rd u\)





Equivalence of Definitions of Beta Function




Letting $z_1 = z_2 = z$ gives:














\(\ds \frac {\map \Gamma z \map \Gamma z} {\map \Gamma {2 z} }\)

\(=\)







\(\ds \int_0^1 u^{z - 1} \paren {1 - u}^{z - 1} \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_{-1}^1 \paren {\frac {1 + x} 2 }^{z - 1} \paren {\frac {1 - x} 2}^{z - 1} \rd x\)





Substitute $u = \dfrac {1 + x} 2$














\(\ds \)

\(=\)







\(\ds \frac 1 {2^{2 z - 1} } \int_{-1}^1 \paren {1 - x^2}^{z - 1} \rd x\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds 2^{2 z - 1} \map \Gamma z \map \Gamma z\)

\(=\)







\(\ds 2 \map \Gamma {2 z} \int_0^1 \paren {1 - x^2}^{z - 1} \rd x\)





by Definite Integral of Even Function




Now substituting $u = x^2$ into the Beta function:

$\ds \map \Beta {z_1, z_2} = \int_0^1 x^{2 z_1 - 2} \paren {1 - x^2}^{z_2 - 1} 2 x \rd x$
Letting $z_1 = \dfrac 1 2$ and $z_2 = z$ gives:

$(2): \quad \ds \map \Beta {\frac 1 2, z} = 2 \int_0^1 \paren {1 - x^2}^{z - 1} \rd x$

Combining results $(1)$ and $(2)$:














\(\ds 2^{2 z - 1} \map \Gamma z \map \Gamma z\)

\(=\)







\(\ds \map \Gamma {2 z} \map \Beta {\frac 1 2, z}\)




















\(\ds \)

\(=\)







\(\ds \map \Gamma {2 z} \frac {\map \Gamma {\frac 1 2} \map \Gamma z} {\map \Gamma {\frac 1 2 + z} }\)














\(\ds \leadsto \ \ \)





\(\ds \map \Gamma z \map \Gamma {z + \dfrac 1 2}\)

\(=\)







\(\ds 2^{1 - 2 z} \map \Gamma {\frac 1 2} \map \Gamma {2 z}\)









From Gamma Function of One Half:

$\map \Gamma {\dfrac 1 2} = \sqrt \pi$
It follows that:

$\map \Gamma z \map \Gamma {z + \dfrac 1 2} = 2^{1 - 2 z} \sqrt \pi \, \map \Gamma {2 z}$
$\blacksquare$





