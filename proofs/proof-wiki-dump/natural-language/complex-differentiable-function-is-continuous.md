# 

Source: https://proofwiki.org/wiki/Complex-Differentiable_Function_is_Continuous



Theorem
Let $f: D \to \C$ be a complex function, where $D \subseteq \C$ is an open set.
Let $f$ be complex-differentiable at $a \in D$.

Then $f$ is continuous at $a$.


Proof 1
Let $\map {N_r} 0$ denote the $r$-neighborhood of $0$ in $\C$.
By the Epsilon-Function Complex Differentiability Condition, it follows that there exists $r \in \R_{>0}$ such that for all $h \in \map {N_r} 0 \setminus \set 0$:

$(1): \quad \map f {a + h} = \map f a + h \paren {\map {f'} a + \map \epsilon h}$
where $\epsilon: \map {N_r} 0 \setminus \set 0 \to \C$ is a complex function with $\ds \lim_{h \mathop \to 0} \map \epsilon h = 0$.
We rewrite the right hand side of $(1)$ to get:














\(\ds \map f {a + h}\)

\(=\)







\(\ds \map f a + h \map {f'} a + h \map \epsilon h\)














\(\ds \leadsto \ \ \)





\(\ds \map f z\)

\(=\)







\(\ds \map f a + \paren {z - a} \map {f'} a + \paren {z - a} \map \epsilon {z - a}\)





substituting $z = a + h$ for $z \in \map {N_r} a$








\(\ds \leadsto \ \ \)





\(\ds \lim_{z \mathop \to a} \map f z\)

\(=\)







\(\ds \lim_{z \mathop \to a} \paren {\map f a + \paren {z - a} \map {f'} a + \paren {z - a} \map \epsilon {z - a} }\)





Take the limit on both sides














\(\ds \)

\(=\)







\(\ds \map f a + \lim_{z \mathop \to a} \paren {z - a} \map {f'} a + \lim_{z \mathop \to a} \paren {\paren {z - a} \map \epsilon {z - a} }\)





Combination Theorem for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \map f a\)





as $\ds \lim_{z \mathop \to a} \paren {z - a} = 0$, and $\ds \lim_{z \mathop \to a} \map \epsilon {z - a} = 0$




By definition of continuous complex function, it follows that $f$ is continuous at $a$.
$\blacksquare$


Proof 2
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


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: determine which if either proof is included here/Not Proof2, maybe Proof1?If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2000: Ebbe Thue Poulsen and Klaus Thomsen: Indledning til Matematisk Analyse 1a: $\S 7.1$




