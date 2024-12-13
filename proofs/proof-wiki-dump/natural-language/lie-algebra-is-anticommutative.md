# 

Source: https://proofwiki.org/wiki/Lie_Algebra_is_Anticommutative

Theorem
Let $L$ be a Lie algebra.
Then $L$ is anticommutative:

$\forall a, b \in L: \sqbrk {a, b} = -\sqbrk {b, a}$
where $\sqbrk {\, \cdot, \cdot \,}$ denotes the bilinear mapping over $L$.


Proof













\(\ds \sqbrk {a + b, a + b}\)

\(=\)







\(\ds \sqbrk {a, a + b} + \sqbrk {b, a + b}\)





Definition of Bilinear Mapping








\(\ds \leadsto \ \ \)





\(\ds \sqbrk {a + b, a + b}\)

\(=\)







\(\ds \sqbrk {a, a} + \sqbrk {a, b} + \sqbrk{b, a} + \sqbrk {b, b}\)





Definition of Bilinear Mapping








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \sqbrk {a, b} + \sqbrk {b, a}\)





Lie Algebra Axiom $\text L 1$: Alternativity








\(\ds \leadsto \ \ \)





\(\ds \sqbrk {a, b}\)

\(=\)







\(\ds -\sqbrk {b, a}\)









$\blacksquare$


Notes

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
The converse, that in a bilinear context anticommutativity implies $[x,x]=0$, is not quite true; however, the only exceptions occur when the vector space underlying the Lie algebra are over a field of characteristic 2.





