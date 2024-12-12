# 

Source: https://proofwiki.org/wiki/Equivalent_Norms_on_Direct_Product_of_Normed_Vector_Spaces

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$.
Let $\struct {X \times Y, \norm {\, \cdot \,}_{X \times Y} }$ be the direct product of $X$ and $Y$ with the direct product norm. 
Let $p \ge 1$. 
Let $\norm {\, \cdot \,}_p$ be the $p$-norm on $\R^2$.
Define:

$\norm {\tuple {x, y} }' = \norm {\tuple {\norm x_X, \norm y_Y} }_p = \begin{cases}\paren {\norm x_X^p + \norm y_Y^p}^{1/p} & p \ne \infty \\ \max \set {\norm x_X, \norm y_Y} & p = \infty\end{cases}$
for each $x \in X$ and $y \in Y$. 

Then $\norm {\, \cdot \,}'$ is a norm on $X \times Y$ that is equivalent to $\norm {\, \cdot \,}_{X \times Y}$. 


Proof
We first show that $\norm {\, \cdot \,}'$ is a norm.
Towards proving Norm Axiom $\text N 1$: Positive Definiteness, suppose that $\norm {\tuple {x, y} }' = 0$. 
Then we have $\norm {\tuple {\norm x_X, \norm y_Y} }_p = 0$.
Hence $\norm x_X = 0$ and $\norm y_Y = 0$ by Norm Axiom $\text N 1$: Positive Definiteness.
From Norm Axiom $\text N 1$: Positive Definiteness, we have $x = {\mathbf 0}_X$ and $y = {\mathbf 0}_Y$. 
Then $\tuple {x, y} = \tuple { {\mathbf 0}_X, {\mathbf 0}_Y} = {\mathbf 0}_{X \times Y}$.
Hence we have proven Norm Axiom $\text N 1$: Positive Definiteness.

Now we prove Norm Axiom $\text N 2$: Positive Homogeneity, let $\tuple {x, y} \in X \times Y$ and $\lambda \in \GF$.
We have:

$\norm {\lambda \tuple {x, y} }' = \norm {\tuple {\norm {\lambda x}_X, \norm {\lambda y}_Y} }_p$
From Norm Axiom $\text N 2$: Positive Homogeneity, we have:

$\norm {\tuple {\norm {\lambda x}_X, \norm {\lambda y}_Y} }_p = \norm {\tuple {\cmod \lambda \norm x_X, \cmod \lambda \norm y_Y} }_p = \cmod \lambda \norm {\tuple {\norm x_X, \norm y_Y} }_p$
Hence:

$\norm {\lambda \tuple {x, y} }' = \cmod \lambda \norm {\tuple {x, y} }'$

Finally, we look to prove Norm Axiom $\text N 3$: Triangle Inequality. 
Let $\tuple {x_1, y_1} \in X \times Y$ and $\tuple {x_2, y_2} \in X \times Y$. 
We have:

$\norm {\tuple {x_1, y_1} + \tuple {x_2, y_2} }' = \paren {\norm {x_1 + x_2}_X^p + \norm {y_1 + y_2}_Y^p}^{1/p}$
From Norm Axiom $\text N 3$: Triangle Inequality, we have:

$\paren {\norm {x_1 + x_2}_X^p + \norm {y_1 + y_2}_Y^p}^{1/p} \le \paren {\paren {\norm {x_1}_X + \norm {x_2}_X}^p + \paren {\norm {y_1}_Y + \norm {y_2}_Y}^p}^{1/p} = \norm {\tuple {\norm {x_1}_X + \norm {x_2}_X, \norm {y_1}_Y + \norm {y_2}_Y} }_p$
Applying Norm Axiom $\text N 3$: Triangle Inequality for $\norm {\, \cdot \,}_p$, we have:

$\norm {\tuple {\norm {x_1}_X + \norm {x_2}_X, \norm {y_1}_Y + \norm {y_2}_Y} }_p \le \norm {\tuple {\norm {x_1}_X, \norm {y_1}_Y} }_p + \norm {\tuple {\norm {x_2}_X, \norm {y_2}_Y} }_p = \norm {\tuple {x_1, y_1} }' + \norm {\tuple {x_2, y_2} }'$
Hence $\norm {\, \cdot \,}'$ is a norm on $X \times Y$. 

From Norms on Finite-Dimensional Real Vector Space are Equivalent, for each $p \ge 1$ there exists $M_1, M_2 > 0$ such that:

$M_1 \norm {\tuple {u, v} }_p \le \norm {\tuple {u, v} }_\infty \le M_2 \norm {\tuple {u, v} }_p$
for each $\tuple {u, v} \in \R^2$. 
Setting $u = \norm x_X$ and $v = \norm y_Y$, we obtain:

$M_1 \norm {\tuple {x, y} }' \le \norm {\tuple {x, y} }_{X \times Y} \le M_2 \norm {\tuple {x, y} }'$
Hence $\norm {\, \cdot \,}'$ is equivalent to $\norm {\, \cdot \,}_{X \times Y}$.
$\blacksquare$





