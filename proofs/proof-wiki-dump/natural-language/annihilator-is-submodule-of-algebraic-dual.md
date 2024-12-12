# 

Source: https://proofwiki.org/wiki/Annihilator_is_Submodule_of_Algebraic_Dual



Theorem
Let $R$ be a commutative ring with unity.
Let $G$ be a module over $R$.
Let $M$ be a submodule of $G$.
Let $G^*$ be the algebraic dual of $G$.

Then the annihilator $M^\circ$ of $M$ is a submodule of $G^*$.


Corollary
Let $N$ be a submodule of $G^*$.
Let $G^{**}$ be the algebraic dual of $G^*$.

Then the annihilator $N^\circ$ of $N$ is a submodule of $G^{**}$.


Proof
By definition, $M^\circ$ is a subset of $G^*$.
Recall that by definition of algebraic dual, the elements of $G^*$ are linear transformations from $G$ to the $R$-module $R$.

By Submodule Test, it remains to be shown that:




\(\text {(SM1)}: \quad\)





\(\ds \forall u, v \in M^\circ: \, \)



\(\ds u + v\)

\(\in\)







\(\ds M^\circ\)










\(\text {(SM2)}: \quad\)





\(\ds \forall u \in M^\circ: \forall \lambda \in R: \, \)



\(\ds \lambda u\)

\(\in\)







\(\ds M^\circ\)










Indeed:




\(\text {(SM1)}: \quad\)





\(\ds \forall u, v \in M^\circ: \forall x \in M: \, \)



\(\ds \map u x + \map v x\)

\(=\)







\(\ds 0\)





Definition of Annihilator on Algebraic Dual








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {u + v} } x\)

\(=\)







\(\ds 0\)





Definition of Pointwise Addition of Linear Transformations








\(\ds \leadsto \ \ \)





\(\ds u + v\)

\(\in\)







\(\ds M^\circ\)





Definition of Annihilator on Algebraic Dual



and:




\(\text {(SM2)}: \quad\)





\(\ds \forall u \in M^\circ: \forall \lambda \in R: \forall x \in M: \, \)



\(\ds \map {\paren {\lambda u} } x\)

\(=\)







\(\ds 0\)





Definition of Annihilator on Algebraic Dual








\(\ds \leadsto \ \ \)





\(\ds \lambda \map u x\)

\(=\)







\(\ds 0\)





Definition of Linear Transformation








\(\ds \leadsto \ \ \)





\(\ds \lambda u\)

\(\in\)







\(\ds M^\circ\)





Definition of Annihilator on Algebraic Dual



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




