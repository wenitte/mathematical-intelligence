# 

Source: https://proofwiki.org/wiki/Faithful_Functor_Reflects_Monomorphisms

Theorem
Let $\mathbf C$ and $\mathbf D$ be categories.
Let $F: \mathbf C \to \mathbf D$ be a faithful functor.
Let $x$ and $y$ be objects in $\mathbf C$.
Let $f: x \to y$ be a morphism in $\mathbf C$.
Let $\map F f : \map F x \to \map F y$ be a monomorphism in $\mathbf D$.

Then $f$ is a monomorphism in $\mathbf C$.


Proof
Let $z$ be an object in $\mathbf C$.
Let $g: z \to x$ and $h: z \to x$ be morphisms in $\mathbf C$ such that $f \circ g = f \circ h$.














\(\ds f \circ g\)

\(=\)







\(\ds f \circ h\)














\(\ds \leadsto \ \ \)





\(\ds \map F f \circ \map F g\)

\(=\)







\(\ds \map F f \circ \map F h\)





Definition of Functor








\(\ds \leadsto \ \ \)





\(\ds \map F g\)

\(=\)







\(\ds \map F h\)





$\map F f$ is a monomorphism in $\mathbf D$








\(\ds \leadsto \ \ \)





\(\ds g\)

\(=\)







\(\ds h\)





Definition of Faithful Functor



Hence $f$ is a monomorphism in $\mathbf C$.
$\blacksquare$





