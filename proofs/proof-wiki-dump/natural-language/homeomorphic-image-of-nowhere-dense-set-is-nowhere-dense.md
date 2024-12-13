# 

Source: https://proofwiki.org/wiki/Homeomorphic_Image_of_Nowhere_Dense_Set_is_Nowhere_Dense

Theorem
Let $X$ and $Y$ be topological spaces.
Let $f : X \to Y$ be a homeomorphism.
Let $A$ be a nowhere dense subset of $X$.

Then $f \sqbrk A$ is a nowhere dense subset of $Y$.


Proof
Since $A$ is nowhere dense, we have:

$\paren {A^-}^\circ = \O$
where $A^-$ is the closure of $A$ and $\paren {A^-}^\circ$ is the interior of $A^-$.
From Image of Empty Set is Empty Set, we have:

$\O = f \sqbrk {\paren {A^-}^\circ}$
So, we have:














\(\ds f \sqbrk {\paren {A^-}^\circ}\)

\(=\)







\(\ds \paren {f \sqbrk {A^-} }^\circ\)





Image of Interior of Set under Homeomorphism is Interior of Image














\(\ds \)

\(=\)







\(\ds \paren {\paren {f \sqbrk A}^-}^\circ\)





Homeomorphism iff Image of Closure equals Closure of Image














\(\ds \)

\(=\)







\(\ds \O\)









Hence $f \sqbrk A$ is a nowhere dense subset of $Y$.
$\blacksquare$





