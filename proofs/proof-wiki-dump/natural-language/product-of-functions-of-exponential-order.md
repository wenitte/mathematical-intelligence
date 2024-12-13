# 

Source: https://proofwiki.org/wiki/Product_of_Functions_of_Exponential_Order

Theorem
Let $f, g: \R \to \F$ be functions, where $\F \in \set {\R, \C}$.
Let $f$ be of exponential order $a$ and $g$ be of exponential order $b$.

Then $f g: t \mapsto \map f t \map g t$ is of exponential order $a+b$.


Proof
Let $t$ be sufficiently large so that both $f$ and $g$ are of exponential order on some shared unbounded closed interval.
By the definition of exponential order:














\(\ds \size {\map f t}\)

\(<\)







\(\ds K_1 e^{a t}\)




















\(\ds \size {\map g t}\)

\(<\)







\(\ds K_2 e^{b t}\)














\(\ds \leadsto \ \ \)





\(\ds \size {\map f t} \size {\map g t}\)

\(<\)







\(\ds K_1 K_2 e^{a t} e^{b t}\)





Positive Real Number Inequalities can be Multiplied








\(\ds \leadsto \ \ \)





\(\ds \size {\map f t \map g t}\)

\(<\)







\(\ds K' e^{\paren {a + b} t}\)





Modulus of Product, Exponential of Sum of Real Numbers, $K' = K_1 K_2$



$\blacksquare$





