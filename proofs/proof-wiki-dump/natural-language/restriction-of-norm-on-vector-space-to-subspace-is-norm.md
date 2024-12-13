# 

Source: https://proofwiki.org/wiki/Restriction_of_Norm_on_Vector_Space_to_Subspace_is_Norm



Theorem
Let $\Bbb F$ be a subfield of $\C$. 
Let $X$ be a vector space over $\Bbb F$.
Let $\norm \cdot_X : X \to \hointr 0 \infty$ be a norm on $X$.
Let $Y$ be a vector subspace of $Y$.

Then $\norm \cdot_Y$, the restriction of $\norm \cdot_X$ to $Y$ is a norm on $Y$. 


Proof
Since $\norm x_X \ge 0$ for any $x \in X$, we have $\norm y_Y \ge 0$ for any $y \in Y$.
We verify each of the axioms for a norm on a vector space.


Norm Axiom $\text N 1$: Positive Definiteness
Note that for $y \in Y$ we have $\norm y_Y = 0$ if and only if $\norm y_X = 0$.
Then by $(\text N 1)$ for $\norm \cdot_X$, we have $y = 0$. 
$\Box$


Norm Axiom $\text N 2$: Positive Homogeneity
Let $\lambda \in \Bbb F$ and $y \in Y$. 
Then, we have:














\(\ds \norm {\lambda y}_Y\)

\(=\)







\(\ds \norm {\lambda y}_X\)




















\(\ds \)

\(=\)







\(\ds \cmod \lambda \norm y_X\)





from $(\text N 2)$ for $\norm \cdot_X$














\(\ds \)

\(=\)







\(\ds \cmod \lambda \norm y_Y\)









$\Box$


Norm Axiom $\text N 3$: Triangle Inequality
Let $x, y \in Y$.
Then, we have: 














\(\ds \norm {x + y}_Y\)

\(=\)







\(\ds \norm {x + y}_X\)




















\(\ds \)

\(\le\)







\(\ds \norm x_X + \norm y_Y\)





from $(\text N 3)$ for $\norm \cdot_X$














\(\ds \)

\(=\)







\(\ds \norm x_Y + \norm y_Y\)









$\blacksquare$





