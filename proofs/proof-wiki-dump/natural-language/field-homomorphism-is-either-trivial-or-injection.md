# 

Source: https://proofwiki.org/wiki/Field_Homomorphism_is_either_Trivial_or_Injection



Theorem
Let $\struct {E, +_E, \times_E}$ and $\struct {F, +_F, \times_F}$ be fields.
Let $\phi: E \to F$ be a (field) homomorphism.

Then $\phi$ is either an injection or the trivial homomorphism.


Proof 1
This is an instance of Ring Homomorphism from Field is Monomorphism or Zero Homomorphism.
$\blacksquare$


Proof 2
Let $\phi: E \to F$ be a field homomorphism.
Suppose $\phi$ is not an injection.
So there must exist $a, b \in F: \map \phi a = \map \phi b$.
Let $k = a +_E \paren {-b}$.
Then:














\(\ds \map \phi k\)

\(=\)







\(\ds \map \phi {a +_E \paren {-b} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi a +_F \map \phi {-b}\)




















\(\ds \)

\(=\)







\(\ds \map \phi a +_F \paren {-\map \phi b}\)




















\(\ds \)

\(=\)







\(\ds 0_F\)





as $\map \phi a = \map \phi b$




As $a \ne b$ then $k \ne 0_E$ and so has a product inverse $\exists k^{-1} \in E$.
So for any $x \in E$ we can write $x = k \circ \paren {k^{-1} \circ x}$ and so:














\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi {k \times_E \paren {k^{-1} \times_E x} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi k \times_F \map \phi {k^{-1} \times_E x}\)




















\(\ds \)

\(=\)







\(\ds 0_F \times_F \map \phi {k^{-1} \times_E x}\)




















\(\ds \)

\(=\)







\(\ds 0_F\)









So if $\phi$ is not an injection, it is the trivial homomorphism.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $3$: Field Theory: Definition and Examples of Field Structure: $\S 87 \eta$




