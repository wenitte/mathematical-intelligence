# 

Source: https://proofwiki.org/wiki/Integral_Operator_is_Linear



Theorem
Let $T$ be an integral operator.
Let $f$ and $g$ be integrable real functions on a domain appropriate to $T$.

Then $T$ is a linear operator:

$\forall \alpha, \beta \in \R: \map T {\alpha f + \beta g} = \alpha \map T f + \beta \map T g$


Corollary 1
$\forall \alpha, \beta \in \R: \map T {f + g} = \map T f + \map T g$


Corollary 2
$\forall \alpha \in \R: \map T {\alpha f} = \alpha \map T f$


Proof
Let $T$ be expressed in its full form as an integral fransform:

$\map T f := \ds \int_a^b \map f x \map K {p, x} \rd x$
for some integrable function $\map K {p, x}$.

Then:














\(\ds \map T {\alpha f + \beta g}\)

\(=\)







\(\ds \int_a^b \paren {\alpha \map f x + \beta \map g x} \map K {p, x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \paren {\alpha \map f x \map K {p, x} + \beta \map g x \map K {p, x} } \rd x\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \alpha \int_a^b \map f x \map K {p, x} \rd x + \beta \int_a^b \map g x \map K {p, x} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \alpha \map T f + \beta \, \map T g\)





Definition of Integral Operator



$\blacksquare$





