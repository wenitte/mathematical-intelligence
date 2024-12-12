# 

Source: https://proofwiki.org/wiki/Combination_of_Solutions_to_Non-Homogeneous_LSOODE_with_same_Homogeneous_Part

Theorem
Let $\map {y_1} x$ be a particular solution of the linear second order ODE:

$(1): \quad y + \map P x y' + \map Q x y = \map {R_1} x$
Let $\map {y_2} x$ be a particular solution of the linear second order ODE:

$(2): \quad y + \map P x y' + \map Q x y = \map {R_2} x$

Then $\map y x = \map {y_1} x + \map {y_2} x$ is a particular solution of the linear second order ODE:

$(3): \quad y + \map P x y' + \map Q x y = \map {R_1} x + \map {R_2} x$


Proof



\(\text {(4)}: \quad\)









\(\ds {y_1} + \map P x {y_1}' + \map Q x y_1\)

\(=\)







\(\ds \map {R_1} x\)





as $y_1$ is a particular solution to $(1)$




\(\text {(5)}: \quad\)









\(\ds {y_2} + \map P x {y_2}' + \map Q x y_2\)

\(=\)







\(\ds \map {R_2} x\)





as $y_2$ is a particular solution to $(2)$








\(\ds \leadsto \ \ \)





\(\ds \paren { {y_1} + {y_2}} + \map P x \paren { {y_1}' + {y_2}'} + \map Q x \paren {y_1 + y_2}\)

\(=\)







\(\ds \map {R_1} x + \map {R_2} x\)





adding $(4)$ and $(5)$








\(\ds \leadsto \ \ \)





\(\ds \paren {y_1 + y_2} + \map P x \paren {y_1 + y_2}' + \map Q x \paren {y_1 + y_2}\)

\(=\)







\(\ds \map {R_1} x + \map {R_2} x\)





Linear Combination of Derivatives



Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: Problem $3$




