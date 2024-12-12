# 

Source: https://proofwiki.org/wiki/Complex-Differentiable_Function_is_Continuous/Proof_2

Theorem
Let $f: D \to \C$ be a complex function, where $D \subseteq \C$ is an open set.
Let $f$ be complex-differentiable at $a \in D$.

Then $f$ is continuous at $a$.


Proof
For each $z \in D$:














\(\ds \lim_{w \mathop \to z} \map f w\)

\(=\)







\(\ds \map f z + \lim_{w \mathop \to z} \paren {\map f w - \map f z}\)





Sum Rule for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \map f z + \lim_{w \mathop \to z} \paren {\frac {\map f w - \map f z} {w - z} \paren {w - z} }\)




















\(\ds \)

\(=\)







\(\ds \map f z + \lim_{w \mathop \to z} \frac {\map f w - \map f z} {w - z} \lim_{w \mathop \to z} \paren {w - z}\)





Product Rule for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \map f z + \map {f'} z \cdot 0\)





Definition of Complex-Differentiable Function














\(\ds \)

\(=\)







\(\ds \map f z\)










$\blacksquare$





