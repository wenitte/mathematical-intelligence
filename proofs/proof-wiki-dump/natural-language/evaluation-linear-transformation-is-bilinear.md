# 

Source: https://proofwiki.org/wiki/Evaluation_Linear_Transformation_is_Bilinear

Theorem
Let $R$ be a commutative ring.
Let $G$ be an $R$-module.
Let $G^*$ be the algebraic dual of $G$.

Let $\innerprod x t$ be the evaluation linear transformation from $G$ to $G^{**}$.

Then the mapping $\phi: G \times G^* \to R$ defined as:

$\forall \tuple {x, t} \in G \times G^*: \map \phi {x, t} = \innerprod x t$
satisfies the following bilinearity properties:





\(\text {(1)}: \quad\)





\(\ds \forall x, y \in G: \forall t \in G^*: \, \)



\(\ds \innerprod {x + y} t\)

\(=\)







\(\ds \innerprod x t + \innerprod y t\)










\(\text {(2)}: \quad\)





\(\ds \forall x \in G: \forall s, t \in G^*: \, \)



\(\ds \innerprod x {s + t}\)

\(=\)







\(\ds \innerprod x s + \innerprod x t\)










\(\text {(3)}: \quad\)





\(\ds \forall x \in G: \forall t \in G^*: \forall \lambda \in R: \, \)



\(\ds \innerprod {\lambda x} t\)

\(=\)







\(\ds \lambda \innerprod x t\)




















\(\ds \)

\(=\)







\(\ds \innerprod x {\lambda t}\)











Proof



\(\text {(1)}: \quad\)





\(\ds \forall x, y \in G: \forall t \in G^*: \, \)



\(\ds \innerprod {x + y} t\)

\(=\)







\(\ds \map t {x + y}\)





Definition of Evaluation Linear Transformation/Module Theory














\(\ds \)

\(=\)







\(\ds \map t x + \map t y\)





$t$ is a Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod x t + \innerprod y t\)





Definition of Evaluation Linear Transformation/Module Theory








\(\text {(2)}: \quad\)





\(\ds \forall x \in G: \forall s, t \in G^*: \, \)



\(\ds \innerprod x {s + t}\)

\(=\)







\(\ds \map {\paren {s + t} } x\)





Definition of Evaluation Linear Transformation/Module Theory














\(\ds \)

\(=\)







\(\ds \map s x + \map t x\)





Definition of Pointwise Addition of Linear Transformations














\(\ds \)

\(=\)







\(\ds \innerprod x s + \innerprod x t\)





Definition of Evaluation Linear Transformation/Module Theory








\(\text {(3)}: \quad\)





\(\ds \forall x \in G: \forall t \in G^*: \forall \lambda \in R: \, \)



\(\ds \innerprod {\lambda x} t\)

\(=\)







\(\ds \map t {\lambda x}\)





Definition of Evaluation Linear Transformation/Module Theory














\(\ds \)

\(=\)







\(\ds \lambda \map t x\)





$t$ is a Linear Transformation














\(\ds \)

\(=\)







\(\ds \lambda \innerprod x t\)





Definition of Evaluation Linear Transformation/Module Theory




and:




\(\text {(3)}: \quad\)





\(\ds \forall x \in G: \forall t \in G^*: \forall \lambda \in R: \, \)



\(\ds \innerprod {\lambda x} t\)

\(=\)







\(\ds \map t {\lambda x}\)





Definition of Evaluation Linear Transformation/Module Theory














\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda t} } x\)





$t$ is a Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod x {\lambda t}\)





Definition of Evaluation Linear Transformation/Module Theory



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




