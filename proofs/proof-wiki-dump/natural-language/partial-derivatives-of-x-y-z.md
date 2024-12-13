# 

Source: https://proofwiki.org/wiki/Partial_Derivatives_of_x%5Ey%5Ez

Theorem
Let:

$u = x^{\paren {y^z} }$
Then:














\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds y^z x^{\paren {y^z - 1} }\)




















\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds x^{y^z} z y^{z - 1} \ln x\)




















\(\ds \dfrac {\partial u} {\partial z}\)

\(=\)







\(\ds x^{\paren {y^z} } y^z \ln x \ln y\)











Proof













\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds y^z x^{\paren {y^z - 1} }\)





Power Rule for Derivatives, keeping $y$ and $z$ constant



$\Box$















\(\ds u\)

\(=\)







\(\ds x^{\paren {y^z} }\)














\(\ds \leadsto \ \ \)





\(\ds \ln u\)

\(=\)







\(\ds \map \ln {x^{\paren {y^z} } }\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds y^z \ln x\)





Logarithm of Power








\(\ds \leadsto \ \ \)





\(\ds \frac 1 u \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds z y^{z - 1} \ln x\)





Derivative of Natural Logarithm, Power Rule for Derivatives, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds u z y^{z - 1} \ln x\)





multiplying both sides by $u$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds x^{\paren {y^z} } z y^{z - 1} \ln x\)





substituting for $u$



$\Box$















\(\ds \ln u\)

\(=\)







\(\ds y^z \ln x\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \frac 1 u \dfrac {\partial u} {\partial z}\)

\(=\)







\(\ds y^z \ln x \ln y\)





Derivative of Natural Logarithm, Derivative of General Exponential Function, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial z}\)

\(=\)







\(\ds u y^z \ln x \ln y\)





multiplying both sides by $u$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {\partial u} {\partial z}\)

\(=\)







\(\ds x^{\paren {y^z} } y^z \ln x \ln y\)





substituting for $u$



$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction: Exercise $8$




