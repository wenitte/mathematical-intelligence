# 

Source: https://proofwiki.org/wiki/Kernel_Transformation_of_Measure_is_Measure



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $N: X \times \Sigma \to \overline \R_{\ge0}$ be a kernel.

Then $\mu N: X \to \overline \R$, the kernel transformation of $\mu$, is a measure.


Proof
From the definition of the kernel transformation of $\mu$, we have: 

$\ds \map {\paren {\mu N} } E = \int \map N {x, E} \rd \map \mu x$
for each $E \in \Sigma$. 
We verify each of the conditions for a measure in turn. 


Proof of $(1)$
Let $E \in \Sigma$. 
From the definition of a kernel, we have that: 

$x \mapsto \map N {x, E}$ is a positive $\Sigma$-measurable function.
From the definition of the $\mu$-integral of a positive $\Sigma$-measurable function, we have: 

$\ds \int \map N {x, E} \rd \map \mu x \ge 0$
So:

$\map {\paren {\mu N} } E \ge 0$
for each $E \in \Sigma$, verifying $(1)$. 
$\Box$

Proof of $(2)$
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint $\Sigma$-measurable sets. 
Then: 














\(\ds \map {\paren {\mu N} } {\bigcup_{n \mathop = 1}^\infty E_n}\)

\(=\)







\(\ds \int \map N {x, \bigcup_{n \mathop = 1}^\infty E_n} \rd \map \mu x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\sum_{n \mathop = 1}^\infty \map N {x, E_n} } \rd \map \mu x\)





since for each $x \in X$, $E \mapsto \map N {x, E}$ is a measure, we use countable additivity in the second argument














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\int \map N {x, E_n} \rd \map \mu x}\)





Integral of Series of Positive Measurable Functions














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\paren {\mu N} } {E_n}\)









So $\mu N$ is  countably additive, and we have $(2)$. 
$\Box$

Proof of $(3)$
We have: 














\(\ds \map {\paren {\mu N} } \O\)

\(=\)







\(\ds \int \map N {x, \O} \rd \map \mu x\)




















\(\ds \)

\(=\)







\(\ds \int 0 \rd \map \mu x\)





Empty Set is Null Set














\(\ds \)

\(=\)







\(\ds 0\)





Measurable Function Zero A.E. iff Absolute Value has Zero Integral














\(\ds \)

\(\in\)







\(\ds \R\)









So there exists $E \in \Sigma$ such that: 

$\map {\paren {\mu N} } E \in \R$
verifying $(3)$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 9$: Problem $11 \ \text{(i)}$




