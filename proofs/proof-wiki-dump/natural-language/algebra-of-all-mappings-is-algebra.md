# 

Source: https://proofwiki.org/wiki/Algebra_of_all_Mappings_is_Algebra

Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {A, +_A, \circ_A, \ast_A}$ be an $R$-algebra. 
Let $S$ be a set.
Let $\struct {A^S, +, \circ, \ast}$ the $R$-algebra of all mappings from $S$ to $A$.

Then $\struct {A^S, +, \circ, \ast}$ is an $R$-algebra. 


Proof
From Module of All Mappings is Module, $\struct {A^S, +, \circ}$ is a module. 
It remains to show that $\ast$ is $R$-bilinear.
Let $f, g, h \in A^S$ and $\lambda \in R$. 
We have, for $x \in S$: 














\(\ds \map {\paren {\paren {f + \lambda \circ g} \ast h} } x\)

\(=\)







\(\ds \map {\paren {f + \lambda \circ g} } x \ast_A \map h x\)




















\(\ds \)

\(=\)







\(\ds \paren {\map f x + \lambda \circ_A \map g x} \ast_A \map h x\)




















\(\ds \)

\(=\)







\(\ds \map f x \ast_A \map h x + \lambda \circ_A \paren {\map g x \ast_A \map h x}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {f \ast h} } x + \lambda \circ_A \map {\paren {g \ast h} } x\)









Similarly:














\(\ds \map {\paren {f \ast \paren {g + \lambda \circ h} } } x\)

\(=\)







\(\ds \map f x \ast_A \paren {\map g x + \lambda \circ_A \map h x}\)




















\(\ds \)

\(=\)







\(\ds \map f x \ast_A \map g x + \map f x \ast_A \paren {\lambda \circ_A \map h x}\)




















\(\ds \)

\(=\)







\(\ds \map f x \ast_A \map g x + \lambda \circ_A \paren {\map f x \ast_A \map h x}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {f \ast g} } x + \lambda \circ_A \map {\paren {f \ast h} } x\)









So $\struct {A^S, +, \circ, \ast}$ is an $R$-algebra. 
$\blacksquare$





